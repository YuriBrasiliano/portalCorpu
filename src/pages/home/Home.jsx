import React, { useState, useEffect, useRef } from 'react';
import LoadingPage from '../../utils/loadingpage/LoadingPage';
import Header from '../../components/header/Header';
import CarouselHome from '../../components/home/bannerhome/CarouselHome';
import Footer from '../../components/footer/Footer';
import Testimonials from '../../components/home/testimonials/Testimonials';


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
                <CarouselHome />
                <Testimonials />
                <Footer />
              </>
            )}
          </div>
      );
    }
    