import React from 'react'
import Nav from './nav'
import "./cart.css"
import Checkout from "./Checkout"
import { useStateValue } from './Stateprovider';
import Subtotal from './Subtotal';
const Cart = () => {
  const [{basket}]=useStateValue();
  return (
    <>
    <Nav/>
      <img src="./images/checkout.webp" alt="" className='checkout-img'/>
      {
        basket?.length===0 ? (
          <div><h1>Your Cart is empty</h1>
          <p>No items in the cart buy some first!</p></div>
        )
        :
        (
          <div>
            <h1>Your basket</h1>
          {
           basket.map((item)=>{

       return (
            <Checkout
            id={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            description={item.description}/>
           )
       })
          }
          
          </div>
        )
      }
      {
        basket?.length>0 && (
          <div>
            <Subtotal/>
          </div>
        )
      }
    </>
  )
}

export default Cart
