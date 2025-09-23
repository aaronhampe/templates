# 🎬 Apple-Style Hero Video Integration Varianten

## **Aktuelle Version: Cinema Display** ✅
- **Größe**: 500px Höhe, 16:10 Aspect Ratio
- **Stil**: Apple Pro Display XDR inspiriert
- **Features**: Cinematic UI, Live Stream Indikator, 4K HDR Badge
- **Effekte**: Pro Display Stand Simulation, Ambient Lighting

---

## **Variante 2: iPhone Showcase Style** 📱
```tsx
{/* iPhone-Style Video in "Device Frame" */}
<div className="relative mx-auto max-w-sm lg:max-w-lg">
  {/* Phone Frame */}
  <div className="relative rounded-[3rem] p-2 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
    <div className="rounded-[2.5rem] overflow-hidden bg-black">
      {/* Notch */}
      <div className="h-6 bg-black relative">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-full"></div>
      </div>
      
      {/* Video Content */}
      <div className="aspect-[9/16] relative">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="praxis-platzhalter_komp.mp4" type="video/mp4" />
        </video>
        
        {/* iPhone UI Elements */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-4">
            <div className="text-white text-sm font-light">
              📍 Praxis Hampe & Kuhn
            </div>
            <div className="text-white/70 text-xs mt-1">
              Jetzt geöffnet • 2 Standorte
            </div>
          </div>
        </div>
      </div>
      
      {/* Home Indicator */}
      <div className="h-8 bg-black flex items-center justify-center">
        <div className="w-32 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
  </div>
</div>
```

---

## **Variante 3: MacBook Pro Showcase** 💻
```tsx
{/* MacBook Pro Style Video */}
<div className="relative mx-auto max-w-4xl">
  {/* Laptop Base */}
  <div className="relative">
    {/* Screen */}
    <div className="relative rounded-t-xl overflow-hidden bg-black border-2 border-gray-800 shadow-2xl">
      {/* Bezel */}
      <div className="p-4 bg-black">
        <div className="rounded-lg overflow-hidden">
          <video 
            className="w-full aspect-video object-cover" 
            autoPlay loop muted playsInline
          >
            <source src="praxis-platzhalter_komp.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
    
    {/* Laptop Bottom */}
    <div className="h-4 bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-b-2xl shadow-lg"></div>
    
    {/* Keyboard Area Reflection */}
    <div className="absolute -bottom-2 left-4 right-4 h-32 bg-gradient-to-t from-gray-900/40 to-transparent rounded-xl blur-xl"></div>
  </div>
</div>
```

---

## **Variante 4: Apple Vision Pro Style** 🥽
```tsx
{/* Floating Holographic Video */}
<div className="relative">
  {/* Holographic Container */}
  <div className="relative group perspective-1000">
    <div className="relative transform-gpu transition-all duration-1000 hover:rotateY-5 hover:rotateX-2">
      {/* Hologram Frame */}
      <div className="relative rounded-3xl overflow-hidden backdrop-blur-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 border border-white/[0.08] shadow-[0_0_100px_rgba(59,130,246,0.3)]">
        
        {/* Video */}
        <div className="aspect-video relative">
          <video className="w-full h-full object-cover opacity-90" autoPlay loop muted playsInline>
            <source src="praxis-platzhalter_komp.mp4" type="video/mp4" />
          </video>
          
          {/* Holographic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-emerald-400/20 mix-blend-overlay"></div>
          
          {/* Scan Lines Effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent animate-pulse" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)' }}></div>
          </div>
        </div>
        
        {/* Floating UI Elements */}
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1 rounded-full bg-white/[0.15] backdrop-blur-xl border border-white/[0.2] text-white/90 text-xs">
            ◉ LIVE
          </div>
        </div>
      </div>
      
      {/* Holographic Base Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
    </div>
  </div>
</div>
```

---

## **Variante 5: Apple TV+ Cinema** 🎭
```tsx
{/* Full-Width Cinema Banner */}
<div className="absolute inset-x-0 top-1/4 bottom-1/4">
  <div className="relative h-full max-w-6xl mx-auto">
    {/* Cinema Container */}
    <div className="relative h-full rounded-2xl overflow-hidden backdrop-blur-2xl bg-black/20 border border-white/[0.05] shadow-[0_0_120px_rgba(0,0,0,0.8)]">
      
      {/* Video */}
      <video 
        className="w-full h-full object-cover opacity-85" 
        autoPlay loop muted playsInline
      >
        <source src="praxis-platzhalter_komp.mp4" type="video/mp4" />
      </video>
      
      {/* Cinema Letterbox */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-black"></div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-black"></div>
      
      {/* Cinema Info Overlay */}
      <div className="absolute bottom-12 left-8 right-8">
        <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-xl font-light mb-2">Praxis Hampe & Kuhn</h3>
              <div className="text-white/70 text-sm">Ihre Gesundheit in den besten Händen</div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm">LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

## **Empfehlung für Medizinpraxis:**

1. **Cinema Display** (aktuell) - Professionell, groß, beeindruckend
2. **MacBook Pro** - Vertrauenswürdig, bekannt, seriös  
3. **iPhone Showcase** - Modern, zugänglich, persönlich

**Apple würde wahrscheinlich**: Cinema Display für Premium-Gefühl, MacBook für Vertrauen wählen.