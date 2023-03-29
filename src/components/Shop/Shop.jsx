import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import './Shop.css'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
        const [products, setProducts] = useState([]);
        const [cart, setCart] = useState([]);
        useEffect(() => {
                fetch('products.json')
                .then(res => res.json())
                .then(data => setProducts(data))
        },[])
        useEffect(() => {
                console.log('product',products)
                const storedCart = getShoppingCart();
                let saveCart = [];
                for(const id in storedCart){
                const addedProduct = products.find(product => product.id === id);
                if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                // console.log(addedProduct) 
                saveCart.push(addedProduct)
                }
                }
              setCart(saveCart)   
                
        }, [products])
        const addToCart = (product) => {
                //  const newCart = [...cart,product]
                let newCart = [];
                const exists = cart.find(pd => pd.id === product.id);
                if(!exists){
                    product.quantity = 1;
                    newCart = [...cart, product];

        }
        else{
                exists.quantity = exists.quantity + 1;
                const remaining = cart.filter(pd => pd.id !==product.id);
                newCart = [...remaining, exists];
        }
                 setCart(newCart)
                 addToDb(product.id)
        }
        return (
                <div className='shop-container'>
                        <div className="products-container">
                        {
                                products.map(product=> <Product
                                key={product.id}
                                product = {product}
                                addToCart = {addToCart}
                                ></Product>)
                        }
                     
                        </div>
                        <div className="order-summary">
                        <Cart cart = {cart}></Cart>
                        </div>
                         

                </div>
        );
};

export default Shop;