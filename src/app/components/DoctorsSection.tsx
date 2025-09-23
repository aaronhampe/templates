import React, { useEffect, useRef, useState } from 'react';
import { Star, Award, Calendar, Crown, GraduationCap } from 'lucide-react';

export default function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
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

  const leadingDoctors = [
    {
      name: 'Prof. Dr. med. Sarah Müller',
      specialty: 'Kardiologie',
      specialtyEng: 'Chefärztin für Herz-Kreislauf-Erkrankungen',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Über 20 Jahre Erfahrung in der Kardiologie mit Spezialisierung auf interventionelle Kardiologie und Herzschrittmacher-Therapie.',
      experience: '20+ Jahre',
      certifications: ['Chefärztin Kardiologie', 'Interventionelle Kardiologie', 'Notfallmedizin'],
      availability: 'Mo-Fr verfügbar',
      isLeading: true
    },
    {
      name: 'Prof. Dr. med. Michael Schmidt',
      specialty: 'Neurologie',
      specialtyEng: 'Chefarzt für neurologische Erkrankungen',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Führender Spezialist für neurologische Störungen mit Fokus auf Multiple Sklerose und neurodegenerative Erkrankungen.',
      experience: '18+ Jahre',
      certifications: ['Chefarzt für Neurologie', 'MS-Spezialist', 'Elektrophysiologie'],
      availability: 'Di-Sa verfügbar',
      isLeading: true
    },
    {
      name: 'Dr. med. Anna Weber',
      specialty: 'Orthopädie',
      specialtyEng: 'Leitende Oberärztin für Orthopädie und Unfallchirurgie',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Expertin für minimalinvasive Chirurgie und Sportmedizin mit internationaler Ausbildung und Forschungsschwerpunkt.',
      experience: '15+ Jahre',
      certifications: ['Oberärztin Orthopädie', 'Sportmedizin', 'Arthroskopie'],
      availability: 'Mo-Do verfügbar',
      isLeading: true
    },
    {
      name: 'Dr. med. Thomas Hoffmann',
      specialty: 'Innere Medizin',
      specialtyEng: 'Leitender Oberarzt für Innere Medizin',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Spezialist für Gastroenterologie und Hepatologie mit über 16 Jahren klinischer Erfahrung.',
      experience: '16+ Jahre',
      certifications: ['Oberarzt Innere Medizin', 'Gastroenterologie', 'Hepatologie'],
      availability: 'Mo-Mi, Fr verfügbar',
      isLeading: true
    },
    {
      name: 'Dr. med. Julia Richter',
      specialty: 'Dermatologie',
      specialtyEng: 'Leitende Oberärztin für Dermatologie',
      image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Expertin für Dermatoonkologie und ästhetische Dermatologie mit Schwerpunkt auf innovativen Therapieverfahren.',
      experience: '14+ Jahre',
      certifications: ['Oberärztin Dermatologie', 'Dermatoonkologie', 'Ästhetische Medizin'],
      availability: 'Di-Fr verfügbar',
      isLeading: true
    },
    {
      name: 'Dr. med. Robert Klein',
      specialty: 'Radiologie',
      specialtyEng: 'Leitender Oberarzt für Radiologie',
      image: 'https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Spezialist für interventionelle Radiologie und moderne Bildgebungsverfahren mit Fokus auf minimal-invasive Eingriffe.',
      experience: '17+ Jahre',
      certifications: ['Oberarzt Radiologie', 'Interventionelle Radiologie', 'CT/MRT-Diagnostik'],
      availability: 'Mo-Do verfügbar',
      isLeading: true
    }
  ];

  const employedDoctors = [
    {
      name: 'Dr. med. Lisa Bauer',
      specialty: 'Allgemeinmedizin',
      specialtyEng: 'Fachärztin für Allgemeinmedizin',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Hausärztliche Versorgung mit Schwerpunkt auf Präventivmedizin und ganzheitliche Patientenbetreuung.',
      experience: '8+ Jahre',
      certifications: ['Facharzt Allgemeinmedizin', 'Präventivmedizin', 'Palliativmedizin'],
      availability: 'Mo-Fr verfügbar',
      isLeading: false
    },
    {
      name: 'Dr. med. Marco Rossi',
      specialty: 'Anästhesiologie',
      specialtyEng: 'Facharzt für Anästhesiologie',
      image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Spezialist für Narkose und Schmerztherapie mit Erfahrung in der perioperativen Medizin.',
      experience: '10+ Jahre',
      certifications: ['Facharzt Anästhesiologie', 'Schmerztherapie', 'Intensivmedizin'],
      availability: 'Di-Sa verfügbar',
      isLeading: false
    },
    {
      name: 'Dr. med. Petra Lange',  
      specialty: 'Gynäkologie',
      specialtyEng: 'Fachärztin für Frauenheilkunde',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Frauenheilkunde und Geburtshilfe mit Schwerpunkt auf pränatale Diagnostik und Krebsvorsorge.',
      experience: '12+ Jahre',
      certifications: ['Facharzt Gynäkologie', 'Geburtshilfe', 'Pränatale Diagnostik'],
      availability: 'Mo-Do verfügbar',
      isLeading: false
    },
    {
      name: 'Dr. med. David Zimmermann',
      specialty: 'Urologie',
      specialtyEng: 'Facharzt für Urologie',
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bio: 'Urologische Behandlungen mit Fokus auf minimal-invasive Operationstechniken und Krebstherapie.',
      experience: '9+ Jahre',
      certifications: ['Facharzt Urologie', 'Minimal-invasive Chirurgie', 'Onkologie'],
      availability: 'Mi-Fr verfügbar',
      isLeading: false
    }
  ];
  return (
    <section 
      ref={sectionRef}
      id="doctors" 
      className="relative py-32 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        
        {/* Apple-Style Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="text-emerald-600/70 text-sm font-light tracking-[0.3em] uppercase mb-4 inline-block">
              Unser Expertenteam
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-slate-900 mb-6 leading-[0.9] tracking-tight">
              Ärzte mit
              <br />
              <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-slate-800 to-blue-600">
                Leidenschaft
              </span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Hochqualifizierte Mediziner mit internationaler Erfahrung und 
              dem Fokus auf erstklassige Patientenversorgung
            </p>
          </div>
        </div>

        {/* Leitende Ärzte */}
        <div className="mb-24">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="text-amber-600/70 text-sm font-light tracking-[0.3em] uppercase mb-4 inline-block">
              Leitende Ärzte
            </span>
            <h3 className="text-2xl md:text-3xl font-light text-slate-800 mb-4">
              <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Führungsebene</span>
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {leadingDoctors.map((doctor: Doctor, index: number) => (
              <DoctorCard 
                key={`leading-${index}`}
                doctor={doctor}
                index={index}
                isVisible={isVisible}
                isSelected={selectedDoctor === `leading-${index}`}
                onSelect={() => setSelectedDoctor(selectedDoctor === `leading-${index}` ? null : `leading-${index}`)}
              />
            ))}
          </div>
        </div>

        {/* Angestellte Ärzte */}
        <div className="mb-20">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="text-blue-600/70 text-sm font-light tracking-[0.3em] uppercase mb-4 inline-block">
              Angestellte Ärzte
            </span>
            <h3 className="text-2xl md:text-3xl font-light text-slate-800 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">Fachspezialisten</span>
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {employedDoctors.map((doctor: Doctor, index: number) => (
              <DoctorCard 
                key={`employed-${index}`}
                doctor={doctor}
                index={index + leadingDoctors.length}
                isVisible={isVisible}
                isSelected={selectedDoctor === `employed-${index}`}
                onSelect={() => setSelectedDoctor(selectedDoctor === `employed-${index}` ? null : `employed-${index}`)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-2xl backdrop-blur-xl bg-white/50 border border-white/60 shadow-xl hover:shadow-2xl hover:bg-white/70 transition-all duration-500 group">
            <Calendar className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-slate-800 font-medium">
              Termin mit Ihrem Wunscharzt vereinbaren
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Apple-Style Doctor Card Component
interface Doctor {
  name: string;
  specialty: string;
  specialtyEng: string;
  image: string;
  bio: string;
  experience: string;
  certifications: string[];
  availability: string;
  isLeading: boolean;
}

const DoctorCard = ({ 
  doctor, 
  index, 
  isVisible, 
  isSelected, 
  onSelect 
}: { 
  doctor: Doctor; 
  index: number; 
  isVisible: boolean; 
  isSelected: boolean; 
  onSelect: () => void; 
}) => {
  const delay = `delay-${(index + 3) * 200}`;
  
  return (
    <div className={`group transform transition-all duration-1000 ${delay} ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      <div 
        className={`relative cursor-pointer transition-all duration-700 ${
          isSelected ? 'scale-105' : 'hover:scale-[1.02]'
        }`}
        onClick={onSelect}
      >
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all duration-500">
          
          {/* Image Container */}
          <div className="relative h-80 overflow-hidden rounded-t-3xl">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Floating badges */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              {doctor.isLeading && (
                <div className="px-3 py-1 rounded-full backdrop-blur-lg bg-gradient-to-r from-amber-500/30 to-orange-500/30 border border-amber-400/40 text-white text-xs font-medium flex items-center gap-1">
                  <Crown className="w-3 h-3" />
                  Leitend
                </div>
              )}
              <div className="px-3 py-1 rounded-full backdrop-blur-lg bg-white/20 border border-white/30 text-white text-xs font-light">
                {doctor.experience}
              </div>
              <div className="px-3 py-1 rounded-full backdrop-blur-lg bg-emerald-500/20 border border-emerald-400/30 text-white text-xs font-light">
                {doctor.availability}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                  {doctor.name}
                </h3>
                <p className="text-emerald-600 font-light text-sm mb-1">
                  {doctor.specialty}
                </p>
                <p className="text-slate-500 text-xs font-light">
                  {doctor.specialtyEng}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-amber-400 fill-current" />
                <Star className="w-4 h-4 text-amber-400 fill-current" />
                <Star className="w-4 h-4 text-amber-400 fill-current" />
                <Star className="w-4 h-4 text-amber-400 fill-current" />
                <Star className="w-4 h-4 text-amber-400 fill-current" />
              </div>
            </div>

            <p className="text-slate-600 font-light leading-relaxed mb-6">
              {doctor.bio}
            </p>

            {/* Certifications */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-500 text-xs">
                <GraduationCap className="w-4 h-4" />
                <span className="font-light">Qualifikationen:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {doctor.certifications.map((cert: string, idx: number) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 rounded-lg bg-slate-100/70 text-slate-600 text-xs font-light"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Expanded content */}
            {isSelected && (
              <div className="mt-6 pt-6 border-t border-slate-200/50 animate-in slide-in-from-top duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-slate-800">Spezialist</span>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors duration-300">
                    Termin buchen
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </div>
      </div>
    </div>
  );
};