import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import images from '../assets/team members/assets'; // Adjust the path to your images

const Team = () => {
  const teamMembers = [
    {
      name: "Abhishek H J",
      image: images[0],
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org",
      },
    },
    {
      name: "Abhishek K S",
      image: images[1],
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishek-k-s-039689276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "abhishekks@ieee.org",
      },
    },
    {
      name: "Aishwarya K P",
      image: images[2],
      socials: {
        linkedin: "https://www.linkedin.com/in/aishwarya-k-p-6b5426261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "aishwarya_kp@ieee.org",
      },
    },
    {
      name: "Archana B H",
      image: images[3],
      socials: {
        linkedin: "https://www.linkedin.com/in/archana-bh-768999253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "archanabh@ieee.org",
      },
    },
    {
      name: "Karthik B K",
      image: images[4],
      socials: {
        linkedin: "https://www.linkedin.com/in/karthik-b-k-3097b8254",
        email: "karthikbk@ieee.org",
      },
    },
    {
      name: "Chandan S",
      image: images[5],
      socials: {
        linkedin: "https://www.linkedin.com/in/chandan-s184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "chandans@ieee.org",
      },
    },
    {
      name: "Ananya B",
      image: images[12],
      socials: {
        linkedin: "https://www.linkedin.com/in/ananya-basavaraj-91a297290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "ananyabasavaraj@ieee.org",
      },
    },{
      name: "Adarsh G S",
      image: images[13],
      socials: {
        linkedin: "https://www.linkedin.com/in/adarsh-gs-653a26311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "adarshgs9620@gmail.com ",
      },
    },
    {
      name: "Chethankumar B S",
      image: images[14],
      socials: {
        linkedin: "https://www.linkedin.com/in/chethan-kumar-b-s-9ba285208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "chethankumar@ieee.org",
      },
    },
    {
      name: "Manasa S",
      image: images[15],
      socials: {
        linkedin: "https://www.linkedin.com/in/manasa-sg-869785265",
        email: "manasas@ieee.org",
      },
    },
    {
      name: "Mala G B",
      image: images[16],
      socials: {
        linkedin: "https://www.linkedin.com/in/mala-g-b-0988b3262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "malagb@ieee.org",
      },
    },
    {
      name: "Pranathi T ",
      image: images[17],
      socials: {
        linkedin: "https://www.linkedin.com/in/pranathi-t-a44686263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "pranathit@ieee.org",
      },
    },
    {
      name: "Nanditha N Raj",
      image: images[18],
      socials: {
        linkedin: "https://www.linkedin.com/in/nanditha-n-raj-1a483a260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "nandithanraj07@gmail.com",
      },
    },
    {
      name: "N Nisarga",
      image: images[19],
      socials: {
        linkedin: "https://www.linkedin.com/in/n-nisarga-893785265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "nnisarga@ieee.org",
      },
    },
    
    {
      name: "Priya B J ",
      image: images[20],
      socials: {
        linkedin: "https://www.linkedin.com/in/priya-b-j-370756289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "priyabj_1207@ieee.org",
      },
    },
    
    {
      name: "Rachitha B R",
      image: images[21],
      socials: {
        linkedin: "https://www.linkedin.com/in/rachitha-b-r-4911b2254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "rachithaieee@gmail.com",
      },
    },
    {
      name: "Yuktha B",
      image: images[22],
      socials: {
        linkedin: "",
        email: "yukthajain_11@ieee.org",
      },
    },
    {
      name: "Dhvaneeth P Banakar",
      image: images[23],
      socials: {
        linkedin: "https://www.linkedin.com/in/dhvaneeth-pbanakar-4640a6306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "dhvaneethpb2004@gmail.com",
      },
    },
    {
      name: "Pratheeksha D R",
      image: images[24],
      socials: {
        linkedin: "https://www.linkedin.com/in/pratheeksha-d-r-2662832a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "pratheekshadr@gmail.com",
      },
    },
    {
      name: "Mizbah Kounain",
      image: images[25],
      socials: {
        linkedin: "",
        email: "mizbahkounain@gmail.com",
      },
    },  {
      name: "Varsha P",
      image: images[26],
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Dhruthi N",
      image: images[27],
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Manoj M",
      image: images[28],
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Darshan H Yavgal",
      image: images[29],
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Vidya R",
      image: images[30],
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Indupriya Shirisha",
      image: images[31],
      socials: {
        linkedin: "",
        email: "",
      },
    },,  {
      name: "Bharath ",
      image: images[32],
      socials: {
        linkedin: "",
        email: "",
      },
    },,  {
      name: "Yashas P",
      image: images[33],
      socials: {
        linkedin: "",
        email: "",
      },
    },
    // Add more team members as needed
  ];

  return (
    <div className=" bg-light">
      <Container>
        <Row className="justify-content-center my-4">
          <Col md={7} className="text-center">
            <h3 className="mb-3">Meet the Team</h3>
            
          </Col>
        </Row>
        <Row>
          {teamMembers.map((member, index) => (
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
