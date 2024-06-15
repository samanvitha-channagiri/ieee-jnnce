import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';



const Event = () => {
  // Event details
  const eventTitle = "Anveshana";
  const eventDescription = (
    <>
    <h3>About</h3>
    <p>Anveshana is an annual tech symposium that brings together the brightest minds in technology and innovation.</p>
    <p>It is the word signifies the search of knowledge and experience.
    Anveshana lets us to explore our creativity and thinking skills which helps us to have the holistic development of individual. Anveshana is the reflection of our commitment to innovation, passion for learning and our determination for making a difference.</p>
    </>
  );
  const about=(
    <>
    <div>
    <h3>About 2024</h3>
    <p>Anveshana, an exhilarating event supported by the prestigious IEEE, recently
unfolded within the vibrant halls of the Department of Computer Science and
Engineering. Anveshana not only provided a platform for showcasing students'
talents and ideas but also served as a catalyst for fostering interdisciplinary
collaborations and pushing the boundaries of knowledge within the department.
With IEEE's support and the enthusiastic participation of students, Anveshana
emerged as a testament to the department's commitment to excellence and
innovation in education and research.</p>

</div>
    </>
  )

  // Slider details
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with your image paths
  const [currentSlide, setCurrentSlide] = useState(0);
 
  return (
    <div>
      <h1>{eventTitle}</h1>
      <p>{eventDescription}</p>
      
      
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
    <p>{about}</p>
      <div className="text-center mt-4">
        <Link to="/winner">
          <Button variant="primary">Click here to see Winners</Button>
        </Link>
      </div>





     
    </div>
  );
};

export default Event;
