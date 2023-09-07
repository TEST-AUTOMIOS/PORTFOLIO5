import React from "react";
import "../styles_s/Home.css";

function Home() {
  return (
    <div className="container-fluid home">
      <div className="col-lg-12 col-md-12">
        <div className="row">
          <h1 className="home-text">
            We <span className="home-span"> Build</span> Digital <br />
            Experience
          </h1>
          <br />
          &nbsp;
          <p className="home-para">
            We collaborate with <strong>smart</strong> and{" "}
            <strong>creative</strong> people to <br /> build awesome{" "}
            <strong>WordPress</strong> Full Site Editing Themes.
          </p>
          &nbsp;
          <br/>
          <a href="/about"><button type="button" className="home-button">Get Started</button></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
