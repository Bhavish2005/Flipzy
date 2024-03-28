import React from 'react'
import './Offers.css'
import model from '../assests/model.png'

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers_child">
        <div className="offers-left">
          <h2>Exclusive</h2>
          <h2>Offers For You</h2>
          <p>On Popular Products</p>
          <button>Check Now</button>
        </div>
        <div className="offers-right">
          <img src={model} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Offers
