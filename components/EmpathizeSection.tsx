"use client"; 

export default function EmpathizeSection() {
  const empathizeData = [
    {
      title: "Data Wawancara",
      description: "Hasil in-depth interview dari 5 user komuter mengenai hambatan memesan banyak tiket moda transportasi.",
      figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGoncengExample1%3Fnode-id%3D1-1", 
    },
    {
      title: "Affinity Diagram",
      description: "Pengelompokan masalah utama pengguna: fragmentasi aplikasi, metode pembayaran, dan sinkronisasi jadwal.",
      figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGoncengExample2%3Fnode-id%3D1-2", 
    },
    {
      title: "Persona",
      description: "Representasi pengguna fiktif bernama Rian untuk memvalidasi kebutuhan fitur integrasi perjalanan.",
      figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGoncengExample3%3Fnode-id%3D1-3", 
    },
    {
      title: "User Journey",
      description: "Pemetaan langkah dan emosi pengguna saat melakukan perjalanan dari titik asal hingga tujuan akhir.",
      figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FGoncengExample4%3Fnode-id%3D1-4", 
    },
  ];

  return (
    <section id="empathize" className="max-w-7xl mx-auto px-6 py-20 relative z-10 text-neutral-900">
      {/* Header Section (DIUBAH KE TEKS GELAP SUPAYA TERBACA DI BACKGROUND PUTIH) */}
      <div className="mb-12">
        <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase">Proses Desain — Tahap 1</span>
        <h2 className="text-4xl font-extrabold mt-2 tracking-tight text-neutral-900">Empathize</h2>
        <p className="text-neutral-600 mt-4 max-w-2xl leading-relaxed">
          Tahap awal untuk memahami kendala, kebutuhan, dan motivasi para pengguna transportasi umum di Indonesia melalui riset kualitatif terarah.
        </p>
      </div>

      {/* Grid Layout Menampilkan Figma Live */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {empathizeData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col p-6 bg-neutral-50 border border-neutral-200 rounded-2xl shadow-sm"
          >
            {/* Judul & Deskripsi di dalam Kartu */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-emerald-700 mb-1">{item.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
            </div>

            {/* Bingkai Frame Figma */}
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
  );
}