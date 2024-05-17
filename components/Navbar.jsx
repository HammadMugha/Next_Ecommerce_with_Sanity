"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiShoppingBag, BiUser, BiHeart,BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";

function Navbar() {
  const router = useRouter();
  const { cartItems } = useSelector((state) => state.cart);
  const [query, setQuery] = useState("");
  console.log(query)
  // search query
  const handleClick = ()=>{
    router.push(`/search?query=${query}`)
    // after the search input field empty
    setQuery("")
  }
  return (
    <div className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-3 py-4 flex justify-between items-center">
        <div className="logo">
          <Link href={"/"} className="text-[19px] font-semibold">
            <Image src={"/logo.avif"} width={100} height={70} />
          </Link>
        </div>
        <ul className="flex gap-5 items-center">
         <li className="relative">
         <input type="text" className="Input" placeholder="search" onChange={(e)=>setQuery(e.target.value)} />
         <BiSearch className="text-[18px] absolute top-[30%] cursor-pointer transform-[translateY(-50%)] right-2" onClick={handleClick}/>
         </li>
          <Link href={"/register"}>
            <BiUser className="text-[25px]" />
          </Link>
          <Link href={"/"}>
            <BiHeart className="text-[25px]" />
          </Link>
          <Link href={"/cart"} className="relative">
            <BiShoppingBag className="text-[25px]" />
            <span className="absolute top-[-7px] right-[-10px] bg-[#F12D34] text-white rounded-[50%] h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
