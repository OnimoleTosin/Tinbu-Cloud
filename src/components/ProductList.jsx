import React, { useContext } from 'react';
import { CartContext } from '../components/Cart/CartContext';
import ProductItem from '../components/ProductItem';
import image from '../assets/Images/pngwing.com.png'
import image1 from '../assets/Images/pngwing.com(1).png'
import image2 from '../assets/Images/pngwing.com(2).png'
import image3 from '../assets/Images/pngwing.com(3).png'
import image4 from '../assets/Images/pngwing.com(4).png'
import image5 from '../assets/Images/pngwing.com(5).png'
import image6 from '../assets/Images/pngwing.com(6).png'
import image7 from '../assets/Images/pngwing.com(7).png'
import image8 from '../assets/Images/pngwing.com(8).png'
import image9 from '../assets/Images/pngwing.com(9).png'
import image10 from '../assets/Images/pngwing.com(10).png'
import image11 from '../assets/Images/pngwing.com(11).png'




const products = [
  { id: 1, name: 'Sustainable Sport Shoe', price: '$150', image: image },
  { id: 2, name: 'Fashion Sneakers', price: '$120', image: image1 },
  { id: 3, name: 'Trendy Versatile Shoe', price: 69.99, image: image2 },
  { id: 4, name: 'Sustainable Sports Shoe', price: 59.99, image: image3 },
  { id: 5, name: 'Fashion Sneaker', price: 49.99, image: image4 },
  { id: 6, name: 'Fashion Sneaker', price: 49.99, image: image5 },
  { id: 7, name: 'Fashion Sneaker', price: 49.99, image: image6 },
  { id: 8, name: 'Fashion Sneaker', price: 49.99, image: image7 },  
  { id: 9, name: 'Fashion Sneaker', price: 49.99, image: image8 },
  { id: 10, name: 'Fashion Sneaker', price: 49.99, image: image9 },
  { id: 11, name: 'Fashion Sneaker', price: 49.99, image: image10 },
  { id: 12, name: 'Fashion Sneaker', price: 49.99, image: image11 },


];

function ProductList() {
  const { onAddToCart } = useContext(CartContext); // Use the context

  return (
      <div className="product-section">
          <h2 className='title'>Our Products</h2>
          <div className="product-list">
              {products.map((product) => (
                  <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
          </div>
      </div>
  );
}

export default ProductList;