import React from 'react';

import "./nav.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';

import { auth } from './firebase';

const Nav = () => {
    const [{basket,user}]=useStateValue();
    const login=()=>{
        if(user){
   auth.signOut();
        }
    }







   
  
  return <>
      <nav class="navbar">
 
   <Link to={"/"}><div class="brand-title"> <span className='nav-heading'> USMAN--STORE</span></div></Link> 

    {/* <a href="#" class="toggle-btn">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </a> */}



    <div class="navbar-links">
    <ul> 
            <Link to={"/"}><li className='home-li'><a href="#">Home</a></li> </Link> 
           <Link to={"/about"}><li><a href="#">About</a></li> </Link> 
           <Link to={"/contact"}><li><a href="#">Contact</a></li> </Link>
            <div className='hello-user'>
           <small className='hello'>Hello</small>
           <Link to={!user && "/login"} onClick={login}><li><a className='user' href="#"> {user?._delegate.email} {user? "sign out":"sign in"}</a></li> </Link>
           </div>
           <Link to={"/cart"}><li><a href="#"> <span>{basket?.length}</span>   Cart</a></li> </Link> 
        </ul>

    </div>
   </nav>
    </>














  
}

export default Nav


