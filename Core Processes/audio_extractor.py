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

path = "./Videos/video4.mp4"
audio_path = extract_audio(path)