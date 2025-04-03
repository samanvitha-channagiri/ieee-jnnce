import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import images from '../assets/team members/assets'; // Adjust the path to your images
import teamMembers1 from "../assets/team members/memberdetails2024";
import teamMembers2 from "../assets/team members/memberdetails2025";


const Team = () => {
 
  

  return (
    
    <div className=" bg-light">
      <Container>
        <Row className="justify-content-center my-4">
          <Col md={7} className="text-center">
            <h3 className="mb-3">Meet the 2024 Team</h3>
            
          </Col>
        </Row>
        <Row>
          {teamMembers1.map((member, index) => (
            <Col xs={6} sm={6} md={4} lg={2} key={index} className="mb-4">
              <Card className="shadow-sm" style={{ maxWidth: "160px", margin: "auto", height: "240px", alignItems:"center" }}>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%",
                    margin: "auto",
                    marginTop: "15px",
                  }}
                />
                <Card.Body className="text-center p-2">
                  <Card.Title
                    style={{
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                      
                      textOverflow: "ellipsis",
                      margin: 0,
                    }}
                    title={member.name} // Tooltip for full name on hover
                  >
                    {member.name}
                  </Card.Title>
                  <div className="d-flex justify-content-center mt-2">
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
      <hr />
      <Container>
        <Row className="justify-content-center my-4">
          <Col md={7} className="text-center">
            <h3 className="mb-3">Meet the 2025 Team</h3>
            
          </Col>
        </Row>
        <Row>
          {teamMembers2.map((member, index) => (
            <Col xs={6} sm={6} md={4} lg={2} key={index} className="mb-4">
              <Card className="shadow-sm" style={{ maxWidth: "160px", margin: "auto", height: "240px", alignItems:"center" }}>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%",
                    margin: "auto",
                    marginTop: "15px",
                  }}
                />
                <Card.Body className="text-center p-2">
                  <Card.Title
                    style={{
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                      
                      textOverflow: "ellipsis",
                      margin: 0,
                    }}
                    title={member.name} // Tooltip for full name on hover
                  >
                    {member.name}
                  </Card.Title>
                  <div className="d-flex justify-content-center mt-2">
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
