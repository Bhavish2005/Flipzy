import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/BreadCrums/Breadcrum';
import Productdisplay from '../components/ProductDisplay/Productdisplay';
import RelatedProduct from '../components/RelatedProducts/RelatedProduct';

const Product = () => {
  const {all_products}=useContext(ShopContext);
  const {productId}=useParams();
  const product= all_products.find((e)=> e.id===Number(productId))
  
  return ( 
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <RelatedProduct product={product} />
    </div>
)
}
export default Product