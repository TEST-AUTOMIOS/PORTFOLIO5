import React, { useState } from 'react';
import '../styles_s/ScrollToTop.css';
import Uparrow from '../images/up-arrow.png'

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`sticky-back-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
     <img src={Uparrow} alt='logo' style={{width:15,height:15}}/>
    </div>
  );
}

export default ScrollTopButton;
