
import React from "react";

const Card = ({ Next, formData, handleInputChange }) => {
  return (
    <div className="w-[480px] h-[655px] bg-white rounded-md flex justify-center relative">
      <div className="w-[416px] h-[465px] flex-col justify-center mt-8">
        <div className="w-[416px] h-[130px]">
          <img src="/Logo.png" className="w-[60px] h-[60px]" alt="logo" />
          <p className="text-[26px] font-semibold text-[#202124]">Join Us! 😎</p>
          <p className="text-[18px] text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="w-[416px] h-[230px] my-[25px]">
          <div className="w-[416px] h-[68px] mt-[10px]">
            <p className="font-semibold my-[2px] text-[#334155]">First Name *</p>
            <input
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-[416px] h-[44px] p-2 border-[1px] border-[#CBD5E1] rounded-md pl-2  text-[#121316]"
              placeholder="Enter your first name"
            />
          </div>
          <div className="w-[416px] h-[68px]  mt-[10px]">
              <p className="font-semibold my-[2px] text-[#334155]">Last Name *</p>
              <input
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-[416px] h-[44px] p-2 border-[1px] border-[#CBD5E1] rounded-md pl-2  text-[#121316]"
                placeholder="Enter your last name"
              />
            </div>
            <div className="w-[416px] h-[68px]  mt-[10px]">
              <p className="font-semibold my-[2px] text-[#334155]">Username *</p>
              <input
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className="w-[416px] h-[44px] p-2 border-[1px] border-[#CBD5E1] rounded-md  pl-2  text-[#121316]"
                placeholder="Enter your username"
              />
            </div>
        </div>
        <div className="w-[416px] h-[44px] absolute bottom-8 flex justify-between ">
          <button
            onClick={Next}
            className="w-[416px] h-[44px] rounded-md text-[#A9ACAF] border-[1px] border-[#CBD5E1] flex justify-center gap-2 items-center bg-[#D6D8D8] font-normal"
          >
             Continue 1/3
             
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;