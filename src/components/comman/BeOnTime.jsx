import React from 'react'

const BeOnTime = () => {
  return (
    <div>
      
<div className="relative  flex items-center overflow-hidden bg-gray-100 ">
    <div className="container relative flex px-6 py-16 mx-auto">
        <div className="relative flex flex-col sm:w-2/3 lg:w-2/5">
            <span className="w-20 h-2 mb-12 bg-gray-800 ">
            </span>
            <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl ">
                Be on
                <span className="text-5xl sm:text-7xl">
                    Time
                </span>
            </h1>
            <p className="text-sm text-gray-700 sm:text-base ">
                Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
            </p>
            <div className="flex mt-8">
                <a href="/" className="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400">
                    Get started
                </a>
                <a href="/" className="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg  hover:bg-pink-500 hover:text-white text-md">
                    Read more
                </a>
            </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
            <img src="https://www.tailwind-kit.com/images/object/10.png" className="max-w-xs m-auto md:max-w-sm" alt='no'/>
        </div>
    </div>
</div>

    </div>
  )
}

export default BeOnTime
