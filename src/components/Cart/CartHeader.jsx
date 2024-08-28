import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function CartHeader() {
    return (
        <header className="cart-header">
            <Link to="/" className="back-to-shop">
                <FontAwesomeIcon icon={faArrowLeft} /> Back to Shop
            </Link>
            <h1>Shopping Cart</h1>
        </header>
    );
}

export default CartHeader;
