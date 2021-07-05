import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './CardDetails.css';
const CardDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.ProductReducer);
    useEffect(() => {
        dispatch({type: 'PRODUCT', id: id});
    }, [id])
    return (
        <div className="container ">
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">

                </div>
            </div>
        </div>
    );
};

export default CardDetails;