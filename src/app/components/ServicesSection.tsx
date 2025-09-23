import React, { useEffect, useRef, useState } from 'react';
import { Heart, Brain, Bone, Stethoscope, Baby, Wind } from 'lucide-react';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Kardiologie',
      subtitle: 'Herz-Kreislauf-Medizin',
      icon: Heart,
      gradient: 'from-red-500 to-pink-500',
      description: 'Umfassende Diagnostik und Behandlung von Herzerkrankungen mit modernster Technologie und individueller Betreuung.',
      features: ['EKG & Belastungs-EKG', 'Echokardiographie', 'Herzschrittmacher-Kontrolle'],
      availability: '24/7 Notfallbereitschaft'
    },
    {
      title: 'Neurologie',
      subtitle: 'Nervenheilkunde',
      icon: Brain,
      gradient: 'from-purple-500 to-indigo-500',
      description: 'Spezialisierte Behandlung neurologischer Erkrankungen des Gehirns, Rückenmarks und peripherer Nerven.',
      features: ['Neurophysiologie', 'Schlaganfall-Prävention', 'MS-Therapie'],
      availability: 'Terminsprechstunde'
    },
    {
      title: 'Orthopädie',
      subtitle: 'Bewegungsapparat',
      icon: Bone,
      gradient: 'from-emerald-500 to-teal-500',
      description: 'Moderne Behandlung von Erkrankungen des Stütz- und Bewegungsapparates mit minimal-invasiven Verfahren.',
      features: ['Gelenkchirurgie', 'Sportmedizin', 'Wirbelsäulentherapie'],
      availability: 'Mo-Fr verfügbar'
    },
    {
      title: 'Allgemeinmedizin',
      subtitle: 'Hausärztliche Versorgung',
      icon: Stethoscope,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Ganzheitliche hausärztliche Betreuung für die ganze Familie mit Fokus auf Prävention und Früherkennung.',
      features: ['Vorsorgeuntersuchungen', 'Impfungen', 'Gesundheits-Check-ups'],
      availability: 'Täglich geöffnet'
    },
    {
      title: 'Pädiatrie',
      subtitle: 'Kinderheilkunde',
      icon: Baby,
      gradient: 'from-orange-500 to-amber-500',
      description: 'Einfühlsame medizinische Versorgung für Säuglinge, Kinder und Jugendliche in familiärer Atmosphäre.',
      features: ['U-Untersuchungen', 'Entwicklungsdiagnostik', 'Impfberatung'],
      availability: 'Kinderfreundliche Zeiten'
    },
    {
      title: 'Pneumologie',
      subtitle: 'Lungenheilkunde',
      icon: Wind,
      gradient: 'from-sky-500 to-blue-500',
      description: 'Spezialisierte Behandlung von Atemwegs- und Lungenerkrankungen mit modernster Diagnostik.',
      features: ['Lungenfunktion', 'Asthma-Schulung', 'Schlafmedizin'],
      availability: 'Spezialsprechstunde'
    }
  ];
  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-32 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-emerald-500/5"></div>
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        
        {/* Apple-Style Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="text-blue-600/70 text-sm font-light tracking-[0.3em] uppercase mb-4 inline-block">
              Medizinische Leistungen
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-slate-900 mb-6 leading-[0.9] tracking-tight">
              Ihre Gesundheit
              <br />
              <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600">
                im Mittelpunkt
              </span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Umfassende medizinische Versorgung mit modernster Technologie und 
              persönlicher Betreuung für Sie und Ihre Familie
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/60 shadow-xl hover:shadow-2xl hover:bg-white/70 transition-all duration-500 group cursor-pointer">
            <span className="text-slate-800 font-medium">
              Alle Leistungen im Überblick
            </span>
            <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Apple-Style Service Card Component
interface Service {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  description: string;
  features: string[];
  availability: string;
}

const ServiceCard = ({ 
  service, 
  index, 
  isVisible 
}: { 
  service: Service; 
  index: number; 
  isVisible: boolean; 
}) => {
  const delay = `delay-${(index + 3) * 150}`;
  const IconComponent = service.icon;
  
  return (
    <div className={`group transform transition-all duration-1000 ${delay} ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      <div className="relative cursor-pointer transition-all duration-700 hover:scale-[1.02]">
        
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all duration-500 p-8">
          
          {/* Icon with gradient background */}
          <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
            <IconComponent className="w-full h-full text-white" />
            <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-sm"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-blue-600/70 font-light text-sm">
                {service.subtitle}
              </p>
            </div>
            
            <p className="text-slate-600 font-light leading-relaxed">
              {service.description}
            </p>
            
            {/* Features */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-slate-800">Schwerpunkte:</h4>
              <div className="space-y-1">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-600 text-sm font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Availability */}
            <div className="pt-4 border-t border-slate-200/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-light text-slate-500">Verfügbarkeit:</span>
                <span className="text-xs font-medium text-emerald-600">{service.availability}</span>
              </div>
            </div>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </div>
      </div>
    </div>
  );
};