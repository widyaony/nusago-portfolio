import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import EmpathizeSection from "@/components/EmpathizeSection"; 
import PortfolioSections from "@/components/PortfolioSections"; 

export default function Home() {
  return (
    <main className="bg-white text-neutral-900 min-h-screen"> 
      <Navbar />

      <Hero />

      {/* TAHAP 1: Empathize */}
      <EmpathizeSection />

      {/* TAHAP 2 s/d 5: Define, Ideate, Prototype, Testing (Sudah digabung jadi satu di sini) */}
      <PortfolioSections />

      <Footer />
    </main>
  );
}