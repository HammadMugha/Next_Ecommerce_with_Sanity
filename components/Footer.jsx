import React from 'react'

function Footer() {
  return (
    <div className='max-w-5xl mx-auto py-[50px]'>
      <div className="flex items-center justify-center flex-col gap-3">
        <h2 className='text-3xl font-bold'>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <p className='text-1xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptas laborum illo?</p>
        <div className="flex items-center gap-3">
          <input type="text" placeholder='Your Email Address' className='py-3 max-w-full md:w-[400px] px-3 rounded-sm bg-slate-100'/>
          <button className="bg-primary text-white py-3 px-8 cursor-pointer rounded-sm text-sm">JOIN</button>
        </div>
        <p className='pt-10'>Copyright ©2024 All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer