import { urlFor } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductCard({data}) {
  return (
    <div className="card relative group">
      <Link href={`/product/${data?.slug.current}`}>
      <Image
          src={urlFor(data?.image[0]).url()}
          width={0}
          height={0}
          sizes="100vw"
          className='bg-[#FAFAFA] p-8 group-hover:scale-105 transition-all duration-400'
          style={{ width: "100%", height: "auto" }} // optional
        />
        <div className="content py-[30px]">
          <span className='text-[10px] text-[#666666]'>FOXECOM</span>
          <h3 className='text-[#22222]'>{data?.name}</h3>
        </div>
        <span className='p-1 text-[13px] rounded-md text-white bg-primary absolute left-2 top-3'>New</span>
      </Link>
    </div>

  )
}

export default ProductCard