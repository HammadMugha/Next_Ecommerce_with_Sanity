"use client";

import { urlFor } from '@/lib/client'
import { decreaseQty, deleteProduct, increaseQty } from '@/redux/cartReducer';
import Image from 'next/image'
import React from 'react'
import toast from 'react-hot-toast';
import { FaStar, FaStarHalfAlt, FaPlus, FaMinus,FaTrashAlt  } from "react-icons/fa";
import { useDispatch } from 'react-redux';
function CartItem({item}) {
    const dispatch = useDispatch();
    const handleDelete = (item)=>{
      dispatch(deleteProduct(item))
      toast.success(`${item?.name} remove to cart`)
    //   toast.success("product deleted successfully")
    }

    //increase product quantity
    const handleIncreaseQty = (item)=>{
      dispatch(increaseQty(item))
    }
    //decrease product quantity
    const handleDecreaseQty = (item)=>{
      dispatch(decreaseQty(item))
    }
  return (
    <div className='flex gap-10 p-1 items-center'>
        <Image src={urlFor(item?.image[0]).url()} alt='not show!' width={150} height={150} className='bg-[#F3F4F6]'/>
        <div className="item">
        <h3 className="line-clamp-2">{item?.name.substring(0,30)}...</h3>
        <span className="text-[30px] text-[#F12D34]">${item?.price * item?.quantity}</span>
        </div>
        <div className="bg-[#fff] border border-[#D1D5DB] rounded-md p-3 flex gap-4 items-center">
              <FaMinus className="text-[10px] text-[#66666] cursor-pointer" onClick={()=> handleDecreaseQty(item)}/>
              <h5 className="text-[13px]">{item?.quantity}</h5>
              <FaPlus className="text-[10px] cursor-pointer" onClick={()=> handleIncreaseQty(item)}/>
            </div>
            <FaTrashAlt  className='cursor-pointer' onClick={()=> handleDelete(item)}/>
    </div>
  )
}

export default CartItem