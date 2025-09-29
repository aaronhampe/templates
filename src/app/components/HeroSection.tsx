import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Staggered animation trigger
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white" role="banner" aria-label="Hauptbereich der Website">
      
      {/* Apple-Style: Large Rounded Video Background Container (80% Screen) */}
      <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16">
        <div className="relative w-full h-full max-w-[90vw] max-h-[85vh] rounded-[3rem] lg:rounded-[4rem] overflow-hidden">
          
          {/* Video Background - Clean ohne Overlays */}
          <video 
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[12s] hover:scale-100" 
            autoPlay 
            loop 
            muted 
            playsInline 
            aria-label="Einblick in die Praxis Hampe & Kuhn"
          >
            <source src="praxis-platzhalter_komp.mp4" type="video/mp4" />
            {/* Fallback Gradient für Video Loading */}
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-gray-600 text-lg font-light">Video wird geladen...</span>
            </div>
          </video>
          
          {/* Minimaler Overlay nur für Text-Lesbarkeit */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
          
          {/* Subtle Inner Border für Premium Look */}
          <div className="absolute inset-0 border border-gray-200/20 rounded-[3rem] lg:rounded-[4rem] pointer-events-none"></div>
        </div>
        
        {/* Subtle Shadow um Video Container */}
        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16 pointer-events-none">
          <div className="w-full h-full max-w-[90vw] max-h-[85vh] rounded-[3rem] lg:rounded-[4rem] shadow-2xl shadow-black/10"></div>
        </div>
      </div>
      
      {/* Minimal Background Pattern Behind Video */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white"></div>
        {/* Sehr subtile geometrische Elemente */}
        <div className="absolute top-32 right-32 w-96 h-96 bg-gradient-to-br from-gray-50 to-transparent rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-tr from-gray-50 to-transparent rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Ultra-Minimal Premium Container - Centered on Video Background */}
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Centered Content Layout */}
          <div className="flex items-center justify-start min-h-[85vh]">
            
            {/* Premium Content Container */}
            <div className="text-left relative max-w-xl md:max-w-2xl">
              
              {/* Compact glass card around the text */}
              <div className="relative z-10 p-8 md:p-12 rounded-2xl backdrop-blur-xl bg-white/70 border border-gray-200/60 shadow-lg">
            
                {/* Apple-Style Creative Headline - VERSION 1: Sophisticated Hierarchy */}
                <div className={`transform transition-all duration-1200 delay-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div className="mb-4">
                    <span className="text-gray-600 text-sm font-light tracking-[0.2em] uppercase">
                      Ihre Gesundheit
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-gray-900 mb-3 leading-[0.9] tracking-tight">
                    in den besten
                    <br />
                    <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-gray-900 to-blue-600">
                      Händen
                    </span>
                  </h1>
                  <div className="text-gray-700 text-lg md:text-xl font-light tracking-wide mb-12">
                    Modernste Medizin trifft persönliche Betreuung
                  </div>
                </div>

                {/* Apple-style Glassmorphism Trust Card */}
                <div className={`transform transition-all duration-1200 delay-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}>
                  <div className="inline-flex items-center space-x-6 mb-8 px-6 py-3 rounded-2xl backdrop-blur-xl bg-gray-50/80 border border-gray-200/50 shadow-lg shadow-black/5">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/30"></div>
                      <span className="text-gray-700 text-sm font-light">Termine heute</span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="hidden md:flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full shadow-lg shadow-blue-500/30"></div>
                      <span className="text-gray-700 text-sm font-light">Gemeinschaftspraxis</span>
                    </div>
                  </div>
                </div>

                {/* Apple-style Glassmorphism CTA */}
                <div className={`transform transition-all duration-1200 delay-900 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    
                    {/* Apple-Style Magnetic CTA */}
                    <div className="group relative">
                      <a 
                        href="#contact" 
                        className="relative inline-flex items-center space-x-4 px-8 py-4 rounded-2xl backdrop-blur-2xl bg-blue-600 hover:bg-blue-700 border border-blue-600 hover:border-blue-700 transition-all duration-700 shadow-xl hover:shadow-blue-600/20 hover:scale-105 hover:-translate-y-1"
                      >
                        {/* Magnetic dot */}
                        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-white rounded-full shadow-lg shadow-emerald-400/50 group-hover:shadow-emerald-400/80 group-hover:scale-110 transition-all duration-500"></div>
                        
                        <div className="flex flex-col">
                          <span className="text-white text-sm font-medium tracking-wide">
                            Jetzt Termin
                          </span>
                          <span className="text-white/80 text-xs font-light -mt-1">
                            Heute verfügbar
                          </span>
                        </div>
                        
                        <ArrowRightIcon size={18} className="text-white/90 group-hover:text-white group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                        
                        {/* Orbital glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-emerald-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl"></div>
                      </a>
                    </div>
                    
                    {/* Secondary Phone Button */}
                    <a 
                      href="tel:+49301234567" 
                      className="group px-6 py-3 rounded-full backdrop-blur-lg bg-gray-100/80 hover:bg-gray-200/80 border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 text-sm font-light transition-all duration-300 shadow-lg shadow-black/5"
                    >
                      030 · 123 45 67
                    </a>
                    
                  </div>
                </div>

              </div> {/* Close content container */}
            </div> {/* Close text container */}
            
          </div> {/* Close flex container */}
        </div>
      </div>

      {/* Apple-style Scroll Indicator */}
      <div className="absolute bottom-8 left-8 md:left-16">
        <div className={`transform transition-all duration-1200 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          <button 
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative p-4 rounded-full backdrop-blur-lg bg-white/80 hover:bg-white/90 border border-gray-200/50 hover:border-gray-300/50 transition-all duration-500 shadow-lg shadow-black/5 hover:shadow-black/10 hover:scale-105"
          >
            <div className="flex flex-col items-center space-y-1 text-gray-600 group-hover:text-gray-800">
              <div className="w-px h-8 bg-current group-hover:h-10 transition-all duration-300"></div>
              <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
            </div>
            
            {/* Tooltip */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-3 py-1 rounded-lg backdrop-blur-xl bg-white/90 border border-gray-200/50 text-gray-700 text-xs font-light whitespace-nowrap shadow-lg">
                Mehr entdecken
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Accessibility Skip Link */}
      <a 
        href="#content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md font-medium z-50"
      >
        Zum Hauptinhalt springen
      </a>
    </section>
  );
}