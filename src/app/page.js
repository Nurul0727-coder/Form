'use client';
import { useState } from "react";
import{StepOne} from '@/components/StepOne';
// import{StepTwo} from '@/components/StepTwo';


const FormBody=(
{currentStep,setcurrentStep})=>{

  if(currentStep===1){
    return<StepOne setcurrentStep={setcurrentStep}/>
  }

  if(currentStep===2){
    return<StepTwo setcurrentStep ={setcurrentStep}/>
  }

 return<div>Success</div>;
}
export default function Home (){
  const[currentStep, setcurrentStep]= useState(1);

  const[form,setForm]=useState({
    firstName:'',
    lastName:'',

  });
  return(
    <div className="">
      <FormBody currentStep={currentStep}setcurrentStep={setcurrentStep}/>
    </div>
  )
}
                                                               