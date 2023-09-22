import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Doctors from './pages/doctors/Doctors';
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Exams from "./pages/exams/Exams"
import Insurance from "./pages/insurance/Insurance"
import Specialties from "./pages/insurance/Insurance"
import React from 'react';
import "./styles/global.scss"


function App() {

    return (
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/doctors" element={<Doctors/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/exams" element={<Exams/>} />
    <Route path="/insurance" element={<Insurance/>} />
    <Route path="/specialties" element={<Specialties/>} />
  </Routes>
    </BrowserRouter>
  );
  }


export default App
