"use client"
import React from 'react'
import Image from "next/image"
import SquareImg from "../../../../public/square.png"
import {useRouter} from "next/navigation";

const ThirdPage = () => {

  const router=useRouter();

  const handleBtn=()=>{
     router.push("/")

  }
  return (
    <>
        <div className="progressbar">
        <div className="w-[100%]"
        ></div>
      </div>
     <div className="flex flex-col items-center gap-y-6 justify-center min-h-screen  w-full">
 
      <Image src={SquareImg} className='w-[9%]'/>
     <h2 className='text-[#051011] font-bold text-2xl w-[30%] text-center'>Your Request for a Proposal Has Been Submitted!</h2>
     <p className='text-center w-[41%] leading-6 text-[#6B7280] text-base'>Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida parturient urna tristique congue. Curabitur volutpat nulla convallis eget pellentesque. Luctus tellus eu ultrices egestas.</p>

     <div className="flex items-center justify-center">
          <button
            onClick={()=>handleBtn()}
            type="submit"
            className="bg-[#019F44] hover:bg-[#019F44] text-sm text-white font-semibold py-[13px] px-6  focus:outline-none focus:shadow-outline"
          >
            Return Home
           </button>
        </div>
    </div>
    </>
  )
}

export default ThirdPage