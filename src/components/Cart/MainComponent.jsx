import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCartItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCartItems, product];
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
        <div>
            <ProductList onAddToCart={handleAddToCart} />
            <ShoppingCart
                cartItems={cartItems}
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart}
            />
        </div>
    );
}

export default App;
