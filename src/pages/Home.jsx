import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import UserState from "../components/UserState";

export default function Home() {
  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <main>
        <UserState/>
      </main>
      <Footer/>
    </>
  )
}