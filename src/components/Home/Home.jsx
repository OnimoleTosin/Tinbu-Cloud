import React from 'react';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div>
      <header className="header">
        <h1>Tinbu Cloud Online Shoe Shop</h1>
      </header>
      <section className="products-section">
        <h2>Our Products</h2>
        <ProductList />
      </section>
      <footer className="footer">
        <p>For your orders and enquiries, you can call or WhatsApp Favor Adekola on: +234 811 188 7779 Surulere, Lagos, Nigeria</p>
      </footer>
    </div>
  );
};

export default Home;
