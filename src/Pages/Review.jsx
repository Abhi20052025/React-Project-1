// src/components/Review.jsx
import React from 'react';
import './review.css';

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "public/Forgin clint picture/priya sharma.jpeg",
    review: "Shopnoo makes online shopping super easy! Loved the smooth experience and fast delivery. Highly recommended!",
  },
  {
    id: 2,
    name: "Rahul Verma",
    image: "public/Forgin clint picture/rahul varma.jpeg",
    review: "Fantastic service! I use the Shopnoo App all the time. It’s user-friendly and gives great discounts.",
  },
  {
    id: 3,
    name: "Anjali Mehta",
    image: "public/Forgin clint picture/ajjali matha.webp",
    review: "I love the product variety on Shopnoo. Their customer service is responsive and helpful!",
  }
];

const Review = () => {
  return (
    <div className="review-container">
      <h1>What Our Customers Say</h1>
      <p className="intro-text">
        At <strong>Shopnoo</strong>, we focus on delivering top-notch service, fast delivery, and a smooth shopping experience
        through our powerful app. Here's what some of our happy customers have to say:
      </p>
      <div className="review-grid">
        {reviews.map((person) => (
          <div className="review-card" key={person.id}>
            <img src={person.image} alt={person.name} className="review-image" />
            <h3>{person.name}</h3>
            <p className="review-text">"{person.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
