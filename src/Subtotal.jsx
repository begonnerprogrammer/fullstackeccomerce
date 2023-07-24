import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './Stateprovider';
import {getbaskettotal} from "./Reducer";
import "./subtotal.css"
const Subtotal = () => {
  const [{basket}]=useStateValue();
  return (
    <div id='subtotal'>
      <CurrencyFormat 
renderText={(value)=>(
  <>
  <p>Subtotal({basket.length}: <strong>{`${value}`}</strong>)</p>
  {/* <small>
  <input type="checkbox" /> this order contains a gift
  </small> */}

  </>
)}






      decimalScale={2}
      value={getbaskettotal(basket)}
      displayType='text'
      thousandSeparator={true}
      prefix='$'/>
      {/* <button>Proceed to Checkout</button> */}
    </div>
  )
}

export default Subtotal
