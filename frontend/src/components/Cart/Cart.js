import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './Cart.css';
import {useDispatch ,useSelector} from 'react-redux';
import { clearCart } from '../../app/features/cartSlice';


function Cart() {
  const dispatch =useDispatch();
  const {cartItems} = useSelector((store)=>store.cart)
  console.log(cartItems)

let str="";
// let price;
for(let i in cartItems){
  if(cartItems.hasOwnProperty(i)){
     const price=Number(cartItems[i].price.replace("$", ""))
console.log("price",price)

    str=str+` ${i}: ${cartItems[i].name} ${cartItems[i].price}\n\n`
    // *Total Items=${price.reduce((a,b)=>(a+b))}*
  }
}
const myItems=(`*My Items*\n ${str} \n`)

console.log("here",myItems)


  if(cartItems === 0){
    return(
      <>
      <div className='stick'> <br/>
      <Link to="/"><button className='back'>Back</button></Link></div>
     <div className='Cart-big'>
    
      <h5 style={{color:'sandybrown',fontFamily:'System'}}>YOUR CART!!</h5>
      <hr />
      <i>The cart Is Empty!!!</i>
      </div>
      </>
    )
  }else{

    return (
      <>
      <div className='stick'> <br/>
      <Link to="/"><button className='back'>Back</button></Link></div>
     <div className='Cart-big'>
    
      <h5 style={{color:'sandybrown',fontFamily:'System'}}>YOUR CART!!</h5>
      <hr />
      <div className='cartDiv'> 
        {cartItems.map((item)=>(
                <CartItem className='cartItem' key={item.id} {...item} />
        ))}
   
    </div>
    <button style={{backgroundColor:'navajowhite' ,marginTop:'1rem',marginLeft:'25%',borderRadius:'5%',border:'none'}} onClick={()=>{
            dispatch(clearCart())}}>
                Empty Cart
            </button>

            {/* {cartItems.map((data, i)=>( <div key={i} className="checkout">
                        <a href={`https://wa.me/254797495758?text=${data.name}`} target="_blank" rel='noreferrer'>Checkout</a>
                    </div>))} */}


                    <button className='checkout'>
                        <a href={`https://wa.me/254797495758?text=${myItems}`} target="_blank" rel='noreferrer'>Checkout</a>
                    </button >
           

                    {console.log("cart items",cartItems)}
      <div className='Cart'>
   
      </div>
      </div>
      </>
    
   )
  }

  
 }

export default Cart;