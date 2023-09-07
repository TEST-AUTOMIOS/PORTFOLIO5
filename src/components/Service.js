import "../styles_s/Service.css";

function Service() {
  return (
    <div className="container-fluid service">
      <div className="col-lg-12 col-md-12">
        <div className="row">
          <div className="flex-row">
            <div className="our-service">
              <h2>Our Service</h2>
              &nbsp;
              <p className="solve">
                We Solve Creative Delusions <br /> Efficiently
              </p>
              &nbsp;
              <p>
                The display employs new techniques and technology to precisely
                follow the curves of the design, <br />
                all the way to the elegantly rounded corners.
              </p>
              <br />
              <a href="/contact">
                <button type="button" className="home-button">
                  Get Started
                </button>
              </a>
              <br/>
              <div className="infos">
                <div className="info1">
                    <h3>95</h3>
                    <p>Projects Completed</p>
                </div>
                <div className="info1">
                    <h3>2310</h3>
                    <p>Happy Clients</p>
                </div>
                <div className="info1">
                    <h3>215</h3>
                    <p>Hours Spent</p>
                </div>
                <div className="info1">
                    <h3>479</h3>
                    <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
