import React from 'react';
import ProductItem from './ProductItem';
import products from '../../services/Product';

const ProductList = () => {
  return (
    <div className="products-container">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
