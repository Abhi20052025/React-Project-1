import React, { useEffect, useState } from 'react';
import './women.css';
import productsData from '../product.json'; // adjust path if needed

const WomenClothes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load only the "women" array from JSON
    setProducts(productsData.women);
  }, []);

  const handleBuyNow = (item) => {
    alert(`You have selected to buy: ${item.name} for ₹${item.price}`);
  };

  return (
    <div className="women-clothes-container">
      <h1>Women's Clothes Collection</h1>
      <div className="clothes-grid">
        {products.map((item, index) => (
          <div className="clothes-card" key={index}>
            <img src={item.image} alt={item.name} className="clothes-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ₹{item.price}</p>
            <button className="buy-button" onClick={() => handleBuyNow(item)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenClothes;
