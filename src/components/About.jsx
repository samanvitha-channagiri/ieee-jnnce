import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import photo1 from '../assets/jnnce.jpeg';
import photo2 from '../assets/logo.jpg';
import images from '../assets/team members/assets';

const About = () => {
  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">About Us</h1>
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <Card className="text-center">
            <Card.Img variant="top" src={images[35]} alt="Lecture 1" className="rounded-circle img-fluid" style={{ maxWidth: '200px', height: '180px', objectFit: 'cover', margin: 'auto' }} />
            <Card.Body>
              <Card.Title>Dr. Poornima K M</Card.Title>
              <Card.Text className='text-center'>
                 <a href="mailto:kmpoornima@ieee.org">kmpoornima@ieee.org</a><br />
               <p className='text-center'>Professor,Dept. of CS&E, JNNCE.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <Card className="text-center">
            <Card.Img variant="top" src={images[34]} alt="Lecture 2" className="rounded-circle img-fluid" style={{ maxWidth: '200px', height: '180px', objectFit: 'cover', margin: 'auto' }} />
            <Card.Body>
              <Card.Title>Mr. SathyaNarayana S</Card.Title>
              <Card.Text className='text-center'>
             <a href="mailto:Sathya.s@ieee.org">Sathya.s@ieee.org</a><br />
             <p className='text-center'>Assistant Professor,Dept. of CS&E, JNNCE.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Link to="/team">
          <Button variant="primary">Meet the Team Members</Button>
        </Link>
      </div>
    </Container>
  );
};

export default About;
