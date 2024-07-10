// AccountDetails.js

import React from 'react';

const AccountDetails = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Account Details</h2>
      <div className="bg-white shadow-md rounded-md p-6">
        <div className="mb-4">
          <label htmlFor="fullName" className="text-lg font-medium block mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-lg font-medium block mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="john@example.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-lg font-medium block mb-2">
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="********"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="text-lg font-medium block mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="********"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
