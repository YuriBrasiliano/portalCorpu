import gifImage from '../../assets/images/logoGCOR.webp';
import './LoadingPage.css';
import React, { useState, useEffect } from 'react';

function LoadingPage() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className={`loading-container ${visible ? '' : 'hidden'}`}>
      <img src={gifImage} alt="Carregando..." height="40%"/>
    </div>
  );
}

export default LoadingPage;
