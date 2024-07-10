// src/components/TwoSidedSection.js
import React from 'react';

const TwoSidedSection = ({data}) => {
  return (
        <>
    {!data.flip ?
    <div className="flex flex-col justify-center md:flex-row bg-gray-100 p-8 gap-20">
      {/* Image Side */}
      <div className="md:w-1/2 p-4 flex justify-end">
        <img
          className=" object-cover rounded-md h-full w-[450px]"
          src={`${data.img}`}
          alt="Sample"
        />
      </div>

      {/* Text Side */}
      <div className='w-1/2'>
      <div className="md:w-4/5 p-4 flex flex-col justify-center h-full">
        <h3 className="text-xl  text-gray-800 mb-7">{data.h3}</h3>
        <h1 className="text-[45px] font-bold text-orange-500 mb-2">{data.h1}</h1>
        <div className="w-12 h-1 bg-orange-500 mb-9"></div>
        <p className="text-gray-600 mb-8 text-xl">
       {data.p}
        </p>
        <button className="bg-gray-800 w-[160px] text-xl rounded-[35px] text-orange-500 hover:bg-orange-500 hover:text-white py-4">
          Buy Now
        </button>
      </div>
      </div>
    </div> :  <div className="flex flex-col justify-center md:flex-row bg-gray-100 p-8">

         {/* Text Side */}
    <div className='w-1/2 flex justify-end'>
    <div className="md:w-4/5 p-4 flex flex-col justify-center h-full">
      <h3 className="text-xl  text-gray-800 mb-7">{data.h3}</h3>
      <h1 className="text-[45px] font-bold text-orange-500 mb-2">{data.h1}</h1>
      <div className="w-12 h-1 bg-orange-500 mb-9"></div>
      <p className="text-gray-600 mb-8 text-xl">
{data.p}
      </p>
      <button className="bg-gray-800 w-[160px] text-xl rounded-[35px] text-orange-500 hover:bg-orange-500 hover:text-white py-4">
        Buy Now
      </button>
    </div>
    </div> 

    
    {/* Image Side */}
    <div className="md:w-1/2 p-4 flex justify-start">
      <img
        className=" h-full object-cover rounded-md w-4/5"
        src={`${data.img}`}
        alt="Sample"
      />
    </div>

   
  </div> }
  </>
  );
};

export default TwoSidedSection;
