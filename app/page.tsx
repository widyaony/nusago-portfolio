import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FigmaSection from "@/components/FigmaSection";
import Test from "@/components/Test";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FigmaSection
        id="empathize"
        title="Empathize"
      />

      <FigmaSection
        id="define"
        title="Define"
      />

      <FigmaSection
        id="ideate"
        title="Ideate"
      />

      <FigmaSection
        id="prototype"
        title="Prototype"
      />

      <Test />

      <Footer />
    </>
  );
}