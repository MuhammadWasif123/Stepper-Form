"use client";
import React, { useState } from "react";
import {useRouter} from "next/navigation";


const FirstPage = () => {
  const [selectedRange, setSelectedRange] = useState(null);
  const router =useRouter();



  const handleSelection=(range)=>{
  setSelectedRange(range);

  router.push("/secondpage");
 
  }


  const ranges = [
    "< $1,000/mo",
    "$1,000 - $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 +",
  ];
  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center">
      <div className="progressbar">
        <div className="w-[33%]"
        ></div>
      </div>
        <h2 className="text-[#051011] text-2xl text-center font-semibold mt-2">Step # 1</h2>
        <h3 className="text-3xl font-bold">What is your monthly digital marketing budget?</h3>
        <div className="flex flex-col gap-[15px] justify-center items-center">
            {ranges.map((range,index)=>(
              <button
              key={index}
              onClick={()=>handleSelection(range)}
              className={`p-4 border rounded-lg shadow-lg text-center w-[365px] text-lg cursor-pointer ${selectedRange===range ? "bg-blue-500 text-white":"bg-white text-gray-800"}`}
              >
                {range}

              </button>

            ))}

        </div>



      </div>
    </>
  );
};

export default FirstPage;
