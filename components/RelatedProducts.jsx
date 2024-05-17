"use client";

import React from 'react'
import Slider from "react-slick";
import ProductCard from './ProductCard';
function RelatedProducts({data}) {
    var settings = {
        dots: true,
        infinite: true,
        loop:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div>
        <Slider {...settings}>
          {data && data.map((item, i) => (
           <div key={i} className='px-4'>
            <ProductCard data={item}/> 
           </div>
          ))}
        </Slider>
    </div>
  )
}

export default RelatedProducts