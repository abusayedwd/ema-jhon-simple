import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
        // console.log(props)
        const {name, price, quantity, ratings, seller, img} = props.product ;
       const addToCart = props.addToCart;
        return (
                <div className='product'>
                     <img src= {img} alt="" />
                    <div className="product-info">
                    <h5 className='product-name'>{name}</h5>
                     <h4 className='price'> Price :${price}</h4>
                     <p>menufacturer : {seller}</p>
                     <p>Rating : {ratings} stars</p>
                    </div>
                    <button onClick={() => addToCart(props.product)} className='cart-btn'>Add to cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
        );
};

export default Product;