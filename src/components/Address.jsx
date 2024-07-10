// Address.js

import React from 'react';

const Address = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Address</h2>
      <div className="bg-white shadow-md rounded-md p-6">
        <h3 className="text-lg font-semibold mb-4">Saved Addresses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Address Card 1 */}
          <div className="bg-blue-100 p-4 rounded-md">
            <p className="text-gray-600 mb-2">John Doe</p>
            <p className="text-gray-600 mb-2">123 Main Street</p>
            <p className="text-gray-600">City, Zip Code</p>
          </div>

          {/* Address Card 2 */}
          <div className="bg-green-100 p-4 rounded-md">
            <p className="text-gray-600 mb-2">Jane Smith</p>
            <p className="text-gray-600 mb-2">456 Oak Avenue</p>
            <p className="text-gray-600">Town, Zip Code</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Add New Address</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="text-gray-600 block mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="address" className="text-gray-600 block mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="123 Main Street"
              />
            </div>
            <div>
              <label htmlFor="city" className="text-gray-600 block mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="City"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="text-gray-600 block mb-2">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Zip Code"
              />
            </div>
            <div className="col-span-2 mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Add Address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
