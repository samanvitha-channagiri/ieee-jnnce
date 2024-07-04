import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/eventgallery/assets' // Ensure this path is correct and images is an array

const EventGallery = () => {
  // Array of event images
  const eventPhotos = image;

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Event Gallery</h2>
      <Row className="justify-content-center">
        {eventPhotos.map((photo, index) => (
          <Col xs={12} sm={6} md={4} lg={4} className="mb-4" key={index}>
            <Card className="h-100 border-0">
              <Card.Img 
                variant="top" 
                src={photo} 
                alt={`Event ${index + 1}`} 
                className="img-fluid" 
                style={{ 
                  height: '200px',  // Adjust the height as needed
                  width: '100%', // Ensure the width takes full space of the column
                  objectFit: 'cover', 
                  borderRadius: '5px' 
                }} 
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventGallery;
