import React, { useState, useEffect } from 'react';
import './home.css'; // Import the CSS file
// ... other imports

// Your component code remains the same, just replace inline styles with class names

import a from '../assets/team members/abhihj.jpg';
import b from '../assets/team members/abhiks.jpg';
import c from '../assets/team members/ananya.jpg';
import d from '../assets/team members/kp.jpg';
// ... other imports
import l from '../assets/homelogo/jnnce.jpg'
import o from '../assets/homelogo/man.jpg'
import g from '../assets/homelogo/ban.jpg'
import h from '../assets/homelogo/rastri.jpg'
const limage = [l,o,g,h]

const images = [a, b, c, d]; // Replace with your image paths

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
      {/* Small Rectangle Images */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        {limage.map((src, index) => (
          <img key={index} src={src} alt={`Small rectangle image ${index}`} style={{ width: '100px', height: '100px', objectFit: 'contain', margin: '0 20px' }} />
        ))}
      </div>
      <h1>Welcome to the IEEE Homepage</h1>
      <p>This is the homepage of the IEEE website where you can find information about our latest events, publications, and more.</p>
      {/* Image Slider */}
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