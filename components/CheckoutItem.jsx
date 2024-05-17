"use client";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React from "react";

function CheckoutItem({ items, total }) {
  // Stripe Payment Start Here
  const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`);
  const handleCheckout = async (e) => {
    e.preventDefault();
    const stripe = await stripePromise;
       const Items = [
        { name: "ali"},
        { name: "ali"},
        { name: "ali"},
        { name: "ali"},
        { name: "ali"},
       ]
       const res = await fetch(`http://localhost:3000/api/checkout`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ Items: items })
    });
    const data = await res.json();
    if (res.ok) {
      stripe?.redirectToCheckout({ sessionId: data.id });
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };
  return (
    <>
      <h3 className="text-2xl font-semibold mb-4">Order summary</h3>
      <div className="flex justify-between items-center pb-4">
        <h4 className="text-[15px]">Total items</h4>
        <h3 className="text-[13px]">{items.length}</h3>
      </div>
      <div className="flex justify-between items-center pb-4">
        <h4 className="text-[15px]">Order total</h4>
        <h3 className="text-[13px]">${total}</h3>
      </div>
      <button
        className="bg-[#4F46E5] w-full hover:bg-[#4F46E5] text-white py-3 px-6 rounded-md cursor-pointer"
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </>
  );
}

export default CheckoutItem;
