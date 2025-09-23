import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        location: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-32 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        
        {/* Apple-Style Header */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="text-emerald-600/70 text-sm font-light tracking-[0.3em] uppercase mb-4 inline-block">
              Kontakt & Termine
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-slate-900 mb-6 leading-[0.9] tracking-tight">
              Wir sind
              <br />
              <span className="font-light text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600">
                für Sie da
              </span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Vereinbaren Sie Ihren Termin oder kontaktieren Sie uns bei Fragen. 
              Ihre Gesundheit liegt uns am Herzen.
            </p>
          </div>
        </div>
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 border border-white/60 shadow-2xl p-8 md:p-10">
              
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-2">
                  Termin vereinbaren
                </h3>
                <p className="text-slate-600 font-light">
                  Wählen Sie Ihren Wunschtermin und wir melden uns bei Ihnen zurück
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-emerald-800 text-sm">
                    Vielen Dank! Wir werden uns schnellstmöglich bei Ihnen melden.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      Vorname *
                    </label>
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Nachname *
                    </label>
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      E-Mail *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Telefon
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                </div>

                {/* Service and Location */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      Gewünschte Leistung
                    </label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="kardiologie">Kardiologie</option>
                      <option value="neurologie">Neurologie</option>
                      <option value="orthopaedie">Orthopädie</option>
                      <option value="allgemeinmedizin">Allgemeinmedizin</option>
                      <option value="paediatrie">Pädiatrie</option>
                      <option value="pneumologie">Pneumologie</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                      Standort
                    </label>
                    <select 
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="langenhagen">Langenhagen</option>
                      <option value="garbsen">Garbsen</option>
                    </select>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-slate-700 mb-2">
                      Wunschtermin
                    </label>
                    <input 
                      type="date" 
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-2">
                      Wunschzeit
                    </label>
                    <select 
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="08:00">08:00 Uhr</option>
                      <option value="09:00">09:00 Uhr</option>
                      <option value="10:00">10:00 Uhr</option>
                      <option value="11:00">11:00 Uhr</option>
                      <option value="14:00">14:00 Uhr</option>
                      <option value="15:00">15:00 Uhr</option>
                      <option value="16:00">16:00 Uhr</option>
                      <option value="17:00">17:00 Uhr</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Nachricht (optional)
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4} 
                    placeholder="Teilen Sie uns mit, was wir für Sie tun können..."
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 rounded-2xl font-medium hover:from-emerald-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Termin anfragen</span>
                    </>
                  )}
                </button>
              </form>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <div className="space-y-8">
              
              {/* Main Contact Card */}
              <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/80 border border-white/60 shadow-xl p-8">
                <h3 className="text-2xl font-light text-slate-900 mb-6">
                  Kontaktinformationen
                </h3>
                
                <div className="space-y-6">
                  
                  {/* Langenhagen Location */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-500 p-3 shadow-lg">
                      <MapPin className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Langenhagen</h4>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">
                        Medizinisches Zentrum Langenhagen<br />
                        Hauptstraße 123<br />
                        30851 Langenhagen
                      </p>
                    </div>
                  </div>

                  {/* Garbsen Location */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 shadow-lg">
                      <MapPin className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Garbsen</h4>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">
                        Praxis Garbsen<br />
                        Am Stadtpark 45<br />
                        30823 Garbsen
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 shadow-lg">
                      <Phone className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Telefon</h4>
                      <p className="text-slate-600 font-light text-sm">
                        Langenhagen: <span className="font-medium">05139 / 87 65 43</span><br />
                        Garbsen: <span className="font-medium">05131 / 12 34 56</span>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-3 shadow-lg">
                      <Mail className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">E-Mail</h4>
                      <p className="text-slate-600 font-light text-sm">
                        info@praxis-hampe-kuhn.de
                      </p>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 shadow-lg">
                      <Clock className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Öffnungszeiten</h4>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">
                        Mo - Fr: 08:00 - 18:00 Uhr<br />
                        Sa: 09:00 - 13:00 Uhr<br />
                        So: Geschlossen
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-200/50 shadow-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-3 shadow-lg">
                    <AlertCircle className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-900 mb-2">
                      Notfallkontakt
                    </h3>
                    <p className="text-slate-700 font-light text-sm mb-3 leading-relaxed">
                      Bei medizinischen Notfällen erreichen Sie unseren 24/7 Bereitschaftsdienst 
                      oder wenden Sie sich an die nächste Notaufnahme.
                    </p>
                    <div className="text-xl font-bold text-red-600">
                      📞 05139 / 87 65 44
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}