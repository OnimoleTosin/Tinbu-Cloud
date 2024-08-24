// src/components/Brand/BrandDetails.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { maleShoes, femaleShoes } from '../data/shoesData';
import './Brand.css'; // Ensure CSS for styling
import { FaArrowLeft } from 'react-icons/fa'; // FontAwesome icon for arrow

const BrandDetails = () => {
    const { gender, brandId } = useParams();
    const [activeTab, setActiveTab] = useState(gender);

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    const shoes = activeTab === 'male' ? maleShoes[brandId] : femaleShoes[brandId];
    const selectedShoes = shoes || [];

    return (
        <div>
            <div className="brand-details">
                <nav className="tab-nav">
                    <Link to="/brands" className="back-button">
                        <FaArrowLeft /> 
                    </Link>
                    <div className="tabs">
                        <button
                            className={`tab-link ${activeTab === 'male' ? 'active' : ''}`}
                            onClick={() => handleClick('male')}
                        >
                            Male
                        </button>
                        <button
                            className={`tab-link ${activeTab === 'female' ? 'active' : ''}`}
                            onClick={() => handleClick('female')}
                        >
                            Female
                        </button>
                    </div>
                </nav>
                <div className="shoes-list">
                    <h1>{brandId.charAt(0).toUpperCase() + brandId.slice(1)} Shoes</h1>
                    <ul>
                        {selectedShoes.map(shoe => (
                            <li key={shoe.id}>
                                <div>{shoe.name}</div>
                                <div>{shoe.price}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;
