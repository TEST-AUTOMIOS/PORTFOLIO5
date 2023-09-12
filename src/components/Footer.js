import '../styles_s/Footer.css';
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png"




function Footer(){
    return(
        <footer className="footer">
        <div className="copyright">
          &copy; 2023 automios
        </div>
        <div className="social-icons">
         <img src={facebook} alt='facebook' className='img1'/>
         <img src={linkedin} alt='facebook' className='img1'/>
         <img src={twitter} alt='facebook' className='img1'/>
        </div>
      </footer>
    )
}

export default Footer;