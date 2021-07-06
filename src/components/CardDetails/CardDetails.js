import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CardDetails.css';
const CardDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductReducer);
    // console.log(product);
    useEffect(() => {
        dispatch({type: 'PRODUCT', id: id});
    }, [id])
    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details__image">
                        <img src={`/images/${product.image}`} alt="" />
                       
                    </div>
                </div>
                <div className="col-6">
                
                </div>
            </div>
        </div>
    );
};

export default CardDetails;