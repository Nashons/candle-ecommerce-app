import { Container } from '@mui/material'
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import products from './products';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../app/features/cartSlice';
import './catalogue.css'


const Bestseller = () => {
    const dispatch =useDispatch();
    const {cartItems} = useSelector((store) => store.cart);
//Addig to Cart...
const handleAddToCart =(product)=>{
    dispatch(addToCart(product))
    console.log('I have put to the cart' , cartItems)
    
    }


  return (
<Container maxWidth='xl' className='main'>
<div className='CardObject'> 
    {products.map((product)=>(
               <div key={product.id} className="box" >
                                         <img src={product.image} alt="black orchid" />
                                     <div className="content">
                                           <h3>{product.name}</h3>
                                          <p>{product.desc}</p>
                                            <div className="price">{product.price}</div>
                                              
   <button  className='unliked' onClick={()=>handleAddToCart(product)}> <Icon  name='cart' /></button>
                                         </div>
                                  </div>
    
    ))}
        </div>
</Container>

/* <Card key={product.id}  className="uard">
<Image  src={product.image} wrapped ui={false} />
<Card.Content className='content'>
  <Card.Meta>
    <span className='date'>{product.name}</span>
  </Card.Meta>
  <Card.Description>
  {product.desc}
  </Card.Description>
  <Card.Description >
   ksh{product.price}
  </Card.Description>
  <Card.Description className='cart' >
  <a >          
   <button  className='unliked' onClick={()=>handleAddToCart(product)}> <Icon  name='cart' /></button>
    
  </a>
  </Card.Description>
</Card.Content>
</Card> */
  )
}

export default Bestseller