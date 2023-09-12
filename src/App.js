import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        {/* Canvas as background */}
        {/* <canvas
          id="background-canvas"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1, // Behind other content
            width: "100%",
            height: "100%",
          }}
        ></canvas> */}
        
        <Navbar />
        <Home />
        <Service />
        <Work />
        <Contact />
        <ContactForm />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
