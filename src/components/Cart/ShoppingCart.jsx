import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header'

const ShoppingCart = ({ cartItems }) => {
    return (
        <div className="shopping-cart-page">
            <Header bottomTitle={'Product Listing'} showCircle={true}/>
            <div className="shopping-cart">
                <h2>Shopping Cart</h2>
                {cartItems?.length === 0 ? (
                    <p>No items in the cart.</p>
                ) : (
                    <ul>
                        {cartItems?.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <Link to="/checkout">
                    <button className="checkout-button">Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ShoppingCart;
