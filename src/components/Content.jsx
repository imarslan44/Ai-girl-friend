
import React, {useState}from 'react';
import Response from './Response';
import runChat from "../config/gemini"
import Form from "./Form"
const Content = () => {

   
   
   
     return (
       <div className='flex flex-col  justify-between 
       items-center  bg-[#feeaeada] border-white border-2 w-[420px]
       max-sm:w-screen  rounded-xl overflow-hidden content  shadow-2xl relative h-[700px] m-auto max-sm:h-full max-sm:rounded-none max-sm:border-none'>

       <Response/>
       <Form/>
       </div>
   
     )
}

export default Content