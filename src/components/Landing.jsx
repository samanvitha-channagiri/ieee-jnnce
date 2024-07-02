import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = ({ onLearnMore }) => {
  const navigate = useNavigate();

  return (
    <div
      className="front-page"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "url('../assets/landingpage.jpg')", // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
      }}
    >
      <div className="text-container">
        <h2
          className="animated fadeInDown"
          style={{
            animationDuration: '1s',
            animationFillMode: 'both',
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: 'aliceblue',
          }}
        >
          WELCOME TO
        </h2>
        <h1
          className="animated fadeInDown"
          style={{
            animationDuration: '1s',
            animationFillMode: 'both',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '700',
            fontSize: '4rem',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            background: 'linear-gradient(90deg, #dae2f8, #d6a4a4, #ece9e6, #cfd9df, #e2ebf0)',
            backgroundSize: '300% auto',
            animation: 'shine 5s linear infinite',
          }}
        >
          The IEEE Website
        </h1>
        <h3
          className="animated fadeInDown"
          style={{
            animationDuration: '1s',
            animationFillMode: 'both',
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: 'aliceblue',
          }}
        >
          JNNCE-Shimoga
        </h3>
      </div>
      <button
        className="learn-more-button animated fadeInUp"
        style={{
          padding: '10px 20px',
          fontSize: '1.2rem',
          color: '#fff',
          backgroundColor: '#191971',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onClick={() => onLearnMore()}
      >
        LEARN MORE
      </button>
    </div>
  );
};

export default Landing;

// CSS styles for keyframes animation
const styles = `
  @keyframes shine {
    to {
      background-position: 300% center;
    }
  }

  @keyframes fadeInDown {
    from {
      transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      transform: translate3d(0, 100%, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

// Inject CSS styles into the document head
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
