import React from 'react'
import Navbar from '../components/Navbar'
import graph from '../assets/mdi--graph-line.svg'
import upload from '../assets/upload.svg'
import link from '../assets/link.svg'
import microphone from '../assets/microphone.svg'
import us from '../assets/us.svg'
<ass></ass>
function Home() {
  return (
    <div className="bg-[#010308] min-h-screen w-screen flex flex-col items-center justify-center font-inter text-white">
      <Navbar />
      <div className="w-fit flex flex-row justify-center items-center bg-[#1b3457] md:px-3 px-2 mt-9 md:py-1.5 py-1 rounded-md md:text-lg">
        <img src={graph} alt="Graph" className="md:h-6 md:w-7" />
        <div className="ml-2 text-[#b0b2b8]">
          {" "}
          <span className="text-white">1684 hours </span>trascribed
        </div>
      </div>
      <div className="mt-2">
        <p>
          <span className="text-white font-bold md:text-4xl text-2xl md:ml-0 ml-2">
            Free Audio to SRT Converter
          </span>
        </p>
        <p>
          <span className="text-[#b0b2b8] md:ml-6 ml-4 md:text-base text-[.7rem]">
            Fast, Affordable, Accurate.Transcribe audio to subtitles with AI.
          </span>
        </p>
      </div>
      {/* Upload Rectangle */}
      <div className="bg-[#1f1f25] w-fit h-fit rounded-xl flex flex-col justify-center items-center mt-4 ">
        {/* Upload Rectangle First head */}
        <div className="flex flex-row justify-center items-center mt-3">
          <img src={upload} alt="upload-icon" />
          <p>
            <span className="text-2xl font-medium ml-1">Transcribe Files</span>
          </p>
        </div>
        {/* Upload Rectangle Second head */}
        <div className="flex flex-row justify-center md:gap-[18rem] gap-[10rem] mt-3 ">
          {/* File Type head*/}
          <div className="flex items-start">
            <p>
              <span className="text-[#b0b2b8] md:font-normal font-thin text-[10px] md:text-[15px]">Audio / Video file</span>
            </p>
          </div>
          <div className="flex items-end md:gap-3 gap-[.5rem]">
            <img src={microphone} alt="microphone icon" className='md:w-6 w-4 md:h-6 h-4 '/>
            <img src={link} alt="link icon" className='md:w-5 w-3 md:h-5 h-4'/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg md:w-[30rem] w-[18rem] md:h-[14rem] h-[10rem] m-5 mt-0 mb-3   bg-[#1d283e] border-2 border-dashed border-[#3a4a6d] gap-2">
          <p>
            <span className="text-[#236ec6] md:text-base text-sm">
              Drag & Drop
            </span>
          </p>
          <div className="md:gap-1 gap-0">
            <p>
              <span className="text-[#474f5d] text-[9px] md:text-[15px] md:p-0 p-3">
                MP3, MP4, M4A, MOV, AAC, WAV, OGG,
              </span>
            </p>
            <p>
              <span className="text-[#474f5d] ml-11 text-[9px] md:text-[15px]">
                OPUS, MPEG, WMA, WMV
              </span>
            </p>
          </div>
          <p>
            <span className="text-[#b0b2b8] text-[12px] md:text-[15px]  ">-OR-</span>
          </p>
          <button className="text-[#dfe3eb] bg-[#303b4e] md:px-3 px-2 md:py-2 py-1 rounded-sm mb-3 text-[12px] md:text-[15px] md:mb-0">
            Browse Files
          </button>
        </div>
        {/*Dropdwon Close and beginnging of Language Selection*/}
        <div className="mb-4 flex flex-col">
          <label className="justify-start items-center">Audio Language</label>
          <select className="select bg-[#0f1116] md:w-[475px]  w-[300px]  pl-1  py-2 rounded-lg w-475px">
            <option>English</option>
            <option>Malayalam</option>
            <option>Japanese</option>
            <option>Hindi</option>
          </select>
        </div>
        <button className='bg-[#1075ea] mb-4 md:w-[470px] w-[295px] rounded-md font-semibold text-[20px] p-1'>Transcribe</button>
      </div>
    </div>
  );
}

export default Home