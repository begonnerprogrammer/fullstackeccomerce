import React from 'react'
import Nav from './nav'
import "./about.css"
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <Nav/>
      <div className="main">
      <div className='container'>
        <div className='left-section'>
          <img src="./images/aboutus.webp" alt=""  className='my-img'/>
        </div>
        <div className='right-section'>
          <h1 className='about-text'>About Me</h1>
          <h1> <span className='heading-span'> Developer&</span><span className='name'> Desighner</span></h1>
          <p>Hello! My name is <strong className='heading-span'>usman</strong>  and i am a student of university of education.
            My program is Bsit.I have made nice projects to get more knowledge about <strong className='heading-span'> MERN STACK </strong>
            and to grab internship or a job.
          </p>
         <Link to="/contact" ><button className='Contact-btn'>Contact</button></Link>
        </div>
      </div>
      <hr />
     <div className="projects">
      <h1>My Projects</h1>
      <Link to={'https://github.com/begonnerprogrammer/mernportfonlio'}><li className='li-1'> Full Stack Portfolio Website .</li></Link>
      <Link to={'https://github.com/begonnerprogrammer/weatherapp'}><li className='li-2'>Weather App using React.</li></Link>
        <Link to={"https://github.com/begonnerprogrammer/musicplayer"}> <li className='li-1'>MusicPlayerApp.</li></Link>
       <Link to={"https://github.com/begonnerprogrammer/tictactoe"}> <li className='li-3'>Tic Tac Toe.</li></Link>
       
  
       
     </div>
   
      </div>

      <hr />
      <div className="skills">
      <h1 className='Skills-h1'>MY Skills</h1>
        
        <h1>HTML</h1>
   
        <h1>CSS</h1>

        <h1>JS</h1>
  
       <h1>React</h1>
       <h1>Bootstrap</h1>
        
      <h1>Nodejs</h1>
   


      <h1>MongoDB</h1>
     


   
  

      
        {/* <li>HTML. ---  <strong>60%</strong></li>
        <li>CSS. ---  <strong>60%</strong></li>
        <li>JS(Javsscript). ---  <strong>60%</strong> </li>
        <li>ReactJS. ---  <strong>60%</strong> </li>
        <li>Jquery. ---   <strong>50%</strong> </li>
        <li>Bootstrap. ---  <strong>50%</strong> </li> */}
      </div>
      
    </>
  )
}

export default About
