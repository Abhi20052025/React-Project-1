import React, { useEffect, useState } from 'react';
import './glasses.css';
import productData from '../product.json'; // Adjust path as needed

const GlassesCollection = () => {
  const [glasses, setGlasses] = useState([]);

  useEffect(() => {
    // Assuming the key in JSON is something like "glasses" or "Glasses - 10"
    setGlasses(productData["glasses"] || productData["Glasses - 10"] || []);
  }, []);

  const handleBuyNow = (glass) => {
    alert(`You selected to buy: ${glass.name} for $${glass.price}`);
  };

  return (
    <div className="glasses-container">
      <h1>Glasses Collection</h1>
      <div className="glasses-grid">
        {glasses.map((glass, index) => (
          <div className="glass-card" key={index}>
            {glass.bestSeller && (
              <span className="best-seller-badge">Best Seller</span>
            )}
            <img
              src={glass.image}
              alt={glass.name}
              className="glass-image"
            />
            <h2>{glass.name}</h2>
            <p><strong>Price:</strong> ${glass.price}</p>
            <p><strong>Rating:</strong> {glass.rating} / 5 ⭐</p>
            <button className="buy-btn" onClick={() => handleBuyNow(glass)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassesCollection;
