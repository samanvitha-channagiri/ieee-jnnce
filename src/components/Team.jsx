import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import images from '../assets/team members/assets'; // Adjust the path to your images

const Team = () => {
  const teamMembers = [
    {
      name: "Abhishek H J",
      image: images[0],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishekhj",
        email: "abhishekhj@ieee.org",
      },
    },
    {
      name: "Abhishek K S",
      image: images[1],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/abhishek-k-s-039689276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "abhishekks@ieee.org",
      },
    },
    {
      name: "Aishwarya K P",
      image: images[2],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/aishwarya-k-p-6b5426261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "aishwarya_kp@ieee.org",
      },
    },
    {
      name: "Archana B H",
      image: images[3],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/archana-bh-768999253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "archanabh@ieee.org",
      },
    },
    {
      name: "Karthik B K",
      image: images[4],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/karthik-b-k-3097b8254",
        email: "karthikbk@ieee.org",
      },
    },
    {
      name: "Chandan S",
      image: images[5],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/chandan-s184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "chandans@ieee.org",
      },
    },
    {
      name: "Ananya B",
      image: images[12],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/ananya-basavaraj-91a297290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "ananyabasavaraj@ieee.org",
      },
    },{
      name: "Adarsh G S",
      image: images[13],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/adarsh-gs-653a26311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "adarshgs9620@gmail.com ",
      },
    },
    {
      name: "Chethankumar B S",
      image: images[14],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/chethan-kumar-b-s-9ba285208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "chethankumar@ieee.org",
      },
    },
    {
      name: "Manasa S",
      image: images[15],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/manasa-sg-869785265",
        email: "manasas@ieee.org",
      },
    },
    {
      name: "Mala G B",
      image: images[16],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/mala-g-b-0988b3262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "malagb@ieee.org",
      },
    },
    {
      name: "Pranathi T ",
      image: images[17],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/pranathi-t-a44686263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "pranathit@ieee.org",
      },
    },
    {
      name: "Nanditha N Raj",
      image: images[18],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/nanditha-n-raj-1a483a260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "nandithanraj07@gmail.com",
      },
    },
    {
      name: "N Nisarga",
      image: images[19],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/n-nisarga-893785265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "nnisarga@ieee.org",
      },
    },
    
    {
      name: "Priya B J ",
      image: images[20],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/priya-b-j-370756289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "priyabj_1207@ieee.org",
      },
    },
    
    {
      name: "Rachitha B R",
      image: images[21],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/rachitha-b-r-4911b2254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "rachithaieee@gmail.com",
      },
    },
    {
      name: "Yuktha B",
      image: images[22],
      info:"",
      socials: {
        linkedin: "",
        email: "yukthajain_11@ieee.org",
      },
    },
    {
      name: "Dhvaneeth P Banakar",
      image: images[23],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/dhvaneeth-pbanakar-4640a6306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "dhvaneethpb2004@gmail.com",
      },
    },
    {
      name: "Pratheeksha D R",
      image: images[24],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/pratheeksha-d-r-2662832a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "pratheekshadr@gmail.com",
      },
    },
    {
      name: "Mizbah Kounain",
      image: images[25],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/mizbah-kounain-507a96223",
        email: "mizbahkounain@gmail.com",
      },
    },  {
      name: "Varsha P",
      image: images[26],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Dhruthi N",
      image: images[27],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Manoj M",
      image: images[28],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Darshan H Yavgal",
      image: images[29],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Vidya R",
      image: images[30],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Indupriya Shirisha",
      image: images[31],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },,  {
      name: "Bharath ",
      image: images[32],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },  {
      name: "Yashas P",
      image: images[33],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },{
      name: "Tejashwini R H",
      image: images[36],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },{
      name: "Punya",
      image: images[37],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },{
      name: "Mizbah",
      image: images[38],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/mizbah-kounain-507a96223",
        email: "mizbahkounain@gmail.com ",
      },
    },{
      name: "Dhvaneeth",
      image: images[39],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/dhvaneeth-p-banakar-4640a6306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "dhvaneethpb2004@gmail.com ",
      },
    },{
      name: "Pratheeksha",
      image: images[40],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/pratheeksha-d-r-2662832a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "pratheekshadr@gmail.com",
      },
    },{
      name: "Samanvitha C",
      image: images[41],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },{
      name: "Prajwal P",
      image: images[42],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/prajwal-15969a-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "prajwalp1812@gmail.com ",
      },
    },{
      name: "Mannan Faiz",
      image: images[43],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },{
      name: "Soorya Udupa KB",
      image: images[44],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },{
      name: "Harsha S",
      image: images[45],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/harsha-s-0043a9327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "harshasangur66@jnnce.ac.in",
      },
    },{
      name: "Darshan NV",
      image: images[46],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/darshan-n-v-84480a297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "dnv7645@gmail.com",
      },
    },{
      name: "Manjunath V Poojari",
      image: images[47],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/manjunath-v-poojari-303289246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "mm4211051@gmail.com",
      },
    },{
      name: "Nitish TR",
      image: images[48],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/nithish-t-r-360065319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "nithishtr2004@gmail.com ",
      },
    },{
      name: "Vivek V Shet",
      image: images[49],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },{
      name: "Leena",
      image: images[50],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },{
      name: "Mohammed Sufyan",
      image: images[51],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/mohammed-sufyan-b54516311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "mdsufyan1118@gmail.com",
      },
    },{
      name: "Trupthi D R",
      image: images[52],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/trupthi-doijode-165341356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "trupthituppu6@gmail.com",
      },
    },{
      name: "Rakshitha R",
      image: images[53],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/rakshitha-r-2652812a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "rakshitha1452003@gmail.com",
      },
    },{
      name: "Akshta T Rathod",
      image: images[54],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/akshata-t-rathod-362368357",
        email: ":akshata.akshu.2004@gmail.com",
      },
    },{
      name: "Sunil V",
      image: images[55],
      info:"",
      socials: {
        linkedin: "https://in.linkedin.com/in/sunil-v-281832184",
        email: "sunilvnmt0@gmail.com ",
      },
    },{
      name: "Poorvika",
      image: images[56],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/poorvika-poorvika-96a0732a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "poorvika977@gmail.com ",
      },
    },{
      name: "Sinchana K G",
      image: images[57],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/sinchana-kg-2098a42a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "sinchanakg20@gmail.com",
      },
    },{
      name: "Shwetha B Hosamane",
      image: images[58],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/shwetha-b-hosamani-7314442a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "hshwethab22@gmail.com",
      },
    },{
      name: "Srujana R Patel",
      image: images[59],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/srujana-r-patel-474950314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "srujana.rv1901@gmail.com",
      },
    },{
      name: "Sharadhi HR",
      image: images[60],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },{
      name: "Krupa UB",
      image: images[61],
      info:"",
      socials: {
        linkedin: "",
        email: "",
      },
    },{
      name: "Rakshitha G",
      image: images[62],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/rakshitha-g-449404290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        email: "rakshu.saru28@gmail.com",
      },
    },{
      name: "Manya G B",
      image: images[63],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/manya-g-b-7b117332b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "manyagb94@gmail.com",
      },
    },{
      name: "Harshitha",
      image: images[64],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/harshitha-a22684291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "harshithaprabhu2711@gmail.com",
      },
    },{
      name: "Sanjana S A",
      image: images[65],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/sanjana-s-a-245ba62ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "sanjanasa206@gmail.com",
      },
    },{
      name: "Moulya R G",
      image: images[66],
      info:"",
      socials: {
        linkedin: "https://www.linkedin.com/in/moulya-rg-21a611324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "moulyargsoratur@gmail.com ",
      },
    }
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
