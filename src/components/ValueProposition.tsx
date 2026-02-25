import { useEffect, useRef } from "react";
import { Globe, Target, Leaf, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Globe, Target, Leaf, Users];

export default function ValueProposition() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const pillars = [0, 1, 2, 3].map((i) => ({
    icon: icons[i],
    stat: t(`valueProposition.pillars.${i}.stat`),
    title: t(`valueProposition.pillars.${i}.title`),
    description: t(`valueProposition.pillars.${i}.description`),
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
    <section ref={sectionRef} className="bg-background overflow-hidden">
      <div className="w-full h-px bg-border" />
      <div className="max-w-7xl mx-auto px-8 lg:px-14 py-24 lg:py-36">

        <div className="scroll-fade-in grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 items-end mb-20 border-b border-border pb-10">
          <div>
            <span className="section-label">{t("valueProposition.sectionLabel")}</span>
            <div className="w-10 h-px bg-primary/30 mt-3" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
            {t("valueProposition.title")}{" "}
            <em className="not-italic italic font-normal text-primary">{t("valueProposition.titleAccent")}</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-border sm:divide-x">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="scroll-fade-in group px-0 lg:px-8 first:pl-0 last:pr-0 py-8 sm:py-0"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                  <Icon size={18} className="text-muted-foreground group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3 tracking-tight leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-sans-ui text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
