import "../styles_s/Work.css";

function Work() {
  return (
    <div className="container-fluid work">
      <div className="col-lg-12 col-md-12">
        
          <h3 className="head-work">What We Do</h3>
          <br />
          <p className="feature">Featured Content</p> <br />
          {/* cards */}
          <div className="row row-cols-1 row-cols-md-3 g-5 work-cards">
            <div className="col work-card">
              <div className="card h-100">
                <img
                  src="https://wallpapercave.com/wp/AFPSg2j.jpg"
                  className="card-img-top work-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <a href="/work" className="work-read-more">read more..</a>
                </div>
                
                {/* <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div> */}
              </div>
            </div>
            <div className="col work-card">
              <div className="card h-100">
                <img
                  src="https://wallpapercave.com/wp/iTBpoXA.jpg"
                  className="card-img-top work-img"
                  alt="..."
                />
                <div className="card-body work-card">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/work" className="work-read-more">read more..</a>
                </div>
                {/* <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div> */}
              </div>
            </div>
            <div className="col work-card">
              <div className="card h-100">
                <img
                  src="https://wallpapercave.com/wp/76xAu3H.jpg"
                  className="card-img-top work-img"
                  alt="..."
                />
                <div className="card-body work-card">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/work" className="work-read-more">read more..</a>
                </div>
                {/* <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Work;
