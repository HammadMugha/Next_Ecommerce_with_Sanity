import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='min-h-[400px] py-[60px] Flex flex-col'>
      <h2 className='text-4xl font-semibold mb-4'>Your Payment Accepted by minimog.com</h2>
      <div className="flex gap-3">
        <button className='btn'>View order</button>
        <button className='btn'><Link href={"/"}>Continue shopping</Link></button>
      </div>
    </div>
  )
}

export default page