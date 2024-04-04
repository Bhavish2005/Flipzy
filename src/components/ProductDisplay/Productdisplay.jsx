import React, { useContext } from "react";
import "./Productdisplay.css";
import star_icon from "../assests/star_icon.png";
import dullstar_icon from "../assests/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";
const Productdisplay = (props) => {
  const { product } = props;
  const {addToCart}=useContext(ShopContext)

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={dullstar_icon} alt="" />
          <p>(55)</p>
          </div>
          <div className="productdisplay-prices">
            <div className="productdisplay-right-price-old">
              ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ${product.new_price}
            </div>
         </div>
        
        <div className="productdisplay-description">
          A Smart Fit, Gives feel of fabric filled with Richness 
          , Feels Comfortable like Pure Cotton
        </div>
        <div className="selectsize">
          <h1>Select Size</h1>
        </div>
        <div className="productdisplay-size">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        <p className="productdisplay-category">
          <span>Category : </span>
          {product.category}
        </p>
        <p className="productdisplay-category">
          <span>Tags:</span> Mordern, Latest
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
