import React from 'react'
import { Carousel } from 'react-responsive-carousel'
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

//import { Row, Col} from 'react-bootstrap'

    import img2 from '../images/img2.jpg'
   import img1 from '../images/img1.jpg'
import img3 from '../images/img3.jpg'

const Landing = () => {
  return (
    <div className='carosel'>
            <Carousel showThumbs={false} autoPlay >
                <div className='row'>
                    <div className='for-img' >
                        <img src={img1
                        } alt=''></img>
                    </div>                    
                    <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. 
                    </div>
                </div>

                <div className='row'>
                    <div className='for-img' >
                        <img src={img2
                        } alt=''></img>
                    </div>                    
                    <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. 
                    </div>
                </div>

                <div className='row'>
                    <div className='for-img' >
                        <img src={img3
                        } alt=''></img>
                    </div>                    
                    <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </div>
                </div>
            </Carousel>
                  
   </div>
  )
}

export default Landing