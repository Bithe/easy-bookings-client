import { useState, useEffect } from 'react';
import axios from 'axios';

const FilterComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        // const { data } = await axios.get('https://easy-bookings-server.vercel.app/products', {
        //   params: {
        //     page,
        //     search,
        //     category,
        //     brand,
        //     priceMin,
        //     priceMax,
        //     sort,
        //   },
        // });


        const { data } = await axios.get('http://localhost:5000/products', {
          params: {
            page,
            search,
            category,
            brand,
            priceMin,
            priceMax,
            sort,
          },
        });



        

        setProducts(data.products); 
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, search, category, brand, priceMin, priceMax, sort]);

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleBrandChange = (e) => setBrand(e.target.value);
  const handlePriceMinChange = (e) => setPriceMin(e.target.value);
  const handlePriceMaxChange = (e) => setPriceMax(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <div className='text-center py-8  lg:m-8 border-4 border-blue-300 rounded-lg'>
      <h1 className='text-3xl font-bold '>Product List</h1>

      <div className='flex items-center justify-between py-8 lg:m-8 '>
        <input
          type="text" 
          placeholder="Search by name"
          value={search}
          onChange={handleSearchChange}
        />
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Computers">Computers</option>
          <option value="Home">Home</option>
        </select>
        <select value={brand} onChange={handleBrandChange}>
          <option value="">All Brands</option>
          <option value="Instant Pot">Instant Pot</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="GoPro">GoPro</option>
          <option value="Asus">Asus</option>
          <option value="HP">HP</option>
          <option value="Panasonic">Panasonic</option>
          <option value="Bose">Bose</option>
          <option value="JBL">JBL</option>
          <option value="JBL">JBL</option>
          <option value="Nest">Nest</option>
          <option value="Logitech">Logitech</option>
          <option value="Corsair">Corsair</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={priceMin}
          onChange={handlePriceMinChange}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceMax}
          onChange={handlePriceMaxChange}
        />
        <select value={sort} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="newest">Date Added: Newest First</option>
        </select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='m-8'>
          {products && products.length > 0 ? (
            <ul className=''>
              {products.map((product) => (
                <li className='border rounded-lg ' key={product._id}>
                  <img className='text-center flex justify-center items-center  border' src={product.image} alt={product.name} width="100" />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <p>Category: {product.category}</p>
                  <p>Brand: {product.brand}</p>
                  <p>Ratings: {product.ratings}</p>
                  <p>Date Added: {new Date(product.createdAt).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products found</p>
          )}
          <div className='p-8'>
            <button className='text-2xl font-bold text-blue-500 pr-8' onClick={handlePrevPage} disabled={page === 1}>
              Previous
            </button>
            <button className='text-2xl font-bold text-blue-500' onClick={handleNextPage} disabled={page === totalPages}>
              Next
            </button>
            <p>
              Page {page} of {totalPages}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
