import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Winners = () => {
  // Define an array of objects to store winners data
  const anveshana = [
    {
      event: 'Tech Quest',
      winners: [
        { position: '1st', names: 'Pooja B, Bhavan R M' },
        { position: '2nd', names: 'Vibha G B, Ruchitha S R' },
        { position: '3rd', names: 'Pramod J, Nithin B M' }
      ]
    },
    {
      event: 'Shark Tank Lite',
      winners: [
        { position: '1st', names: 'Vandana R, Vaishnavi S' },
        { position: '2nd', names: 'Trupthi K N, Natasha H N' },
        { position: '3rd', names: 'Sushmitha H S, Souparnika K H' }
      ]
    },
    {
      event: 'Go Get It',
      winners: [
        { position: '1st', names: 'Jason W George, Rohan Pinto & Rakesh H N' },
        { position: '2nd', names: 'Adarsh M Achari, Abhishek S Palankar' },
        { position: '3rd', names: 'Impana T S, Chethana T & Anvitha H N' }
      ]
    },
    {
      event: 'Pixel Puzzles',
      winners: [
        { position: '1st', names: 'Gautham H M' },
        { position: '2nd', names: 'Indudhara S, Adithya A Navale' },
        { position: '3rd', names: 'Sharvari P K, Rakshitha D H' }
      ]
    },
    {
      event: 'Frontend Frenzy',
      winners: [
        { position: '1st', names: 'Hari B J, Rohith D' },
        { position: '2nd', names: 'Ruchitha S R, Vibha G M' },
        { position: '3rd', names: 'Pooja B, Bhavana R M' }
      ]
    },
    {
      event: 'JNNCE Dominate Arena',
      winners: [
        { position: '1st', names: 'Samarth G, Manoj P, Mohammed Nihal, Adithya' },
        { position: '2nd', names: 'Sreenandha S, Areeb Imtiaz, Rahul N, Vineeth A D' },
        { position: '3rd', names: 'Zayad Riyaz, Syedammer, Syed Sadiq' }
      ]
    }
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Winners of Anveshana 2024</h2>
      <div className="row">
        {anveshana.map((competition, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{competition.event}</h5>
                <ul className="list-group">
                  {competition.winners.map((winner, idx) => (
                    <li className="list-group-item" key={idx}>
                      <strong>{winner.position}</strong>: {winner.names}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Winners;
