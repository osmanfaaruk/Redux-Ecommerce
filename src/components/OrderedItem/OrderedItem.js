import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import './OrderedItem.css';
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";

const OrderedItem = () => {
    const {products} = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    return (
        <div className="cart">
            <div className="container">
                <h3>Your Cart</h3>
                {products.length > 0 ? <>
                <div className="row">
                    <div className="col-9">
                    <div className="cart__heading">
                        <div className="row">
                            <div className="col-2">Picture</div>
                            <div className="col-2">Name</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Inc/Dec</div>
                            <div className="col-2">Total Price</div>
                            <div className="col-2">Remove</div>
                        </div>
                    </div>
                    {products.map(product => 
                        <div className="row verticalAlign" key={product.id}>
                            <div className="col-2">
                                <div className="cart__image">
                                    <img src={`/images/${product.image}`} alt="" />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="cart__name">{product.name}</div>
                            </div>
                            <div className="col-2">
                                <div className="cart__price">${product.discountPrice}</div>
                            </div>

                            <div className="col-2">
                            <div className="details__info">
                    <div className="details__incDec">
                    <span className="dec" onClick={()=> dispatch({type: 'INC', payload: product.id})}><BsDash/></span>
                    <span className="quantity">{product.quantity}</span>
                    <span className="inc" ><BsPlus/></span>
                    {/* <button className="btn-default" >Add to cart</button> */}
                    </div> 
                </div>
                            </div>
                            <div className="col-2">
                                <div className="cart__total">
                                    ${product.discountPrice * product.quantity}
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="cart__remove">
                                <BsReverseBackspaceReverse/>
                                </div>
                            </div>
                        </div>    
                    )}
                    </div>
                    <div className="col-3">
                        Summary
                    </div>
                </div>
                </> : "Your cart is empty"}
            </div>
            
        </div>
    );
};

export default OrderedItem;