import  { useState, useEffect } from 'react';

const FilterComponent = () => {
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [ratings, setRatings] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchFilteredProducts();
  }, [brand, category, priceRange, ratings, startDate, endDate]);

  const fetchFilteredProducts = () => {
    // API call to fetch filtered products
    // Example: `/api/products?brand=${brand}&category=${category}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&ratings=${ratings}&startDate=${startDate}&endDate=${endDate}`
  };

  return (
    <div className="flex flex-col md:flex-row">
      
      {/* Filter Sidebar or Dropdowns */}
      <div className="w-full md:w-1/4 bg-gray-100 p-4 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Filter Products</h2>
        
        {/* Brand Filter */}
        <div className="filter-group">
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand Name</label>
          <select
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">All Brands</option>
            <option value="brand1">Brand 1</option>
            <option value="brand2">Brand 2</option>
            {/* Add more brand options here */}
          </select>
        </div>
        
        {/* Category Filter */}
        <div className="filter-group">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">All Categories</option>
            <option value="living-room">Living Room</option>
            <option value="kitchen">Kitchen</option>
            {/* Add more category options here */}
          </select>
        </div>
        
        {/* Price Range Filter */}
        <div className="filter-group">
          <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">Price Range</label>
          <input
            type="range"
            id="price-range"
            min="0"
            max="1000"
            value={priceRange}
            onChange={(e) => setPriceRange([0, e.target.value])}
            className="mt-1 w-full"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
        
        {/* Ratings Filter */}
        <div className="filter-group">
          <label htmlFor="ratings" className="block text-sm font-medium text-gray-700">Ratings</label>
          <select
            id="ratings"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">All Ratings</option>
            <option value="4">4 stars & up</option>
            <option value="3">3 stars & up</option>
          </select>
        </div>
        
        {/* Date Filter */}
        <div className="filter-group">
          <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">Creation Date</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <button
          onClick={fetchFilteredProducts}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mt-4 hover:bg-blue-600"
        >
          Apply Filters
        </button>
      </div>
      
      {/* Products List */}
      <div className="w-full md:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow rounded-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-blue-500 font-semibold">${product.price}</span>
                <span className="text-gray-500">{product.ratings} stars</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
