import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin"; // Admin ko import kiya

function App() {
  // Current URL check karne ke liye
  const location = useLocation();

  // Agar URL /admin hai, toh Navbar aur Footer ko chhupa dein
  const isAdminPage = location.pathname === '/admin';

  return (
    <>
      {/* Agar Admin page NAHI hai, tabhi Navbar dikhao */}
      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* Admin ka rasta */}
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {/* Agar Admin page NAHI hai, tabhi Footer dikhao */}
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;