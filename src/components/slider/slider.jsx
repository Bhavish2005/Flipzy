import React, { useEffect, useState } from "react";
import arrowright_icon from "../assests/arrow_right.png";
import arrowleft_icon from "../assests/arrow_left.png";
import all_products from "../assests/all_products";
import './slider.css'
const Slider = () => {
  const [image, setImage] = useState();
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter > all_products.length - 1) {
      setCounter(0);
    } else if (counter < 0) {
      setCounter(all_products.length - 1);
    } else {
      setImage(all_products[counter].image);
    }
  }, [counter]);
  return (
    <div className="slider">
      <div className="left">
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          <img className="arrow"src={arrowleft_icon} alt="" />
        </button>
      </div>
      <div>
        <img className="sliding_image" src={image} alt="" />
        </div>
      <div className="right">
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          
          <img  className="arrow"src={arrowright_icon} alt="" />
        </button>
        
      </div>
    </div>
  );
};

export default Slider;
