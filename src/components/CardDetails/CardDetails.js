import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CardDetails.css';
import { BsDash, BsPlus } from "react-icons/bs";

const CardDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductReducer);
    // console.log(product);
    useEffect(() => {
        dispatch({type: 'PRODUCT', id: id});
    }, [id])

        const decQuantity = () => {
            if(quantity > 1){
                setQuantity(quantity - 1)
            }
        }

    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details__image">
                        <img src={`/images/${product.image}`} alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="details__name">
                        {product.name}
                    </div>
                <div className="details__prices">
                    <span className="details__actual">
                        ${product.price}
                    </span>
                <span className="details__discount">
                    ${product.discountPrice}
                </span>
                </div>
                <div className="details__info">
                    <div className="details__incDec">
                    <span className="dec" onClick={decQuantity}><BsDash/></span>
                    <span className="quantity">{quantity}</span>
                    <span className="inc" onClick={()=> setQuantity(quantity+1)}><BsPlus/></span>
                    <button className="btn-default" onClick={() => dispatch({type: 'ADD_TO_CART', payload:{product, quantity}})}>Add to cart</button>
                    </div> 
                </div>
                <div className="details__P">
                    <h4>Details</h4>
                    {product.desc}
                </div>
                </div >
            </div>
        </div>
    );
};

export default CardDetails;