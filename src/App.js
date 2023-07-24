import React, { useEffect } from 'react'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Login from './login'
import Cart from './cart'
import { auth } from './firebase'
import { useStateValue } from './Stateprovider';
const App = () => {
  const [{user},dispatch]=useStateValue();
useEffect(()=>{
 const unsubscribe=auth.onAuthStateChanged((authuser)=>{
    if(authuser){
//user is logged in
dispatch({
  type:"SET_USER",
  user:authuser
})
    }
    else{
//user os logged out
dispatch({
  type:"SET_USER",
  user:null,
})
    }
  });
console.log("user id",user)
return ()=>{
  //Any clean operations go in here
  unsubscribe();
}

},[])



  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
