// Orders.js

import React from 'react';

const Orders = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Orders</h2>
      <div className="bg-white shadow-md rounded-md p-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg">Order #12345</p>
          <p className="text-gray-600">Placed on: January 15, 2023</p>
        </div>
        <div className="border-b border-gray-300 mb-4"></div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            <img
              src="https://via.placeholder.com/60"
              alt="Product"
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <p className="text-lg font-semibold">Product Name</p>
              <p className="text-gray-600">Quantity: 2</p>
            </div>
          </div>
          <p className="text-lg">$49.99</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex">
            <img
              src="https://via.placeholder.com/60"
              alt="Product"
              className="w-16 h-16 object-cover mr-4"
            />
            <div>
              <p className="text-lg font-semibold">Another Product</p>
              <p className="text-gray-600">Quantity: 1</p>
            </div>
          </div>
          <p className="text-lg">$29.99</p>
        </div>
        <div className="border-b border-gray-300 mb-4"></div>
        <div className="flex justify-end items-center">
          <p className="text-xl font-semibold mr-4">Total: $79.98</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
