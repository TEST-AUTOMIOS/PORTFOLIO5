import "../styles_s/Footer.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";

function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Function to handle scrolling and show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <hr />
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h1 className="logo">Automios</h1>
            <p className="footer-text">some words goes here....</p>
          </div>
          <div className="footer-section">
            <p className="footer-title">Important Link</p>
            <ul>
              <li>
                <Link spy={true} smooth={true} duration={1000} to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" spy={true} smooth={true} duration={1000}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/service" spy={true} smooth={true} duration={1000}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" spy={true} smooth={true} duration={1000}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <p className="footer-title">Contact Us</p>
            <ul>
              <li>
                <Link spy={true} smooth={true} duration={1000} to="headerbg">
                  abc@gmail.com
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true} duration={1000}>
                  name
                </Link>
              </li>
              <li>
                <Link
                  to="about-scroll"
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  636807
                </Link>
              </li>
              {/* <li>
                <Link to="contact" spy={true} smooth={true} duration={1000}>
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="footer-section">
            <p className="footer-title">Social Media</p>
            <ul>
              <li className="social-link">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/darkleas"
                >
                  Github
                </a>
              </li>
              <li className="social-link">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/burhankocadag0"
                >
                  Twitter
                </a>
              </li>
              <li className="social-link">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Back to Top button */}
        {showScrollButton && (
          <button
            className="btn btn-primary scroll-to-top"
            onClick={scrollToTop}
          >
            <i className="fa fa-arrow-up" /> {/* FontAwesome icon */}
          </button>
        )}
      </div>
    </footer>
  );
}

export default Footer;
