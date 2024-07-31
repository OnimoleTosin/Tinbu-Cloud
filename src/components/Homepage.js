import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './Cart/ShoppingCart';
// import Cartcontent  from './Cart/Cartcontent';
import CartProvider from './Cart/Cartcontent';
import Header from './Header';
// import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="home-page">
            <Header 
            cartCount={cartItems?.length}
            bottomTitle ={'Home Page'}
            showCircle={false}
            />
            <ProductListing addToCart={addToCart} />
            <Footer />
            <CartProvider/>
        </div>
    );
};


const ProductListing = ({ addToCart }) => (
    <section className="product-listing">
        <h2>Our Products</h2>
        <div className="products">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button className="add-to-cart" onClick={() => addToCart(product)}>
                        <i className="fas fa-cart-plus"></i>
                    </button>
                </div>
            ))}
        </div>
    </section>
);

const Footer = () => (
    <footer className="footer">
        <div>
            <Link to="/">Products</Link>
            <Link to="#">Join Tinbu Cloud</Link>
            <Link to="#">Contact</Link>
        </div>
        <div>
            <p>For your orders and enrollment, you can call or Whatsapp</p>
            <p>+234 818 581 7793</p>
        </div>
    </footer>
);

const products = [
    { id: 1, name: 'Trendy Versatile Shoes', price: 150, image: 'shoe1.jpg' },
    { id: 2, name: 'Fashion Sneakers', price: 120, image: 'shoe2.jpg' },
    { id: 3, name: 'Comfort Sport Shoes', price: 100, image: 'shoe3.jpg' },
    // Add more products as needed
];

export default HomePage;
