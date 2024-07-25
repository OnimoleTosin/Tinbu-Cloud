import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBagShopping, faPerson, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon className='icons' icon={faArrowUp} />

      <div className='icon'>
        <div className='row'>
          <FontAwesomeIcon icon={faBagShopping} className='footer-icon'/>
            <h9>PRODUCTS</h9>
        </div>

        <div className='row'>
        <FontAwesomeIcon icon={faPerson} className='footer-icon' />
          <h9>JOIN TINBU CLOUD</h9>
        </div>

        <div className='row'>
        <FontAwesomeIcon icon={faEnvelope} className='footer-icon'/>
          <h9>CONTACT</h9>
          </div>

      </div>
<div className='text'>
      <h>For your orders and enquiries, you can call or Whatsapp ONImole on +234 916 962 3604 Ogere Abeokuta, Ogun-State, Nigeria</h>
      </div>
    </div>
  );
}

export default Footer;
