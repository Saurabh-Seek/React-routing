import React from "react"
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'
import './App.css';

function App() {
  


  return (
  <React.Fragment>
  <div className="Divoce">
 <div className="First">

<BrowserRouter>
<nav>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/footer">Footer</Link>
       <Link to="/services">Services</Link>
     </nav>
</BrowserRouter>
 </div>
 <div className="Second">
 <BrowserRouter>
   
  
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/footer" element={<Footer/>}/>
     <Route path="/services" element={<Services/>}/>
   </Routes>

   </BrowserRouter>
 </div>
  </div>
 
  </React.Fragment>
  )
}

export default App
