import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Doctors from './pages/doctors/Doctors';
import LoadingPage from './utils/loadingpage/LoadingPage';
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Exams from "./pages/exams/Exams"
import Insurance from "./pages/insurance/Insurance"
import Specialties from "./pages/specialties/Specialties"
import React, { useState, useEffect, useRef } from 'react';
import "./styles/global.scss"
import { AnimatePresence} from 'framer-motion';


function App() {
  const [loading, setLoading] = useState(true);
  const loadingPageRef = useRef();

  useEffect(() => {
    // Simule um processo de carregamento demorado
    setTimeout(() => {
      setLoading(false);
    }, 4800);
  }, []);  

  const location = useLocation()

    return (
      <div className="App">
      {loading ? (
        <LoadingPage ref={loadingPageRef} />
      ) : (
       
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/exams" element={<Exams/>} />
          <Route path="/insurance" element={<Insurance/>} />
          <Route path="/specialties" element={<Specialties/>} />
        </Routes>
      </AnimatePresence>
      
            )}
          </div>

  );
  }


export default App
