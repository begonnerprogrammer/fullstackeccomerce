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
          <h1>About Me</h1>
          <h1> <span className='heading-span'> Developer</span> <span className='name'>& Desighner</span> </h1>
          <p>Hello! My name is <strong className='heading-span'>usman</strong>  and i am a student of university of education.
            My program is Bsit.I have made nice projects to get more knowledge about <strong className='heading-span'> MERN STACK </strong>
            and to grab internship or a job.
          </p>
         <Link to="/contact" ><button className='Contact-btn'>Contact</button></Link>
        </div>
      </div>
      <hr />
     <div className="projects">
      <h1>Projects</h1>
      <Link to={'#'}><li className='li-1'> Full Stack Portfolio Website .</li></Link>
        
        {/* <li className='li-2'>Ecommerce App.</li> */}
       <Link to={"#"}> <li className='li-3'>Restaurent Website.</li></Link>
       <Link to={"#"}> <li className='li-1'>MusicPlayerApp.</li></Link>
      <Link to={'#'}><li className='li-2'>Weather Api Project.</li></Link>  
        {/* <h1 className='link-h1'>Links</h1>
       <Link className='link'> <li>Portfolio.</li></Link>
       <Link className='link'> <li>Ecommerce.</li></Link> 
       <Link className='link'> <li>Netflix.</li></Link> 
       <Link className='link'> <li>Musicplayer.</li></Link> 
       <Link className='link'> <li>WeatherApp.</li></Link>   */}
        {/* <li>Ecommerce</li>
        <li>NetflixClone</li>
        <li>Music Player</li>
        <li>WeatherApp</li> */}
     </div>
   
      </div>

      <hr />
      <div className="skills">
      <h1 className='Skills-h1'>MY Skills</h1>
        
        <h1>HTML</h1>
        <div className='skill-container'>
        
        <div className="skill1 skill">
          <strong>
          </strong>
        </div>
        </div>
        <h1>CSS</h1>
        <div className="skill-container">
        
        <div className="skill2 skill">
        <strong></strong>
        </div>
        </div>
        <h1>JS</h1>
       <div className="skill-container">
       
        <div className="skill3 skill">
        <strong></strong>
        </div>
       </div>
       <h1>React</h1>
      <div className="skill-container">
    
        <div className="skill4 skill">
        <strong></strong>
        </div>
      </div>
        
      <h1>Jquery</h1>
      <div className="skill-container">
    
        <div className="skill5 skill">
        <strong></strong>
        </div>
      </div>


      <h1>Bootstrap</h1>
      <div className="skill-container">
    
        <div className="skill6 skill">
        <strong></strong>
        </div>
      </div>

      
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
