import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const testimonials = [
    {
      text: 'Die Behandlung war außergewöhnlich professionell. Dr. Hampe nahm sich die Zeit, meine Sorgen anzuhören und entwickelte einen Behandlungsplan, der meine Lebensqualität erheblich verbessert hat.',
      name: 'Maria Schneider',
      age: '58 Jahre',
      treatment: 'Kardiologie',
      location: 'Langenhagen',
      rating: 5,
      highlight: 'Hervorragende Betreuung'
    },
    {
      text: 'Seit Jahren bringe ich meine Familie in diese Praxis. Die Betreuung ist immer erstklassig und das Personal sorgt dafür, dass wir uns wohl und gut aufgehoben fühlen.',
      name: 'Thomas Weber',
      age: '42 Jahre', 
      treatment: 'Allgemeinmedizin',
      location: 'Garbsen',
      rating: 5,
      highlight: 'Familiäre Atmosphäre'
    },
    {
      text: 'Nach jahrelangen chronischen Schmerzen entwickelte Dr. Kuhn einen umfassenden Behandlungsansatz, der mir endlich Linderung brachte. Dafür bin ich unendlich dankbar.',
      name: 'Andrea Müller',
      age: '45 Jahre',
      treatment: 'Neurologie', 
      location: 'Langenhagen',
      rating: 5,
      highlight: 'Erfolgreiche Schmerztherapie'
    },
    {
      text: 'Die orthopädische Behandlung war hervorragend. Moderne Technik kombiniert mit persönlicher Betreuung - genau das, was man sich wünscht.',
      name: 'Klaus Richter',
      age: '67 Jahre',
      treatment: 'Orthopädie',
      location: 'Garbsen', 
      rating: 5,
      highlight: 'Modernste Behandlung'
    },
    {
      text: 'Als Mutter schätze ich die einfühlsame Art, wie hier mit Kindern umgegangen wird. Mein Sohn geht gerne zu den Untersuchungen - das sagt alles.',
      name: 'Petra Hoffmann',
      age: '39 Jahre',
      treatment: 'Pädiatrie',
      location: 'Langenhagen',
      rating: 5,
      highlight: 'Kinderfreundlich'
    }
  ];
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1);
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-32 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        
        {/* Apple-Style Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="text-purple-600/70 text-sm font-light tracking-[0.3em] uppercase mb-4 inline-block">
              Patientenstimmen
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-slate-900 mb-6 leading-[0.9] tracking-tight">
              Vertrauen durch
              <br />
              <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600">
                Erfahrung
              </span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Erfahren Sie, was unsere Patienten über ihre Behandlung und Betreuung 
              in unserer Praxis sagen
            </p>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <TestimonialCard 
              testimonial={testimonials[currentIndex]}
              onNext={nextTestimonial}
              onPrev={prevTestimonial}
            />
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-600 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Additional Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <MiniTestimonialCard 
                key={index}
                testimonial={testimonial}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Apple-Style Main Testimonial Card Component
interface Testimonial {
  text: string;
  name: string;
  age: string;
  treatment: string;
  location: string;
  rating: number;
  highlight: string;
}

const TestimonialCard = ({ 
  testimonial, 
  onNext, 
  onPrev 
}: { 
  testimonial: Testimonial; 
  onNext: () => void; 
  onPrev: () => void; 
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 border border-white/60 shadow-2xl p-12 md:p-16">
      
      {/* Quote Icon */}
      <div className="absolute top-8 left-8 opacity-20">
        <Quote className="w-16 h-16 text-purple-600" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center">
        
        {/* Rating Stars */}
        <div className="flex justify-center mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-amber-400 fill-current mx-1" />
          ))}
        </div>
        
        {/* Testimonial Text */}
        <blockquote className="text-xl md:text-2xl font-light text-slate-800 leading-relaxed mb-8 italic">
          &ldquo;{testimonial.text}&rdquo;
        </blockquote>
        
        {/* Patient Info */}
        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-medium text-slate-900">
              {testimonial.name}
            </h4>
            <p className="text-slate-600 font-light">
              {testimonial.age} • {testimonial.location}
            </p>
          </div>
          
          {/* Treatment Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-200/50">
            <span className="text-purple-700 text-sm font-medium">
              {testimonial.treatment}
            </span>
          </div>
          
          {/* Highlight */}
          <p className="text-emerald-600 font-medium text-sm">
            {testimonial.highlight}
          </p>
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <button 
          onClick={onPrev}
          className="w-12 h-12 rounded-full backdrop-blur-lg bg-white/50 border border-white/60 shadow-lg flex items-center justify-center text-slate-700 hover:bg-white/70 transition-all duration-300 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <button 
          onClick={onNext}
          className="w-12 h-12 rounded-full backdrop-blur-lg bg-white/50 border border-white/60 shadow-lg flex items-center justify-center text-slate-700 hover:bg-white/70 transition-all duration-300 group"
        >
          <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-out"></div>
    </div>
  );
};

// Mini Testimonial Card Component
const MiniTestimonialCard = ({ 
  testimonial, 
  index, 
  isVisible 
}: { 
  testimonial: Testimonial; 
  index: number; 
  isVisible: boolean; 
}) => {
  const delay = `delay-${(index + 6) * 200}`;
  
  return (
    <div className={`transform transition-all duration-1000 ${delay} ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
    }`}>
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-lg p-6 hover:shadow-xl hover:bg-white/70 transition-all duration-500 group">
        
        {/* Mini Quote */}
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-8 h-8 text-purple-600" />
        </div>
        
        {/* Content */}
        <div className="space-y-3">
          <div className="flex">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 text-amber-400 fill-current mr-1" />
            ))}
          </div>
          
          <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
            &ldquo;{testimonial.text.substring(0, 120)}...&rdquo;
          </p>
          
          <div className="pt-2 border-t border-slate-200/50">
            <p className="text-xs font-medium text-slate-900">{testimonial.name}</p>
            <p className="text-xs text-slate-500">{testimonial.treatment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};