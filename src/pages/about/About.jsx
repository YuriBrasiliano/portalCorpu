import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import AnimatedPage from '../../utils/Animations/AnimatedPage';


export default function About(){


    return (
        <AnimatedPage>
            <div className="App">    
                <Header />
                <Footer />
          </div>
          </AnimatedPage>
      );
    }
    