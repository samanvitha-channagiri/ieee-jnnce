import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure you have Bootstrap imported

const Team = () => {
  // Sample data for team members
  const teamMembers = [
    {
      name: "Abhishek",
      title: "abhi@email.com",
      description: "",
      image: "https://via.placeholder.com/150", // Replace with actual image URL or keep it as a placeholder
      socials: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Abhishek",
      title: "abhi@gmail",
      description: "",
      image: "https://via.placeholder.com/150",
      socials: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Abhishek",
      title: "abhi@gmail",
      description: "",
      image: "https://via.placeholder.com/150",
      socials: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Abhishek",
      title: "abhi@gmail",
      description: "",
      image: "https://via.placeholder.com/150",
      socials: {
        twitter: "#",
        instagram: "#",
      }
    },
    {
        name: "Abhishek",
        title: "abhi@gmail",
        description: "",
        image: "https://via.placeholder.com/150",
        socials: {
          twitter: "#",
          instagram: "#",
        }
      },{
        name: "Abhishek",
        title: "abhi@gmail",
        description: "",
        image: "https://via.placeholder.com/150",
        socials: {
          twitter: "#",
          instagram: "#",
        }
      },{
        name: "Abhishek",
        title: "abhi@gmail",
        description: "",
        image: "https://via.placeholder.com/150",
        socials: {
          twitter: "#",
          instagram: "#",
        }
      }
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
                  <h6 className="card-subtitle mb-2 text-muted">{member.title}</h6>
                  
                  <div className="d-flex justify-content-center">
                    <a href={member.socials.twitter} className="btn btn-outline-info mx-1">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href={member.socials.instagram} className="btn btn-outline-danger mx-1">
                      <i className="fab fa-instagram"></i>
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
