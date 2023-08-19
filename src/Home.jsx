import React, { useState } from 'react'
import Nav from './nav'
import "./home.css"
import {product} from "./api"
import Product from './Product'
import { useStateValue } from './Stateprovider';
const Home = () => {
  const [apiproducts,setProduct]=useState(product);
  const [{basket},dispatch]=useStateValue();
  const switchtab=(category)=>{
    console.log("hu",category)
    const newlist=product.filter((e)=>{
      return category===e.category;
    })
 setProduct(newlist)
  }


  return (
    <>
      <Nav/>
 <div className='catgorys-holder'>
  {/* <div className='li-holder'>
  <li className='category-li' onClick={()=>switchtab("gaming")}>Gaming</li>
  <li className='category-li' onClick={ ()=>switchtab("house")}>Home Products</li>
  <li className='category-li' onClick={ ()=> setProduct(product)}>ALL Products</li>
  <li className='category-li' onClick={ ()=>switchtab("Kitchen")}>Groccery</li>
  </div>  */}

 <h1 className='buy-product-heading'>Buy Products</h1>

 
<Product   id="1123123"   name={"Camera"}   description={"Very good condition"}  img={"./images/camera.jpeg"}    price= {455} />
<Product   id="1133123"      name={"Headphones"}   description={"Very good condition"}    img={"./images/CD.jpg" }  price= {485} />
<Product   id="1234212"   name={"Headphones"}   description={"Very good condition"}   img={"./images/Razor.jpg" }  price= {435} />
<Product   id="1136623"  name={"washingmachine"}   description={"Very good condition"}   img={"./images/washingmachine1.jpg"}  price= {225} />
<Product   id="1155123"  name={"washingmachine"}   description={"Very good condition"}  img={"./images/washingmashine2.webp" } price= {115} />
<Product   id="1133763"  name={"utensils"}   description={"Very good condition"}    img={"./images/Kitchen.jpg"}   price= {499} />
</div>
    </>
  )
}

export default Home
