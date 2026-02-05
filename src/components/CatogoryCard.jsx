import React from 'react';

const CatogoryCard = ({ category }) => {
    return (
        <div className="flex flex-col items-center flex-shrink-0">
            {/* Icon Container */}
            <div className={`
                w-16 h-16 rounded-2xl flex items-center justify-center mb-2 transition-all duration-200
                ${category.isActive ? category.bgColor : 'bg-gray-200'}
                hover:scale-105 cursor-pointer
            `}>
                <category.icon
                    className={`h-7 w-7 ${category.isActive ? 'text-white' : 'text-gray-600'}`}
                />
            </div>

            {/* Category Name */}
            <span className={`
                text-xs font-medium text-center leading-tight whitespace-nowrap
                ${category.isActive ? 'text-secondary' : 'text-gray-600'}
            `}>
                {category.name}
            </span>
        </div>
    );
};

export default CatogoryCard;