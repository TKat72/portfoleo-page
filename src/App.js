import me from './me.png'
import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import MyProjects from './components/MyProjects/MyProjects'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutMe></AboutMe>} />


      </Routes>
      <Routes>
        <Route path="/projects" element={<MyProjects></MyProjects>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
