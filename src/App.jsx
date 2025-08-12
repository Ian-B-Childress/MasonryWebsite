import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import './App.css'
import project1 from './images/project1.jpg'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Layout from './Components/Layout.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
      </Layout>
    </BrowserRouter>
    
  );
}

class Tool {
  constructor(name){
    this.tool = name 
  }

  present(){
    return 'I have a ' + this.tool;
  }
}
  const myTool = new Tool('Trowel');

  const root = createRoot(document.getElementById('root'))
root.render(<App />)
export default App
