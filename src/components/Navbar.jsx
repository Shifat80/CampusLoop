import { FiSearch, FiShoppingCart, FiMenu, FiBookOpen } from "react-icons/fi";
import HeroLottie from "../Lottie/HeroLottie";

export default function Navbar() {
  return (
    <>
      <div className="min-w-[375px] max-w-md mx-auto overflow-hidden">
        {/* Header/Navbar */}
        <div className="flex items-center justify-between px-6 py-4 text-black">
          <div className="flex items-center gap-0">
            <div className="p-0 bg-white/20 rounded-full">
              <img className="h-10 w-10  " src="/logo.png" alt="logo" />
            </div>
            <h1 className="text-xl font-bold text-[#4e5f6d] z-10">
              CampusLoop
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <FiShoppingCart className="h-6 w-6" />
            </button>
            {/* <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <FiMenu className="h-6 w-6" />
            </button> */}
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-6 pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by City, University or Property"
              className="w-full pl-4 pr-12 py-3 border-none rounded-full bg-[#EEEE] backdrop-blur-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-sm"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-[#EEEE] rounded-full p-2 transition-colors">
              <FiSearch className="h-4 w-4 text-black" />
            </button>
          </div>
        </div>

        {/* Hero Section */}
        {/* <div className="px-6 pb-6 flex items-center justify-between">
          <div className="flex-1">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-black">
              <h2 className="text-shadow-md font-bold mb-1">Save Big on Student</h2>
              <h2 className="text-lg font-bold mb-2">Accommodation</h2>
              <p className="text-sm text-black/90 mb-3">Best student accommodations near top universities & cities</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">📷 Lowest Price</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center ml-4">
            <div className="w-40 h-42 flex-shrink-0">
              <HeroLottie/>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
