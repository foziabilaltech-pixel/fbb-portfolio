// Sab se upar icons import karein
import { FaPinterest, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1e212126] py-6">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 xl:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
        
        {/* Brand */}
        <div className="text-xl font-bold tracking-tight">
          FBB
          <span className="bg-accent-gradient bg-clip-text text-transparent text-[1.3rem]">
            .
          </span>
        </div>
       
        {/* Social Media Icons */}
        <div className="flex items-center gap-5 text-xl text-gray-400">
         
          
          <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E60023] transition-colors duration-200">
            <FaPinterest />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1DA1F2] transition-colors duration-200">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors duration-200">
            <FaLinkedin />
          </a>
          
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} FBB<span className="  bg-accent-gradient bg-clip-text text-transparent text-[1.3rem]">.</span> All rights reserved.
        </div>

      </div>
    </footer>
  );
}