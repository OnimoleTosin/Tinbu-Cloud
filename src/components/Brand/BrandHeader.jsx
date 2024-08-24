// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Brand.css';

const BrandHeader = () => {
    const [activeTab, setActiveTab] = useState('male');

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <header className="header">
            <nav className="nav">
                <Link
                    to="/male"
                    className={`nav-link ${activeTab === 'male' ? 'active' : ''}`}
                    onClick={() => handleClick('male')}
                >
                    Male
                </Link>
                <Link
                    to="/female"
                    className={`nav-link ${activeTab === 'female' ? 'active' : ''}`}
                    onClick={() => handleClick('female')}
                >
                    Female
                </Link>
                <div className={`slider ${activeTab}`} />
            </nav>
        </header>
    );
};

export default BrandHeader;
