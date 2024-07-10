// ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md transition transform hover:scale-105">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
