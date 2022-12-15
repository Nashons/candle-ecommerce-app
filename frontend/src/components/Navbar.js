import React from 'react'
import { useState, navigate } from 'react'
import { BsCartFill } from 'react-icons/bs'
import {FaWeightHanging} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {Badge} from '@mui/material';
import {useSelector} from 'react-redux';
//import Cart from './Cart';
//import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from react-icons


const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const { quantity,cartItems } = useSelector((store) => store.cart);
 
  const addToCart = () => {
    navigate(`#addtocart`)
  }
  return (
    <nav className="navigation">

      <a href="/" className="brand-name">
        Candles
      </a>
      <button 
      className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
        {/* icon from heroicons.com */}
        <svg
        
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
         className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#collection">Our Collection</a>
          </li>
          {/* <li>
            <a href="/reviews">Reviews</a>
          </li> */}
        </ul>
      </div>
      <div className='cart-icon'>

      <Link to='/cartPage' className='specific'><Badge  badgeContent={cartItems.length} color='primary' ><FaWeightHanging /></Badge></Link>
   
      </div>
    </nav>
  )
}

export default Navbar







































// import React from 'react'
// import '../index.css';
// //import { Link } from 'react-router-dom'


// const Navbar = () => {
//   return (
//     <div className='nav'>
//         <div className='title'>
//             Candles
//         </div>
//         <div className='links'>
//             <a className='a' href='/about'>About</a>
//             <a className='a' href='/about'>Best Sellers</a>
//             <a className='a' href='/about'>Our Collection</a>
//             <a className='a' href='/about'>Reviews</a>
//         </div>
        
//     </div>
     
     


//   )
// }

// export default Navbar