
import ProductDetail from '@/components/ProductDetail'
import React from 'react'

function page({params}) {
  console.log(params)
  return (
    <div className='mx-auto max-w-5xl'>
        <ProductDetail slug={params.slug}/>
    </div>
  )
}

export default page