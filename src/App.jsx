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
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/team' element={<Team/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/anveshana" element={<Anveshana />} />
        <Route path="/aavishkar" element={<Aavishkar />} />
      </Routes>
    </BrowserRouter>
      <div>
       
        
        
      </div>
      
    </>
  )
}

export default App;
