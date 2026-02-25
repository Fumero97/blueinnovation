import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisioneMissione from "@/components/VisioneMissione";
import Servizi from "@/components/Servizi";
import Valori from "@/components/Valori";
import Metodo from "@/components/Metodo";
import ValueProposition from "@/components/ValueProposition";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Valori />
        <VisioneMissione />
        <Servizi />
        <Metodo />
        <ValueProposition />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
