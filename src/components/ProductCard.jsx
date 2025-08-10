import React from 'react';
import { FiHeart, FiCamera } from 'react-icons/fi';

const ProductCard = ({ product = {} }) => {
    // Default values for product properties
    const {
        name = "Product",
        price = 0,
        period = "day",
        rating = 0,
        isFavorite = false
    } = product;

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            >
                ★
            </span>
        ));
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden w-48 flex-shrink-0">
            {/* Image Container */}
            <div className="relative bg-gray-100 h-48 flex items-center justify-center">
                {/* Placeholder Camera Icon */}
                <div className="text-secondary/40">
                    <FiCamera className="h-20 w-20" />
                </div>

                {/* Favorite Button */}
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <FiHeart className={`h-4 w-4 ${isFavorite ? 'text-red-500' : 'text-gray-600'}`} />
                </button>
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Product Name */}
                <h3 className="text-lg font-bold text-secondary mb-1">{name}</h3>

                {/* Price */}
                <p className="text-lg font-semibold text-secondary mb-3">
                    ${price}/{period}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    {renderStars(rating)}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;