import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import React, { useEffect } from 'react';
import { useState } from 'react';


function App() {
  const [user, setUser ] = useState({});


  


    return (
      <BrowserRouter>
      <Routes>
    <Route path="/" element={<Home user={user}/>} />
  </Routes>
    </BrowserRouter>
  );
  }


export default App
