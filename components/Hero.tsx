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
             UI/UX Case Study • 2026
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            NusaGo
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            Platform transportasi terpadu yang dirancang untuk mengintegrasikan pemesanan motor, mobil, tiket bus, hingga kereta api dalam satu aplikasi cerdas.
          </p>

          {/* Badges Informasi */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300"> Mobile App</span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300"> 3 Weeks Project</span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300"> Solo UI/UX Designer</span>
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

        {/* Kolom Kanan: Mockup HP */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative w-full max-w-[290px] sm:max-w-[310px] aspect-[9/19] bg-gradient-to-tr from-emerald-500/10 to-white/5 rounded-[40px] p-3 border border-white/10 shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-[1.02]">
            <div className="w-full h-full bg-[#0D1310] rounded-[32px] overflow-hidden border border-white/5 relative flex items-center justify-center">
              <Image 
                src="/logo-nusago.png" 
                alt="NusaGo UI Mockup" 
                fill
                priority
                className="object-contain p-6 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 pointer-events-none" />
            </div>
          </div>
        </div>

      </section>

      {/* 3. SECTION STATISTIK */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-400 tracking-tight">4+</h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">Moda Layanan</p>
          </div>
          <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">40+</h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">Screen Desain</p>
          </div>
          <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">3</h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">User Tester</p>
          </div>
          <div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 rounded-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">1</h2>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">Interactive Prototype</p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SECTION PROFIL DI TARUH DI BAWAH SENDIRI (PENUTUP HALAMAN)            */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 relative z-10 border-t border-white/5">
        <div className="bg-white/[0.01] border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-md flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Bingkai lingkaran foto profil */}
          <div className="relative w-32 h-32 md:w-36 md:h-36 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-green-400 rounded-full opacity-20 blur-sm" />
            <div className="w-full h-full rounded-full overflow-hidden border border-white/10 relative p-1 bg-[#0A0F0D]">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-neutral-800">
                <Image
                  src="/profil-widya.JPG"
                  alt="Widya Ony Yusnitra Rahayu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Data Diri */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <span className="text-emerald-400 font-semibold tracking-wider text-[11px] uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/10">
              The Designer
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-white pt-1">
              Widya Ony Yusnitra Rahayu
            </h3>
            <p className="text-xs text-emerald-500/80 font-medium">
              D3 Teknologi Informasi • UI/UX Student Project
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl pt-2">
              Halo! Saya adalah mahasiswi D3 Teknologi Informasi Politeknik Negeri Madiun yang merancang studi kasus NusaGo ini sebagai proyek utama untuk mata kuliah UI/UX Design. Di proyek ini, saya bertanggung jawab penuh dalam melakukan riset pengguna, menyusun arsitektur informasi, hingga mengimplementasikannya ke dalam desain antarmuka digital yang intuitif.
            </p>
          </div>

        </div>
      </section>
      {/* ========================================================================= */}

    </div>
  );
}