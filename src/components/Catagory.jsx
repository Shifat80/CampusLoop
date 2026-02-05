import React from "react";
import {
  FiMonitor,
  FiHome,
  FiTruck,
  FiTool,
  FiTarget,
  FiBook,
  FiShoppingBag,
  FiCoffee,
} from "react-icons/fi";
import CatogoryCard from "./CatogoryCard";

const Catagory = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      icon: FiMonitor,
      bgColor: "bg-teal-500",
      isActive: true,
    },
    {
      id: 2,
      name: "Furniture",
      icon: FiHome,
      bgColor: "bg-gray-400",
    },
    {
      id: 3,
      name: "Vehicles",
      icon: FiTruck,
      bgColor: "bg-gray-400",
    },
    {
      id: 4,
      name: "Tools",
      icon: FiTool,
      bgColor: "bg-gray-400",
    },
    {
      id: 5,
      name: "Sports Gear",
      icon: FiTarget,
      bgColor: "bg-gray-400",
    },
    {
      id: 6,
      name: "Books",
      icon: FiBook,
      bgColor: "bg-gray-400",
    },
    {
      id: 7,
      name: "Clothing",
      icon: FiShoppingBag,
      bgColor: "bg-gray-400",
    },
    {
      id: 8,
      name: "Food",
      icon: FiCoffee,
      bgColor: "bg-gray-400",
    },
  ];

  return (
    <div className="min-w-[375px] max-w-md mx-auto py-4">
      {/* Section Title */}
      <h2 className="text-xl font-bold text-secondary mb-4 px-6">Category</h2>

      {/* Categories Marquee */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-2" style={{ width: "max-content" }}>
          {categories.map((category) => (
            <CatogoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagory;
