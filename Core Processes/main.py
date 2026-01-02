from moviepy.video.io.VideoFileClip import VideoFileClip
import os
import torch
from huggingface_hub import snapshot_download
import ctranslate2
import sentencepiece as spm
from faster_whisper import WhisperModel

def detect_audio_language(audio_file_path):
    # Load the model - using "medium" for accuracy on your RTX 3050
    model = WhisperModel("medium", device="cuda", compute_type="float16")

    # The transcribe method automatically detects language if the 'language' argument is omitted
    segments, info = model.transcribe(audio_file_path, beam_size=5)

    print("-" * 30)
    print(f"Detected Language: {info.language}")
    print(f"Confidence Level: {info.language_probability * 100:.2f}%")
    print("-" * 30)

def extract_audio(video_path, output_ext="mp3")->str:
    video = VideoFileClip(video_path)
    base_name = os.path.splitext(video_path)[0]
    output_filename = f"{base_name}.{output_ext}"
    print(f"Extracting audio from {video_path}...")
    video.audio.write_audiofile(output_filename)
    video.close()
    print(f"Successfully saved: {output_filename}")
    return output_filename


import datetime
from faster_whisper import WhisperModel


def format_timestamp(seconds: float):
    td = datetime.timedelta(seconds=seconds)
    total_seconds = int(td.total_seconds())
    hours = total_seconds // 3600
    minutes = (total_seconds % 3600) // 60
    secs = total_seconds % 60
    millis = int(td.microseconds / 1000)
    # SRT format: HH:MM:SS,mmm
    return f"{hours:02}:{minutes:02}:{secs:02},{millis:03}"


def generate_subtitles(audio_path, model_size="medium"):
    # Load model on your RTX 3050
    model = WhisperModel(model_size, device="cuda", compute_type="int8_float16")

    print(f"Transcribing {audio_path}...")
    # 'segments' is a generator to save memory
    segments, info = model.transcribe(audio_path, beam_size=5)

    print(f"Detected Language: {info.language} ({info.language_probability * 100:.2f}%)")

    with open("original_subtitles.srt", "w", encoding="utf-8") as srt:
        for i, segment in enumerate(segments, start=1):
            start = format_timestamp(segment.start)
            end = format_timestamp(segment.end)
            eng_translated = translate_text(segment.text.strip())
            srt.write(f"{i}\n{start} --> {end}\n{eng_translated}\n\n")
            print(f"[{start}] {segment.text.strip()}")

    print("Subtitles saved to original_subtitles.srt")


# 1. Download the best-fit model for 4GB VRAM
model_dir = snapshot_download(repo_id="JustFrederik/nllb-200-distilled-600M-ct2")

# 2. Load with specific optimizations for RTX 3050
translator = ctranslate2.Translator(model_dir, device="cuda", compute_type="int8")
tokenizer = spm.SentencePieceProcessor(model_file=os.path.join(model_dir, "sentencepiece.bpe.model"))


def translate_text(text):
    # NLLB requires language codes: jpn_Jpan for Japanese, eng_Latn for English
    source_prefix = "jpn_Jpan"
    target_prefix = "eng_Latn"

    tokens = [source_prefix] + tokenizer.encode_as_pieces(text) + ["</s>"]
    result = translator.translate_batch([tokens], target_prefix=[[target_prefix]])

    # Clean output
    output_tokens = result[0].hypotheses[0][1:]
    return tokenizer.decode_pieces(output_tokens)


# Test run
# Expected: This program is working normally.

path = "./Videos/video1.mp4"
audio_path = extract_audio(path)
#generate_subtitles(audio_path)