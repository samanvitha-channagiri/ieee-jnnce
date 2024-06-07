import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation/>
        
        
      </div>
      
    </>
  )
}

export default App;
