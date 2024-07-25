// src/components/Checkout.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <h2>Checkout</h2>
      </header>
      <div className="checkout-body">
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <span>Item 1</span>
            <span>$85.00</span>
          </div>
          <div className="summary-item">
            <span>Item 2</span>
            <span>$45.00</span>
          </div>
          <div className="summary-item">
            <span>Item 3</span>
            <span>$40.00</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>$170.00</span>
          </div>
        </div>
        <div className="checkout-form">
          <div className="form-section">
            <h3>Contact</h3>
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-section">
            <h3>Shipping Information</h3>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Postal Code" />
            <input type="text" placeholder="Country" />
          </div>
          <div className="form-section">
            <h3>Payment Method</h3>
            <div className="payment-methods">
              <label>
                <input type="radio" name="payment" value="credit-card" />
                <FontAwesomeIcon icon={faCreditCard} /> Credit Card
              </label>
              <label>
                <input type="radio" name="payment" value="paypal" />
                <FontAwesomeIcon icon={faShippingFast} /> PayPal
              </label>
            </div>
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Name on Card" />
            <input type="text" placeholder="Expiration Date" />
            <input type="text" placeholder="CVV" />
          </div>
        </div>
      </div>
      <footer className="checkout-footer">
        <button className="confirm-button">Confirm and Pay</button>
      </footer>
    </div>
  );
};

export default Checkout;
