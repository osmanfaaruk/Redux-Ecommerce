import React from 'react';
import { useSelector } from 'react-redux';
import './ProductCard.css';
const ProductCard = () => {
    const {products} = useSelector((state)=> state.ProductReducer)
    return (
        <div className='container '>
            <div className="row">
                {products.map(product => (
                <div className="col-3" key={product.id}> 
                    <div className="product">
                        <div className="product__img">
                            <img src={`/images/${product.image}`} alt="image name" />
                        </div>
                        <div className="product__name">
                            {product.name}
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="product__price">
                                    {product.price}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="product__discount__price">
                                    {product.discountPrice}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
            
        </div>
    );
};

export default ProductCard;