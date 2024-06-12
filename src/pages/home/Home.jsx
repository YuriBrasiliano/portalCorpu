import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import AdGcor from '../../components/home/adGcor/AdGcor';
import HomeInfo from '../../components/home/homeInfo/HomeInfo';
import Location from '../../components/home/location/Location';

export default function Home(){
    return (
      <div className="App">
                <Header />
                <AdGcor />
                <HomeInfo />
                <Location />
                <Footer />
          </div>

      );
    }
    