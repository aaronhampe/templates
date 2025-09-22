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
        {/* Ultra-subtle overlay - let video breathe but ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/50"></div>
      </div>

      {/* Ultra-Minimal Premium Container */}
      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Subtle Premium Headline */}
          <div className={`transform transition-all duration-1200 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-16 leading-relaxed tracking-wide drop-shadow-2xl" style={{textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)'}}>
              Medizinische Exzellenz
            </h1>
          </div>

          {/* Single Minimal CTA */}
          <div className={`transform transition-all duration-1200 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}>
            <a 
              href="#contact" 
              className="group inline-flex items-center space-x-3 text-white/90 hover:text-white text-sm font-light tracking-wider uppercase border-b border-white/20 hover:border-white/40 pb-1 transition-all duration-500 drop-shadow-lg"
              style={{textShadow: '0 2px 10px rgba(0,0,0,0.7)'}}
            >
              <span>Termin</span>
              <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

        </div>
      </div>

      {/* Ultra-minimal scroll hint */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-8 bg-white/20"></div>
      </div>
    </section>
  );
}