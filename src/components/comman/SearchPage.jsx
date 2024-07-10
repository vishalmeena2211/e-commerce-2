// SearchPage.js

import React, { useState } from 'react';
import ProductCard from './ProductCard';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // For the sake of this example, let's use a static list of products
    const products = [
      { id: 1, name: 'Elegant Watch', price: 199.99, imageUrl: 'watch.jpg' },
      { id: 2, name: 'Stylish Sunglasses', price: 59.99, imageUrl: 'sunglasses.jpg' },
      { id: 3, name: 'Classic Backpack', price: 89.99, imageUrl: 'backpack.jpg' },
    ];

    // Filter products based on the search query
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-6">Search Products</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 transition"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition"
        onClick={handleSearch}
      >
        Search
      </button>
      <div className="mt-6">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
