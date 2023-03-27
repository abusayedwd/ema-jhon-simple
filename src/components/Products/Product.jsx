import React from 'react';
import './Product.css'

const Product = (props) => {
        // console.log(props.product.name )
        const {name, price, quantity, ratings, seller, img} = props.product ;
        return (
                <div className='product'>
                     <img src= {img} alt="" />
                    <div className="product-info">
                    <h5 className='product-name'>{name}</h5>
                     <h4 className='price'> Price :${price}</h4>
                     <p>menufacturer : {seller}</p>
                     <p>Rating : {ratings} stars</p>
                    </div>
                    <button className='cart-btn'>Add to cart</button>
                </div>
        );
};

export default Product;