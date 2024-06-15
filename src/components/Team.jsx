import React from "react";
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
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-md-7 text-center">
            <h3 className="mb-3">Meet the Team</h3>
            <h6 className="text-muted">
              You can rely on our amazing features list and also our customer services will be a great experience for you without doubt and in no time.
            </h6>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card shadow-sm" style={{ maxWidth: "100%", margin: "auto" }}>
                <div
                  className="card-img-top"
                  style={{
                    height: "150px",
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="card-body text-center p-2">
                  <h5 className="card-title">{member.name}</h5>
                  <div className="d-flex justify-content-center">
                    <a href={member.socials.linkedin} className="text-info mx-1" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin" style={{ fontSize: "1.2rem" }}></i>
                    </a>
                    <a href={`mailto:${member.socials.email}`} className="text-danger mx-1">
                      <i className="fas fa-envelope" style={{ fontSize: "1.2rem" }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
