import React, { useState } from 'react'
import Nav from './nav'
import { Link } from 'react-router-dom'
import "./login.css"
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  const history=useNavigate();
  const login=(event)=>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
history("/")
    })
    .catch((e)=>alert(e))
  }
  const register=(event)=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      history("/")
    })
    .catch((e)=>alert(e))
  }
  return (
    <>
    <Nav/>
    <div className="login">
      <Link to={"/"}>
      <h1>SHOP</h1>
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} type='email' onChange={(event)=>setEmail(event.target.value)} />
          <h5>Password</h5>
          <input value={password} type='password' onChange={(event)=>setpassword(event.target.value)}/>
          <button onClick={login}>Sign in</button>
        </form>
        <button onClick={register}>Create Your Amazon Acount</button>
      </div>
    </div>
    </>
  )
}

export default Login
