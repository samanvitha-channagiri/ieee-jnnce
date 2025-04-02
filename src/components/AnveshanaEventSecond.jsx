import React, { useState } from 'react';
import './AnveshanaEvents.css';
import images from '../assets/team members/assets';

const events = [
  {
    id: 1,
    title: "Organizers : Samanvitha C,Shwetha B H, Sharadhi H R, Srujana R Patel, Sinchana K G,Mohammad Sufyan Mizbah Kounain, Pratheeksha D R",
    description: "Squid Game...",
    image: images[6]
  },
  {
    id: 2,
    title: "Organizers: Rahshitha G, Manya G B, Sanjana S A, Moulya R G, Rakshitha R",
    description: "Anveshana's Teck Talk event offers arena of innovation, this event is a battleground of ideas, where logic meets creativity, and arguments shape the future. Participants will engage in thought-provoking discussions. Showcase your challenging  conventional wisdom, and persuade with confidence. Tech Talk fosters a space for knowledge exchange, intellectual discourse, and collaborative learning, making it an exciting event for those passionate about the future of innovations. Whether you’re an eloquent speaker or a Dynamic orator, this is your chance to shine! Join us and be part of a sparkling event, which fuels critical thinking. ",
    image: images[7]
  },
  {
    id: 3,
    title: "Organizers : Darshan N V, Harsha S ,Trupti Vivek, Dhvaneeth",
    description: "IEEE Anveshana's CODEVERSE Event presents an exhilarating coding challenge where participants put their problem-solving skills to the test through a series of technical and strategic rounds. This immersive event begins with a buzzer-based quiz covering technical concepts, puzzles, and general knowledge, followed by an intense debugging challenge in C or Python, culminating in a thrilling treasure hunt where teams decode clues to uncover hidden rewards. Designed to foster logical thinking, teamwork, and precision under pressure, CODEVERSE pushes participants to showcase their coding expertise and strategic acumen in a competitive yet engaging environment.",
    image: images[8]
  },
  {
    id: 4,
    title: "Organizers : Mutahira P, Shifa Naaz, Harshitha, Sunil V, Poorvika",
    description: "  Blink Bot Battle..",
    image: images[9]
  },
  {
    id: 5,
    title: "Organizers : Akshata, Aqsah Sehreen, Kabshaharmine M, Krupa U B, Leena U G",
    description: "Go-Get It added an adventurous twist to the technological extravaganza by introducing a treasure hunt game. This event not only required participants to unravel clues and solve puzzles but also put their teamwork and strategizing skills to the test.",
    image: images[10]
  },
  {
    id: 6,
    title: "Organizers : Mannan Faiz, Prajwal P, Manjunath, Niteesh T R, Soorya Udupa",
    description: "Anveshana's : HireXperience  offers an immersive platform for aspiring professionals to navigate the dynamic landscape of job recruitment. Blending analytical acumen with technical expertise, participants tackle aptitude challenges, coding problems, and HR scenarios designed to simulate real-world hiring processes. Guided by strategic thinking and problem-solving principles, participants decode the complexities of placements, refining their skills to stand out in the competitive hiring arena.",
    image: images[11]
  }
];

const AnveshanaEvent = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="anveshana-event container ">
      <div className="row">
        {events.map(event => (
          <div key={event.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="event-item">
              <div className="event-image">
                <img src={event.image} alt={`Event ${event.id}`} className="rounded-circle img-fluid" />
              </div>
              <div className="event-description">
                <p><b>{event.title}</b></p>
                <p>
                  {expanded[event.id] ? event.description : `${event.description.substring(0, 50)}...`}
                </p>
                <button onClick={() => toggleReadMore(event.id)} className="btn btn-link">
                  {expanded[event.id] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnveshanaEvent;