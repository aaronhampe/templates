import React, { useEffect, useRef, useState } from 'react';
import { HeartPulseIcon, ShieldCheckIcon, AwardIcon, SparklesIcon } from 'lucide-react';

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-emerald-500/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        
        {/* Apple-Style Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="text-blue-600/70 text-sm font-light tracking-[0.3em] uppercase mb-4 inline-block">
              Unsere Praxis
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-slate-900 mb-6 leading-[0.9] tracking-tight">
              Exzellenz in der
              <br />
              <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-slate-800 to-emerald-600">
                Patientenversorgung
              </span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Wo modernste Medizin auf persönliche Betreuung trifft
            </p>
          </div>
        </div>
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Story & Stats */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-6 leading-relaxed">
                  Eine neue Ära der 
                  <span className="text-blue-600"> Medizin</span>
                </h3>
                <p className="text-slate-600 text-lg font-light leading-relaxed mb-6">
                  Seit 2005 verbinden wir modernste medizinische Technologie mit der 
                  persönlichen Betreuung, die unsere Patienten verdienen. Unser Team 
                  hochqualifizierter Ärzte setzt neue Standards in der Gesundheitsversorgung.
                </p>
                <p className="text-slate-600 text-lg font-light leading-relaxed">
                  In unserer hochmodernen Praxis schaffen wir eine Atmosphäre des 
                  Vertrauens und der Exzellenz, in der jeder Patient individuelle 
                  Aufmerksamkeit und die bestmögliche Behandlung erhält.
                </p>
              </div>

              {/* Apple-Style Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <StatCard number="20+" label="Jahre Erfahrung" delay="delay-600" isVisible={isVisible} />
                <StatCard number="15+" label="Fachärzte" delay="delay-700" isVisible={isVisible} />
                <StatCard number="25k+" label="Zufriedene Patienten" delay="delay-800" isVisible={isVisible} />
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <FeatureCard
              icon={<HeartPulseIcon className="w-6 h-6" />}
              title="Patientenzentrierte Betreuung"
              description="Ihre Bedürfnisse, Ihr Komfort und Ihr Wohlbefinden stehen im Mittelpunkt unserer Behandlung."
              delay="delay-500"
              isVisible={isVisible}
            />
            <FeatureCard
              icon={<ShieldCheckIcon className="w-6 h-6" />}
              title="Modernste Technologie"
              description="Wir nutzen die neuesten medizinischen Technologien für präzise Diagnosen und optimale Behandlungsergebnisse."
              delay="delay-600"
              isVisible={isVisible}
            />
            <FeatureCard
              icon={<AwardIcon className="w-6 h-6" />}
              title="Expertenteam"
              description="Unsere Ärzte sind führende Experten in ihren Fachgebieten mit umfassender Ausbildung und Erfahrung."
              delay="delay-700"
              isVisible={isVisible}
            />
            <FeatureCard
              icon={<SparklesIcon className="w-6 h-6" />}
              title="Ganzheitlicher Ansatz"
              description="Wir behandeln nicht nur Symptome, sondern betrachten Ihre Gesundheit als Ganzes für nachhaltige Ergebnisse."
              delay="delay-800"
              isVisible={isVisible}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Apple-Style Stat Card Component
const StatCard = ({ number, label, delay, isVisible }: { 
  number: string; 
  label: string; 
  delay: string; 
  isVisible: boolean; 
}) => (
  <div className={`text-center transform transition-all duration-1000 ${delay} ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
  }`}>
    <div className="text-3xl md:text-4xl font-extralight text-slate-900 mb-2">
      {number}
    </div>
    <p className="text-slate-600 text-sm font-light tracking-wide">
      {label}
    </p>
  </div>
);

// Apple-Style Feature Card Component
const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay, 
  isVisible 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: string; 
  isVisible: boolean; 
}) => (
  <div className={`group transform transition-all duration-1000 ${delay} ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
  }`}>
    <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/70 border border-white/50 shadow-xl hover:shadow-2xl hover:bg-white/80 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
      {/* Glassmorphism accent */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-emerald-500/10 text-blue-600 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-medium text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h4>
          <p className="text-slate-600 font-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out opacity-0 group-hover:opacity-100"></div>
    </div>
  </div>
);