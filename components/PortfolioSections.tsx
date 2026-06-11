"use client";

import { useState } from "react";
import { Copy, Check, Play, ArrowUpRight } from "lucide-react";

export default function PortfolioSections() {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [prototypeMode, setPrototypeMode] = useState<"design" | "player">("player");

  // ==========================================
  // CONFIGURATION DATA & LINKS
  // ==========================================
  const figmaDesignLink = "https://www.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=176-1160"; 
  
  // Link Embed Prototipe Baru
  const figmaEmbedPlayerLink = "https://embed.figma.com/proto/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=176-1209&p=f&scaling=scale-down&content-scaling=fixed&page-id=176%3A1160&starting-point-node-id=176%3A1209&embed-host=share";
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
      name: "Tester 1",
      role: "Komuter Harian",
      feedback: "Mudah digunakan. Alur pemesanan dari awal sampai akhir terasa sangat natural dan tidak membingungkan.",
      initials: "T1",
      bgAvatar: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
      docImage: "/dokumentasi1.png"
    },
    {
      name: "Tester 2",
      role: "Pengguna Umum",
      feedback: "Pemesanan tiket jelas. Informasi transfer antar moda transportasi tergambar transparan di layar utama.",
      initials: "T2",
      bgAvatar: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
      docImage: "/dokumentasi2.png"
    },
    {
      name: "Tester 3",
      role: "Mahasiswa / Traveler",
      feedback: "Pemesanan tiket jelas. Informasi transfer antar moda transportasi tergambar transparan di layar utama.",
      initials: "T3",
      bgAvatar: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
      docImage: "/dokumentasi3.png"
    }
  ];

  return (
    <div 
      className="text-neutral-100 min-h-screen relative overflow-hidden font-sans"
      style={{
        backgroundColor: "#050505",
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px"
      }}
    >
      
      <div className="absolute top-[5%] left-[-5%] w-[600px] h-[600px] rounded-full bg-emerald-950/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-[45%] right-[-5%] w-[500px] h-[500px] rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[15%] w-[600px] h-[600px] rounded-full bg-emerald-950/25 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ======================================================== */}
        {/* TAHAP 3: IDEATE SECTION                                  */}
        {/* ======================================================== */}
        <section id="ideate" className="py-20 border-t border-white/5">
          <div className="mb-12 text-center">
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Proses Desain — Tahap 3</span>
            <h2 className="text-4xl font-extrabold mt-2 tracking-tight text-white">Ideate</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl leading-relaxed mx-auto">
              Menyusun ideasi solusi menggunakan grid eksplorasi kreatif, memetakan alur kerja sistem, hingga membangun pondasi visual komponen aplikasi.
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {ideateCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-[24px] p-6 transition-all duration-300 hover:border-emerald-700 hover:shadow-[0_0_40px_rgba(0,108,2,0.2)] flex flex-col w-full"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-1">{card.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{card.description}</p>
                </div>
                <div className="w-full aspect-video min-h-[450px] bg-neutral-900/90 rounded-xl overflow-hidden border border-white/5 relative">
                  <iframe src={card.embedUrl} className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity" allowFullScreen loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* TAHAP 4: PROTOTYPE SECTION                               */}
        {/* ======================================================== */}
        <section id="prototype" className="py-20 border-t border-white/5">
          <div className="mb-8 flex flex-col items-center text-center gap-4">
            <div>
              <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Proses Desain — Tahap 4</span>
              <h2 className="text-4xl font-extrabold mt-2 tracking-tight text-white">Interactive Prototype</h2>
              <p className="text-neutral-400 mt-3 max-w-2xl leading-relaxed mx-auto">
                Mengembangkan desain beresolusi tinggi menjadi purwarupa interaktif yang dapat diuji coba langsung.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 mt-2">
              <button
                onClick={() => setPrototypeMode(prototypeMode === "player" ? "design" : "player")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border bg-emerald-700 border-emerald-700 text-white shadow-lg shadow-emerald-950/50 transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                Coba Prototype
              </button>

              <button
                onClick={() => window.open(figmaDesignLink, "_blank")}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              >
                Buka Figma
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </button>
            </div>
          </div>

          {/* UKURAN CONTAINER DISET KE max-w-md DAN h-[720px] AGAR PAS DENGAN FRAME IPHONE FIGMA KAMU */}
          <div className="max-w-md mx-auto w-full h-[720px] bg-neutral-900/90 rounded-[24px] overflow-hidden border border-white/5 shadow-2xl transition-all duration-300">
            <iframe 
              src={prototypeMode === "player" ? figmaEmbedPlayerLink : figmaEmbedDesignLink} 
              className="w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
            />
          </div>
        </section>

        {/* ======================================================== */}
        {/* TAHAP 5: TESTING SECTION                                 */}
        {/* ======================================================== */}
        <section id="test" className="py-20 border-t border-white/5 mb-16">
          <div className="mb-12 text-center">
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Proses Desain — Tahap 5</span>
            <h2 className="text-4xl font-extrabold mt-2 tracking-tight text-white">Testing</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl leading-relaxed mx-auto">
              Melakukan validasi interaksi langsung kepada pengguna target lewat metode *Usability Testing*.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testers.map((tester, index) => (
              <div 
                key={index} 
                className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-[24px] p-6 transition-all duration-300 hover:border-emerald-700 hover:shadow-[0_0_30px_rgba(0,108,2,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <p className="text-neutral-300 italic text-sm leading-relaxed">
                      “{tester.feedback}”
                    </p>
                  </div>

                  <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-900/50 mb-4">
                    <img 
                      src={tester.docImage} 
                      alt={`Dokumentasi ${tester.name}`}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-inner ${tester.bgAvatar}`}>
                    {tester.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-200 text-xs">{tester.name}</h4>
                    <p className="text-neutral-500 text-[10px] mt-0.5">{tester.role}</p>
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