import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

// Import your educational official images

const About = () => {
  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">About Us</h1>
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <Card className="d-flex flex-row align-items-center p-3">
            <img
              src=""
              alt="Lecture 1"
              className="rounded-circle me-3"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }} // Increased size
            />
            <div>
              
              <Card.Text>
                <strong>Dr. Poornima K M</strong> <br />
                <strong>Email:</strong><br />
                
              </Card.Text>
              <Card.Text>
                Professor
              </Card.Text>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6} className="mb-4">
          <Card className="d-flex flex-row align-items-center p-3">
            <img
              src=""
              alt="Lecture 2"
              className="rounded-circle me-3"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }} // Increased size
            />
            <div>
            
              <Card.Text>
                <strong>Mr. SathyaNarayana S</strong><br />
                <strong>Email:</strong> <br />
                
              </Card.Text>
              <Card.Text>
                Assistant Professor
              </Card.Text>
            </div>
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
