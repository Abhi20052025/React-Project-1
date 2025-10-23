import React, { useState } from 'react';
import './contact.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    mobile: '',
    problem: '',
    help: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name} ${formData.lastName} for contacting us! We will get back to you soon.`);
    // You can add form submission logic here (API call, etc.)
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>

      <div className="map-container">
        <iframe
          title="My Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243646.82658829864!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666012345678"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your first name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <textarea
          name="problem"
          placeholder="Describe your problem in detail"
          rows="4"
          value={formData.problem}
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="help"
          placeholder="How can we help you?"
          rows="3"
          value={formData.help}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
