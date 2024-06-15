import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';



const Event = () => {
  // Event details
  const eventTitle = "Anveshana";
  const eventDescription = "Join us for our annual tech conference where we explore the latest trends in technology and innovation.";
  const eventDate = "July 25, 2024";
  const eventTime = "10:00 AM - 5:00 PM";

  // Slider details
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image paths
  const [currentSlide, setCurrentSlide] = useState(0);

  // Multiple competition winners
  const winners = [
    'Winner of Competition 1',
    'Winner of Comp 2',
    'Winner of Compen 3',
    // ... add more winners as needed
  ];
  const [currentWinnerIndex, setCurrentWinnerIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    const winnerInterval = setInterval(() => {
      setCurrentWinnerIndex((prevIndex) => (prevIndex + 1) % winners.length);
    }, 5000); // Change winner every 5 seconds

    return () => {
      clearInterval(slideInterval);
      clearInterval(winnerInterval);
    };
  }, []);

  return (
    <div>
      <h1>{eventTitle}</h1>
      <p>{eventDescription}</p>
      <p>Date: {eventDate}</p>
      <p>Time: {eventTime}</p>
      
      {/* Image Slider */}
      <div className="slider" style={{ overflow: 'hidden', width: '100%' }}>
        <div className="slides" style={{ display: 'flex', transition: 'all 0.5s ease' }}>
          {images.map((src, index) => (
            <div key={index} className="slide" style={{ flexShrink: 0, width: '100%', transform: `translateX(-${currentSlide * 100}%)` }}>
              <img src={src} alt={`Slide ${index}`} style={{ width: '100%', height: '500px', objectFit: 'contain', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <Link to="/winner">
          <Button variant="primary">Click here to see Winners</Button>
        </Link>
      </div>





      {/* Add more details and styling as needed */}
    </div>
  );
};

export default Event;
