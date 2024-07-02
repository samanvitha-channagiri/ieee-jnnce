import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Prepare email content
    const subject = 'Message from  IEEE CSE JNNCE Contact Form';
    const mailtoUrl = `mailto:abhishekhj.ieee.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`Name: ${name}\nMessage: ${message}`)}`;

    // Open default email client
    window.location.href = mailtoUrl;
  };

  return (
    <Container>
      <h2>Contact Us</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <br></br>

        {/* Submit button styled as a hyperlink */}
        <a
          href="#"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </a>
      </Form>
    </Container>
  );
};

export default Contact;
