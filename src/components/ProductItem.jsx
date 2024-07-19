import React from 'react';
import { useState } from 'react';


const ProductItem = ({ product }) => {
  const [count, setCount] = useState(0)


  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price}</div>
      <div className='section-cart'>
        <div className='btn' >
          <div onClick={() => setCount(count - 1)}><b>-</b></div>
          {count}
          <div onClick={() => setCount(count + 1)}><b>+</b></div>
        </div>
        
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
