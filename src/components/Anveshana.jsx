import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Anvesh from './AnveshanaEvent';
import anvesh from '../assets/AnveshanaEvent/Anveshana/Event';


const Event = () => {
  // Event details
  const eventTitle = "Anveshana";
  const eventDescription = (
    <>      
      
      <p>Anveshana is an annual tech symposium that brings together the brightest minds in technology and innovation.</p>
      <p>It signifies the search for knowledge and experience, allowing us to explore our creativity and thinking skills for holistic development. Anveshana reflects our commitment to innovation, passion for learning, and determination to make a difference.</p>
    </>
  );

  const about = (
    <><br></br>
      <div className='my-2'>
        <h3>About 2024</h3>
        <p>Anveshana, supported by IEEE, unfolded within the vibrant halls of the Department of Computer Science and Engineering. It provided a platform for students to showcase their talents and ideas, fostering interdisciplinary collaborations and pushing the boundaries of knowledge. With IEEE's support and student participation, Anveshana emerged as a testament to the department's commitment to excellence and innovation in education and research.</p>
      </div>
    </>
  );

  // Slider details
  const images =anvesh; // Replace with your image paths
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 1500); // Change image every 3 seconds

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
      </br> <hr style={{border: "3px solid black"}}></hr><br></br>
      <h2 style={{ color: '#007bff'}}>Events Conducted</h2>
      <Anvesh/>

      <div className="text-center mt-4"><h5>Winners of Anveshana 2k24</h5>
        <Link to="/winner">
          <Button variant="primary">Click Here</Button>
        </Link>
      </div>
    </div>
  );
};

export default Event;
