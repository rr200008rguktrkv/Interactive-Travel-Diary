import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
    console.log('Form Data:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-glass">
        <h1>Contact Us</h1>
        <p>Have questions, feedback, or just want to say hello? We'd love to hear from you.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        <br/>
        <button className="back-button" onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Contact;
