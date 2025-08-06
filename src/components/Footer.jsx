import { FiHome, FiSearch, FiHeart, FiUser, FiShoppingBag } from 'react-icons/fi';

export default function Footer() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="min-w-[375px] max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg">
          <div className="grid grid-cols-5 py-2">
            {/* Home */}
            <button className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-red-500 transition-colors">
              <FiHome className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">Home</span>
            </button>

            {/* Search */}
            <button className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-red-500 transition-colors">
              <FiSearch className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">Search</span>
            </button>

            {/* Favorites */}
            <button className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-red-500 transition-colors">
              <FiHeart className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">Favorites</span>
            </button>

            {/* Orders */}
            <button className="flex flex-col items-center justify-center py-2 text-gray-600 hover:text-red-500 transition-colors">
              <FiShoppingBag className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">Orders</span>
            </button>

            {/* Profile */}
            <button className="flex flex-col items-center justify-center py-2 text-red-500 transition-colors">
              <FiUser className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}