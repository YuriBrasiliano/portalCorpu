import React from 'react';
import Header from '../../components/header/Header';
import CarouselBannerComponent from '../../components/home/bannerhome/CarouselBannerComponent';
import Footer from '../../components/footer/Footer';
import Testimonials from '../../components/home/testimonials/Testimonials';
import AdGcor from '../../components/home/adGcor/AdGcor';
import CarouselAdComponent from '../../components/home/carouselhome/CarouselAdComponent';


export default function Home(){
    return (
      <div className="App">
                <Header />
                <CarouselBannerComponent />
                <AdGcor />
                <Testimonials />
                <CarouselAdComponent />
                <Footer />
          </div>

      );
    }
    