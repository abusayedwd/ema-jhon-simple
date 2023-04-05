import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
        const {cart,clrarCarthandler} = props ;
        // console.log(cart)
        let totalPrice = 0;
        let totalShipping = 0;
        let quantity = 0;
        for (const product of cart){
        //    if(product.quantity === 0){
        //         product.quantity = 1;
        //    }     
        totalPrice = totalPrice + product.price * product.quantity; 
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
        }
        const tax = totalPrice*7/100;
        const granTotal = totalPrice + totalShipping + tax;
        return (
        <div className='cart'>
                <h3>Order Summary</h3>
                <div className='item-add'>
                        <p >Selectet item : {quantity}</p>
                        <p>Total Price : $ {totalPrice}</p>
                        <p>Total Shipping :$ {totalShipping}</p>
                        <p>Tax :$ {tax}</p> <br />
                        <h4>Grand Total :$ {granTotal}</h4>
                        <button onClick={clrarCarthandler} className='clear-btn'>
                         <span>Clear cart</span>
                        < FontAwesomeIcon icon={faTrashCan}/>

                        </button>
                 </div>
        </div>             
                        );
        
  };

 export default Cart;