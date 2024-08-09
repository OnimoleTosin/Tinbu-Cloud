import React, { useState } from 'react';
import ShoppingCart from './Cart/ShoppingCart';
import CartProvider from './Cart/Cartcontent';
import Header from './Header';
import Footer from './Footer'

import image from '../assets/Images/pngwing.com.png'
import image1 from '../assets/Images/pngwing.com(1).png'
import image2 from '../assets/Images/pngwing.com(2).png'
import image3 from '../assets/Images/pngwing.com(3).png'
import image4 from '../assets/Images/pngwing.com(4).png'
import image5 from '../assets/Images/pngwing.com(5).png'
import image6 from '../assets/Images/pngwing.com(6).png'
import image7 from '../assets/Images/pngwing.com(7).png'
import image8 from '../assets/Images/pngwing.com(8).png'
import image9 from '../assets/Images/pngwing.com(9).png'
import image10 from '../assets/Images/pngwing.com(10).png'
import image11 from '../assets/Images/pngwing.com(11).png'


const products = [
    { id: 1, name: 'Sustainable Sport Shoe', price: '$150', image: image },
    { id: 2, name: 'Fashion Sneakers', price: '$120', image: image1 },
    { id: 3, name: 'Trendy Versatile Shoe', price: 69.99, image: image2 },
    { id: 4, name: 'Sustainable Sports Shoe', price: 59.99, image: image3 },
    { id: 5, name: 'Fashion Sneaker', price: 49.99, image: image4 },
    { id: 6, name: 'Fashion Sneaker', price: 49.99, image: image5 },
    { id: 7, name: 'Fashion Sneaker', price: 49.99, image: image6 },
    { id: 8, name: 'Fashion Sneaker', price: 49.99, image: image7 },
    { id: 9, name: 'Fashion Sneaker', price: 49.99, image: image8 },
    { id: 10, name: 'Fashion Sneaker', price: 49.99, image: image9 },
    { id: 11, name: 'Fashion Sneaker', price: 49.99, image: image10 },
    { id: 12, name: 'Fashion Sneaker', price: 49.99, image: image11 },
];



const ProductListing = ({ addToCart }) => {
    return (
        <div className="product-section">
            <div className='title'>Our Products</div>
            <div className="product-list">
                {products.map(product => (
                    <div className="product-item" key={product.id} product={product}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">${product.price}</div>
                        <div className='section-cart'>
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
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="home-page">
            <Header
                cartCount={cartItems?.length}
                bottomTitle={'Home Page'}
                showCircle={false}
                showimage={true}

            />
            <ProductListing addToCart={addToCart} />
            <Footer />
            <CartProvider />
        </div>
    );
};

export default HomePage;

