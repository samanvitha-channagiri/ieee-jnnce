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
      <p>IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities</p>
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
      <br/>
      <br/>
      <h2>Quick facts about IEEE</h2>
      <div class="formatted-text">
        <ul>
          
          <li>Has 39 technical Societies and eight Technical Councils representing a wide range of IEEE technical interests
          </li>
          <li>Has more than 6 million documents in the IEEE Xplore® Digital Library</li>
          <li>Has an active portfolio of 1,144 standards and more than 1,018 projects under development </li>
          <li>Publishes more than 200 transactions, journals, and magazines </li>
          <li>Sponsors more than 2,000 conferences and events in 190 countries while contributing over 4 million total conference papers to IEEE Xplore since 1936, with more than 200,000 new papers added annually </li>
          
        </ul>
      </div>
    </div>
  );
};

export default HomePage;