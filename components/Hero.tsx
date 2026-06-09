import Image from "next/image";
import { project } from "@/data/project";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      flex-col
      justify-center
      items-center
      px-6
      relative
      overflow-hidden
      bg-zinc-50
      "
    >
      {}
      <div className="mb-2 w-full max-w-4xl flex justify-center items-center hover:scale-[1.01] transition-transform duration-300">
        <Image 
          src="/logo-nusago.png" 
          alt="Logo NusaGo"
          width={800}           
          height={320}           
          className="object-contain w-full h-auto max-h-[380px] sm:max-h-[450px]" 
          priority
        />
      </div>

      {}
      <div className="max-w-2xl text-center px-4 mt-2 font-sans">
        <p className="text-xl sm:text-2xl font-medium tracking-wide leading-relaxed text-zinc-800">
          {project.subtitle}
        </p>
      </div>

      {}
      <div className="flex flex-col sm:flex-row gap-5 mt-12 w-full sm:w-auto px-4 sm:px-0 font-sans">
        <a
          href={project.figma}
          target="_blank"
          rel="noopener noreferrer"
          className="
          bg-[#00D95A]
          text-white
          px-10
          py-4
          rounded-full
          font-bold
          text-center
          hover:bg-[#00C250]
          hover:scale-[1.03]
          active:scale-[0.98]
          transition-all
          duration-200
          shadow-[0_10px_25px_rgba(0,217,90,0.3)]
          "
        >
          Coba Prototype
        </a>

        <a
          href="#empathize"
          className="
          border-2
          border-zinc-800
          text-zinc-800
          bg-white
          px-10
          py-4
          rounded-full
          font-bold
          text-center
          hover:bg-zinc-800
          hover:text-white
          hover:scale-[1.03]
          active:scale-[0.98]
          transition-all
          duration-200
          shadow-sm
          "
        >
          Kunjungi Projek
        </a>
      </div>
    </section>
  );
}