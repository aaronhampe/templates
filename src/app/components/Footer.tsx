import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock, Heart, Shield, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-emerald-900/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-8 md:px-16 py-20">
          
          {/* Top Section */}
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-3xl font-light text-white mb-4">
                  Praxis <span className="font-medium bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Hampe & Kuhn</span>
                </h3>
                <p className="text-slate-300 font-light leading-relaxed text-lg">
                  Moderne Medizin mit Herz - seit über 15 Jahren Ihr vertrauensvoller Partner 
                  für erstklassige medizinische Versorgung in Langenhagen und Garbsen.
                </p>
              </div>
              
              {/* Quality Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-white/20">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-slate-300 text-sm font-light">Patientenorientiert</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-white/20">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-300 text-sm font-light">Zertifiziert</span>
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-lg bg-white/10 border border-white/20">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-300 text-sm font-light">Ausgezeichnet</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/20 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-xl font-medium text-white mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-300 font-light flex items-center group">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="#doctors" className="text-slate-300 hover:text-white transition-colors duration-300 font-light flex items-center group">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    Ärzteteam
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-300 font-light flex items-center group">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    Leistungen
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors duration-300 font-light flex items-center group">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    Bewertungen
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300 font-light flex items-center group">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-medium text-white mb-6">Kontakt</h4>
              <div className="space-y-4">
                
                {/* Locations */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 p-2">
                      <MapPin className="w-full h-full text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Langenhagen</p>
                      <p className="text-slate-400 text-xs font-light">Hauptstraße 123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 p-2">
                      <MapPin className="w-full h-full text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Garbsen</p>
                      <p className="text-slate-400 text-xs font-light">Am Stadtpark 45</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 p-2">
                    <Phone className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-light">05139 / 87 65 43</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 p-2">
                    <Mail className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-light">info@praxis-hampe-kuhn.de</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 p-2">
                    <Clock className="w-full h-full text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Öffnungszeiten</p>
                    <div className="text-slate-400 text-xs font-light space-y-1">
                      <div className="flex justify-between">
                        <span>Mo - Fr:</span>
                        <span>08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sa:</span>
                        <span>09:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>So:</span>
                        <span>Geschlossen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm font-light">
              &copy; {new Date().getFullYear()} Praxis Hampe & Kuhn. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex space-x-6 text-slate-400 text-sm font-light">
              <a href="#" className="hover:text-white transition-colors duration-300">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Impressum</a>
              <a href="#" className="hover:text-white transition-colors duration-300">AGB</a>
            </div>
          </div>
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      </div>
    </footer>
  );
}