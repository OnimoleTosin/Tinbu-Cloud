import React, { useContext } from 'react';
import CartProvider, { CartContext } from '../components/Cart/CartProvider';
import Header from './Header';
import Footer from '../components/Footer';

import image from '../assets/Images/pngwing.com.png';
import image1 from '../assets/Images/pngwing.com(1).png';
import image2 from '../assets/Images/pngwing.com(2).png';
import image3 from '../assets/Images/pngwing.com(3).png';
// (other images...)

const products = [
    { id: 1, name: 'Sustainable Sport Shoe', price: 150, image: image },
    { id: 2, name: 'Fashion Sneakers', price: 120, image: image1 },
    { id: 3, name: 'Trendy Versatile Shoe', price: 69.99, image: image2 },
    { id: 4, name: 'Sustainable Sports Shoe', price: 59.99, image: image3 },
    // (other products...)
];

const ProductListing = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-section">
            <div className="title">Our Products</div>
            <div className="product-list">
                {products.map(product => (
                    <div className="product-item" key={product.id}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">${product.price.toFixed(2)}</div>
                        <div className="section-cart">
                            <button className="add-to-cart" onClick={() => addToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const HomePage = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="home-page">
            <Header
                cartCount={cartItems.length}
                bottomTitle="Home Page"
                showCircle={false}
                showImage={true}
            />
            <ProductListing />
            <Footer />
        </div>
    );
};

export default () => (
    <CartProvider>
        <HomePage />
    </CartProvider>
);