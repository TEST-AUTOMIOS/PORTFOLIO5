import React, { useState } from 'react';
import '../styles_s/ScrollToTop.css';

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
      <i className="fa fa-arrow-up" />
    </div>
  );
}

export default ScrollTopButton;
