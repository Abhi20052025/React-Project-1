import React, { useEffect, useState } from 'react';
import './men.css';
import productsData from './../product.json';

const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData.men); 
  }, []);
console.log("products",products);

  return (
    <div className="men-container">
      <h1>Men's Collection</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} className="product-image" />

            {/* Example condition if you want to highlight products above a price */}
            {product.price > 50 && (
              <div className="best-seller-tag">Best Seller</div>
            )}

            <h2 className="product-title">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Rs {product.price}</p>

            <button className="buy-button" onClick={() => alert(`Buying ${product.name}`)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
