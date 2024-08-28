import React, { useState } from 'react';

const ProductItem = ({ product }) => {
    const [count, setCount] = useState(0);

    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
            </div>
            <div className='section-cart'>
                <div className='btn'>
                    <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
                    <span>{count}</span>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;
