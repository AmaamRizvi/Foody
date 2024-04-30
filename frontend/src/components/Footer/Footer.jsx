import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Indulge in flavors that delight. Order now with Tomato. and savor
            every bite.
          </p>
        </div>
        <div className="footer-content-centre">
          <h2>COMPANY</h2>
          <ul>
            <a href="#home">Home</a>
            <li>Contact Us</li>
            <a href="#app-download">Mobile App</a>
            <br />
            <a href="#explore-menu">About Us</a>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+91 - 221-221-2212</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>

        <div className="footer-social-tags">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <a href="https://github.com/AmaamRizvi">Design By Amaam Rizvi</a>
        <p>Copyright 2024 © Tomato.com - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer