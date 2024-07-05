import React, { useState } from 'react';
import './AnveshanaEvents.css';
import images from '../assets/Avishkar2k24events/avish'; // Make sure this path is correct

const events = [
  {
    id: 1,
    title: "Organizers: Rachitha B R,Pratheeksha D R,Mizbah,Dhvaneeth P,Ananya B,Bharath C",
    description: "There will be 40 questions and the duration will be 60mins.●Top participants will be selected for 2nd Round. [Group Discussion]●Top participants will be selected for 3rd Round.ROUND-3 [HR or Interview]● Interview will be assessed based on technical and communication skill",
    image: images[0],
    registerLink:'https://forms.gle/tkhnhrzzEekAzSg6A'
  },
  {
    id: 2,
    title: "Organizers: Aishwarya K P,Archana B H,Karthik B K,Abhishek K S,Abhishek H J",
    description: "Blind Bot Battle as the name says, it consists of 2 parts, first part is the pattern printing using a software robot called Karel, introduced by Stanford UniversityThe second part is the blind coding where the coders are supposed to code with Monitor-off.",
    image: images[1],
    registerLink:'https://forms.gle/eSE21fyZaVFmJRjBA'
  },
  {
    id: 3,
    title: "Organizers: Chandan S,Adarsh G S,Chethan,Punya ",
    description: " Just A Minute: Pick a topic from chits.10 mins for Prepartion. give speech on that topic.MukhaMukhi Darbar: A topic which covers a global concepted topic and Debate is conducted.",
    image: images[2],
    registerLink:'https://forms.gle/xw9pvyw4obS8zVSF8'
  },
  {
    id: 4,
    title: "Organizers: Mala G B,N Nisarga,Nanditha N Raj,Pranathi T,Manasa S ",
    description: "After Registration all participants must join theWhatsApp group to get regular updates.Maximum number of participants per team:2.Round 1: Paper and pen(mode)There shall be questions on puzzles, riddles,Image rebus and other brain teasers.Total duration of the event is 60 minutes. Round 2: Jigsaw Puzzles Participants will solve a series of riddles and select the correct answer from the provides options",
    image: images[3],
    registerLink:'https://forms.gle/y4p9yvFqcLcmdfaf8'
  },
  {
    id: 5,
    title: "Organizers: Indupriya,Vidya R,Thejaswini R H,Varsha P,Manoj M",
    description: "Knock out round General and Technical related quizz.Software Application reviews related tomobile apps.",
    image: images[4],
    registerLink:'https://forms.gle/EHvL8j9qqCp6H5ceA'
  },
  {
    id: 6,
    title: "Organizers: Dhruthi N, Priya B J,Darshan H Y,Yashas P,Yuktha B",
    description: "Per team two members- A quiz mostly based on entrepreneurship will be given, based on which top teams will be selected for their next level. Problem Solving- Per team two members- An entrepreneurial problem will given to the teams, to which they would have to propose aholistic solution.",
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
                <p style={{alignItems:'justify'}}><b>{event.title}</b></p>
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
