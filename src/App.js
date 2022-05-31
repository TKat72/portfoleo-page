
import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import MyProjects from './components/MyProjects/MyProjects'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />


      </Routes>
      <Routes>
        <Route path="/about-me" element={<AboutMe></AboutMe>} />


      </Routes>
      <Routes>
        <Route path="/projects" element={<MyProjects></MyProjects>} />


      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
