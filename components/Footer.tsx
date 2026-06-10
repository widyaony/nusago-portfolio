"use client";

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-20 border-t border-neutral-200 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          {/* Judul Studi Kasus - Hitam Kontras */}
          <h2 className="text-xl font-extrabold tracking-wider text-neutral-900">
            Nusa<span className="text-emerald-500">Go</span>
          </h2>
          <p className="text-neutral-500 text-sm mt-1">
            Designed & Developed for UI/UX Case Study
          </p>
        </div>

        {/* Bagian Nama Lengkap Widya - Teks Terang & Jelas */}
        <div className="text-sm text-neutral-600 font-medium">
          © {new Date().getFullYear()} — Crafted with ❤️ by{" "}
          <span className="text-emerald-500 font-bold hover:underline cursor-pointer transition-all">
            Widya Ony Yusnita Rahayu
          </span>
        </div>
      </div>
    </footer>
  );
}