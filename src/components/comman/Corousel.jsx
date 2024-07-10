import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import icons from react-icons


const Corousel = () => {
    const images = [
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',

    ]
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative">
      <button
          className="absolute top-1/2 left-0 transform z-10 -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          onClick={goToPrevious}
        >
          <FiChevronLeft size={24} /> {/* Use the icon component */}
        </button>
        <div className="overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full transition-transform transform translate-x-0 hover:scale-105"
          />
        </div>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          onClick={goToNext}
        >
          <FiChevronRight size={24} /> {/* Use the icon component */}
        </button>
      </div>
    </div>
  );
};

export default Corousel;



