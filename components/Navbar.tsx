"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Empathize");

  // Efek deteksi scroll layar agar navbar bertransisi dengan halus
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Empathize", "Define", "Ideate", "Prototype", "Test"];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
          scrolled
            // Ketika di-scroll: Menggunakan warna putih susu semi-transparan dengan efek blur kaca premium
            ? "bg-white/80 backdrop-blur-md border-b border-stone-200/60 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            // Ketika di paling atas: Transparan penuh agar menyatu bersih dengan latar putih Hero
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* SISI KIRI: LOGO */}
          <a href="#" className="relative group block w-40 h-25 transition-transform duration-300 hover:scale-[1.01]">
            <Image
              src="/logo-nusago.png"
              alt="NusaGo Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </a>

          {/* SISI KANAN: MENU KAPSUL (BENTO NAV STYLE - ADAPTIF LIGHT MODE) */}
          <div className="hidden md:flex items-center gap-1 bg-stone-100/80 border border-stone-200/60 p-1.5 rounded-full backdrop-blur-md">
            {menuItems.map((item) => {
              const isActive = activeMenu === item;
              const linkId = item.toLowerCase();
              
              return (
                <a
                  key={item}
                  href={`#${linkId}`}
                  onClick={() => setActiveMenu(item)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      // Teks menu aktif: Putih bersih di atas kapsul hijau
                      ? "text-white font-bold"
                      // Teks menu biasa: Abu-abu gelap kontras tinggi agar mudah dibaca
                      : "text-stone-500 hover:text-stone-900"
                  }`}
                >
                  {/* Pill background: Menggunakan warna hijau hutan segar yang menyala di latar putih */}
                  {isActive && (
                    <div className="absolute inset-0 bg-emerald-700 rounded-full z-[-1] border border-emerald-600/20 shadow-sm" />
                  )}
                  {item}
                </a>
              );
            })}
          </div>

        </div>
      </nav>
    </>
  );
}