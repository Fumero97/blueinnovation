import heroWave from "@/assets/hero-wave.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy-deep">
      <img
        src={heroWave}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 40%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, hsl(213,65%,4% / 0.75) 0%, hsl(213,60%,8% / 0.55) 50%, hsl(213,55%,12% / 0.35) 100%)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 lg:px-14 pb-20 lg:pb-28">
        <h1 className="font-display text-white leading-[1.06]">
          <span className="block text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold">
            {t("hero.line1")}
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-normal italic" style={{ color: "rgba(255,255,255,0.72)" }}>
            {t("hero.line2")}
          </span>
        </h1>

        <div className="mt-10 flex items-center gap-6">
          <div className="w-16 h-px bg-white/25" />
          <span className="font-sans-ui text-xs text-white/40 tracking-widest uppercase">{t("hero.tagline")}</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 lg:right-14 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="font-sans-ui text-[10px] text-white tracking-[0.25em] uppercase [writing-mode:vertical-rl]">{t("hero.scroll")}</span>
        <div className="w-px h-10 bg-white/50" />
      </div>
    </section>
  );
}
