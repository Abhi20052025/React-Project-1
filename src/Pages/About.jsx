import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container slide-in-left">
      <h1>About Us</h1>

      {/* Image Section */}
      <div className="about-image">
        <img 
          src="src/assets/Shopnoo p/about  us.jpg" 
          alt="About Us" 
        />
      </div>

      {/* Introduction Section */}
      <section className="about-section">
        <h2>Introduction to the Brand or Person</h2>
        <p>
          We are a passionate team dedicated to delivering high-quality solutions and services
          to our clients. Our journey began with a vision to bridge the gap between innovation
          and practicality.
        </p>
      </section>

      {/* Build Trust and Credibility */}
      <section className="about-section">
        <h2>Build Trust and Credibility</h2>
        <p>
          With years of experience and a strong client base, we’ve built a reputation for 
          delivering reliable and effective results. We believe in transparency, quality, 
          and lasting relationships.
        </p>
      </section>

      {/* Communicate Mission and Values */}
      <section className="about-section">
        <h2>Communicate Mission and Values</h2>
        <p>
          Our mission is to empower individuals and businesses through innovation, dedication, 
          and integrity. We value honesty, collaboration, and continuous learning.
        </p>
      </section>

      {/* Showcase Expertise or Experience */}
      <section className="about-section">
        <h2>Showcase Expertise or Experience</h2>
        <p>
          Our team consists of industry experts with decades of combined experience in technology, 
          design, and business strategy. We've successfully executed over 100+ projects worldwide.
        </p>
      </section>

      {/* Create a Human Connection */}
      <section className="about-section">
        <h2>Create a Human Connection</h2>
        <p>
          At the heart of everything we do are people. We aim to connect with our users, clients, 
          and partners on a personal level to create meaningful, long-term relationships.
        </p>
      </section>
    </div>
  );
};

export default About;
