// PaymentMethod.js

import React from 'react';

const PaymentMethod = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Payment Method</h2>
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-lg font-semibold mb-4">Saved Payment Methods</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Payment Card 1 */}
          <div className="bg-blue-100 p-4 rounded-md">
            <p className="text-gray-600 mb-2">Card ending in 1234</p>
            <p className="text-gray-600">Expires 12/24</p>
          </div>

          {/* Payment Card 2 */}
          <div className="bg-green-100 p-4 rounded-md">
            <p className="text-gray-600 mb-2">Card ending in 5678</p>
            <p className="text-gray-600">Expires 05/23</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Add New Payment Method</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cardNumber" className="text-gray-600 block mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="**** **** **** 1234"
              />
            </div>
            <div>
              <label htmlFor="expiryDate" className="text-gray-600 block mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="text-gray-600 block mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="123"
              />
            </div>
            <div className="col-span-2 mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add Payment Method
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
