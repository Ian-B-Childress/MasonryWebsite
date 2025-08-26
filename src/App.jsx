import React, { use, useState } from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Gallery from './pages/Gallery.jsx'
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
import { DynamicTitle } from './Components/DynamicTitle.jsx'

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
      <DynamicTitle />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
      </Layout>
    </BrowserRouter>
    
  );
}
  const root = createRoot(document.getElementById('root'))
root.render(<App />)
export default App
