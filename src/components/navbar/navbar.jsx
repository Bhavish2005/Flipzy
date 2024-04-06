import React, { useContext, useState } from 'react' 
import './Navbar.css'
import logo_big from '../assests/logo_big.png'
import cart_icon from '../assests/cart_icon-removebg-preview.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Navbar=()=>{
    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    return(
    <div className='navbar'>
        <div className='nav-logo'>
            <img class="logo" src={logo_big} alt="" />
            <p>Flipzy</p>
        </div>
<ul className="nav-menu">
    <li onClick={()=>{setMenu("shop")}}><Link   style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>} </li>
    <li onClick={()=>{setMenu("Men")}}><Link    style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="Men"?<hr/>:<></>} </li>
    <li onClick={()=>{setMenu("Women")}}><Link  style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="Women"?<hr/>:<></>} </li>
    <li onClick={()=>{setMenu("Kid")}}><Link    style={{textDecoration: 'none'}} to='/kids'>Kid</Link>{menu==="Kid"?<hr/>:<></>} </li>
   
</ul>
<div className="nav-login-cart">
<Link to='/login'><button>Login</button></Link>
<Link to='/cart'><img  class="cart_icon"src={cart_icon} alt="" /></Link>
    <div className="nav-cart-count">{getTotalCartItems()}</div>
</div>
    </div>
    )
    
}
export default Navbar