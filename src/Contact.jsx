import React, { useState } from 'react'
import Nav from './nav'
import "./contact.css"
const Contact = () => {
  const[data,setData]=useState({name:"",email:"",phone:"",massage:""});
  const handlechange=(e)=>{
const name=e.target.name;
const value=e.target.value;
setData({...data,[name]:value})
  }

  const handleSubmit=(e)=>{
e.preventDefault();
alert(data)
  }
  return (
    <>
      <Nav/>
      <form method='post' onSubmit={handleSubmit}>
        <h1>Contact <span>Here</span></h1>
        <input type="text" name='name' id='' onChange={handlechange} value={data.name} placeholder='Enter Name' />
        <input type="email" name="email" id=""    onChange={handlechange} value={data.email} placeholder='xyz@gmail.com' />
        <input type="phone"  name='phone' id=''   onChange={handlechange}  value={data.phone} placeholder='+91'/>
        <textarea name="massage" id="" cols="30"  rows="10"  onChange={handlechange}  value={data.massage} placeholder='type_here'/>
        <button type='submit'>send</button>
        <p>`<span>name:</span>:{data.name}     <span>email:</span>{data.email}      <span>phone:</span>{data.phone}     <span>massage:</span>{data.massage}`</p>
      </form>

    </>
  )
}

export default Contact
