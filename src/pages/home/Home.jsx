import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import AdGcor from '../../components/home/adGcor/AdGcor';


export default function Home(){
    return (
      <div className="App">
                <Header />
                <AdGcor />
                <Footer />
          </div>

      );
    }
    