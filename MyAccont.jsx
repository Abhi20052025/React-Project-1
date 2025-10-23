import React, { useState } from 'react';
import './my account.css';

const MyAccount = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="account-container">
      <h1>👤 My Account</h1>

      <div className="section profile-section">
        <h2>Profile Information</h2>
        <div className="profile-info">
          <div className="profile-image">
            <img
              src={profileImage || 'https://via.placeholder.com/150'}
              alt="Profile"
            />
            <input type="file" onChange={handleImageUpload} />
          </div>
          <div className="details">
            <p><strong>Name:</strong> Abhishek Kumar Pandey</p>
            <p><strong>Email:</strong> Pandeyabhishek10001@gmail.com</p>
            <p><strong>Phone:</strong> +91-7814760289</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>📍 Address</h2>
        <p><strong>Your Address:</strong> 123 Main Street, New Delhi, India</p>
        <p><strong>Delivery Location:</strong> Sector 45, Gurgaon, India</p>
      </div>

      <div className="section">
        <h2>💳 Payment Methods</h2>
        <ul>
          <li>Visa **** 1234</li>
          <li>UPI: Abhishek@upi</li>
        </ul>
      </div>

      <div className="section">
        <h2>👁️ Watchlist</h2>
        <ul>
          <li>Stylish Square Glasses</li>
          <li>Blue Light Blocker</li>
        </ul>
      </div>

      <div className="section">
        <h2>📦 My Orders</h2>
        <div className="order">
          <p><strong>Product:</strong> Transparent Chic Glasses</p>
          <p><strong>Status:</strong> 🚚 Out for Delivery</p>
          <p><strong>Tracking Location:</strong> Near Noida Sector 18</p>
          <button className="track-btn">Track Order</button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
