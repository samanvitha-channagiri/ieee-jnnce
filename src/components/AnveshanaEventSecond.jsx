import React, { useState } from 'react';
import './AnveshanaEvents.css';
import images from '../assets/team members/assets';

const events = [
  {
    id: 1,
    title: "Organizers : Samanvitha C,Shwetha B H, Sharadhi H R, Srujana R Patel, Sinchana K G,Mohammad Sufyan Mizbah Kounain, Pratheeksha D R.",
    description: "IEEE Anveshana's SQUID GAME event is an exciting challenge where participants progress through multiple levels, each featuring unique and engaging games that test their mathematical and logical reasoning. Each level presents a new set of interactive challenges, requiring strategic thinking, problem-solving skills, and teamwork to advance. As participants navigate through these levels, they must apply logic, precision, and adaptability to succeed. Designed to foster critical thinking and collaboration, SQUID GAME offers a fun and intellectually stimulating experience in a competitive yet enjoyable environment.",
    image: images[67]
  },
  {
    id: 2,
    title: "Organizers: Rahshitha G, Manya G B, Sanjana S A, Moulya R G, Rakshitha R.",
    description: "Anveshana's Teck Talk event offers arena of innovation, this event is a battleground of ideas, where logic meets creativity, and arguments shape the future. Participants will engage in thought-provoking discussions. Showcase your challenging  conventional wisdom, and persuade with confidence. Tech Talk fosters a space for knowledge exchange, intellectual discourse, and collaborative learning, making it an exciting event for those passionate about the future of innovations. Whether you’re an eloquent speaker or a Dynamic orator, this is your chance to shine! Join us and be part of a sparkling event, which fuels critical thinking. ",
    image: images[68]
  },
  {
    id: 3,
    title: "Organizers : Darshan N V, Harsha S ,Trupti, Vivek, Dhvaneeth.",
    description: "IEEE Anveshana's CODEVERSE Event presents an exhilarating coding challenge where participants put their problem-solving skills to the test through a series of technical and strategic rounds. This immersive event begins with a buzzer-based quiz covering technical concepts, puzzles, and general knowledge, followed by an intense debugging challenge in C or Python, culminating in a thrilling treasure hunt where teams decode clues to uncover hidden rewards. Designed to foster logical thinking, teamwork, and precision under pressure, CODEVERSE pushes participants to showcase their coding expertise and strategic acumen in a competitive yet engaging environment.",
    image: images[69]
  },
  {
    id: 4,
    title: "Organizers : Mutahira P, Shifa Naaz, Harshitha, Sunil V, Poorvika.",
    description: "The Blind Bot Battle by Anveshana is a high-stakes test of strategy, problem-solving, and adaptability.  In this exciting task, pattern awareness, flawless execution, and resilience are crucial for success.  This two-round competition tests the accuracy of the code and algorithmic reasoning.  In the very first round, competitors develop goal patterns beneath a time frame by programming the Karel bot to carry out instructions like putBeeper and moveLeft.  With a coding editor that periodically crashes, the second round ups the stakes and examines player's memory, reasoning, and resolve.  Think without constraints.  Don't be frightened to code.  The Blind Bot Battle is forthcoming.",
    image: images[70]
  },
  {
    id: 5,
    title: "Organizers : Akshata, Aqsah Sehreen, Kabshaharmine M, Krupa U B, Leena U G.",
    description: "Anveshana's Pitch Perfect event presents a dynamic platform for innovative thinkers to showcase their exceptional business acumen and presentation skills. This immersive experience challenges participants to develop and pitch groundbreaking business solutions, navigating the intricacies of real-world market scenarios. With a focus on creativity, strategic thinking, and effective communication, participants must craft compelling pitches that captivate and persuade, demonstrating their ability to drive business success.",
    image: images[71]
  },
  {
    id: 6,
    title: "Organizers : Mannan Faiz, Prajwal P, Manjunath, Niteesh T R, Soorya Udupa.",
    description: "Anveshana's : HireXperience  offers an immersive platform for aspiring professionals to navigate the dynamic landscape of job recruitment. Blending analytical acumen with technical expertise, participants tackle aptitude challenges, coding problems, and HR scenarios designed to simulate real-world hiring processes. Guided by strategic thinking and problem-solving principles, participants decode the complexities of placements, refining their skills to stand out in the competitive hiring arena.",
    image: images[72]
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