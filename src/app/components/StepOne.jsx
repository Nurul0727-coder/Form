

import { IoIosArrowForward} from "react-icons/io";
import{useState, usestate} from'react'

export default function Card ({Next,FormData, handleInputChange}){
    const[error,setError]=useState('');
    const handleInputChange=(e)=>{
        const value=e.tearget.value;
        const regex=/^[A-Za-z\s]+$/;
        if(!regex.test(value)){
            setError('First name cannot contain special charecters or numbers.');
        }else{
            setError('');
        }
        handleInputChange('firstName',value);
    };
    return (
        <div className="w-[480px] h-[655px] bg-white rounded-md flex justify-center relative">
            <div className="w-[416px] h-[385px] flex-col justify-center mt-8">
                <div className="w-[416px] h-[130px]">
                    <img src="Logo.png" className="w-[60px] h-[60px]"/>
                    <p className="text-[26px] font-semibold">Join Us! 😎</p>
                    <p className="text-[18px] text-[#8E8E8E]">Please provide all current information accurately.</p>
                </div>
                <div className=" w-[416px] h-[230px]  my-[25px] flex-col justify-between">
                    <div className="w-[416px] h-[68px]">
                        <p className="font-semibold my-[2px]">First name </p>
                        <input
                        value={FormData.firstName}
                        onChange={handleFirstNameChange}
                        className=" w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
                        placeholder="Enter your first name"
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <div className="w-[416px] h- [68px]">
                        <p className="font-semibold my-[2px]">Last name </p>
                        <input
                        value={FormData.lastName}
                        onChange={(e)=> handleInputChange('lastName', e.target.value)}
                        className=" w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
                        placeholder="Enter your last name"
                        />
                    </div>
                    <div className="w-[416px] h- [68px] my-[2px]">
                        <p className="font-semibold my-[2px]"> Username </p>
                        <input
                        value={FormData.username}
                        onChange={(e)=> handleInputChange('username', e.target.value)}
                        className=" w-[416px] h-[44px] padding-2 border-[1px] border-[#CBD5E1] rounded-md pl-2"
                        placeholder="Enter your username"
                        />
                    </div>
                </div>
            </div>
            <button
            onClick={Next}
            className="w-[416px] h-[44] bg-[#D6D8DB] absolute rounded-md my-[580px] text-[#A9ACAF] flex justify-center gap-2 items-center">
                Continue 1/3
                <IoIosArrowForward className="w-[10px] h-[10px]"/>
            </button>
        </div>
    )
}