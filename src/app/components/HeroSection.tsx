import React, { useEffect, useState } from 'react';
import { CalendarIcon, ArrowRightIcon } from 'lucide-react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Staggered animation trigger
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="w-full h-full object-cover scale-105 transition-transform duration-[10s] hover:scale-100" 
          autoPlay 
          loop 
          muted 
          playsInline 
        >
          <source src="praxis-platzhalter_komp.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/60 to-slate-800/70"></div>
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Glassmorphism Container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Impact Headline */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-8 leading-[0.9] tracking-tight">
              Ihre <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Gesundheit</span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-light opacity-90">
                Unsere Expertise
              </span>
            </h1>
          </div>

          {/* Minimal Subline */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-white/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Modernste Medizin. Persönliche Betreuung. Ihr Vertrauen.
            </p>
          </div>

          {/* Premium CTA with Glassmorphism */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              {/* Primary CTA */}
              <a 
                href="#contact" 
                className="group relative overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <div className="flex items-center space-x-3">
                  <CalendarIcon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Termin vereinbaren</span>
                  <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>

              {/* Secondary CTA */}
              <a 
                href="#about" 
                className="group text-white/90 hover:text-white px-6 py-4 font-light hover:bg-white/5 rounded-full transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/10"
              >
                <span className="border-b border-white/30 group-hover:border-white/60 transition-colors duration-300">
                  Mehr erfahren
                </span>
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="mt-16 flex justify-center items-center space-x-8 text-white/60 text-sm font-light">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Sofortige Termine verfügbar</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20"></div>
              <div className="hidden sm:flex items-center space-x-2">
                <span>15+ Jahre Erfahrung</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}