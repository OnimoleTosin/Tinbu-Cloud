import React from 'react';
import { Link } from 'react-router-dom';
import './Brand.css';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../Header';

const BrandsPage = () => {
    return (
        <div className="brands-page">
            {/* <Header
             bottomTitle="Brands"
             showCircle={false}
             showimage={true}
             /> */}
            <Link to="/" className="back-button">
                        <FaArrowLeft /> 
                    </Link>
            <h1>Select a Brand</h1>
            <div className="brand-list">
                <div className="brand-item">
                    <Link to="/male/nike" className="brand-link">Nike</Link>
                </div>
                <div className="brand-item">
                    <Link to="/male/adidas" className="brand-link">Adidas</Link>
                </div>
                {/* <div className="brand-item">
                    <Link to="/female/nike" className="brand-link">Nike (Female)</Link>
                </div>
                <div className="brand-item">
                    <Link to="/female/adidas" className="brand-link">Adidas (Female)</Link>
                </div> */}
            </div>
        </div>
    );
};

export default BrandsPage;
