// 1. Data import karein (Rasta apne folder ke hisaab se check kar lein)
import { navLinks } from '../data/portfolioData'; 
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  // 2. Current page check karne ke liye
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 h-20 flex items-center justify-between gap-2">
        
        {/* Logo */}
        <Link to="/" className="text-xl sm:text-2xl font-bold text-white tracking-tight shrink-0">
          FBB<span className="text-cyan-400">.</span>
        </Link>

        {/* Nav Links Container */}
        <div className="flex items-center gap-1 sm:gap-2 bg-white/5 border border-white/10 rounded-full px-1 sm:px-2 py-1 overflow-x-auto no-scrollbar max-w-full">
          
          {/* 3. Yahan imported data ko map kar rahe hain */}
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path; // Check active page
            
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-cyan-400 text-black shadow-lg shadow-cyan-400/20" // Agar page active hai
                    : "text-gray-400 hover:text-white hover:bg-white/10" // Agar active nahi hai
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Let's Talk Button */}
        <div className="shrink-0">
          <Link
            to="/contact"
            className="bg-cyan-400 text-black px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/20 whitespace-nowrap"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}