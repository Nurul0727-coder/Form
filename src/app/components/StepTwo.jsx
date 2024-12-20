import { IoIosArrowForward} from "react-icons/io";

export function StepTwo({Next,Back,formData,handleInputChange}){
    return (
        <div className="w-[480px] h-[655px] bg-white rouded-md flex justify-center relative">
            <div className="w-[416px] h-[465px] flex-col justify-center mt-8">
                <div className="w-[416px] h-[130px]">
                    <img src="/Logo.png" className="w-[60px] h-[60px]"/>
                    <p className="text-[26px] font-semibold">Join Us! 😎</p>
                    <p className="text-[18px] text-[#8E8E8E]"> Please provide all current information accurately.</p>
                </div>
                <div className="w-[416px] h-[230px] my-[25px] flex-col justify-between">
                    <div className="w-[416px] h-[68px]">
                        <p className="font-semibold my-[2px]"> First name</p>
                        <input value={FormData.firstName}
                        onChange={handleFirstNameChange}
                        className=" w-[416px] "
                        ></input>

                    </div>

                </div>

            </div>

        </div>
    )
}