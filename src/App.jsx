import React, { useState, useEffect } from 'react';
import './styles/App.css'
import LoadingPage from './pages/loadingpage/LoadingPage';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import BannerHome from './components/bannerhome/BannerHome';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule um processo de carregamento demorado
    setTimeout(() => {
      setLoading(false);
    }, 4200);
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingPage /> : (
        <>
          <Header />
          <Navbar />
          <BannerHome />
        </>
      )}
    </div>
  );
}

export default App
