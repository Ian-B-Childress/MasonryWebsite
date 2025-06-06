import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'
import project1 from './images/project1.jpg'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
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
