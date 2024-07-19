import React from 'react';
import ProductCard from '../components/ProductItem';
import image1 from '../assets/Images/pngwing.com(1).png'
import image2 from '../assets/Images/pngwing.com(3).png'
import image3 from '../assets/Images/pngwing.com(4).png'
import image4 from '../assets/Images/pngwing.com(5).png'
import image5 from '../assets/Images/pngwing.com(7).png'



const products = [
  { id: 1, name: 'Sustainable Sport Shoe', price: '$150', image: image5 },
  { id: 2, name: 'Fashion Sneakers', price: '$120', image: image4 },
  { id: 3, name: 'Trendy Versatile Shoe', price: 69.99, image: image3 },
  { id: 4, name: 'Sustainable Sports Shoe', price: 59.99, image: image2 },
  { id: 5, name: 'Fashion Sneaker', price: 49.99, image: image1 },


];

function ProductList() {
  return (
    <div className="products-section">
      {/* <h2>Our Products</h2> */}
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;





/*
const App = () => {
  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
    { label: 'Tab 4', content: 'Content for Tab 4' },
    { label: 'Tab 5', content: 'Content for Tab 5' },
  ];

  return (
    <div>
      <h1>Horizontal Scrollable Tabs</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};
*/


