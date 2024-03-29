import React from 'react'
import './Footer.css'
import Logo_Big from '../assests/logo_big.png'
import Insta_icon from '../assests/insta_icon.png'
import Whatsapp_icon from '../assests/whatsapp_icon.png'
import Twitter_icon from '../assests/twitter_icon.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={Logo_Big} alt=""/>
            <p>Flipzy</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={Insta_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Twitter_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={Whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer