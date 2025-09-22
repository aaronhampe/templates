import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'backdrop-blur-md bg-white/95 shadow-lg border-b border-white/20 py-3' : 'backdrop-blur-sm bg-white/5 py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className={`text-lg font-light tracking-widest transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white/80'}`}>
              MEDCARE
            </span>
          </div>
          {/* Ultra-minimal Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            <a href="#about" className={`text-xs font-light tracking-widest uppercase transition-all duration-300 ${isScrolled ? 'text-slate-600 hover:text-slate-800' : 'text-white/60 hover:text-white/90'}`}>
              Praxis
            </a>
            <a href="#contact" className={`text-xs font-light tracking-widest uppercase transition-all duration-300 ${isScrolled ? 'text-slate-600 hover:text-slate-800' : 'text-white/60 hover:text-white/90'}`}>
              Kontakt
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-slate-700' : 'text-white/70'}`}>
              {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
        {/* Minimal Mobile Menu */}
        {mobileMenuOpen && <div className="md:hidden mt-6 pb-6">
            <div className="flex flex-col space-y-4">
              <a href="#about" className={`text-xs font-light tracking-widest uppercase transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/70'}`} onClick={() => setMobileMenuOpen(false)}>
                Praxis
              </a>
              <a href="#contact" className={`text-xs font-light tracking-widest uppercase transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/70'}`} onClick={() => setMobileMenuOpen(false)}>
                Kontakt
              </a>
            </div>
          </div>}
      </div>
    </nav>;
}