import me from './me.png'
import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import MyProjects from './components/MyProjects/MyProjects'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <NavBar></NavBar>
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
