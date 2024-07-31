import React from 'react';
import { Link } from 'react-router-dom';

function Header({cartCount, showCircle, bottomTitle}) {
  return (
    <div className="header">

      <header>
        <div class="title">Tinbu Cloud</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href='/shoppingcart'>Contact</a></li>
          </ul>
        </nav>
        <Link to={'/shoppingcart'}>
        <button className="logo" >Cart {cartCount}</button>
        </Link>
      </header>

      <div className='container'>
        <div className='left-column'>
          <h1>Timbu Cloud Online Shoe Shop</h1>
          <p>Your number one online shoe shop.</p>
        </div>
        {showCircle &&
         <div className='right-column'>
          <div className='circle'></div>
        </div>
        }
      </div>
      <a>{bottomTitle}</a>
    </div>
  );
}

export default Header;
