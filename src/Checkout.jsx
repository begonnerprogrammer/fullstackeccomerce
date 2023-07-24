import React from 'react'
import { useStateValue } from './Stateprovider';
const Checkout = ({id,name,description,img,price}) => {
    const [{basket},dispatch]=useStateValue();
    const removefromcart=()=>{
     dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id,
       
     })
    }
  return (
    <div>
      <div className='product'>
            <div><img src={img} className='product-img' alt="" /></div>
           <div className='product-info'>
            <h5>{name}</h5>
            <h2>Price is ${price}</h2>
            <p>{description}</p> 
            <button className="cart-btn" onClick={removefromcart}>Remove from cart</button>
            </div>
            
            </div>
    </div>
  )
}

export default Checkout
