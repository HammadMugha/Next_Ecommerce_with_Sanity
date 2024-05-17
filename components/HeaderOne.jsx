import React from "react";

function HeaderOne() {
  return (
    <div className='bg-[url("/prlx.jpg")] bg-center py-[180px]'>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center text-white flex items-center justify-center flex-col gap-5">
            <h4 className="text-1xl md:text-2xl font-light">WALL UNIT FOR DRAWING ROOM </h4>
          <h2 className="text-3xl font-bold md:text-5xl">
           LARGEST HEADPHONE COLLECTION
          </h2>
          <button className="btn">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderOne;
