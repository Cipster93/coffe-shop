import React from 'react';
import "../styles/CardStyles/card.css"

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-ingredients">
                    <span>Ingredients: </span>
                    {product.ingredients.join(', ')}
                </div>
                <div className="product-dose">{product.dose_grams}</div>
                <div className="product-price">{product.price}€</div>
            </div>
        </div>
    );
};

export default ProductCard;