"use client";
import React from 'react';

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
export function StepThree({ Next, Back, formData, handleInputChange }) {
  return (
    <div className="w-[480px] h-[655px] bg-white rounded-md flex justify-center relative">
      <div className="w-[416px] h-[465px] flex-col justify-center mt-8">
        <div className="w-[416px] h-[130px]">
          <img src="/Logo.png" className="w-[60px] h-[60px]" />
          <p className="text-[26px] font-semibold text-[#202124]">Join Us! 😎</p>
          <p className="text-[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
        </div>
        <div className="w-[416px] h-[230px] my-[25px] flex-col justify-between">
          <div className="w-[416px] h-[68px]  mt-[10px]">
            <p className="font-semibold my-[2px] text-[#334155]">Date of Birth *</p>
            <input
              value={formData.dob}
              onChange={(e) => handleInputChange("dob", e.target.value)}
              className="w-[416px] h-[44px] p-2 border-[1px] border-[#CBD5E1] rounded-md pl-2  text-[#121316]"
              placeholder="Enter your date of birth"
            />
          </div>
          <div className="w-[416px] h-[68px]  mt-[10px]">
            <p className="font-semibold my-[2px] text-[#334155]">Profile Image *</p>
            <input
              type="file"
              onChange={(e) => handleInputChange("profileImage", e.target.files[0])}
              className="w-[416px] h-[44px] p-2 border-[1px] border-[#CBD5E1] rounded-md "
            />
          </div>
        </div>
      </div>
      <div className="w-[416px] h-[44px] absolute my-[580px] justify-between flex">
        <button
          onClick={Back}
          className="w-[128px] h-[44px] rounded-md text-black border-[1px] border-[#CBD5E1] flex justify-center gap-2 items-center"
        >
          <IoIosArrowBack className="w-[18px] h-[18px]" />
          Back
        </button>
        <button
          onClick={Next}
          className="w-[280px] h-[44px] rounded-md bg-[#D6D8D8] text-[#A9ACAF] flex justify-center gap-2 items-center"
        >
          Continue 3/3
          <IoIosArrowForward className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>
  );
}
