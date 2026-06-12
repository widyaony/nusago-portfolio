"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div 
      className="bg-[#ffffff] text-stone-700 min-h-screen relative overflow-hidden font-sans"
      style={{
        /* Background kotak-kotak abu-abu tipis (subtle light grid) */
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px"
      }}
    >
      
      {/* 1. AMBIENT BACKGROUND LIGHTS (VERSI LIGHT MODE LEMBUT) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-emerald-100/40 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-stone-100/50 blur-[150px] rounded-full" />
      </div>

      {/* 2. HERO CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-40 pb-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Kolom Kiri: Informasi Project */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold tracking-wide">
             UI/UX Case Study • 2026
          </div>
          
          {/* Judul Utama Hitam Pekat */}
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-stone-900">
            NusaGo
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 max-w-xl leading-relaxed">
            Platform transportasi terpadu yang dirancang untuk mengintegrasikan pemesanan motor, mobil, tiket bus, hingga kereta api dalam satu aplikasi cerdas.
          </p>

          {/* Badges Informasi */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="px-4 py-2 bg-[#f8faf9] border border-stone-200 rounded-xl text-xs md:text-sm text-stone-600 font-medium transition-all duration-300 hover:border-stone-400 hover:text-stone-900">
              Mobile App
            </span>
            <span className="px-4 py-2 bg-[#f8faf9] border border-stone-200 rounded-xl text-xs md:text-sm text-stone-600 font-medium transition-all duration-300 hover:border-stone-400 hover:text-stone-900">
              3 Weeks Project
            </span>
            <span className="px-4 py-2 bg-[#f8faf9] border border-stone-200 rounded-xl text-xs md:text-sm text-stone-600 font-medium transition-all duration-300 hover:border-stone-400 hover:text-stone-900">
              Solo UI/UX Designer
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#prototype" 
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.15)] hover:-translate-y-1 active:translate-y-0 text-center min-w-[160px]"
            >
              Lihat Prototype
            </a>
            <a 
              href="#ideate" 
              className="px-6 py-3 bg-[#f3f4f6] hover:bg-[#e5e7eb] border border-stone-200 hover:border-stone-300 text-stone-700 hover:text-stone-900 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 text-center min-w-[160px]"
            >
              Proses Desain
            </a>
          </div>
        </div>

        {/* Kolom Kanan: MOCKUP IPHONE (BINGKAI HITAM, LAYAR PUTIH BERSIH) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative items-center group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-emerald-100/30 blur-[100px] rounded-full pointer-events-none" />
          
          {/* Bezel Luar HP (Kembali ke Hitam Kokoh) */}
          <div className="relative w-full max-w-[300px] aspect-[9/19] bg-[#1a1c1c] rounded-[52px] p-3 border-2 border-[#2d3030] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:scale-[1.02] flex items-center justify-center">
            
            {/* Layar Dalam HP (TETAP PUTIH BERSIH - SANGAT KONTRAS) */}
            <div className="w-full h-full bg-[#ffffff] rounded-[42px] overflow-hidden border border-stone-200 relative flex flex-col justify-center items-center p-4">
              
              {/* Dynamic Island Atas (Warna hitam tegas khas iPhone) */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0b0b] rounded-full z-30 flex items-center justify-end px-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#111] shadow-inner" />
              </div>
              
              {/* Logo NusaGo Splash Screen */}
              <div className="relative w-full aspect-square max-w-[160px] transition-transform duration-700 group-hover:scale-105">
                <div className="absolute inset-0 bg-emerald-100/50 blur-2xl rounded-full animate-pulse pointer-events-none" />
                <Image 
                  src="/logo-nusago.png" 
                  alt="NusaGo Splash Screen Logo" 
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Home Indicator bar bawah (Disesuaikan abu-abu agar terlihat di layar putih) */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-stone-300 rounded-full z-20" />
            </div>

            {/* Tombol Fisik Samping (Warna Hitam Senada) */}
            <div className="absolute left-[-3px] top-28 w-[3px] h-8 bg-[#2d3030] rounded-l" />
            <div className="absolute left-[-3px] top-40 w-[3px] h-12 bg-[#2d3030] rounded-l" />
            <div className="absolute left-[-3px] top-56 w-[3px] h-12 bg-[#2d3030] rounded-l" />
            <div className="absolute right-[-3px] top-36 w-[3px] h-16 bg-[#2d3030] rounded-r" />
          </div>
        </div>

      </section>

      {/* 3. SECTION STATISTIK (KARTU PUTIH PREMIUM) */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          
          {/* Card 1 */}
          <div className="group p-6 bg-[#fdfdfd] border border-stone-200 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-emerald-600/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-600 tracking-tight transition-colors duration-300 group-hover:text-emerald-500">4+</h2>
            <p className="text-sm md:text-base text-stone-500 mt-2 font-medium transition-colors duration-300 group-hover:text-stone-800">Moda Layanan</p>
          </div>
          
          {/* Card 2 */}
          <div className="group p-6 bg-[#fdfdfd] border border-stone-200 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-stone-400/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">40+</h2>
            <p className="text-sm md:text-base text-stone-500 mt-2 font-medium transition-colors duration-300 group-hover:text-stone-800">Screen Desain</p>
          </div>
          
          {/* Card 3 */}
          <div className="group p-6 bg-[#fdfdfd] border border-stone-200 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-stone-400/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">2</h2>
            <p className="text-sm md:text-base text-stone-500 mt-2 font-medium transition-colors duration-300 group-hover:text-stone-800">User Tester</p>
          </div>
          
          {/* Card 4 */}
          <div className="group p-6 bg-[#fdfdfd] border border-stone-200 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:border-stone-400/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">1</h2>
            <p className="text-sm md:text-base text-stone-500 mt-2 font-medium transition-colors duration-300 group-hover:text-stone-800">Interactive Prototype</p>
          </div>

        </div>
      </section>

      {/* 4. SECTION PROFIL (KARTU KONTRAST LIGHT MODE) */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 relative z-10 border-t border-stone-200">
        <div className="group bg-[#fdfdfd] border border-stone-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all duration-500 hover:bg-white hover:border-emerald-600/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
          
          {/* Bingkai lingkaran foto profil */}
          <div className="relative w-32 h-32 md:w-36 md:h-36 flex-shrink-0 transition-transform duration-500 group-hover:scale-[1.03]">
            <div className="absolute inset-0 bg-emerald-100 rounded-full transition-colors duration-500 group-hover:bg-emerald-200/50" />
            <div className="w-full h-full rounded-full overflow-hidden border border-stone-200 relative p-1 bg-white">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-stone-100">
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
            <span className="text-emerald-700 font-bold tracking-wider text-[10px] uppercase bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 transition-colors duration-500 group-hover:bg-emerald-100/70">
              The Designer
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-stone-900 pt-1">
              Widya Ony Yusnitra Rahayu
            </h3>
            <p className="text-xs text-stone-500 font-medium">
              D3 Teknologi Informasi • UI/UX Student Project
            </p>
            <p className="text-stone-600 text-sm leading-relaxed max-w-2xl pt-2 transition-colors duration-500 group-hover:text-stone-800">
              Halo! Saya adalah mahasiswi D3 Teknologi Informasi Politeknik Negeri Madiun yang merancang studi kasus NusaGo ini sebagai proyek utama untuk mata kuliah UI/UX Design. Di proyek ini, saya bertanggung jawab penuh dalam melakukan riset pengguna, menyusun arsitektur informasi, hingga mengimplementasikannya ke dalam desain antarmuka digital yang intuitif.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}