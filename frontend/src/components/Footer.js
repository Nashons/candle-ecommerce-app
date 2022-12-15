import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerdiv'>
          
          <div className="footer-left">

				    <h3>Candles<span>Shop</span></h3>

				    <p className="footer-links">

					    <a href="#about"> _About_</a>
					    ·
					    {/* <a href="/about">_Best Seller_</a>
					    · */}
					    <a href="#collection">_Our Collection_</a>
					    {/* ·
					    <a href="/about">_Reviews_</a> */}
				    </p>

				    

            <div className="footer-icons">
              <SocialIcon url="https://whatsapp.com/in/jaketrent" bgColor="#070403" />
              <SocialIcon url="https://instagram.com/in/jaketrent" bgColor="#070403" />
              <SocialIcon url="https://facebook.com/in/jaketrent" bgColor="#070403" />
            </div>
				  
			  </div>

			  <div className="footer-right">

				  <p>Contact Us</p>

				  <form action="#" method="post">

					  <input type="text" name="email" placeholder="Email" />
					  <textarea name="message" placeholder="Message"></textarea>
					  <button>Send</button>

				  </form>

			  </div>

        <p className="footer-company-name">Candles Candles © 2022</p>
        
    </div>    
    </div>
  )
}

export default Footer