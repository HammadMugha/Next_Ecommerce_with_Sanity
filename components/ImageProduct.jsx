"use client";
import { urlFor } from '@/lib/client';
import Image from 'next/image';
import React, { useState } from 'react'

function ImageProduct({image}) {
    const [index,setIndex] = useState(image[0])
    const handleChange = (img)=>{
        setIndex(img)
    }
  return (
    <>
    <Image
          src={urlFor(index).url()}
          width={0}
          height={0}
          sizes="100vw"
          className="bg-[#ECEBEC] hover:opacity-70 duration-100 transition-all rounded-[12px]"
          style={{ width: "100%", height: "auto" }}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
           {image.map((img,i)=>(
             <div className="col" key={i}>
             <Image src={urlFor(img).url()} 
             width={0}
             height={0}
             onClick={()=>handleChange(img)}
            //  onMouseEnter={setIndex(i)}
             sizes="100vw"
             style={{ width: "100%", height: "auto" }}
             className={"bg-[#ECEBEC] cursor-pointer"}
             />
            </div>
           ))}
        </div>
    </>
  )
}

export default ImageProduct