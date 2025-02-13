import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Form = () => {

const {input, setInput, onSent} = useContext(Context);

  return (
    <>
    <form className='flex bg-[#f1f2ffd1] relative justify-between h-15 rounded-md    overflow-hidden border-2 border-gray-600  mt-5 mb-10 w-11/12 text-black backdrop-blur '>
    <textarea name=""placeholder='' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Type somethig here...'>

    </textarea>
    <button
    className='flex justify-end items-center h-full'
    onClick={(e)=>{
      e.preventDefault()
      onSent()
    }}
      > <img src="src/assets/send_icon.png" alt="Send" className='w-[30px] flex justify-center translate-x-3 text-lg font-bold'/>
      </button>
  </form>
  </>
  )
}

export default Form