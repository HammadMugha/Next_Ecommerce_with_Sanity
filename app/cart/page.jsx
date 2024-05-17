"use client";

import {useEffect,useState} from "react"
import CartItem from "@/components/CartItem";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import CheckoutItem from "@/components/CheckoutItem";

function page() {
  const [totalPrice,setTotalPrice] = useState(0)
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  // let items = cartItems
  useEffect(()=> {
  let price = 0;
  cartItems.map((item)=> price=price+item.price)
  setTotalPrice(price)
  },[cartItems])


  // Stripe Payment Start Here
  const stripePromise = loadStripe(
    process.env.NEXT_STRIPE_PUBLIC_KEY
  )
  
  // Stripe Payment End Here
  return (
    <>
      <div className="cart bg-[#fff] py-[40px]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-7">Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <>
              <div className="flex items-center gap-6 flex-col justify-center text-center">
                <img src="/emptyCart.png"/>
                <h4>Your shopping bag is empty</h4>
                <button className="btn mt-2"><Link href={"/"}>CONTINUE SHOPPING</Link></button>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                <div className="col-span-3 bg-white">
                  {cartItems.map((item, i) => (
                    <CartItem item={item} key={i} />
                  ))}
                </div>
                <div className="col-span-2 bg-[#F9FAFB] p-[40px]">
                  <CheckoutItem items={cartItems} total={totalPrice} className="min-h-[200px]"/>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default page;
