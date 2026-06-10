"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#0A0F0D] text-white min-h-screen relative overflow-hidden font-sans">
      
      {/* 1. AMBIENT BACKGROUND LIGHTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-emerald-500/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/5 blur-[150px] rounded-full" />
      </div>

      {/* 2. HERO CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Kolom Kiri: Informasi Project */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            ✨ UI/UX Case Study • 2026
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            NusaGo
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            Platform transportasi terpadu yang dirancang untuk mengintegrasikan pemesanan motor, mobil, tiket bus, hingga kereta api dalam satu aplikasi cerdas.
          </p>

          {/* Badges Informasi */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300">📱 Mobile App</span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300">⏱️ 3 Weeks Project</span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300">👤 Solo UI/UX Designer</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#prototype" 
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20"
            >
              Lihat Prototype
            </a>
            <a 
              href="#process" 
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-xl transition-all duration-300"
            >
              Proses Desain
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BARIS DI BAWAH INI ADALAH BAGIAN MOCKUP HP YANG SUDAH DIBENAHI TOTAL     */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative items-center">
          
          {/* Efek Glow Lembut di Belakang HP */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          {/* Frame HP Realistis */}
          <div className="relative w-full max-w-[290px] sm:max-w-[310px] aspect-[9/19] bg-gradient-to-tr from-emerald-500/10 to-white/5 rounded-[40px] p-3 border border-white/10 shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-[1.02]">
            <div className="w-full h-full bg-[#0D1310] rounded-[32px] overflow-hidden border border-white/5 relative flex items-center justify-center">
              
              {/* object-contain membuat gambar pas di tengah, UTUH, dan TIDAK GEPENG */}
              <Image 
                src="/logo-nusago.png" 
                alt="NusaGo UI Mockup" 
                fill
                priority
                className="object-contain p-6 transition-transform duration-500"
              />

              {/* Lapisan Kaca/Refleksi Tipis */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 pointer-events-none" />
              
            </div>
          </div>
        </div>
        {/* ========================================================================= */}

      </section>

      {/* 3. SECTION STATISTIK */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* Card 1: Layanan */}
          <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-400 tracking-tight group-hover:scale-105 transition-transform duration-300">
              4+
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">
              Moda Layanan <span className="text-xs block text-gray-500 font-normal">(Motor, Mobil, Bus, Kereta)</span>
            </p>
          </div>

          {/* Card 2: Screen Design */}
          <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
              60+
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">
              Screen Desain <span className="text-xs block text-gray-500 font-normal">(High-Fidelity UI)</span>
            </p>
          </div>

          {/* Card 3: Tester */}
          <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
              5
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">
              User Tester <span className="text-xs block text-gray-500 font-normal">(Usability Testing)</span>
            </p>
          </div>

          {/* Card 4: Prototype */}
          <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
              1
            </h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">
              Interactive Prototype <span className="text-xs block text-gray-500 font-normal">(Figma Terintegrasi)</span>
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}