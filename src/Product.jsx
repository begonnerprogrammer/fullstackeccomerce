import React from 'react'
import "./home.css"
import { useStateValue } from './Stateprovider';
const Product = ({id,img,description,name,price}) => {
  
  const [{},dispatch]=useStateValue();
  const addtocart=()=>{
     dispatch({
      type:"ADD_TO_CART",
      item:{
        id:id,
        name:name,
        description:description,
        price:price,
        img:img
      }
     })
  }
  return (
    <>
    {/* {
        productdata.map((e)=>(
            <div className='product'>
            <div><img src={e.img} className='product-img' alt="" /></div>
           <div className='product-info'>
            <h5>{e.name}</h5>
            <h2>Price is ${e.price}</h2>
            <p>{e.description}</p> 
            <button className="cart-btn" onClick={addtocart}>Add to cart</button>
            </div>
            
            </div>
        ))
    }
     */}
<div className='product'>
            <div><img src={img} className='product-img' alt="" /></div>
           <div className='product-info'>
            <h5>{name}</h5>
            <h2>Price is ${price}</h2>
            <p>{description}</p> 
            <button className="cart-btn" onClick={addtocart}>Add to cart</button>
            </div>
            
            </div>
     
    </>
  )
}

export default Product
