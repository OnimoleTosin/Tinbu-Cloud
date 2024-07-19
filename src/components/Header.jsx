import React from 'react';

function Header() {
  return (
    <div className="header">

      <header>
        <div class="title">Tinbu Cloud</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button className="logo">Cart</button>
      </header>

      <div className='container'>
        <div className='left-column'>
          <h1>Timbu Cloud Online Shoe Shop</h1>
          <p>Your number one online shoe shop.</p>
        </div>
        <div className='right-column'>
          <div className='circle'></div>
        </div>
      </div>
      <a>PRODUCT LISTING</a>
    </div>
  );
}

export default Header;
