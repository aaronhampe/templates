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
      
      {/* Apple-Style: Subtle Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-800 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-emerald-500/10 animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        
        {/* Subtle geometric patterns - Apple loves clean geometry */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-tr from-emerald-400/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }}></div>
      </div>

      {/* Ultra-Minimal Premium Container */}
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Apple-Style Split Layout: Content + Video */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Left: Premium Content */}
            <div className="text-center lg:text-left relative order-2 lg:order-1">
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
            
            {/* Right: Cinema Display - Großes Immersives Video */}
            <div className="relative order-1 lg:order-2">
              <div className={`transform transition-all duration-1500 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
              }`}>
                
                {/* Cinema Video Container - Like Apple Studio Display */}
                <div className="relative group">
                  {/* Massive Video Card mit Apple Pro Display Proportionen */}
                  <div className="relative rounded-[2rem] overflow-hidden backdrop-blur-3xl bg-black/[0.15] border border-white/[0.08] shadow-[0_0_80px_rgba(0,0,0,0.6)] hover:shadow-[0_0_120px_rgba(0,0,0,0.8)] transition-all duration-1000 hover:scale-[1.01] hover:-translate-y-1">
                    
                    {/* Video Element - Cinema Größe */}
                    <div className="aspect-[4/3] lg:aspect-[16/10] relative overflow-hidden h-[400px] lg:h-[500px]">
                      <video 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        aria-label="Immersiver Einblick in die Praxis Hampe & Kuhn"
                      >
                        <source src="praxis-platzhalter_komp.mp4" type="video/mp4" />
                        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-500 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                            <span className="text-white/90 text-lg font-light">Praxis Video lädt...</span>
                          </div>
                        </div>
                      </video>
                      
                      {/* Cinematic Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                    </div>
                    
                    {/* Cinema-Style UI Overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Top Bar */}
                      <div className="absolute top-0 left-0 right-0 p-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                            <span className="text-white/90 text-lg font-light">
                              Live Stream
                            </span>
                          </div>
                          <div className="px-4 py-2 rounded-full backdrop-blur-xl bg-black/30 border border-white/20 text-white/80 text-sm font-light">
                            4K HDR
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Cinema Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="space-y-4">
                          <h3 className="text-white text-2xl font-light">
                            Praxis Hampe & Kuhn
                          </h3>
                          <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                              <span className="text-white/80 text-sm">Modernste Ausstattung</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-white/80 text-sm">Persönliche Betreuung</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                              <span className="text-white/80 text-sm">Zwei Standorte</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pro Display Stand Effekt */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-4 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent rounded-full blur-sm"></div>
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-r from-transparent via-gray-400/[0.08] to-transparent rounded-full blur-lg"></div>
                  
                  {/* Cinema Ambient Lighting */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/5 via-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 blur-3xl scale-125"></div>
                </div>
                
              </div>
            </div>
            
          </div> {/* Close grid container */}
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