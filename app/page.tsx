import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Community from "./components/Community";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main id="acasa" className="min-h-screen overflow-hidden bg-[#5f1905]">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Community />
      <Gallery />
      <Contact />
      <BackToTop />
    </main>
  );
}
