import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import Reviitem from '../Reviw/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Order = () => {
        const  saveCart = useLoaderData()
        const [cart, setCart] = useState(saveCart)
        // console.log(product)
         const removeHandler = (id) => {
             
                const remaing = cart.filter(product => product.id !== id)
                setCart(remaing)
                removeFromDb(id)
         }
         const clrarCarthandler = () => {
                setCart([]);
                deleteShoppingCart()
                 
         }


        return (
        <div className='shop-container'>
                <div className=" container">
               
                {
                         cart.map(product => <Reviitem
                        key={product.id}
                        product = {product}
                        removeHandler = {removeHandler}
                        ></Reviitem>)
                }

                </div>
                <div className="order-summary">
                <Cart 
                cart = { cart}
                clrarCarthandler ={clrarCarthandler}
                ></Cart>
                </div>
                 

        </div>
        );
};

export default Order;