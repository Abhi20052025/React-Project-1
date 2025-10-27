import React, { useEffect, useState } from 'react';
import './shoes.css';
import productData from '../product.json'; // adjust path as needed

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    // Assuming your JSON structure is: { "Shoes - 10": [ ... ] }
    setShoes(productData["Shoes - 10"] || []);
  }, []);

  const handleBuyNow = (shoe) => {
    alert(`You selected to buy: ${shoe.name} for $${shoe.price}`);
  };

  return (
    <div className="shoes-container">
      <h1>Shoes Collection</h1>
      <div className="shoes-grid">
        {shoes.map((shoe, index) => (
          <div className="shoe-card" key={index}>
            {shoe.bestSeller && (
              <span className="best-seller-badge">Best Seller</span>
            )}
            <img
              src={shoe.image}
              alt={shoe.name}
              className="shoe-image"
            />
            <h2>{shoe.name}</h2>
            <p><strong>Price:</strong> ${shoe.price}</p>
            <p><strong>Rating:</strong> {shoe.rating} / 5 ⭐</p>
            <button className="buy-btn" onClick={() => handleBuyNow(shoe)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
