import React, { useState } from "react";
import "../styles_s/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <a href="./home" className="navbar-brand">
            <img
              src="https://img.logoipsum.com/296.svg"
              className="nav-img"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <ul className={clicked ? "navbar-list active" : "navbar-list"}>
            <li>
              <a className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="active" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="active" href="/work">
                Our Work
              </a>
            </li>
            <li>
              <a className="active" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile">
          <i
            id="bar"
            className={clicked ? "fa fa-times" : "fa fa-bars"}
            onClick={() => setClicked(!clicked)}
          ></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
