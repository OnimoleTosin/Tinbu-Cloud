import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-name">{product.name}</div>
      <div className="product-price">${product.price}</div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductItem;
