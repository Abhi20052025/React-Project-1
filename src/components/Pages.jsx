// src/pages/Shop.jsx
import React from 'react';
import './shop.css';

const categories = [
  { id: 1, name: 'Men Clothing', className: 'bg-cat1' },
  { id: 2, name: 'Women Clothing', className: 'bg-cat2' },
  { id: 3, name: 'Electonic Gedgets', className: 'bg-cat3' },
  { id: 4, name: 'Glasses', className: 'bg-cat4' },
  { id: 5, name: 'Shoes', className: 'bg-cat5' },
  { id: 6, name: 'Bages', className: 'bg-cat6' },
  { id: 7, name: 'Grossery Items', className: 'bg-cat7' },
  { id: 8, name: 'Sports Items', className: 'bg-cat8' },
];
 
const
  Shop = () => {
  return (
    <div className="shop-container">
      <h2 className="shop-heading">All Shopnoo Buy Categories</h2>

      <div className="category-grid">
        {categories.map((cat) => (
          <div key={cat.id} className={`category-card ${cat.className}`}>
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
