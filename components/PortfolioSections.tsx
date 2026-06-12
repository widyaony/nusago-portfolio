"use client";

import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";

export default function PortfolioSections() {
  const [prototypeMode, setPrototypeMode] = useState<"design" | "player">("player");

  // LINK UTAMA FIGMA
  const figmaDesignLink = "https://www.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=176-1160"; 
  
  // LINK PROTOTYPE TERBARU YANG KAMU KIRIM (UNTUK TOMBOL COBA PROTOTYPE)
  const figmaEmbedPlayerLink = "https://www.figma.com/proto/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=176-1209&p=f&t=h3i3paOJdNP00vDm-1&scaling=scale-down&content-scaling=fixed&page-id=176%3A1160&starting-point-node-id=176%3A1209";
  
  // LINK EMBED FIGMA (UNTUK FRAME HP DI BAWAHNYA)
  const figmaEmbedDesignLink = "https://embed.figma.com/proto/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=176-1209&p=f&scaling=scale-down&content-scaling=fixed&page-id=176%3A1160&starting-point-node-id=176%3A1209&embed-host=share";

  const ideateCards = [
    {
      title: "Crazy 8's",
      description: "Eksplorasi cepat 8 ide solusi kasar dalam 8 menit untuk mengatasi fragmentasi pemesanan tiket.",
      embedUrl: "https://embed.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=746-3112&embed-host=share",
    },
    {
      title: "User Flow",
      description: "Pemetaan langkah demi langkah pengguna dari membuka aplikasi hingga berhasil mendapat tiket multi-moda.",
      embedUrl: "https://embed.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=142-964&embed-host=share",
    },
    {
      title: "Low-Fi",
      description: "Rancangan wireframe kasar hitam-putih untuk menyusun tata letak informasi sebelum masuk ke tahap visual.",
      embedUrl: "https://embed.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=746-3114&embed-host=share",
    },
    {
      title: "UI Kit",
      description: "Sistem komponen desain terstandarisasi yang mencakup tipografi, palet warna, dan gaya tombol NusaGo.",
      embedUrl: "https://embed.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=464-2676&embed-host=share",
    },
  ];

  const testers = [
    {
      name: "Hayyu Adhini Wahida",
      role: "User Tester 1 • 19 Tahun • Mahasiswa",
      feedback: "Sebagai mahasiswa yang sering pulang pergi antar kota, integrasi jadwal dari NusaGo ini membantu banget. Biasanya aku harus buka-tutup 3 aplikasi berbeda cuma buat nyesuaiin jam transit kereta ke terminal bus.",
      initials: "HA",
      bgAvatar: "bg-[#16221f] text-[#a3b899] border border-[#2a3b35]",
      docImage: "/dokumentasi1.jpeg" 
    },
    {
      name: "Nadhin Ayudya Rahmadhani",
      role: "User Tester 2 • 19 Tahun • Mahasiswa",
      feedback: "Alur interaksi pemesanannya jelas banget. Aku paling suka visualisasi matrik pembayaran satu pintu di bagian akhir, jadi aku nggak bingung lagi bedain struk bayar buat travel dan buat tiket busnya.",
      initials: "NA",
      bgAvatar: "bg-[#16221f] text-[#a3b899] border border-[#2a3b35]",
      docImage: "/dokumentasi2.jpeg" 
    }
  ];

  return (
    <div 
      className="text-[#d1d5db] min-h-screen relative overflow-hidden font-sans"
      style={{
        backgroundColor: "#0a0c0b",
        /* BACKGROUND KOTAK-KOTAK ELEGAN (GRID SUBTLE 2.5%) */
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
        `,
        backgroundSize: "44px 44px"
      }}
    >
      
      {/* Pendaran ambient (Glow effect lembut) */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#1e2e28]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#172420]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ======================================================== */}
        {/* TAHAP 3: IDEATE SECTION                                  */}
        {/* ======================================================== */}
        <section id="ideate" className="py-20 border-t border-[#161a18]">
          <div className="mb-12 text-center space-y-3">
            <span className="text-[#a3b899] text-[11px] font-bold tracking-widest uppercase bg-[#182521] border border-[#2d423a] py-1.5 px-3 rounded-full">
              Proses Desain — Tahap 3
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#f3f4f6] pt-1">Ideate</h2>
            <p className="text-[#9ca3af] max-w-2xl leading-relaxed text-sm md:text-base mx-auto">
              Menyusun ideasi solusi menggunakan grid eksplorasi kreatif, memetakan alur kerja sistem, hingga membangun pondasi visual komponen aplikasi.
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-4xl mx-auto">
            {ideateCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-[#111513] border border-[#1f2623] rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#151b18] hover:border-[#384a41] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col w-full group"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-[#b4c3b1] group-hover:text-[#cbd5e1] transition-colors mb-1">
                    {card.title}
                  </h3>
                  <p className="text-[#9ca3af] text-sm leading-relaxed transition-colors group-hover:text-[#cbd5e1]">
                    {card.description}
                  </p>
                </div>
                <div className="w-full aspect-video min-h-[420px] bg-[#070a09] rounded-xl overflow-hidden border border-[#19201d] relative">
                  <iframe src={card.embedUrl} className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity" allowFullScreen loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* TAHAP 4: PROTOTYPE SECTION                               */}
        {/* ======================================================== */}
        <section id="prototype" className="py-20 border-t border-[#161a18]">
          <div className="mb-8 flex flex-col items-center text-center gap-4">
            <div className="space-y-3">
              <span className="text-[#a3b899] text-[11px] font-bold tracking-widest uppercase bg-[#182521] border border-[#2d423a] py-1.5 px-3 rounded-full">
                Proses Desain — Tahap 4
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-[#f3f4f6] pt-1">Interactive Prototype</h2>
              <p className="text-[#9ca3af] max-w-2xl leading-relaxed text-sm md:text-base mx-auto">
                Mengembangkan desain beresolusi tinggi menjadi purwarupa interaktif yang dapat diuji coba langsung melalui bingkai simulasi gadget.
              </p>
            </div>

            {/* Tombol Aksi Premium */}
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 mt-2">
              {/* TOMBOL COBA PROTOTYPE (SUDAH MEMBUKA TAB BARU KE LINK TERBARU) */}
              <button
                onClick={() => window.open(figmaEmbedPlayerLink, "_blank")}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-[#22332c] hover:bg-[#2c4239] border border-[#385247] text-[#f3f4f6] shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current text-[#b4c3b1]" />
                Coba Prototype
              </button>

              {/* TOMBOL BUKA FIGMA */}
              <button
                onClick={() => window.open(figmaDesignLink, "_blank")}
                className="flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-bold bg-[#111513] hover:bg-[#181f1b] border border-[#1f2623] hover:border-[#2f3b36] text-[#d1d5db] hover:text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                Buka Figma
                <ArrowUpRight className="w-4 h-4 text-stone-500" />
              </button>
            </div>
          </div>

          {/* Bingkai HP Simulasi */}
          <div className="max-w-md mx-auto w-full h-[720px] bg-[#111513] rounded-[32px] overflow-hidden border border-[#1f2623] shadow-2xl p-4 flex items-center justify-center">
            <iframe 
              src={figmaEmbedDesignLink} 
              className="w-full h-full border-0 rounded-[22px] bg-[#070a09]" 
              allowFullScreen 
              loading="lazy" 
            />
          </div>
        </section>

        {/* ======================================================== */}
        {/* TAHAP 5: TESTING SECTION                                 */}
        {/* ======================================================== */}
        <section id="test" className="py-20 border-t border-[#161a18] mb-24">
          <div className="mb-16 text-center space-y-3">
            <span className="text-[#a3b899] text-[11px] font-bold tracking-widest uppercase bg-[#182521] border border-[#2d423a] py-1.5 px-3 rounded-full">
              Proses Desain — Tahap 5
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight text-[#f3f4f6] pt-1">Testing & Validation</h2>
            <p className="text-[#9ca3af] max-w-2xl leading-relaxed text-sm md:text-base mx-auto">
              Melakukan uji validasi langsung kepada pengguna target lewat metode <span className="text-[#b4c3b1] font-bold">Usability Testing</span> untuk mengukur tingkat kepuasan dan efisiensi antarmuka.
            </p>
          </div>

          <div className="flex flex-col gap-8 max-w-4xl mx-auto">
            {testers.map((tester, index) => (
              <div 
                key={index} 
                className="group relative bg-[#111513] border border-[#1f2623] rounded-[28px] p-6 lg:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#151b18] hover:border-[#384a41] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col sm:flex-row gap-6 items-center overflow-hidden"
              >
                <div className="absolute right-6 top-0 text-[160px] font-serif text-white/[0.01] select-none pointer-events-none leading-none">
                  ”
                </div>

                {/* Dokumentasi */}
                <div className={`w-36 h-36 shrink-0 rounded-2xl overflow-hidden border border-[#1f2623] bg-[#070a09] relative shadow-md transition-transform duration-500 group-hover:scale-[1.02] ${index % 2 === 1 ? 'sm:order-last' : ''}`}>
                  <img 
                    src={tester.docImage} 
                    alt={`Dokumentasi Usability Testing NusaGo - ${tester.name}`}
                    className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Konten Komentar */}
                <div className="flex-1 flex flex-col justify-between h-full space-y-4 relative z-10 w-full">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#a3b899] uppercase bg-[#16221f] border border-[#2a3b35] px-2.5 py-1 rounded-md">
                      User Feedback
                    </span>
                    <blockquote className="text-[#cbd5e1] font-medium text-sm md:text-base leading-relaxed mt-3 italic transition-colors duration-500 group-hover:text-white">
                      “{tester.feedback}”
                    </blockquote>
                  </div>

                  {/* Profil Identitas */}
                  <div className="flex items-center gap-3 pt-3 border-t border-[#1f2623]">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-inner tracking-tight ${tester.bgAvatar}`}>
                      {tester.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[#f3f4f6] text-sm truncate">{tester.name}</h4>
                      <p className="text-[#9ca3af] text-xs mt-0.5 font-medium truncate">{tester.role}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}