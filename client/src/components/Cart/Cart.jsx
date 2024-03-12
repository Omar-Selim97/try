import React, { useState } from 'react'
import { FaCartShopping ,FaXmark  ,FaTrashCan} from "react-icons/fa6";
import { useDispatch ,useSelector } from 'react-redux';
import { removeFromCart,restCart } from '../../redux/cartReducer';

import './Cart.css'
export default function Cart() {
  const [cartList,setCartList] = useState(false)
 const showCartList = ()=>{
   cartList ?  setCartList(false) :  setCartList(true) 
  }
  const products = useSelector(state => state.Cart.products)
  const dispatch = useDispatch()
  return (
    <div className='cart'>
       <div 
       onClick={products.length>0 && showCartList}
       className="cart-icon">
        
       <FaCartShopping className='fs-1 text-info' />
       </div>
       <div className="cart-badge">
        {products.length}
       </div>
    {
      cartList? (
        <ul className="cart-list text-center">
          {products.map(product=> (
             <li className="cart-items" key={product.id}>
             <img className='cart-item-image' src={product.image} alt="" />
             <span className='cart-item-title'>{product.title}</span>
             <span className='cart-item-price'>{product.price} $</span>
             <FaTrashCan
                onClick={()=>{
                  dispatch(removeFromCart(
                   {
                    id:product.id,
                   
                   }
        
                  ))
                }}
             className='text-danger fs-5' />

           </li>
           
        )  )}
     {
      products.length>0 ? 
      <FaXmark
      className='cart-reset '
       onClick={()=>{
         dispatch(restCart(
          {
           id:products.id,
          
          }

         ))
       }}
      />
: ("")
     }  
     
    </ul>
      )
      : ("")
    }
    </div>
  )
}
