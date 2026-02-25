import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import img1 from "@/assets/vision-img1.jpg";
import img2 from "@/assets/vision-img2.jpg";

export default function VisioneMissione() {
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
    <section id="visione" ref={sectionRef} className="bg-[hsl(213,55%,10%)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-14 py-28 lg:py-44">

        <div className="scroll-fade-in flex items-center gap-4 mb-20">
          <div className="w-10 h-px bg-white/25" />
          <span className="font-sans-ui text-[11px] font-semibold tracking-[0.25em] uppercase text-white/40">
            {t("visione.sectionLabel")}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">

          <div className="scroll-fade-in">
            <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-10">
              {t("visione.heading1")}<br />
              {t("visione.heading2")}{" "}
              <em className="not-italic italic font-normal" style={{ color: "hsl(210 80% 70%)" }}>
                {t("visione.heading3")}<br />{t("visione.heading4")}
              </em>
            </h2>
            <p className="font-sans-ui text-white/60 text-base lg:text-[17px] leading-[1.75] max-w-lg">
              {t("visione.paragraph")}
            </p>

            <div className="mt-16 relative h-72 lg:h-96">
              <div className="absolute left-0 top-0 w-[55%] h-full overflow-hidden shadow-[0_32px_80px_-12px_rgba(0,0,0,0.6)]">
                <img src={img1} alt="Visione Blue Innovation" className="w-full h-full object-cover" />
              </div>
              <div className="absolute right-0 bottom-0 w-[52%] h-[86%] overflow-hidden shadow-[0_32px_80px_-12px_rgba(0,0,0,0.6)]"
                style={{ borderLeft: "4px solid hsl(213,55%,10%)", borderTop: "4px solid hsl(213,55%,10%)" }}>
                <img src={img2} alt="Missione Blue Innovation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="scroll-fade-in lg:pt-6">
            <div className="border-t border-white/10 pt-10">
              <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase text-white/30 block mb-8">
                {t("visione.missionLabel")}
              </span>
              <p className="font-sans-ui text-white/65 text-[16px] lg:text-[17px] leading-[1.8] mb-6">
                {t("visione.missionP1")}
              </p>
              <p className="font-sans-ui text-white/65 text-[16px] lg:text-[17px] leading-[1.8]">
                {t("visione.missionP2Start")}{" "}
                <strong className="text-white font-semibold">{t("visione.missionP2Bold")}</strong>{" "}
                {t("visione.missionP2End")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
