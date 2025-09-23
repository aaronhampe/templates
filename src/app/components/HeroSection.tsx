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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" role="banner" aria-label="Hauptbereich der Website">
      
      {/* Apple-Style: Large Rounded Video Background Container (80% Screen) */}
      <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16">
        <div className="relative w-full h-full max-w-[90vw] max-h-[85vh] rounded-[3rem] lg:rounded-[4rem] overflow-hidden">
          
          {/* Video Background */}
          <video 
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[12s] hover:scale-100" 
            autoPlay 
            loop 
            muted 
            playsInline 
            aria-label="Hintergrundvideo der Praxis Hampe & Kuhn"
          >
            <source src="praxis-platzhalter_komp.mp4" type="video/mp4" />
          </video>
          
          {/* Fallback Gradient für Video Loading */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 opacity-80"></div>
          
          {/* Apple-Style Video Overlays for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20"></div>
          
          {/* Subtle Inner Border für Premium Look */}
          <div className="absolute inset-0 border border-white/[0.08] rounded-[3rem] lg:rounded-[4rem] pointer-events-none"></div>
        </div>
        
        {/* Ambient Glow Around Video Container */}
        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16 pointer-events-none">
          <div className="w-full h-full max-w-[90vw] max-h-[85vh] rounded-[3rem] lg:rounded-[4rem] bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-blue-500/10 blur-3xl scale-110 animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>
      </div>
      
      {/* Subtle Background Pattern Behind Video */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-800"></div>
        <div className="absolute top-32 right-32 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-tr from-emerald-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
      </div>

      {/* Ultra-Minimal Premium Container - Centered on Video Background */}
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Centered Content Layout */}
          <div className="flex items-center justify-center min-h-[85vh]">
            
            {/* Premium Content Container */}
            <div className="text-center relative max-w-4xl mx-auto">
              {/* Enhanced glassmorphism backdrop for text readability on video */}
              <div className="absolute inset-0 -m-12 rounded-[2.5rem] backdrop-blur-2xl bg-black/[0.25] border border-white/[0.12] shadow-[0_0_100px_rgba(0,0,0,0.5)] opacity-90"></div>
              
              {/* Content container */}
              <div className="relative z-10 p-12">
            
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
            
          </div> {/* Close flex container */}
        </div>
      </div>

      {/* Apple-Style Floating Video UI Elements */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {/* Top Right: Live Indicator */}
        <div className={`absolute top-8 right-8 transform transition-all duration-1200 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="flex items-center space-x-3 px-6 py-3 rounded-full backdrop-blur-2xl bg-red-500/20 border border-red-400/30 shadow-lg shadow-red-500/20">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
            <span className="text-red-300 text-sm font-light">
              Live aus der Praxis
            </span>
          </div>
        </div>

        {/* Bottom Left: Video Info */}
        <div className={`absolute bottom-8 left-8 transform transition-all duration-1200 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="space-y-3">
            <div className="px-4 py-2 rounded-full backdrop-blur-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-light shadow-lg shadow-emerald-500/20">
              4K • HDR • 60fps
            </div>
            <div className="px-4 py-2 rounded-full backdrop-blur-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-light shadow-lg shadow-blue-500/20">
              Praxis Rundgang
            </div>
          </div>
        </div>

        {/* Top Left: Quality Badge */}
        <div className={`absolute top-8 left-8 transform transition-all duration-1200 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="px-4 py-2 rounded-full backdrop-blur-xl bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-light shadow-lg shadow-purple-500/20">
            ✨ Modernste Ausstattung
          </div>
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