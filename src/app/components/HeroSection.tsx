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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" role="banner" aria-label="Hauptbereich der Website">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[10s] hover:scale-100"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" fill="none">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.9" />
                    <stop offset="100%" style="stop-color:#1e3a8a;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <rect width="1920" height="1080" fill="url(#grad1)"/>
                <circle cx="1400" cy="300" r="200" fill="white" opacity="0.1"/>
                <circle cx="500" cy="700" r="150" fill="white" opacity="0.08"/>
                <rect x="200" y="200" width="300" height="2" fill="white" opacity="0.2"/>
                <rect x="1200" y="800" width="400" height="2" fill="white" opacity="0.15"/>
              </svg>
            `)}`
          }}
        />
        
        {/* Video (will overlay the background image when loaded) */}
        <video 
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[10s] hover:scale-100" 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxZTQwYWY7c3RvcC1vcGFjaXR5OjEiIC8+CjxzdG9wIG9mZnNldD0iNTAlIiBzdHlsZT0ic3RvcC1jb2xvcjojM2I4MmY2O3N0b3Atb3BhY2l0eTowLjkiIC8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzFlM2E4YTtzdG9wLW9wYWNpdHk6MSIgLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSJ1cmwoI2dyYWQxKSIvPgo8Y2lyY2xlIGN4PSIxNDAwIiBjeT0iMzAwIiByPSIyMDAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjEiLz4KPGNpcmNsZSBjeD0iNTAwIiBjeT0iNzAwIiByPSIxNTAiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjA4Ii8+CjxyZWN0IHg9IjIwMCIgeT0iMjAwIiB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjIiLz4KPHJlY3QgeD0iMTIwMCIgeT0iODAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjE1Ii8+Cjwvc3ZnPgo="
          aria-label="Hintergrundvideo der Praxis"
        >
          <source src="praxis-platzhalter_komp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle gray overlay for enhanced text contrast */}
        <div className="absolute inset-0 bg-gray-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-gray-800/15 to-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent"></div>
      </div>

      {/* Ultra-Minimal Premium Container */}
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Left-aligned Premium Content with subtle background */}
          <div className="text-center md:text-left md:max-w-2xl relative">
            {/* Subtle glassmorphism backdrop for text readability */}
            <div className="absolute inset-0 -m-8 rounded-3xl backdrop-blur-md bg-black/[0.15] border border-white/[0.08] shadow-2xl shadow-black/20 opacity-80"></div>
            
            {/* Content container */}
            <div className="relative z-10 p-8">
            
              {/* Apple-Style Creative Headline - VERSION 1: Sophisticated Hierarchy */}
            <div className={`transform transition-all duration-1200 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="mb-4">
                <span className="text-white/60 text-sm font-light tracking-[0.2em] uppercase">
                  Ihre Gesundheit
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-3 leading-[0.9] tracking-tight">
                in den besten
                <br />
                <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-200">
                  Händen
                </span>
              </h1>
              <div className="text-white/70 text-lg md:text-xl font-light tracking-wide mb-12">
                Modernste Medizin trifft persönliche Betreuung
              </div>
            </div>

            {/* Apple-style Glassmorphism Trust Card */}
            <div className={`transform transition-all duration-1200 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}>
              <div className="inline-flex items-center space-x-6 mb-8 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/[0.08] border border-white/[0.12] shadow-2xl shadow-black/20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
                  <span className="text-white/80 text-sm font-light">Termine heute</span>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="hidden md:flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <span className="text-white/80 text-sm font-light">Gemeinschaftspraxis</span>
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
                    className="relative inline-flex items-center space-x-4 px-8 py-4 rounded-2xl backdrop-blur-2xl bg-white/[0.12] hover:bg-white/[0.2] border border-white/[0.15] hover:border-white/[0.3] transition-all duration-700 shadow-2xl hover:shadow-white/10 hover:scale-105 hover:-translate-y-1"
                  >
                    {/* Magnetic dot */}
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full shadow-lg shadow-emerald-400/50 group-hover:shadow-emerald-400/80 group-hover:scale-110 transition-all duration-500"></div>
                    
                    <div className="flex flex-col">
                      <span className="text-white/90 text-sm font-medium tracking-wide">
                        Jetzt Termin
                      </span>
                      <span className="text-white/60 text-xs font-light -mt-1">
                        Heute verfügbar
                      </span>
                    </div>
                    
                    <ArrowRightIcon size={18} className="text-white/70 group-hover:text-white group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                    
                    {/* Orbital glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl"></div>
                  </a>
                </div>
                
                {/* Secondary Glassmorphism Phone Button */}
                <a 
                  href="tel:+49301234567" 
                  className="group px-6 py-3 rounded-full backdrop-blur-lg bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.15] hover:border-white/[0.25] text-white/70 hover:text-white/90 text-sm font-light transition-all duration-300 shadow-lg shadow-black/10"
                >
                  030 · 123 45 67
                </a>
                
              </div>
            </div>

            </div> {/* Close content container */}
          </div> {/* Close text container */}
        </div>
      </div>

      {/* Apple-style Glassmorphism Scroll Indicator */}
      <div className="absolute bottom-8 left-8 md:left-16">
        <div className={`transform transition-all duration-1200 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          <button 
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative p-4 rounded-full backdrop-blur-lg bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.12] hover:border-white/[0.2] transition-all duration-500 shadow-lg shadow-black/10 hover:shadow-black/20 hover:scale-105"
          >
            <div className="flex flex-col items-center space-y-1 text-white/60 group-hover:text-white/80">
              <div className="w-px h-8 bg-current group-hover:h-10 transition-all duration-300"></div>
              <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
            </div>
            
            {/* Tooltip */}
            <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="px-3 py-1 rounded-lg backdrop-blur-xl bg-white/[0.1] border border-white/[0.15] text-white/80 text-xs font-light whitespace-nowrap">
                Mehr entdecken
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Accessibility Skip Link */}
      <a 
        href="#content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-blue-900 px-4 py-2 rounded-md font-medium z-50"
      >
        Zum Hauptinhalt springen
      </a>
    </section>
  );
}