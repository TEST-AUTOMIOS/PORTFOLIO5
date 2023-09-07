import React, { useState } from "react";
import '../styles_s/contactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="contact-head">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="email" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control text-area"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary send-message">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
