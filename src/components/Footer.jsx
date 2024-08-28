import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faPerson, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons/faArrowCircleUp';

function Footer() {
    return (
        <div className="footer">
            <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <FontAwesomeIcon icon={faArrowCircleUp} />
            </div>
            <div className="footer-content">
                <div className="footer-section">
                    <FontAwesomeIcon icon={faBagShopping} className='footer-icon' />
                    <h4>Products</h4>
                </div>
                <div className="footer-section">
                    <FontAwesomeIcon icon={faPerson} className='footer-icon' />
                    <h4>Join Tinbu Cloud</h4>
                </div>
                <div className="footer-section">
                    <FontAwesomeIcon icon={faEnvelope} className='footer-icon' />
                    <h4>Contact</h4>
                </div>
            </div>
            <div className="footer-text">
                <p>For orders and enquiries, call or WhatsApp ONImole on +234 916 962 3604, Ogere Abeokuta, Ogun-State, Nigeria</p>
            </div>
        </div>
    );
}

export default Footer;
