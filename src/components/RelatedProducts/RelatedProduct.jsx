import React, { useContext } from 'react'
import './RelatedProduct.css'
import { ShopContext } from '../../context/ShopContext'
import Item from '../Item/Item'
 
const RelatedProduct = (props) => {
   const {all_products}=useContext(ShopContext)
   const {product}=props;
    return (
    <div className="relatedproduct">
<h1>Related Products</h1>
<hr />   
<div className="relatedproducts-item">
{ all_products.map((item,i)=>{
      if(product.category===item.category){
        return <Item key={i}
        id={item.id}
        name={item.name}
        image={item.image}
        new_price={item.new_price}
        old_price={item.old_price}/>
      }
      else{
        return null;
      }
      })}
</div>
    </div>
  )
}
export default RelatedProduct