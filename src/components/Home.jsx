import React, { useState, useEffect } from 'react';
import a from '../assets/team members/abhihj.jpg';
import b from '../assets/team members/abhiks.jpg';
import c from '../assets/team members/ananya.jpg';
import kp from '../assets/team members/kp.jpg';
import karthik from '../assets/team members/karthik.jpg';
import archana from '../assets/team members/archana.jpg';
const images = [a,b,c]; // Replace with your image paths

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Welcome to the IEEE Homepage</h1>
      <p>This is the homepage of the IEEE website where you can find information about our latest events, publications, and more.</p>
      <div className="slider" style={{ overflow: 'hidden', width: '100%' }}>
        <div className="slides" style={{ display: 'flex', transition: 'all 0.5s ease' }}>
          {images.map((src, index) => (
            <div key={index} className="slide" style={{ flexShrink: 0, width: '100%', transform: `translateX(-${currentSlide * 100}%)` }}>
                <img src={src} alt={`Slide ${index}`} style={{ width: '100%', height: '550px', objectFit: 'contain', display: 'block' }} />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
