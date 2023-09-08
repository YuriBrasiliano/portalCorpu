import React, { useState, useEffect, useRef } from 'react';
import LoadingPage from '../../pages/loadingpage/LoadingPage';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarouselHome from '../../components/bannerhome/CarouselHome';
import Footer from '../../components/footer/Footer';


export default function Home(){

    const [loading, setLoading] = useState(true);
    const loadingPageRef = useRef();

    useEffect(() => {
      // Simule um processo de carregamento demorado
      setTimeout(() => {
        setLoading(false);
      }, 4800);
    }, []);


    return (
          <div className="App">
            {loading ? (
              <LoadingPage ref={loadingPageRef} />
            ) : (
              <>
                <Header />
                <Navbar />
                <CarouselHome />
                <Footer />
              </>
            )}
          </div>
      );
    }
    