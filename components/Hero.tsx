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
      bg-gradient-to-r
      from-[#002D01]
      via-[#006C02]
      to-[#002D01]
      "
    >
      {}
      <div className="mb-6 bg-white w-48 h-48 rounded-full shadow-xl flex items-center justify-center p-6 overflow-hidden">
        <Image 
          src="/logo-nusago.png" 
          alt="Logo NusaGo"
          width={160}           
          height={160}           
          className="object-contain mix-blend-multiply" 
          priority
        />
      </div>

      <p className="text-white text-xl mt-4 opacity-90 tracking-wide font-light">
        {project.subtitle}
      </p>

      <div className="flex gap-5 mt-10">
        <a
          href={project.figma}
          target="_blank"
          className="
          bg-white
          text-[#006C02]
          px-8
          py-4
          rounded-full
          font-semibold
          hover:bg-zinc-100
          transition-colors
          shadow-md
          "
        >
          Coba Prototype
        </a>

        <a
          href="#prototype"
          className="
          border
          border-white
          text-white
          px-8
          py-4
          rounded-full
          hover:bg-white/10
          transition-colors
          "
        >
          Kunjungi Projek
        </a>
      </div>
    </section>
  );
}