import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
//  import './Checkout.css';

const Checkout = ({ cartItems }) => {
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Order Submitted', { cartItems, shippingInfo, paymentInfo });
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <h3>Shipping Information</h3>
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={shippingInfo.address}
                    onChange={handleShippingChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={shippingInfo.city}
                    onChange={handleShippingChange}
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={shippingInfo.state}
                    onChange={handleShippingChange}
                />
                <input
                    type="text"
                    name="zip"
                    placeholder="Zip Code"
                    value={shippingInfo.zip}
                    onChange={handleShippingChange}
                />

                <h3>Payment Information</h3>
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={paymentInfo.cardNumber}
                    onChange={handlePaymentChange}
                />
                <input
                    type="text"
                    name="expiryDate"
                    placeholder="Expiry Date"
                    value={paymentInfo.expiryDate}
                    onChange={handlePaymentChange}
                />
                <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={paymentInfo.cvv}
                    onChange={handlePaymentChange}
                />

                <button type="submit">Complete Purchase
                    <FontAwesomeIcon icon={faCreditCard}/>
                </button>
            </form>
        </div>
    );
};

export default Checkout;
