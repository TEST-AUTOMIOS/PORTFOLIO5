import '../styles_s/Contact.css';
import "../styles_s/contactForm.css";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "../Models/Avatar";
import { OrbitControls } from "@react-three/drei";
import { useState } from 'react';



function Contact(){

 
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission, e.g., send data to a server
      console.log(formData);
    };


    return(
    <div className='container-fluid contact'>
        <div className='col-lg-12 col-sm-12'>
            <div className='row'>
                <p className='contact-para'>Promotional Contact</p> <br/>
                <h2 className='contact-head'>Ready to Work Together?</h2> 
                <br/>
                &nbsp;
                {/* <a href="/contact_form">
                <button type="button" className="home-button">
                  Explore
                </button>
              </a> */}
               <div className="make-it-container">
    <div className="make-it1">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="row mb-3">
          <div className="input-container">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control text-area"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary send-message">
          Send Message
        </button>
      </form>
    </div>

    <div className="make-it2">
      <Canvas camera={{ position: [3, 3, 3], fov: 30 }}>
        <ambientLight intensity={10} />
        <OrbitControls />
        <Avatar />
      </Canvas>
    </div>
  </div>
                
            </div>
            
        </div>
        
    </div>
    )
}


export default Contact;