import React, { useContext } from 'react';
import CartProvider, { CartContext } from '../components/Cart/CartProvider';
import Header from './Header';
import Footer from '../components/Footer';

import image from '../assets/Images/pngwing.com.png';
import image1 from '../assets/Images/pngwing.com(1).png';
import image2 from '../assets/Images/pngwing.com(2).png';
import image3 from '../assets/Images/pngwing.com(3).png';
import image4 from '../assets/Images/pngwing.com(4).png';
import image5 from '../assets/Images/pngwing.com(5).png'
import image6 from '../assets/Images/pngwing.com(6).png'
import image7 from '../assets/Images/pngwing.com(7).png'
import image8 from '../assets/Images/pngwing.com(8).png'
import image9 from '../assets/Images/pngwing.com(9).png'


const products = [
    { id: 1, name: 'Sustainable Sport Shoe', price: 150, image: image },
    { id: 2, name: 'Fashion Sneakers', price: 120, image: image1 },
    { id: 3, name: 'Trendy Versatile Shoe', price: 69.99, image: image2 },
    { id: 4, name: 'Sustainable Sport Shoe', price: 59.99, image: image3 },
    { id: 5, name: ' Shoe', price: 156.9, image: image4 },
    { id: 6, name: ' Shoe', price: 119.09, image: image5 },
    { id: 7, name: ' Shoe', price: 49.29, image: image6 },
    { id: 8, name: ' Shoe', price: 500.79, image: image7 },
    { id: 9, name: ' Shoe', price: 43.96, image: image8 },
    { id: 10, name: ' Shoe', price: 29.94, image: image9 },


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
                showimage={true}
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