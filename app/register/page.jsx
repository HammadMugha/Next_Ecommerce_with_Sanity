"use client";

import React, { useState } from 'react'

function page() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  return (
    <div className='container mx-auto px-4'>
        <div className="max-w-3xl mx-auto pt-12">
            <form action="" className='flex flex-col gap-5 items-center'>
                <h2 className="text-3xl font-semibold mb-7 text-center">Sign up</h2>
                <input type="text" placeholder='name' onChange={(e)=> setName(e.target.value)} className='input'/>
                <input type="text" placeholder='email' onChange={(e)=> setEmail(e.target.value)} className='input'/>
                <input type="text" placeholder='password' onChange={(e)=> setPassword(e.target.value)} className='input'/>
                <button className='btn'>Sign up</button>
            </form>
        </div>
    </div>
  )
}

export default page