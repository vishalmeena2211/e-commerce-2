// ProductSearchResultPage.js

import React, { useState, useEffect } from 'react';

const ProductSearchResultPage = () => {
  const [viewType, setViewType] = useState('grid'); // 'grid' or 'single'
  const [sortOption, setSortOption] = useState('featured'); // Default sort option
  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState([]); // Product data state


  const dummyData = [
    { id: 1, name: 'Product 1', price: 19.99, category: 'Electronics' },
    { id: 2, name: 'Product 2', price: 29.99, category: 'Clothing' },
    { id: 3, name: 'Product 3', price: 39.99, category: 'Electronics' },
    { id: 4, name: 'Product 4', price: 49.99, category: 'Clothing' },
    { id: 5, name: 'Product 5', price: 59.99, category: 'Accessories' },
    { id: 6, name: 'Product 6', price: 69.99, category: 'Electronics' },
    { id: 7, name: 'Product 7', price: 79.99, category: 'Clothing' },
    { id: 8, name: 'Product 8', price: 89.99, category: 'Accessories' },
    { id: 9, name: 'Product 9', price: 99.99, category: 'Electronics' },
    { id: 10, name: 'Product 10', price: 109.99, category: 'Clothing' },
    // Add more products as needed
  ];
  // Fetch products on initial load and when sort/filters change
//   useEffect(() => {
//     // Fetch products from your API or data source
//     // Example: replace the fetchProducts function with your data fetching logic
//     const fetchProducts = async () => {
//       // Your data fetching logic here
//       // Example URL: '/api/products?sort=${sortOption}&filters=${filters.join(',')}' 
//       // (This is just an example and may not work in your specific case)
//       try {
//         const response = await fetch(`/api/products?sort=${sortOption}&filters=${filters.join(',')}`);
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, [sortOption, filters]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    if (filters.includes(filterValue)) {
      setFilters(filters.filter((filter) => filter !== filterValue));
    } else {
      setFilters([...filters, filterValue]);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <label htmlFor="sort">Sort By:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="ml-2 p-2 border"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        <div>
          <label>View:</label>
          <button
            onClick={() => setViewType('grid')}
            className={`ml-2 p-2 ${viewType === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewType('single')}
            className={`ml-2 p-2 ${viewType === 'single' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Single View
          </button>
        </div>
      </div>

      <div className={`grid grid-cols-${viewType === 'grid' ? 3 : 1} gap-4`}>
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-500">{product.category}</p>
            {/* Add more product details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSearchResultPage;

