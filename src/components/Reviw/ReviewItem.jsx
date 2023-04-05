import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Reviw.css'

const Reviitem = ( {product,removeHandler}) => {
        const {name, id, price, ratings,img} = product;
        return (
                <div className='reviw-item'>
                <div className='product-info'>
                      <div><img src= {img}alt="" /></div> 
                      <div>
                        <h5>{name }</h5>
                        <p >Price: <span className='price-rating'>${price}</span></p>
                        <small >Ratings: <span  className='price-rating'> {ratings}</span> </small>
                        </div>   
                 </div>

                 <div>
       <button onClick={()=>removeHandler(id)} className='delete-btn'>
        < FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
        </button>
                </div>
                </div>
        );
};

export default Reviitem;