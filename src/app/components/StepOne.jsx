

// "use client"

// import Card from './components/stepone'
// import {StepTwo} from './components/steptwo'
// import {StepThree} from './components/stepthree'
// import {StepFour} from './components/stepfour'
// import {use, useState} from 'react'

// export default function Home(){
//   const[page,setPage]= useState(1)

//   const [formData,setFormData]=useState({
//     firstName:'', 
//     lastName:'',
//     username:'',
//     email:'',
//     phoneNumber:'',
//     password:'',
//     confirmPassword:'',
//     dob:'',
//     profileImage: null,
//   });
  
//   const handleInputChange = (field, value)=>{
//     setFormData({
//       ...formData,
//       [field]:value,
//     });
//   }

//   const Next=()=>{
//     setPage(page+1)
//   }

//   const Back=()=>{
//     setPage(page-1)
//   }

//   return (
//     <div className='w-full h-screen flex justify-center items-center bg-[#F4F4F4'>
//       {page===1 && <Card Next={Next} formData={formData} handleInputChange={handleInputChange}/>}
//       {page===2 && <StepTwo Next={Next} formData={formData} handleInputChange={handleInputChange}/>}
//       {page===3 && <StepThree Next={Next} formData={formData} handleInputChange={handleInputChange}/>}
//       {page===4 && <StepFour />}
//     </div>
//   )

// }
"use client"

import { useState } from 'react';
import Card from './components/stepone';
import { StepTwo } from './components/steptwo';
import { StepThree } from './components/stepthree';
import { StepFour } from './components/stepfour';

export default function Home() {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    firstName: '', 
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    dob: '',
    profileImage: null,
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const Next = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };

  const Back = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#F4F4F4]'>
      {page === 1 && <Card Next={Next} formData={formData} handleInputChange={handleInputChange} />}
      {page === 2 && <StepTwo Next={Next} Back={Back} formData={formData} handleInputChange={handleInputChange} />}
      {page === 3 && <StepThree Next={Next} Back={Back} formData={formData} handleInputChange={handleInputChange} />}
      {page === 4 && <StepFour />}
    </div>
  );
}



                                                               