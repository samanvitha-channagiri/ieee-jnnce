import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/logo.jpg'; 
import abhihj from '../assets/team members/abhihj.jpg';
import abhiks from '../assets/team members/abhiks.jpg';
import ananya from '../assets/team members/ananya.jpg';
import kp from '../assets/team members/kp.jpg';
import karthik from '../assets/team members/karthik.jpg';
import archana from '../assets/team members/archana.jpg';
import chandan from '../assets/team members/chandan.jpg';


const Team = () => {
  // Sample data for team members
  const teamMembers = [
    {
      name: "Abhishek",
      title: "abhi@email.com",
      description: "",
      image: abhiks, // Replace with actual image URL or keep it as a placeholder
      socials: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Abhishek",
      title: "abhi@gmail",
      description: "",
      image: karthik,
      socials: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Abhishek",
      title: "abhi@gmail",
      description: "",
      image: kp,
      socials: {
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Abhishek",
      title: "abhi@gmail",
      description: "",
      image: archana,
      socials: {
        twitter: "#",
        instagram: "#",
      }
    },
    {
        name: "Abhishek",
        title: "abhishekhj@iee.org",
        description: "",
        image: abhihj,
        socials: {
          linkedin: "https://www.linkedin.com/in/abhishekhj",
          instagram: "#",
        }
      },{
        name: "Abhishek",
        title: "abhi@gmail",
        description: "",
        image: ananya,
        socials: {
          twitter: "https://www.google.com/search?q=jnnce+logo&sca_esv=5a58adcc29de473b&rlz=1C1YQLS_enIN992IN992&sxsrf=ADLYWILKUIu3tzdJbmhwEP9_AcDux0mtxA%3A1718358784576&ei=ABNsZuLoIofh2roPz9iIqAY&ved=0ahUKEwji6M2n6dqGAxWHsFYBHU8sAmUQ4dUDCBA&uact=5&oq=jnnce+logo&gs_lp=Egxnd3Mtd2l6LXNlcnAiCmpubmNlIGxvZ28yBRAAGIAEMgUQABiABDILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESPkbUNUHWOIYcAN4AZABAJgBtQKgAbMJqgEHMC40LjEuMbgBA8gBAPgBAZgCCKAC0QfCAgoQABiwAxjWBBhHwgILEAAYgAQYkQIYigXCAgYQABgWGB7CAgsQLhiABBjHARivAcICBBAjGCfCAgsQLhiABBixAxiDAZgDAOIDBRIBMSBAiAYBkAYIkgcHMy40LjAuMaAH6SU&sclient=gws-wiz-serp",
          instagram: "#",
        }
      },{
        name: "Abhishek",
        title: "abhi@gmail",
        description: "",
        image: chandan,
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
                    <a href={member.socials.linkedin} className="text-info mx-1" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin" style={{ fontSize: "1.2rem" }}></i>
                    </a>
                    <a href={member.socials.instagram} className="text-danger mx-1" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram" style={{ fontSize: "1.2rem" }}></i>
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
