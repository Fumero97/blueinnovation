import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Metodo() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const steps = [0, 1, 2, 3].map((i) => ({
    number: `0${i + 1}`,
    title: t(`metodo.steps.${i}.title`),
    description: t(`metodo.steps.${i}.description`),
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
    <section id="metodo" ref={sectionRef} className="bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-14 py-24 lg:py-36">

        <div className="scroll-fade-in grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 items-end mb-20 border-b pb-10" style={{ borderColor: "hsl(213 60% 25%)" }}>
          <div>
            <span className="section-label-light">{t("metodo.sectionLabel")}</span>
            <div className="w-10 h-px mt-3" style={{ background: "hsl(210 80% 50%)" }} />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            {t("metodo.title")} <em className="not-italic font-normal italic" style={{ color: "hsl(210 80% 72%)" }}>{t("metodo.titleAccent")}</em>
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="scroll-fade-in group grid grid-cols-[60px_1fr_1fr] gap-8 lg:gap-16 py-10 border-b transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms`, borderColor: "hsl(213 60% 22%)" }}
            >
              <div className="font-sans-ui text-4xl font-bold tabular-nums" style={{ color: "hsl(213 60% 30%)" }}>
                {step.number}
              </div>
              <div className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight self-start">
                {step.title}
              </div>
              <p className="font-sans-ui text-sm lg:text-base leading-relaxed" style={{ color: "hsl(213 30% 60%)" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
