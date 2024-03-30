import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
  <div className="newsletter">
    <h1>To Avail the Offers on our Best Sellers</h1>
    <p>Subscribe to our Newsletter and Stay Updated</p>
    <div>
        <input type="email" placeholder='Your Email ID' />
        <button>Subscribe</button>
    </div>
  </div>
  )
}

export default NewsLetter