import Image from 'next/image'
import React from 'react'

function HeaderBanner({data,varient}) {
  return (
    <div className='py-[80px]'>
        <div className={`mx-auto max-w-6xl px-4 ${varient} rounded-3xl`}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-center">
                <div className="col text-white">
                    <h5 className="text-md">{data.discount}</h5>
                    <h2 className="text-[55px] font-bold text-uppercase">{data.title}</h2>
                    <h5 className="text-md">{data.date}</h5>
                </div>
                <div className="col">
                    <Image src={data.image}
                    width={0}
                    height={0}
                    sizes="100vw" className="drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] scale-125"
                    style={{ width: "100%", height: "auto" }}/>
                </div>
                <div className="col text-white flex flex-col gap-3 items-start">
                    <h2 className='text-[20px] font-semibold'>{data.title2}</h2>
                    <h3 className='text-[40px] font-bold'>{data.title3}</h3>
                    <p className='text-[px] font-light'>{data.title4}</p>
                    <button className='py-3 px-6 text-[14px] text-[#333] bg-white rounded-full cursor-pointer bg-transparent'>SHOP HERE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderBanner