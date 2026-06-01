import { useEffect, useRef } from "react";
import { Lightbulb, Cpu, Rocket, Network, ArrowUpRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Lightbulb, Cpu, Rocket, Network];

export default function Servizi() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const services = [0, 1, 2, 3].map((i) => ({
    icon: icons[i],
    title: t(`servizi.items.${i}.title`),
    description: t(`servizi.items.${i}.description`),
    tag: t(`servizi.items.${i}.tag`),
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
      { threshold: 0.06 }
    );
    el.querySelectorAll(".scroll-fade-in").forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servizi" ref={sectionRef} className="bg-background overflow-hidden">
      <div className="w-full h-px bg-border" />

      <div className="max-w-7xl mx-auto px-8 lg:px-14 py-24 lg:py-36">

        <div className="scroll-fade-in grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-20 items-end mb-20 border-b border-border pb-10">
          <div>
            <span className="section-label">{t("servizi.sectionLabel")}</span>
            <div className="w-10 h-px bg-primary/30 mt-3" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
            {t("servizi.title")} <em className="not-italic text-primary">{t("servizi.titleAccent")}</em>
          </h2>
        </div>

        {/* Wellbe */}
        <div className="scroll-fade-in mb-6">
          <a
            href="https://www.wellbe.bio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col lg:flex-row overflow-hidden"
            style={{ background: "hsl(213,60%,13%)" }}
          >
            <div className="flex-1 p-10 lg:p-14 relative">
              <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)`,
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase text-white/40">
                    {t("servizi.flagship")}
                  </span>
                </div>
                <h3 className="font-display text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight">
                  Wellbe
                </h3>
                <p className="font-sans-ui text-[11px] font-semibold tracking-[0.2em] uppercase text-white/35 mb-6">
                  {t("servizi.wellbeSubtitle")}
                </p>
                <p className="font-sans-ui text-white/60 text-base leading-relaxed max-w-lg">
                  {t("servizi.wellbeDesc")}
                </p>
                <div className="mt-10 inline-flex items-center gap-3 border-b border-white/30 pb-1 text-white/70 hover:text-white hover:border-white transition-all duration-300 group-hover:gap-4">
                  <span className="font-sans-ui text-sm font-semibold tracking-wide">{t("servizi.scopriWellbe")}</span>
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>

            <div className="hidden lg:flex w-72 flex-col items-center justify-center relative border-l"
              style={{ borderColor: "hsl(213 60% 22%)" }}>
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, hsl(213,60%,10%) 0%, hsl(210,70%,20%) 100%)" }}
              />
              <div className="relative flex flex-col items-center gap-2 p-8">
                <div className="relative w-32 h-32">
                  {[0, 12, 24, 36].map((inset) => (
                    <div
                      key={inset}
                      className="absolute rounded-full border border-white/10"
                      style={{ inset: `${inset}px` }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/25 flex items-center justify-center">
                      <ExternalLink size={14} className="text-white/60" />
                    </div>
                  </div>
                </div>
                <span className="font-sans-ui text-[10px] text-white/30 tracking-[0.2em] uppercase mt-4">wellbe.bio</span>
              </div>
            </div>
          </a>
        </div>

        {/* Services list */}
        <div className="border-t border-border">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="scroll-fade-in group border-b border-border overflow-hidden cursor-default bg-primary lg:bg-transparent"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid grid-cols-[40px_1fr_auto] lg:grid-cols-[60px_1fr_auto] gap-4 lg:gap-16 items-center py-7 px-4 lg:px-2 lg:-mx-2 transition-colors duration-300 lg:group-hover:bg-primary">
                  <span className="font-sans-ui text-[11px] font-bold tracking-widest text-white/40 lg:text-muted-foreground/40 lg:group-hover:text-white/30 transition-colors duration-300">
                    0{i + 2}
                  </span>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-white lg:text-foreground tracking-tight lg:group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className="font-sans-ui text-[10px] font-semibold tracking-widest uppercase text-white/60 border border-white/25 lg:text-primary/60 lg:border-primary/20 rounded-full px-2.5 py-0.5 lg:group-hover:text-white/50 lg:group-hover:border-white/20 transition-colors duration-300">
                      {service.tag}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/25 lg:border-border flex items-center justify-center flex-shrink-0 lg:group-hover:border-white/30 transition-colors duration-300">
                    <Icon size={17} className="text-white/70 lg:text-muted-foreground lg:group-hover:text-white/70 transition-colors duration-300" />
                  </div>
                </div>
                <div className="max-h-96 lg:max-h-0 overflow-hidden transition-all duration-500 ease-in-out lg:group-hover:max-h-24 bg-primary">
                  <p className="font-sans-ui text-white/85 lg:text-white/60 text-sm leading-relaxed px-4 lg:px-2 pb-6 ml-[calc(40px+1rem)] lg:ml-[calc(60px+4rem)] max-w-2xl">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
