// ShoppingCartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../Cart/CartProvider';
import Header from '../Header';
import Footer from '../Footer';

const ShoppingCartPage = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const totalAmount = cartItems.reduce((sum, product) => sum + product.price, 0);

    return (
        <div className="shopping-cart-page">
            <Header
                cartCount={cartItems.length}
                bottomTitle="Shopping Cart"
                showCircle={true}
                showImage={false}
            />
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <div className="empty-cart">Your cart is empty</div>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <div className="cart-item-name">{item.name}</div>
                                <div className="cart-item-price">${item.price.toFixed(2)}</div>
                            </div>
                            <button
                                className="remove-from-cart"
                                onClick={() => removeFromCart(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className="cart-total">
                <div>Total Amount: ${totalAmount.toFixed(2)}</div>
            </div>
            <Footer />
        </div>
    );
};

export default ShoppingCartPage;
