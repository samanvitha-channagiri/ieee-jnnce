import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';


// Import your educational official images

const Contact = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <Row>
        <Col xs={12} md={6} className="mb-4">
          <Card className="d-flex flex-row align-items-center p-3">
            <img
              src=''
              alt="Lecture 1"
              className="rounded-circle me-3"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div>
              <Card.Title>Lecture 1</Card.Title>
              <Card.Text>
                <strong>Name:</strong> John Doe<br />
                <strong>Email:</strong> john.doe@example.com<br />
                <strong>Phone:</strong> (123) 456-7890
              </Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
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
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
            <div>
              <Card.Title>Lecture 2</Card.Title>
              <Card.Text>
                <strong>Name:</strong> Jane Smith<br />
                <strong>Email:</strong> jane.smith@example.com<br />
                <strong>Phone:</strong> (987) 654-3210
              </Card.Text>
              <Card.Text>
                Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
              </Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Link to="/team">
          <Button variant="primary">Team Members</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Contact;
