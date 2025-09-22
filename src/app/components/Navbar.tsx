import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, MenuIcon, XIcon, CalendarIcon, MapPinIcon } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Langenhagen');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Consider it scrolled after 20px
      setIsScrolled(scrollY > 20);
      
      // Dynamic background detection
      // Hero section (dark) vs other sections (light)
      const isInHeroSection = scrollY < viewportHeight * 0.8;
      setIsDarkBackground(isInHeroSection);
    };
    
    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 px-4 md:px-6 py-4">
      <div className="container mx-auto max-w-6xl">
        {/* Dynamic Glassmorphism Header */}
        <div className={`
          backdrop-blur-xl rounded-2xl px-6 py-4 shadow-2xl
          transition-all duration-500 ease-out
          ${isDarkBackground 
            ? 'bg-white/[0.12] border border-white/[0.18] shadow-black/10' 
            : 'bg-black/[0.08] border border-black/[0.12] shadow-white/20'
          }
          ${isScrolled 
            ? isDarkBackground 
              ? 'bg-white/[0.18] border-white/[0.25] shadow-black/20' 
              : 'bg-black/[0.15] border-black/[0.2] shadow-white/30'
            : ''
          }
        `}>
          <div className="flex items-center justify-between">
            
            {/* Left Side - Location & Logo */}
            <div className="flex items-center space-x-6">
              {/* Location Selector */}
              <div className="hidden md:relative md:inline-block">
                <button
                  onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                  className={`flex items-center transition-colors duration-500 hover:scale-105 ${
                    isDarkBackground 
                      ? 'text-white/80 hover:text-white' 
                      : 'text-slate-700/80 hover:text-slate-900'
                  }`}
                >
                  <MapPinIcon size={16} className="mr-2" />
                  <span className="font-light text-sm mr-1">{selectedLocation}</span>
                  <ChevronDownIcon 
                    size={14} 
                    className={`transition-transform duration-300 ${
                      locationDropdownOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                {/* Glassmorphism Dropdown */}
                {locationDropdownOpen && (
                  <>
                    {/* Backdrop */}
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setLocationDropdownOpen(false)}
                    />
                    
                    {/* Dropdown Menu */}
                    <div className={`
                      absolute top-full left-0 mt-2 py-2 min-w-[140px] rounded-xl backdrop-blur-xl border shadow-2xl z-20
                      transition-all duration-300 origin-top
                      ${isDarkBackground
                        ? 'bg-white/[0.15] border-white/[0.2] shadow-black/20'
                        : 'bg-black/[0.1] border-black/[0.15] shadow-white/30'
                      }
                    `}>
                      <LocationOption 
                        location="Langenhagen" 
                        isSelected={selectedLocation === 'Langenhagen'}
                        isDark={isDarkBackground}
                        onClick={() => {
                          setSelectedLocation('Langenhagen');
                          setLocationDropdownOpen(false);
                        }}
                      />
                      <LocationOption 
                        location="Garbsen" 
                        isSelected={selectedLocation === 'Garbsen'}
                        isDark={isDarkBackground}
                        onClick={() => {
                          setSelectedLocation('Garbsen');
                          setLocationDropdownOpen(false);
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
              
              {/* Logo/Brand */}
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center transition-all duration-500 ${
                  isDarkBackground
                    ? 'bg-white/[0.15] border-white/[0.2]'
                    : 'bg-black/[0.1] border-black/[0.15]'
                }`}>
                  <span className={`font-semibold text-lg transition-colors duration-500 ${
                    isDarkBackground ? 'text-white' : 'text-slate-800'
                  }`}>C</span>
                </div>
                <div className={`leading-tight transition-colors duration-500 ${
                  isDarkBackground ? 'text-white/90' : 'text-slate-800/90'
                }`}>
                  <div className="text-sm font-medium tracking-wide">Chirurgische & Orthopädische</div>
                  <div className={`text-xs font-light transition-opacity duration-500 ${
                    isDarkBackground ? 'opacity-80' : 'opacity-70'
                  }`}>Gemeinschaftspraxis</div>
                </div>
              </div>
            </div>

            {/* Center - Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <NavItem label="Praxis" href="#about" isDark={isDarkBackground} />
              <NavItem label="Leistungen" href="#services" isDark={isDarkBackground} />
              <NavItem label="Ärzteteam" href="#doctors" isDark={isDarkBackground} />
              <NavItem label="Kontakt" href="#contact" isDark={isDarkBackground} />
            </nav>

            {/* Right Side - CTA & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Appointment Button */}
              <a
                href="#contact"
                className={`hidden sm:inline-flex items-center space-x-2 backdrop-blur-md border px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 hover:scale-105 shadow-lg ${
                  isDarkBackground
                    ? 'bg-white/[0.15] hover:bg-white/[0.25] border-white/[0.2] hover:border-white/[0.3] text-white/90 hover:text-white'
                    : 'bg-black/[0.08] hover:bg-black/[0.15] border-black/[0.12] hover:border-black/[0.2] text-slate-800/90 hover:text-slate-900'
                }`}
              >
                <CalendarIcon size={16} />
                <span>Termin</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-full transition-all duration-500 ${
                  isDarkBackground
                    ? 'bg-white/[0.1] hover:bg-white/[0.2] text-white/80 hover:text-white'
                    : 'bg-black/[0.08] hover:bg-black/[0.15] text-slate-700/80 hover:text-slate-900'
                }`}
              >
                {mobileMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={`lg:hidden mt-6 pt-6 border-t transition-colors duration-500 ${
              isDarkBackground ? 'border-white/[0.15]' : 'border-black/[0.12]'
            }`}>
              <div className="flex flex-col space-y-4">
                <MobileNavItem label="Praxis" href="#about" onClick={() => setMobileMenuOpen(false)} isDark={isDarkBackground} />
                <MobileNavItem label="Leistungen" href="#services" onClick={() => setMobileMenuOpen(false)} isDark={isDarkBackground} />
                <MobileNavItem label="Ärzteteam" href="#doctors" onClick={() => setMobileMenuOpen(false)} isDark={isDarkBackground} />
                <MobileNavItem label="Kontakt" href="#contact" onClick={() => setMobileMenuOpen(false)} isDark={isDarkBackground} />
                
                {/* Mobile CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium mt-4 transition-colors duration-500 ${
                    isDarkBackground
                      ? 'bg-white/[0.15] text-white/90'
                      : 'bg-black/[0.1] text-slate-800/90'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <CalendarIcon size={16} />
                  <span>Termin vereinbaren</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// Desktop Navigation Item Component
const NavItem = ({ label, href, isDark }: { label: string; href: string; isDark: boolean }) => {
  return (
    <a
      href={href}
      className={`group flex items-center transition-colors duration-500 ${
        isDark 
          ? 'text-white/70 hover:text-white' 
          : 'text-slate-600/80 hover:text-slate-900'
      }`}
    >
      <span className="font-light text-sm mr-1">{label}</span>
      <ChevronDownIcon size={12} className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );
};

// Mobile Navigation Item Component
const MobileNavItem = ({ label, href, onClick, isDark }: { label: string; href: string; onClick: () => void; isDark: boolean }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between py-2 transition-colors duration-500 ${
        isDark 
          ? 'text-white/80 hover:text-white' 
          : 'text-slate-700/80 hover:text-slate-900'
      }`}
    >
      <span className="font-light">{label}</span>
      <ChevronDownIcon size={16} className="opacity-60" />
    </a>
  );
};

// Location Dropdown Option Component
const LocationOption = ({ 
  location, 
  isSelected, 
  isDark, 
  onClick 
}: { 
  location: string; 
  isSelected: boolean; 
  isDark: boolean; 
  onClick: () => void; 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full px-4 py-2 text-left text-sm font-light transition-all duration-300
        flex items-center justify-between group
        ${isDark
          ? 'text-white/80 hover:text-white hover:bg-white/[0.1]'
          : 'text-slate-700/80 hover:text-slate-900 hover:bg-black/[0.08]'
        }
        ${isSelected ? 'font-medium' : ''}
      `}
    >
      <span>{location}</span>
      {isSelected && (
        <div className={`w-2 h-2 rounded-full ${
          isDark ? 'bg-white/60' : 'bg-slate-600/60'
        }`} />
      )}
    </button>
  );
};