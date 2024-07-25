// src/components/ShoppingCart.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ShoppingCart = () => {
  const items = [
    { id: 1, name: 'Trendy Versatile Shoes', price: 85, quantity: 1, imgSrc: 'shoe1.png' },
    { id: 2, name: 'Fashion Sneakers', price: 45, quantity: 2, imgSrc: 'shoe2.png' },
    { id: 3, name: 'Trendy Casual Sneakers', price: 40, quantity: 1, imgSrc: 'shoe3.png' },
  ];

  const handleQuantityChange = (id, event) => {
    // Handle quantity change logic here
  };

  const handleRemoveItem = (id) => {
    // Handle remove item logic here
  };

  return (
    <div className="shopping-cart-container">
      <header className="cart-header">
        <h2>Shopping Cart</h2>
        <p>3 Items</p>
      </header>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="cart-item">
                  <img src={item.imgSrc} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              </td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => handleRemoveItem(item.id)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="cart-footer">
        <button className="continue-shopping">Continue Shopping</button>
        <button className="checkout" >Checkout</button>
      </footer>
    </div>
  );
};

export default ShoppingCart;
