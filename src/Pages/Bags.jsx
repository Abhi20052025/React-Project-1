import React, { useEffect, useState } from 'react';
import './bags.css'; // Make sure this file exists
import productData from '../product.json'; // Adjust path if needed

const Bags = () => {
  const [bags, setBags] = useState([]);

  useEffect(() => {
    // Set only the bags category from JSON
    setBags(productData.bags);
  }, []);

  const handleBuyNow = (bag) => {
    alert(`You selected to buy: ${bag.name} for ₹${bag.price}`);
  };

  return (
    <div className="bag-container">
      <h1>Our Bags Collection</h1>
      <div className="bag-grid">
        {bags.map((bag) => (
          <div className="bag-card" key={bag.id}>
            {bag.bestSeller && (
              <span className="best-seller-badge">Best Seller</span>
            )}
            <img
              src={
                bag.image.startsWith('http')
                  ? bag.image
                  : `${bag.image}` // use public/ image path directly
              }
              alt={bag.name}
              className="bag-image"
            />
            <h2>{bag.name}</h2>
            <p><strong>Price:</strong> ₹{bag.price}</p>
            <p><strong>Rating:</strong> {bag.rating} / 5 ⭐</p>
            <button className="buy-btn" onClick={() => handleBuyNow(bag)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Bags;
