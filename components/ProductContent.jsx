"use client";

// import { useDispatch } from '@/lib/hooks';
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "../redux/cartReducer";
import { FaStar, FaStarHalfAlt, FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
function ProductContent({ product }) {
  const dispatch = useDispatch();
  //add product in cart
  const AddToCart = (item) => {
    // alert(0)
    dispatch(addToCart(item));
    toast.success(`${item?.name} is added to cart`);
  };
  return (
    <>
      <h2 className="text-[30px] font-bold">{product?.name}</h2>
      <div className="flex items-center gap-2">
        <div className="flex gap-1 text-[#F6A330]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <span>(2)</span>
      </div>
      <div className="detail">
        <h3 className="text-[18px] font-semibold">Details:</h3>
        <p className="text-[#666666]">{product?.details}</p>
      </div>
      <div className="quantity flex gap-3 items-center">
        <h3 className="text-[18] font-semibold">Quantity:</h3>
        <div className="bg-[#F2F2F2] p-3 flex gap-6 items-center">
          <FaMinus className="text-[10px] text-[#66666] cursor-pointer" />
          <h5 className="text-[13px]">1</h5>
          <FaPlus className="text-[10px] cursor-pointer" />
        </div>
      </div>
      <span className="text-[30px] text-[#F12D34]">${product?.price}</span>
      <div className="btns flex gap-3">
        <button
          className="py-2 px-5 text-white rounded-md cursor-pointer bg-[#F12D34]"
          onClick={() => AddToCart(product)}
        >
          Add to Basket
        </button>
        <button className="btn_secondary">Buy Now</button>
        {/* <Button title="Add to Cart" style="text-white rounded-sm bg-[#F50963]"/> */}
      </div>
    </>
  );
}

export default ProductContent;
