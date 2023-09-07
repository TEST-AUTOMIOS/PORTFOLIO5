import './Our_service.css';

function Service(){
    return(
        <div classNameName="service">
        <div classNameName="service-img">
          <img src="" alt="" />
        </div>
        <div classNameName="service-content">
          <p style={{ fontSize: "60px" }}>Our Services</p>
          <div classNameName="service-text">
            <h2>
              We Solve Creative Delusions <br /> Efficiently
            </h2>
            <p>
              The display employs new techniques and technology to <br />{" "}
              precisely follow the curves of the design, all the way to the{" "}
              <br />
              elegantly rounded corners.
            </p>
            &nbsp; &nbsp;
            <button classNameName="custom-btn btn-12">
              <span>Click!</span>
              <span>Get Started</span>
            </button>
          </div>
        </div>
        <div id="info">
            <div id="infoo">
              <h2>5</h2>
              <p>
                <b>Projects completed</b>
              </p>
            </div>
            <div id="infoo">
              <h2>2310</h2>
              <p>
                <b>Happy Clients</b>
              </p>
            </div>

            <div id="infoo">
              <h2>215</h2>
              <p>
                <b>Hours Spent</b>
              </p>
            </div>
            <div id="infoo">
              <h2>479</h2>
              <p>
                <b>Members</b>
              </p>
            </div>
          </div>
          &nbsp;
      </div>
    )
}

export default Service;