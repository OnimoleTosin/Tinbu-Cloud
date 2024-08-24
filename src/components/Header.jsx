import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/Images/pngwing.com(1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';


function Header({ cartCount, showCircle, showimage, bottomTitle }) {
  return (
    <div className="header">

      <header>
        <div class="title">Tinbu Cloud</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href='/shoppingcart'>Cart</a></li>
            <li><a href='/brands'>Products</a></li>
            <li><a href='/'>Contact</a></li>
          </ul>
        </nav>
        <Link to={'/shoppingcart'}>
          <button className="logo" >Cart {cartCount}</button>
        </Link>
      </header>

      <div className='container'>
        <div className='left-column'>
          <h1>Timbu Cloud Online Shoe Shop</h1>
          <p>Your Number 0ne Online Shoe Shop.</p>
        </div>
        {showCircle &&
          <div className='right-column'>
            <div className='circle'>
              <FontAwesomeIcon icon={faShoppingCart} className='cart'/>
            </div>
          </div>
        }
        {showimage &&
          <div className='right-column'>
            <div className='pic-Circle'>
              <img src={image1} alt='name' className="pic-image" />
            </div>
          </div>
        }
      </div>
      <a>{bottomTitle}</a>
    </div>
  );
}

export default Header;
