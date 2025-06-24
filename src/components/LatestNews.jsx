import React from 'react';
import './LatestNews.css';
import productImg from '../images/img3.jpg'; 

const ProductCard = () => (
    <div className="product-card">
        <img src={productImg} alt="Tobacco Fertilizer" />
        <h3>Superfert is exhibiting at the ADMA Agricultural Show.</h3>
        <p>Superfert is exhibiting at the ADMA Agricultural Show, Thornpark Polo Grounds on the Mazowe Road. Come and have a....</p>
        <button className="more-info-btn">
            More Info <span className="arrow">→</span>
        </button>
    </div>
);

const ProductGrid = () => {
    return (
        <div className="product-grid">
            {Array(6).fill().map((_, i) => (
                <ProductCard key={i} />
            ))}
        </div>
    );
};

export default ProductGrid;
