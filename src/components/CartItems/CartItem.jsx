import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assests/cart_cross_icon.png";
const CartItem = () => {
  const { getTotalCartAmount , all_products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart-item">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cart-item-format cartitem-format-main">
                <img src={e.image} alt="" className="carticon-product" />
                <p>{e.name}</p>
                <p className="price">${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cart-item-remove"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1> CART TOTAL</h1>

          <div className="cartitem-total-items">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div>
            <hr />
            <div className="cartitem-total-items">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-items">
              <h3>Total</h3>
              <div className="total"><h3>${getTotalCartAmount()}</h3></div>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartitem-promocode">
          <p>Have a Promo Code ? Enter it Here</p>
          <div className="promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
