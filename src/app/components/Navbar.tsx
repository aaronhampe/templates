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
            <span className={`text-xl font-semibold transition-colors duration-300 ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              MedCare Clinic
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className={`font-light hover:font-normal transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white/90 hover:text-white'}`}>
              Über uns
            </a>
            <a href="#doctors" className={`font-light hover:font-normal transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white/90 hover:text-white'}`}>
              Ärzteteam
            </a>
            <a href="#services" className={`font-light hover:font-normal transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white/90 hover:text-white'}`}>
              Leistungen
            </a>
            <a href="#contact" className={`font-light hover:font-normal transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white/90 hover:text-white'}`}>
              Kontakt
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 focus:outline-none">
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#about" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#doctors" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Our Doctors
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>}
      </div>
    </nav>;
}