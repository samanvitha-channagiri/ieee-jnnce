import React, { useState } from 'react';
import './AnveshanaEvents.css';
import images from '../assets/Avishkar2k24events/avish'; // Make sure this path is correct

const events = [
  {
    id: 1,
    title: "Organizers: Rachitha, Pratheeksha",
    description: "Anveshana's Pixel Puzzles event offers an immersive platform for enthusiasts to delve into the intricate world of UI/UX interface development. With a blend of creativity and technical prowess, participants are challenged to unravel the complexities of pixel-perfect design. Guided by principles of user-centered design, participants navigate through the puzzle of user interfaces, crafting seamless digital experiences that captivate and engage.",
    image: images[0],
    registerLink:'https://forms.gle/tkhnhrzzEekAzSg6A'
  },
  {
    id: 2,
    title: "Organizers: Aishwarya K P, Archana B H, Chandan S",
    description: "Front End Frenzy, organized by Anveshana, thrusts participants into the dynamic realm of web development, honing their skills in HTML, CSS, and JavaScript. This exhilarating event presents a series of challenges focused on debugging and coding, requiring keen attention to detail and adept problem-solving abilities to achieve precise outputs. Front End Frenzy fosters a spirit of collaboration and innovation as participants navigate through the intricacies of front-end development, shaping the digital landscape with their creativity and technical proficiency.",
    image: images[1],
    registerLink:'https://forms.gle/eSE21fyZaVFmJRjBA'
  },
  {
    id: 3,
    title: "Organizers: Adarsh G S, Indu Priya Shirisha, Manoj M, Tejashwini R H, Vidya R",
    description: "Tech Quest challenged participants to embark on a journey of exploration and learning, providing them with an opportunity to delve into the depths of technology and expand their knowledge.",
    image: images[2],
    registerLink:'https://forms.gle/xw9pvyw4obS8zVSF8'
  },
  {
    id: 4,
    title: "Organizers: Ananya B, Bharath C, Dhruthi N, Mizbah Kounain, Pratheeksha D R",
    description: "Shark Tank Lite, inspired by the renowned television show, created a dynamic environment for aspiring entrepreneurs within the student community. Participants presented innovative ideas and solutions to a panel of judges, testing their entrepreneurial acumen and ability to pitch compelling business proposals.",
    image: images[3],
    registerLink:'https://forms.gle/y4p9yvFqcLcmdfaf8'
  },
  {
    id: 5,
    title: "Organizers: Mala G B, N Nisarga, Nanditha N Raj, Pranathi T, Priya B J, Yuktha B",
    description: "Go-Get It added an adventurous twist to the technological extravaganza by introducing a treasure hunt game. This event not only required participants to unravel clues and solve puzzles but also put their teamwork and strategizing skills to the test.",
    image: images[4],
    registerLink:'https://forms.gle/EHvL8j9qqCp6H5ceA'
  },
  {
    id: 6,
    title: "Organizers: Darshan H Yavgal, Yashas P, Punya",
    description: "JNNCE Dominate Arena sets the stage for intense battles in the virtual battleground of BGMI (Battlegrounds Mobile India). This electrifying event brings together gaming enthusiasts across the spectrum to showcase their skills, strategies, and teamwork in thrilling matches.",
    image: images[5],
    registerLink:'https://forms.gle/c2AUsnMRJd4xw5566'
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
    <div className="anveshana-event container">
      <div className="row">
        {events.map(event => (
          <div key={event.id} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="event-item">
              <div className="event-image">
                <img src={event.image} alt={`Event ${event.id}`} className="rounded img-fluid" style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }} />
              </div>
              <div className="event-description mt-2">
              <a href={event.registerLink} className="btn btn-primary btn-block mb-2" target="_blank" rel="noopener noreferrer">Register</a><br></br> {/* Added Register button */}
                <p><b>{event.title}</b></p>
                <p>
                  {expanded[event.id] ? event.description : `${event.description.substring(0, 50)}...`}
                </p>
                <button onClick={() => toggleReadMore(event.id)} className="btn btn-link p-0">
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
