import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        {}
        <div className="flex items-center">
          <Image 
            src="/logo-nusago.png" 
            alt="Logo NusaGo"
            width={130}           
            height={40}           
            className="object-contain"
            priority
          />
        </div>

        {/* Menu Navigasi */}
        <div className="flex gap-10 font-medium text-zinc-600">
          <a href="#empathize" className="hover:text-[#006C02] transition-colors">Empathize</a>
          <a href="#define" className="hover:text-[#006C02] transition-colors">Define</a>
          <a href="#ideate" className="hover:text-[#006C02] transition-colors">Ideate</a>
          <a href="#prototype" className="hover:text-[#006C02] transition-colors">Prototype</a>
          <a href="#test" className="hover:text-[#006C02] transition-colors">Test</a>
        </div>

      </div>
    </nav>
  );
}