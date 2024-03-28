import React from 'react'
import './Hero.css'
import hand_icon from '../assests/hand_icon.png'
import hero from '../assests/hero.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collection</p>
                <p>for everyone</p>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    { /* <img src={} alt="" /> */}</div>
            </div>
            <div className="hero-right">
                <img class="model" src={hero} alt="" />
            </div>
        </div>
    )
}

export default Hero