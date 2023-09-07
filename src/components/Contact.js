import '../styles_s/Contact.css';



function Contact(){
    return(
    <div className='container-fluid contact'>
        <div className='col-lg-12 col-sm-12'>
            <div className='row'>
                <p className='contact-para'>Promotional Contact</p> <br/>
                <h2 className='contact-head'>Ready to Work Together?</h2> 
                <br/>
                &nbsp;
                <a href="/contact_form">
                <button type="button" className="home-button">
                  Contact Us
                </button>
              </a>
                
            </div>
            
        </div>
        
    </div>
    )
}

export default Contact;