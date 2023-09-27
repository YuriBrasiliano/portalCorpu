import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SpecialtiesBanner from '../../components/specialties/banner/SpecialtiesBanner';
import SpecialtiesGcor from '../../components/specialties/specialties/SpecialtiesGcor';
import AnimatedPage from '../../utils/Animations/AnimatedPage';


export default function Specialties(){


    return (
      <AnimatedPage>
      <div className="App">
                <Header />
                <SpecialtiesBanner />
                <SpecialtiesGcor />
                <Footer />
          </div>
          </AnimatedPage>
      );
    }
    