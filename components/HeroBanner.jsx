"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import Button from './Button'

function HeroBanner() {
  const [index,setIndex] = useState(0)
  return (
    <div className='max-w-5xl mx-auto p-8 bg_color rounded-2xl'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
            <div className="col">
                <span className='text-[13px] font-semibold'>Hot Deals Today</span>
                <h2 className='text-[60px] mb-5 leading-[65px] font-bold mt-4'>Music To <br/> Fill Your Heart</h2>
                <button className='btn hover:bg-black transition-all duration-500 hover:-translate-y-2'>SHOP HERE</button>
                {/* <Button title="SHOP HERE" style="text-white rounded-sm bg-[#F50963]"/> */}
            </div>
            <div className="col">
                <Image src={"/slider-1.webp"} 
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}/>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner