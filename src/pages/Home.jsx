import { BiCategory } from "react-icons/bi";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserState from "../components/UserState";
import Catagory from "../components/Catagory";
import ProductCard from "../components/ProductCard";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br  pb-20">
      {/* Main Container */}
      <div className="min-w-[375px] max-w-md mx-auto bg-transparent">
        <Navbar />
        <UserState />
        <Catagory />
        <Products/>
        {/* Add more sections here */}
      </div>
      <Footer />
    </div>
  )
}