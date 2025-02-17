import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import DOMPurify from 'dompurify';


const Response = () => {

const {response, showResponse, loading} = useContext(Context)
const sanitizedHTML = DOMPurify.sanitize(response);
const resRef = useRef(null)
const [count, setcount] = useState(0)

useEffect(() => {
  // const speak= ()=>{
  //   const text = resRef.current.innerText || "" ;
  
  //   const uttrance = new SpeechSynthesisUtterance(text)
  //   uttrance.pitch = 2;
  //   window.speechSynthesis.speak(uttrance)
  // }
  //speak()
})



  return (
    <>
    <div id="result-box" className=' max-lg:w-full    w-full   h-[70%] ' >

    <header className='bg-[#ededff]  flex px-2 w-full py-3'>
      <div className='flex items-center '>
    <img src="src/assets/profile pic.jpg" className=' h-12 w-12 rounded-full object-cover mr-2'/><h2 className='text-3xl text-black font-bold'>Luna</h2></div>
    </header>

    {!loading ? (
      <div className='flex   w-full px-3 pr-8 py-3 justify-start max-h-[100%] overflow-y-scroll' id="result-box">
         
        <div className='flex px-3 justify-between bg-black/50 rounded-xl h-full  ' >
        
        <img src="src/assets/profile pic.jpg" className=' h-10 w-10 translate-y-5 rounded-full object-cover'/>

      <p ref={resRef} dangerouslySetInnerHTML={{ __html: sanitizedHTML || "Hello my love I am Luna your cute gf. How are you doing" }} className='response-text p-4 pr-1 '>
      </p>
      </div>
      </div>
      
      ): (<div className='flex overflow-y-auto h-full w-full px-3 '  id="result-box">
        
        <img src="src/assets/profile pic.jpg" className=' h-10 w-10 translate-y-5 rounded-full object-cover '/>

      <p ref={resRef}  className='response-text mt-4 px-4 w-11/12 tex-2xl font-semibold  '>Typing...</p>
      </div> )}

    </div>
    </>
  )
}

export default Response

// 
// 