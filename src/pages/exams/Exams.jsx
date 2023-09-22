import React, { useState, useEffect, useRef } from 'react';
import LoadingPage from '../../utils/loadingpage/LoadingPage';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


export default function Exams(){

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
                <Footer />
              </>
            )}
          </div>
      );
    }
    