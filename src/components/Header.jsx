import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/Images/pngwing.com(1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

function Header({ cartCount, showCircle, showimage, bottomTitle }) {
  return (
    <div className="header">
      <header>
        <div className="title">Tinbu Cloud</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shoppingcart">Cart</Link></li>
            <li><Link to="/brands">Products</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </nav>
        <Link to='/shoppingcart'>
          <button className="cart-button">
            <FontAwesomeIcon icon={faShoppingCart} /> {cartCount}
          </button>
        </Link>
      </header>

      <div className="container">
        <div className="left-column">
          <h1>Tinbu Cloud Online Shoe Shop</h1>
          <p>Your Number One Online Shoe Shop.</p>
        </div>
        {showCircle &&
          <div className="right-column">
            <div className="circle">
              <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
            </div>
          </div>
        }
        {showimage &&
          <div className="right-column">
            <div className="pic-circle">
              <img src={image1} alt="Shoe" className="pic-image" />
            </div>
          </div>
        }
      </div>
      <a href="#footer">{bottomTitle}</a>
    </div>
  );
}

export default Header;
