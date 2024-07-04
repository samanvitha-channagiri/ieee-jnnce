import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Anvesh from './Avishkaarevent';
import ar from '../assets/Avishkar2k24events/avish';


const Aavishkar = () => {
  // Event details
  const eventTitle = "Avishkaar";
  const eventDescription = (
    <>      
      
      <p>Anveshana is an annual tech symposium that brings together the brightest minds in technology and innovation.</p>
      <p>It signifies the search for knowledge and experience, allowing us to explore our creativity and thinking skills for holistic development. Anveshana reflects our commitment to innovation, passion for learning, and determination to make a difference.</p>
    </>
  );

  const about = (
    <>
      <div className='my-2'>
        <h3>About 2024</h3>
        <p>Anveshana, supported by IEEE, unfolded within the vibrant halls of the Department of Computer Science and Engineering. It provided a platform for students to showcase their talents and ideas, fostering interdisciplinary collaborations and pushing the boundaries of knowledge. With IEEE's support and student participation, Anveshana emerged as a testament to the department's commitment to excellence and innovation in education and research.</p>
      </div>
    </>
  );

  // Slider details
  const images =[ar[6],ar[7],ar[8],ar[9],ar[10],ar[11]]; // Replace with your image paths
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='my-4'>
      <h1 className='text-center mb-4'>{eventTitle}</h1>
      {eventDescription}
      
      {/* Image Slider */}
      <div className="slider" style={{ overflow: 'hidden', width: '100%' }}>
        <div className="slides" style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="slide" style={{ flexShrink: 0, width: '100%' }}>
              <img src={src} alt={`Slide ${index}`} style={{ width: '100%', height: '300px', objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>

      {about}
      <br>
      </br>
      <h3 style={{ color: '#007bff'}}>Events</h3>
      <Anvesh/>

      
    </div>
  );
};

export default Aavishkar;
