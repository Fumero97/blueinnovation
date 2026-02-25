import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    el.querySelectorAll(".scroll-fade-in").forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="contatti"
      ref={sectionRef}
      className="py-28 lg:py-36 gradient-hero relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className="absolute top-0 right-0 w-full h-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 85% 20%, hsl(224 100% 70% / 0.25) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="scroll-fade-in">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-xs font-semibold tracking-widest uppercase text-white/60">
              {t("cta.label")}
            </span>
            <div className="w-8 h-px bg-white/40" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 text-balance">
            {t("cta.title")}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            {t("cta.description")}
          </p>
          <button
            onClick={() => handleScroll("#contact-form")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-primary font-bold text-base rounded hover:bg-blue-50 hover:shadow-2xl transition-all duration-300"
          >
            {t("cta.button")}
          </button>
        </div>
      </div>
    </section>
  );
}
