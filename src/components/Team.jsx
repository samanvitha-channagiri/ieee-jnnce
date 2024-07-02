import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import images from '../assets/team members/assets'; // Assuming you have defined this array in assets.js

const Team = () => {
  // Sample data for team members
  const teamMembers = [
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek H J",
      image: images[0], // Replace with actual image URL or keep it as a placeholder
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org"
      },
    },
    {
      name: "Abhishek K S",
      image: images[1], // Replace with correct image index
      socials: {
        linkedin: "#", // Replace with actual LinkedIn profile link
        email: "abhi@gmail.com"
      },
    },
    {
      name: "Archana B H",
      image: images[3], // Replace with correct image index
      socials: {
        linkedin: "#", // Replace with actual LinkedIn profile link
        email: "abhi@gmail.com"
      },
    },
    // Add more team members as needed
  ];

  return (
    <div className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={7} className="text-center">
            <h3 className="mb-3">Meet the Team</h3>
            <h6 className="text-muted">
              You can rely on our amazing features list and also our customer services will be a great experience for you without doubt and in no time.
            </h6>
          </Col>
        </Row>
        <Row>
          {teamMembers.map((member, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-5">
              <Card className="shadow-sm" style={{ maxWidth: "100%", margin: "auto", height: "auto" }}>
                <div
                  style={{
                    height: "180px", // Increase the image height to fill more space
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Card.Body className="text-center p-2">
                  <Card.Title style={{ fontSize: "1rem" }}>{member.name}</Card.Title>
                  <div className="d-flex justify-content-center">
                    <a href={member.socials.linkedin} className="text-info mx-1" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin" style={{ fontSize: "1.2rem" }}></i>
                    </a>
                    <a href={`mailto:${member.socials.email}`} className="text-danger mx-1">
                      <i className="fas fa-envelope" style={{ fontSize: "1.2rem" }}></i>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Team;
