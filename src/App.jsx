import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Anveshana from './components/Anveshana';
import Aavishkar from './components/Aavishkar';
import Team from './components/Team';
import Winner from './components/Winner';
import Landing from './components/Landing';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

          body {
            font-family: 'Poppins', sans-serif; /* Apply Poppins font to the entire body */
          }

          /* Additional global styles can be added here */
        `}
      </style>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/anveshana" element={<Anveshana />} />
        <Route path="/aavishkar" element={<Aavishkar />} />
        <Route path="/team" element={<Team />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
      <div>
       
        
        
      </div>
      
    </>
  )
}

export default App;
