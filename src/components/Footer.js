import "./FooterStyles.css";
import {Link} from "react-router-dom";
import React from 'react';
import { FaPhone , FaMailBulk, FaLocationArrow, FaYoutube, FaFacebook, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-footer">
          <div className="location">
            <h3>Contact</h3>
            <h4>
              <FaLocationArrow size={20} style={{color:"#fff", marginRight: "2rem" }}/>
              <p>VMax Head Office. No 9/14, Bharathi Street Vellakinar, Coimbatore, Tamil Nadu, 641029</p>
            </h4>    
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }}/>
              +91 8148136573
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }}/>
              care@fitmomclub.co
            </h4>
          </div>
        </div>
        <div className="mid-footer">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/"><h4>Home</h4></Link></li>
            <li><Link to="/Courses"><h4>Projects</h4></Link></li>
            <li><Link to="/About"><h4>About</h4></Link></li>
            <li><Link to="/Join"><h4>Contact</h4></Link></li>
          </ul>
        </div>
        <div className="right-footer">
            <h3 className="followus">Follow Us</h3>
            <div className="social">
                <a href="https://github.com/Sameeksha-12">
                    <FaInstagram size={40} style={{color:"#fff", marginRight: "1rem" }}/>
                </a>
                <a href="https://twitter.com/sameekshar5875">
                    <FaFacebook size={40} style={{color:"#fff", marginRight: "1rem" }}/>
                </a>
                <a href="https://www.linkedin.com/in/sameeksha-reddy-7b5a79273/">
                    <FaYoutube size={40} style={{color:"#fff", marginRight: "1rem" }}/>
                </a>
            </div>
            <div className="copyright">
              <h4>© The FitMom Club. All Rights Reserved.</h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
