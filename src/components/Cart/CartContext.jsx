// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCartItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCartItems, { ...product, quantity: 1 }];
            }
        });
    };

    const handleRemoveItem = (index) => {
        setCartItems((prevCartItems) => prevCartItems.filter((_, i) => i !== index));
    };

    const handleClearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{ cartItems, onAddToCart: handleAddToCart, onRemoveItem: handleRemoveItem, onClearCart: handleClearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
