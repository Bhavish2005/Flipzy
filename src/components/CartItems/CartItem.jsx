import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../assests/cart_cross_icon.png'
const CartItem = () => {
  const{all_products,cartItems,removeFromCart}=useContext(ShopContext)
  
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
     {all_products.map((e)=>{
        if(cartItems[e.id]>0)
      { 
        return <div>
        <div className="cart-item-format cartitem-format-main">
        <img src={e.image} alt="" className='carticon-product'/>
          <p>{e.name}</p>
          <p>{e.new_price}</p>
          <button className="cartitems-quantity">{cartItems[e.id]}</button>
          <p>{e.new_price*cartItems[e.id]}</p>
          <img  className='cart-item-remove' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
      </div>
       }
      })}

    </div>
  )
}

export default CartItem