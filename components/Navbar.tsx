
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 px-6 py-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tighter serif hover:text-white/80 transition-colors z-10"
          aria-label="Xinyi Photography - Home"
          onClick={closeMenu}
        >
          XINYI
        </Link>

        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-20"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase">
          <Link 
            to="/" 
            className="hover:text-white/60 transition-colors"
            aria-label="View all photography collections"
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className="hover:text-white/60 transition-colors"
            aria-label="Learn more about Xinyi"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-2 rounded-lg border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 font-semibold tracking-wider shadow-lg hover:shadow-xl hover:border-white"
            aria-label="Get in touch - Contact page"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 md:hidden animate-in fade-in duration-200"
          >
            <div className="flex flex-col gap-0 px-6 py-4 max-w-7xl mx-auto">
              <Link 
                to="/" 
                className="py-4 text-sm font-medium tracking-widest uppercase hover:text-white/60 transition-colors border-b border-white/5"
                aria-label="View all photography collections"
                onClick={closeMenu}
              >
                Work
              </Link>
              <Link 
                to="/about" 
                className="py-4 text-sm font-medium tracking-widest uppercase hover:text-white/60 transition-colors border-b border-white/5"
                aria-label="Learn more about Xinyi"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="py-4 text-sm font-medium tracking-widest uppercase hover:text-white/60 transition-colors"
                aria-label="Get in touch - Contact page"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
