import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const products = [
        {
            id: 1,
            name: "Camera",
            price: 20,
            period: "day",
            rating: 4,
            isFavorite: false,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Laptop",
            price: 35,
            period: "day",
            rating: 5,
            isFavorite: true,
            category: "Electronics"
        },
        {
            id: 3,
            name: "Bicycle",
            price: 15,
            period: "day",
            rating: 4,
            isFavorite: false,
            category: "Vehicles"
        },
        {
            id: 4,
            name: "Textbooks",
            price: 8,
            period: "week",
            rating: 3,
            isFavorite: true,
            category: "Books"
        },
        {
            id: 5,
            name: "Gaming Chair",
            price: 25,
            period: "day",
            rating: 5,
            isFavorite: false,
            category: "Furniture"
        }
    ];

    return (
        <div className="min-w-[375px] max-w-md mx-auto py-4">
            {/* Section Title */}
            <h2 className="text-xl font-bold text-secondary mb-4 px-6">Popular Rentals</h2>

            {/* Products Horizontal Scroll */}
            <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 px-6 pb-2" style={{ width: "max-content" }}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;