import { useEffect, useRef } from "react";

export default function ChiSiamo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    el.querySelectorAll(".scroll-fade-in").forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="chi-siamo" ref={sectionRef} className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl scroll-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Chi siamo
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
              Innovazione, tecnologia e{" "}
              <span className="text-primary">futuri possibili.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Blue Innovation è una società innovativa che opera al confine tra tecnologia,
              imprenditorialità e ricerca. Lavoriamo con imprese, startup ed enti per costruire
              insieme il migliore tra i futuri possibili.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Attraverso un approccio sistemico all'innovazione, facilitiamo processi di Open
              Innovation, trasferiamo tecnologie ad alto impatto e supportiamo l'ecosistema
              imprenditoriale con strumenti concreti e reti di valore. Il nostro prodotto di punta,
              <strong className="text-foreground"> Wellbe</strong>, rappresenta l'evoluzione
              del welfare aziendale verso il benessere integrato.
            </p>
        </div>
      </div>
    </section>
  );
}
