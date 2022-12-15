import React from 'react'
import img1 from '../images/img1.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='abt-heading'>
            <h1>About Our Candles</h1>            
        </div>        
          <div className='abtrow'> 
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </p>            
            <img src={img1} alt=''></img>            
          </div>           
    </div>
  )
}

export default About