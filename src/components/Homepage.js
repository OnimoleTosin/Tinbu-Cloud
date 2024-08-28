import React, { useContext } from 'react';
import CartProvider, { CartContext } from '../components/Cart/CartContext'; // Correct path to the context file
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';

const HomePage = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="home-page">
            <Header
                cartCount={cartItems.length}
                bottomTitle="Home Page"
                showCircle={false}
                showimage={true}
            />
            <ProductList />
            <Footer />
        </div>
    );
};

export default () => (
    <CartProvider>
        <HomePage />
    </CartProvider>
);
