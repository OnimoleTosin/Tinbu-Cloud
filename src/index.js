// src/index.js or wherever your app's entry point is
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './components/Cart/CartContext';

ReactDOM.render(
    <CartProvider>
        <App />
    </CartProvider>,
    document.getElementById('root')
);
