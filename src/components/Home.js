import React from 'react';
import Header from './Header/Header';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard/ProductCard';
const Home = () => {
    const {products} = useSelector((state)=> state.ProductReducer)
    
    return (
        <div>
            <Header/>
            <ProductCard/>
        </div>
    );
};

export default Home;