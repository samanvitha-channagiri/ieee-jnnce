import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import abhi from '../assets/team members/abhihj.jpg';
import ab from '../assets/team members/kp.jpg';
import ks from '../assets/team members/abhiks.jpg';
import an from '../assets/team members/ananya.jpg';
import ar from '../assets/team members/archana.jpg';
import cr from '../assets/team members/chandan.jpg';

const images = [abhi, ks, ab, an, ar, cr]; // Add more images as needed

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideWidth = 100 / 3; // Each slide's width in percentage
  const totalSlides = images.length;
  const numSlides = Math.ceil(totalSlides / 3); // Number of groups of 3 images

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // Change image set every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + numSlides) % numSlides);
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides);
  };

  const getVisibleImages = () => {
    const startIndex = currentSlide * 3;
    const visibleImages = [];

    for (let i = 0; i < 3; i++) {
      visibleImages.push(images[(startIndex + i) % totalSlides]);
    }

    return visibleImages;
  };

  return (
    <div className="container mt-5">
      <div className="slider position-relative overflow-hidden" style={{ maxWidth: '1200px', margin: 'auto' }}>
        <div
          className="slides d-flex"
          style={{
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentSlide * slideWidth}%)`,
            width: `${numSlides * 100}%`,
          }}
        >
          {getVisibleImages().map((src, index) => (
            <div
              key={index}
              className="slide"
              style={{ flex: '0 0 33.3333%', boxSizing: 'border-box', padding: '0 5px' }}
            >
              <img
                src={src}
                className="img-fluid"
                alt={`Slide ${index}`}
                style={{
                  width: '100%',
                  height: '300px', // Set a fixed height for all images
                  objectFit: 'cover', // Ensure the image fits nicely within the set dimensions
                }}
              />
            </div>
          ))}
        </div>
        <button
          className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        <button
          className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
      <div className="dots mt-3 d-flex justify-content-center">
        {Array.from({ length: numSlides }).map((_, index) => (
          <button
            key={index}
            className={`btn btn-sm ${currentSlide === index ? 'btn-dark' : 'btn-light'} rounded-circle mx-1`}
            onClick={() => setCurrentSlide(index)}
            style={{ width: '15px', height: '15px', padding: 0 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;