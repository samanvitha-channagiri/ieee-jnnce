import React, { useState, useEffect } from 'react';
import './home.css'; // Import the CSS file

// Importing images
import anvesh from '../assets/AnveshanaEvent/Anveshana/Event';

import home from '../assets/homelogo/home';
import EventGallery from './EventGallery';

// Array of small rectangle images
const limage = [home[0],home[1],home[2],home[3]];

// Array of large slider images
const images = [anvesh[1],anvesh[2],anvesh[3]];

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
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        {limage.map((src, index) => (
          <img key={index} src={src} alt={`Small rectangle image ${index}`} style={{ width: '80px', height: '75px', objectFit: 'contain', margin: '10px 10px' }} />
        ))}
      </div>
      <h6>National Education Society</h6>
      <h3><strong>Jawaharlal Nehru New College of Engineering</strong></h3>
      <h5>Department of Computer Science and Engineering</h5><hr style={{ border: "2px solid rgb(5,5,255)" }} />

      

<h1>      <strong>Welcome to the IEEE SB</strong></h1>
      <p>
        IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit
        of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences,
        technology standards, and professional and educational activities.
      </p>

      {/* Image Slider */}
      <div className="slider" style={{ overflow: 'hidden', width: '100%' }}>
        <div className="slides" style={{ display: 'flex', transition: 'all 0.5s ease', transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="slide" style={{ flexShrink: 0, width: '100%' }}>
              <img src={src} alt={`Slide ${index}`} style={{ width: '100%', height: '350px', objectFit: 'contain', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>

    <br></br>
   
      <h2 >Quick facts about IEEE</h2>
      <div className="formatted-text">
        <ul>
          <li>Has 39 technical Societies and eight Technical Councils representing a wide range of IEEE technical interests</li>
          <li>Has more than 6 million documents in the IEEE Xplore® Digital Library</li>
          <li>Has an active portfolio of 1,144 standards and more than 1,018 projects under development</li>
          <li>Publishes more than 200 transactions, journals, and magazines</li>
          <li>Sponsors more than 2,000 conferences and events in 190 countries while contributing over 4 million total conference papers to IEEE Xplore since 1936, with more than 200,000 new papers added annually</li>
        </ul>
      </div>
     
    </div>
  );
};

export default HomePage;
