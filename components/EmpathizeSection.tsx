"use client"; 

export default function EmpathizeSection() {
  const empathizeData = [
    {
      title: "Data & Bukti Wawancara",
      description: "Hasil In-Depth Interview langsung terhadap 5 responden (mahasiswa & pekerja) serta dokumentasi foto lapangan guna mendengarkan keluhan nyata mereka.",
      figmaEmbedUrl: "https://embed.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=746-3106&embed-host=share", 
    },
    {
      title: "Listing Observasi (Affinity Diagram)",
      description: "Proses pengelompokan data mentah hasil wawancara ke dalam 5 klaster emosional: Profil/Latar Belakang, Kebiasaan, Masalah/Tantangan, Perasaan, serta Kebutuhan & Harapan.",
      figmaEmbedUrl: "https://embed.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=746-3107&embed-host=share", 
    },
    {
      title: "User Journey Mapping",
      description: "Pemetaan visual kronologi langkah serta grafik fluktuasi emosi pengguna (Hayyu) yang melintasi 5 fase utama perjalanan untuk menemukan titik frustrasi terdalam.",
      figmaEmbedUrl: "https://embed.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=746-3108&embed-host=share", 
    },
  ];

  const defineData = [
    {
      title: "User Persona",
      description: "Penyusunan profil representasi dari 5 responden berbeda guna merinci goals, frustrations, pola perilaku, serta karakteristik unik mereka berdasarkan rangkuman riset lapangan.",
      figmaEmbedUrl: "https://embed.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=746-3109&embed-host=share", 
    },
    {
      title: "Problem Statement & HMW",
      description: "Merumuskan pernyataan masalah inti yang valid, kemudian dikonversi menjadi pertanyaan pemicu ide kreatif melalui framework How Might We (HMW).",
      figmaEmbedUrl: "https://embed.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=746-3110&embed-host=share" , 
    },
    {
      title: "Matriks Prioritas Masalah",
      description: "Memetakan alternatif solusi fitur ke dalam matriks kuadran prioritas (Do It Now, Do Next, Do Last, Later) berdasarkan variabel User Value vs Effort.",
      figmaEmbedUrl: "https://embed.figma.com/design/CgWHWxrhmcAHSufSmq3fyf/UI-UX-DESIGN?node-id=761-5521&embed-host=share", 
    },
  ];

  return (
    /* MENGGUNAKAN TRICK CSS GRADIENT UNTUK MEMBUAT EFEK KOTAK-KOTAK (GRID) FIGMA DI LATAR BELAKANG */
    <div 
      className="bg-white" 
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px'
      }}
    >
      {/* ==================== SECTION 1: EMPATHIZE ==================== */}
      <section id="empathize" className="max-w-7xl mx-auto px-6 py-20 text-neutral-900 font-sans">
        <div className="mb-12 space-y-2 text-center">
          <span className="text-emerald-700 text-xs font-bold tracking-wider uppercase bg-emerald-50/80 backdrop-blur-sm py-1.5 px-3 rounded-full border border-emerald-200">
            Proses Desain — Tahap 1
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 pt-1">
            Empathize
          </h2>
          <p className="text-neutral-600 max-w-2xl leading-relaxed text-sm md:text-base mx-auto补">
            Tahap awal untuk memahami kendala, kebutuhan, dan motivasi para pengguna transportasi umum di Indonesia melalui riset kualitatif terarah.
          </p>
        </div>

        {/* SATU BARIS SATU CARD (LEBAR PAS - TIDAK TERLALU BESAR) */}
        <div className="flex flex-col gap-12 max-w-3xl mx-auto">
          {empathizeData.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col p-6 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group w-full"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-emerald-700 mb-1 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* BINGKAI IFRAME LEBAR PROPORSIONAL ASPECT-VIDEO */}
              <div className="w-full aspect-video min-h-[380px] bg-neutral-100 rounded-xl overflow-hidden border border-neutral-300 shadow-inner relative">
                <iframe 
                  src={item.figmaEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 2: DEFINE ==================== */}
      <section id="define" className="max-w-7xl mx-auto px-6 py-20 text-neutral-900 font-sans border-t border-neutral-200/60">
        <div className="mb-12 space-y-2 text-center">
          <span className="text-emerald-700 text-xs font-bold tracking-wider uppercase bg-emerald-50/80 backdrop-blur-sm py-1.5 px-3 rounded-full border border-emerald-200">
            Proses Desain — Tahap 2
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 pt-1">
            Define
          </h2>
          <p className="text-neutral-600 max-w-2xl leading-relaxed text-sm md:text-base mx-auto">
            Menganalisis hasil temuan riset untuk merumuskan masalah inti pengguna ke dalam pernyataan masalah dan pemetaan fokus fitur prioritas.
          </p>
        </div>

        {/* SATU BARIS SATU CARD (LEBAR PAS - TIDAK TERLALU BESAR) */}
        <div className="flex flex-col gap-12 max-w-3xl mx-auto">
          {defineData.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col p-6 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group w-full"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-emerald-700 mb-1 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* BINGKAI IFRAME LEBAR PROPORSIONAL ASPECT-VIDEO */}
              <div className="w-full aspect-video min-h-[380px] bg-neutral-100 rounded-xl overflow-hidden border border-neutral-300 shadow-inner relative">
                <iframe 
                  src={item.figmaEmbedUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}