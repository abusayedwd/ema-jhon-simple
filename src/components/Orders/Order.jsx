import React from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import Reviitem from '../Reviw/ReviewItem';
const Order = () => {
        const  cart = useLoaderData()
        // console.log(product)
        return (
        <div className='shop-container'>
                <div className=" container">
               
                {
                        cart.map(product => <Reviitem
                        key={product.id}
                        product = {product}
                        ></Reviitem>)
                }

                </div>
                <div className="order-summary">
                <Cart cart = {cart}></Cart>
                </div>
                 

        </div>
        );
};

export default Order;