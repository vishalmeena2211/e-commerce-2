import React, { useState } from 'react';

const slides = [
  {
    imageUrl: 'https://template.hasthemes.com/sinp/sinp/assets/images/hero/slide1.webp',
    content: 'Slide 1 Content',
    h3:"#Feel The Rhythm."
    ,h1:"Walk Up Your Passion Listen Good Music."
    ,p:"Experience the decibels like your ears deserve to. Safe for the ears, very for the heart. A treat to your ears."
    
  },
  {
    imageUrl: 'https://template.hasthemes.com/sinp/sinp/assets/images/hero/slide2.webp',
    content: 'Slide 2 Content',
    h3:"#Feel The Rhythm"
    ,h1:"Spark Up Your Passion With Good Music."
    ,p:"Experience the decibels like your ears deserve to. Safe forthe ears, very for the heart. A treat to your ears."
  },
  
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
//   };

  return (
    <div className="relative w-full h-screen ">
       
      <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
        <img

          className='h-[800px] w-full'
          src={slides[currentSlide].imageUrl}
          alt={`Slide ${currentSlide + 1}`}
        />
      </div>
      <div className=' absolute w-screen z-10 top-0'>
      </div>
      <div className="absolute left-12 top-32 w-[1100px] text-black flex justify-start p-4">
      <div className="w-full p-4 flex flex-col justify-center h-full">
        <h3 className="text-2xl text-gray-800">{slides[currentSlide].h3}</h3>
        <h1 className="text-[65px] w-2/3 font-bold text-orange-500 mb-2">{slides[currentSlide].h1}</h1>
        <div className="w-12 h-1 bg-orange-500 mb-9"></div>
        <p className="text-gray-600 mb-8 w-9/12 text-xl">
       {slides[currentSlide].p}
        </p>
        <button className="bg-gray-800 w-1/6 text-orange-600 px-2 py-3 rounded-3xl hover:bg-orange-600 hover:text-white">
          Buy Now
        </button>
      </div>
      </div>
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2 max-w-screen max-h-[500px]">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full border-2 relative before:border-red-500 before:border-2 before:-translate-x-1 before:-translate-y-1 before:absolute before:top-0 before:left-0 before:w-6 before:h-6 before:rounded-full border-yellow-400 ${
                index === currentSlide
                  ? 'bg-orange-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              } cursor-pointer transition-all duration-300`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      {/* <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-600 text-white px-2 py-1 rounded-full"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-600 text-white px-2 py-1 rounded-full"
        onClick={nextSlide}
      >
        Next
      </button> */}
    </div>
  );
};

export default ImageSlider;
