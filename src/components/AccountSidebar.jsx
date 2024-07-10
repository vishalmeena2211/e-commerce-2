// AccountPage.js

import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Orders from './Orders';
import PaymentMethod from './PaymentMethod';
import Address from './Address';
import AccountDetails from './AccountDetails';

const AccountPage = () => {
  const [selectedItem, setSelectedItem] = useState('dashboard');

  const renderComponent = () => {
    switch (selectedItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'orders':
        return <Orders />;
      case 'paymentMethod':
        return <PaymentMethod />;
      case 'address':
        return <Address />;
      case 'accountDetails':
        return <AccountDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="flex mt-20 min-h-[560px]">
      <div className="w-1/4 bg-gray-200 p-4">
        <ul>
          <li
            className={`cursor-pointer py-2 px-4 mb-2 rounded ${
              selectedItem === 'dashboard' ? 'bg-blue-500 text-white' : 'hover:bg-blue-300'
            }`}
            onClick={() => setSelectedItem('dashboard')}
          >
            Dashboard
          </li>
          <li
            className={`cursor-pointer py-2 px-4 mb-2 rounded ${
              selectedItem === 'orders' ? 'bg-blue-500 text-white' : 'hover:bg-blue-300'
            }`}
            onClick={() => setSelectedItem('orders')}
          >
            Orders
          </li>
          <li
            className={`cursor-pointer py-2 px-4 mb-2 rounded ${
              selectedItem === 'paymentMethod' ? 'bg-blue-500 text-white' : 'hover:bg-blue-300'
            }`}
            onClick={() => setSelectedItem('paymentMethod')}
          >
            Payment Method
          </li>
          <li
            className={`cursor-pointer py-2 px-4 mb-2 rounded ${
              selectedItem === 'address' ? 'bg-blue-500 text-white' : 'hover:bg-blue-300'
            }`}
            onClick={() => setSelectedItem('address')}
          >
            Address
          </li>
          <li
            className={`cursor-pointer py-2 px-4 mb-2 rounded ${
              selectedItem === 'accountDetails' ? 'bg-blue-500 text-white' : 'hover:bg-blue-300'
            }`}
            onClick={() => setSelectedItem('accountDetails')}
          >
            Account Details
          </li>
          <li
            className={`cursor-pointer py-2 px-4 mb-2 rounded ${
              selectedItem === 'logout' ? 'bg-blue-500 text-white' : 'hover:bg-blue-300'
            }`}
            onClick={() => setSelectedItem('logout')}
          >
            Logout
          </li>
        </ul>
      </div>
      <div className="w-3/4 p-4 min-h-[600px]">{renderComponent()}</div>
    </div>
  );
};

export default AccountPage;
