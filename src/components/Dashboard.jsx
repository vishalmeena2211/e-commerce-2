// Dashboard.js

import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Dashboard</h2>
      <div className="bg-white shadow-md rounded-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Activity Card 1 */}
          <div className="bg-blue-100 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Recent Orders</h3>
            <p className="text-gray-600">You have 3 new orders. Check them out!</p>
          </div>

          {/* Activity Card 2 */}
          <div className="bg-green-100 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Monthly Sales</h3>
            <p className="text-gray-600">Your sales for this month are looking great!</p>
          </div>

          {/* Activity Card 3 */}
          <div className="bg-yellow-100 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Product Updates</h3>
            <p className="text-gray-600">Explore new features and updates to our products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
