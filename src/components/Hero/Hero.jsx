import React from 'react'
import './Hero.css'
import hand_icon from '../assests/hand_icon.png'
import Slider from '../slider/slider'




const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>Flip your Fashion Style with</h2>
                <div className="hero-hand-icon">
                    <p> Flipzy</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Your One-Stop </p>
                <p>Style Destination</p>   
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    { /* <img src={} alt="" /> */}</div>
            </div>
            <div className="hero-right" >
                <Slider/>
                {/* <img class="model" src={hero} alt="" /> */}
            </div>
        </div>
    )
}

export default Hero