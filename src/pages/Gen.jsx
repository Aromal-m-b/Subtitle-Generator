import React from 'react'
import Scribeicon from '../assets/Scribe-Icon.png'
export default function Aromal() {
  return (
    <div className=" flex flex-col w-screen h-screen min-h-screen bg-[#010308]">
        <div className="w-screen h-[100px] border-b-2 border-[#56585d] flex items-center justify-center">
            <div className="absolute left-[70px] flex items-center gap-3">
                <img src={Scribeicon} alt="Scribe Logo" className="w-[40px] h-[60px] rounded-[6px] object-cover" />
            </div>
            <h1 className="absolute w-[153px] h-[58px] left-[125px] top-[20px] font-['Inter'] font-bold text-[48.23px] leading-[58px] text-white italic-normal">
                Scribe
            </h1>
            {/* Navigation Container */}
            <div className="absolute left-[389px] top-[28px] flex items-center gap-12">
                <span className="font-inter font-semi text-[25px] leading-[30px] text-white cursor-pointer hover:text-blue-400 transition">
                    Pricing
                </span>
                <span className="font-inter font-semi text-[25px] leading-[30px] text-white cursor-pointer hover:text-blue-400 transition">
                    FAQS
                </span>
                <span className="font-inter font-semi text-[25px] leading-[30px] text-white cursor-pointer hover:text-blue-400 transition">
                    Blog
                </span>
            </div>
        </div>

        <div className="w-screen flex-1 flex items-center justify-center">

        </div>
    </div>
  )
}
