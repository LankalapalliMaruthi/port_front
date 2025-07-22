import React from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom'
import {Animate} from "react-simple-animate";
import Profile from '../profiles/profiles';
const Home= ()=> {
  const navigate=useNavigate();
  console.log(navigate);
  const handleNavigateToContact=()=>{
    navigate('/contact');
  }
  return (
    <div>
      <section id="home" className='home'>
        <div className='home-text-wrapper'>
          <h1>Hello,I'm Maruthi
            <br></br>
           Java Full Stack Developer
          </h1>
        </div>
        <Animate play duration={1.5} delay={1}
        start={{transform:'translateY(550px)'}} end={{transform:'translateY(0px)'}}>
        <div className='home-contact'>
          <button onClick={handleNavigateToContact}>Hire me</button>
        </div>
        <div className='profile'>
      <Profile/>
      </div> 
        </Animate>
        
      </section>
      
    </div>
  )
}

export default Home;
