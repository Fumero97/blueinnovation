import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import valoriImg from "@/assets/valori-img.jpg";

export default function Valori() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const items = [0, 1, 2, 3].map((i) => ({
    number: `0${i + 1}`,
    title: t(`valori.items.${i}.title`),
    description: t(`valori.items.${i}.description`),
  }));

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
      { threshold: 0.08 }
    );
    el.querySelectorAll(".scroll-fade-in").forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="valori" ref={sectionRef} className="bg-white">
      <div className="w-full h-px bg-border" />

      <div className="max-w-7xl mx-auto px-8 lg:px-14 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Left: image */}
          <div className="scroll-fade-in relative order-2 lg:order-1">
            <div className="absolute -top-5 -right-5 z-10 w-[100px] h-[100px]">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite]">
                <defs>
                  <path id="vp" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text style={{ fontSize: "8.5px", letterSpacing: "2.5px", fontFamily: "Inter", fill: "hsl(213,60%,15%)", fontWeight: 600 }}>
                  <textPath href="#vp">· WORKING WITH A VISION · BLUE INNOVATION</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
            </div>

            <div className="overflow-hidden aspect-[4/5] w-full max-w-md shadow-[0_24px_80px_-12px_hsl(213_60%_15%/0.20)]">
              <img src={valoriImg} alt={t("valori.title")} className="w-full h-full object-cover" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 shadow-xl">
              <div className="font-display text-4xl font-bold mb-1">4</div>
              <div className="font-sans-ui text-[11px] tracking-[0.15em] uppercase text-white/60">{t("valori.badgeLabel")}</div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="scroll-fade-in order-1 lg:order-2">
            <div className="mb-10">
              <span className="section-label">{t("valori.sectionLabel")}</span>
              <div className="w-10 h-px bg-primary/30 mt-3 mb-6" />
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
                {t("valori.title")}
              </h2>
            </div>

            <div className="space-y-0">
              {items.map((valore, i) => (
                <div key={i} className="border-t border-border last:border-b">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                  >
                    <div className="flex items-start gap-5">
                      <span className="font-sans-ui text-[11px] font-bold text-muted-foreground/50 tracking-widest mt-1 min-w-[1.5rem]">
                        {valore.number}
                      </span>
                      <span className={`font-display text-xl font-semibold tracking-tight leading-snug transition-colors duration-200 ${
                        openIndex === i ? "text-primary" : "text-foreground/70 group-hover:text-primary"
                      }`}>
                        {valore.title}
                      </span>
                    </div>
                    <span className={`flex-shrink-0 mt-1 font-sans-ui text-lg text-primary transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}>
                      +
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i ? "max-h-48 opacity-100 pb-6" : "max-h-0 opacity-0"
                  }`}>
                    <p className="font-sans-ui text-muted-foreground leading-relaxed text-[15px] pl-11">
                      {valore.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
