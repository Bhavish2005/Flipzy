import React from 'react'
import './NewCollection.css'
import Item from '../Item/Item'
import new_collection from '../assests/new_collection'
const NewCollection = () => {
  return (
   
    
     <div className="new-collection">
     <h1>NEW ARRIVAL</h1>
    <hr />
     
     <div className="new-collection_child">
       <div className="new_collection-items">
       {
          new_collection.map((item,i)=>
           {
               return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
           })
           
       }
     </div></div>
     
   </div>
   
  )

}

export default NewCollection