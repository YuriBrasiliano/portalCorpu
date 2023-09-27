import React from 'react';
import Header from '../../components/header/Header';
import CarouselHome from '../../components/home/bannerhome/CarouselHome';
import Footer from '../../components/footer/Footer';
import Testimonials from '../../components/home/testimonials/Testimonials';
import AnimatedPage from '../../utils/Animations/AnimatedPage';


export default function Home(){
    return (
      <AnimatedPage>
      <div className="App">
                <Header />
                <CarouselHome />
                <Testimonials />
                <Footer />
          </div>
          </AnimatedPage>
      );
    }
    