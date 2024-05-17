"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function page() {
    const {value} = useParams()
    // const url = new URLSearchParams(search)
    console.log(value)
  return (
    <div>Search page</div>
  )
}


export default page