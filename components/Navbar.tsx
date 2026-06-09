import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#003B01] via-[#005202] to-[#006C02] shadow-md border-b border-green-800/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center hover:scale-105 transition-transform duration-250">
          <Image 
            src="/logo-nusago.png" 
            alt="Logo NusaGo"
            width={125}           
            height={38}           
            className="object-contain brightness-0 invert" 
            priority
          />
        </div>

        {}
        <div className="flex gap-1 sm:gap-4 font-medium text-green-100/90 bg-black/15 p-1 rounded-full border border-white/5">
          <a href="#empathize" className="px-4 py-1.5 rounded-full text-sm hover:text-white hover:bg-white/15 transition-all duration-200">Empathize</a>
          <a href="#define" className="px-4 py-1.5 rounded-full text-sm hover:text-white hover:bg-white/15 transition-all duration-200">Define</a>
          <a href="#ideate" className="px-4 py-1.5 rounded-full text-sm hover:text-white hover:bg-white/15 transition-all duration-200">Ideate</a>
          <a href="#prototype" className="px-4 py-1.5 rounded-full text-sm hover:text-white hover:bg-white/15 transition-all duration-200">Prototype</a>
          <a href="#test" className="px-4 py-1.5 rounded-full text-sm hover:text-white hover:bg-white/15 transition-all duration-200">Test</a>
        </div>

      </div>
    </nav>
  );
}