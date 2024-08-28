import React from 'react';
import { Link } from 'react-router-dom';
import CartHeader from './CartHeader';

function ShoppingCart({ cartItems = [], onRemoveItem, onClearCart }) {
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <>
            <CartHeader />
            <div className="shopping-cart-container">
                <header className="cart-header">
                    <div className="header-title">
                        <h1>Shopping Cart</h1>
                    </div>
                    <button className="clear-cart" onClick={onClearCart}>Clear Cart</button>
                </header>

                {cartItems.length > 0 ? (
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index} className="cart-item-row">
                                    <td className="cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <span>{item.name}</span>
                                    </td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button className="remove-item" onClick={() => onRemoveItem(index)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Your cart is empty</p>
                )}

                <div className="cart-footer">
                    <Link to="/products" className="continue-shopping">Continue Shopping</Link>
                    <div className="total">
                        <h2>Total: ${getTotalPrice()}</h2>
                        <button className="checkout">Checkout</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;
