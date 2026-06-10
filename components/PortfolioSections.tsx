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
  const problemText = "Pengguna membutuhkan satu platform untuk memesan transportasi dan tiket secara efisien.";
  const hmwText = "Bagaimana membantu pengguna menentukan transportasi terbaik?";

  const figmaDesignLink = "https://www.figma.com/design/GoncengExamplePrototype"; 
  const figmaEmbedPlayerLink = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGoncengExamplePrototype%2F%3Fnode-id%3D1-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A1";
  const figmaEmbedDesignLink = "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGoncengExamplePrototype";

  const ideateCards = [
    {
      title: "Crazy 8's",
      description: "Eksplorasi cepat 8 ide solusi kasar dalam 8 menit untuk mengatasi fragmentasi pemesanan tiket.",
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGoncengExampleIdeate%3Fnode-id%3D1-1",
    },
    {
      title: "User Flow",
      description: "Pemetaan langkah demi langkah pengguna dari membuka aplikasi hingga berhasil mendapat tiket multi-moda.",
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGoncengExampleIdeate%3Fnode-id%3D1-2",
    },
    {
      title: "Low-Fi",
      description: "Rancangan wireframe kasar hitam-putih untuk menyusun tata letak informasi sebelum masuk ke tahap visual.",
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGoncengExampleIdeate%3Fnode-id%3D1-3",
    },
    {
      title: "UI Kit",
      description: "Sistem komponen desain terstandarisasi yang mencakup tipografi, palet warna, dan gaya tombol NusaGo.",
      embedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGoncengExampleIdeate%3Fnode-id%3D1-4",
    },
  ];

  // DATA TESTER DENGAN FOTO DOKUMENTASI APLIKASI
  const testers = [
    {
      name: "Tester 1",
      role: "Komuter Harian",
      feedback: "Mudah digunakan. Alur pemesanan dari awal sampai akhir terasa sangat natural dan tidak membingungkan.",
      initials: "T1",
      bgAvatar: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
      docImage: "/dokumentasi1.png" // Foto bukti testing aplikasi kamu
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
      feedback: "Tampilan menarik. Kombinasi warna hijau dan tata letak tombolnya bikin betah buat eksplorasi rute.",
      initials: "T3",
      bgAvatar: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
      docImage: "/dokumentasi3.png"
    }
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    /* WARNA TETAP HITAM (#050505) SEPERTI SEMULA */
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
        {/* TAHAP 2: DEFINE SECTION                                  */}
        {/* ======================================================== */}
        <section id="define" className="py-20 border-t border-white/5">
          <div className="mb-12">
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Proses Desain — Tahap 2</span>
            <h2 className="text-4xl font-extrabold mt-2 tracking-tight text-white">Define</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl leading-relaxed">
              Menganalisis hasil temuan riset untuk merumuskan masalah inti pengguna ke dalam pernyataan masalah yang jelas.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl">
            <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-700 hover:shadow-[0_0_40px_rgba(0,108,2,0.35)]">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase font-semibold">Problem Statement</span>
                <button 
                  onClick={() => handleCopy(problemText, "problem")}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white transition-all cursor-pointer"
                >
                  {copiedText === "problem" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xl font-medium text-neutral-200 leading-relaxed">“{problemText}”</p>
            </div>

            <div className="text-center font-medium font-mono text-neutral-500 my-2 text-sm">dan</div>

            <div className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-700 hover:shadow-[0_0_40px_rgba(0,108,2,0.35)]">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase font-semibold">How Might We</span>
                <button 
                  onClick={() => handleCopy(hmwText, "hmw")}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white transition-all cursor-pointer"
                >
                  {copiedText === "hmw" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xl font-medium text-neutral-200 leading-relaxed">“{hmwText}”</p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* TAHAP 3: IDEATE SECTION                                  */}
        {/* ======================================================== */}
        <section id="ideate" className="py-20 border-t border-white/5">
          <div className="mb-12">
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Proses Desain — Tahap 3</span>
            <h2 className="text-4xl font-extrabold mt-2 tracking-tight text-white">Ideate</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl leading-relaxed">
              Menyusun ideasi solusi menggunakan grid eksplorasi kreatif, memetakan alur kerja sistem, hingga membangun pondasi visual komponen aplikasi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
            {ideateCards.map((card, index) => (
              <div 
                key={index} 
                className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-700 hover:shadow-[0_0_40px_rgba(0,108,2,0.35)] flex flex-col justify-between"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-emerald-400 mb-2">{card.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{card.description}</p>
                </div>
                <div className="w-full aspect-video min-h-[300px] bg-neutral-900/90 rounded-xl overflow-hidden border border-white/5 relative">
                  <iframe src={card.embedUrl} className="w-full h-full border-0 opacity-85 hover:opacity-100 transition-opacity" allowFullScreen loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* TAHAP 4: PROTOTYPE SECTION                               */}
        {/* ======================================================== */}
        <section id="prototype" className="py-20 border-t border-white/5">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Proses Desain — Tahap 4</span>
              <h2 className="text-4xl font-extrabold mt-2 tracking-tight text-white">Interactive Prototype</h2>
              <p className="text-neutral-400 mt-4 max-w-2xl leading-relaxed">
                Mengembangkan desain beresolusi tinggi menjadi purwarupa interaktif yang dapat diuji coba langsung.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setPrototypeMode(prototypeMode === "player" ? "design" : "player")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                  prototypeMode === "player"
                    ? "bg-emerald-700 border-emerald-700 text-white shadow-lg shadow-emerald-950/50"
                    : "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                {prototypeMode === "player" ? "Melihat Desain" : "Coba Prototype"}
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

          <div className="w-full aspect-video min-h-[550px] bg-neutral-900/90 rounded-[24px] overflow-hidden border border-white/5 shadow-2xl">
            <iframe src={prototypeMode === "player" ? figmaEmbedPlayerLink : figmaEmbedDesignLink} className="w-full h-full border-0" allowFullScreen loading="lazy" />
          </div>
        </section>

        {/* ======================================================== */}
        {/* TAHAP 5: TESTING SECTION (DENGAN DOKUMENTASI APLIKASI)   */}
        {/* ======================================================== */}
        <section id="test" className="py-20 border-t border-white/5 mb-16">
          <div className="mb-12">
            <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">Proses Desain — Tahap 5</span>
            <h2 className="text-4xl font-extrabold mt-2 tracking-tight text-white">Testing</h2>
            <p className="text-neutral-400 mt-4 max-w-2xl leading-relaxed">
              Melakukan validasi interaksi langsung kepada pengguna target lewat metode *Usability Testing*.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
            {testers.map((tester, index) => (
              <div 
                key={index} 
                className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-700 hover:shadow-[0_0_40px_rgba(0,108,2,0.35)] flex flex-col justify-between gap-6"
              >
                <div>
                  {/* Ulasan Feedback dari Tester */}
                  <p className="text-neutral-300 italic leading-relaxed text-[15px] mb-6">
                    “{tester.feedback}”
                  </p>

                  {/* FOTO DOKUMENTASI IMPLEMENTASI APLIKASI */}
                  <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-900/50 mb-2">
                    <img 
                      src={tester.docImage} 
                      alt={`Dokumentasi ${tester.name}`}
                      className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>

                {/* Profil Singkat Inisial Tester di Bagian Bawah */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 shadow-inner ${tester.bgAvatar}`}>
                    {tester.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-200 text-sm">{tester.name}</h4>
                    <p className="text-neutral-500 text-xs mt-0.5">{tester.role}</p>
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