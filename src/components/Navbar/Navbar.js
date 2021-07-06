import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
const Navbar = () => {
    const {totalQuantities} = useSelector(state => state.CartReducer);
    return (
        <div className="navbar">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/">
                        <img src='/images/logo.webp' alt="logo" />
                        </Link>
                    </div>
                    <div className="nav__right">
                        <Link to="/orderedItem">
                            <div className="orderedItem">
                                <AiOutlineShoppingCart className="orderedIcon"/>
                                <span>{totalQuantities}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;