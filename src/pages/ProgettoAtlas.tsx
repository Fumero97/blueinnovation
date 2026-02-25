import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import atlasCover from "@/assets/atlas-cover.png";
import atlasLoghi from "@/assets/atlas-loghi.jpg";
import { ExternalLink } from "lucide-react";

export default function ProgettoAtlas() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-[hsl(var(--navy-deep))] to-[hsl(var(--navy))]">
        <div className="max-w-5xl mx-auto px-8">
          <p className="font-sans-ui text-[11px] font-semibold tracking-widest uppercase text-[hsl(var(--blue-accent))] mb-4">
            Ecosystem Facilitator · Crucoli (KR) · 2025
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">
            ATLAS
          </h1>
          <p className="mt-3 text-white/60 font-sans-ui text-lg max-w-3xl">
            {t("atlas.subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-5xl mx-auto px-8 -mt-4">
          <img src={atlasCover} alt="ATLAS project cover" className="w-full rounded-2xl shadow-lg" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-8 space-y-12">
          <div>
            <p className="font-sans-ui text-base leading-relaxed text-foreground">
              <strong>ATLAS</strong> {t("atlas.intro1")}{" "}
              <strong>Blue Innovation</strong> {t("atlas.intro1b")}
            </p>
            <p className="font-sans-ui text-base leading-relaxed text-muted-foreground mt-4">
              {t("atlas.intro2")} <strong>{t("atlas.intro2b")}</strong>{t("atlas.intro2c")}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              {t("atlas.ruoloTitle")}
            </h2>
            <p className="font-sans-ui text-base leading-relaxed text-muted-foreground">
              {t("atlas.ruoloDesc")}
            </p>
            <ul className="mt-4 space-y-2 font-sans-ui text-sm text-muted-foreground list-disc pl-5">
              {[0, 1, 2, 3].map((i) => (
                <li key={i}>{t(`atlas.ruoloItems.${i}`)}</li>
              ))}
            </ul>
            <p className="font-sans-ui text-sm text-muted-foreground mt-4 italic">
              {t("atlas.ruoloNote")}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              {t("atlas.missionTitle")}
            </h2>
            <p className="font-sans-ui text-base leading-relaxed text-muted-foreground">
              {t("atlas.missionDesc")}
            </p>
            <p className="font-sans-ui text-sm text-muted-foreground mt-3">
              {t("atlas.missionDesc2")}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              {t("atlas.howTitle")}
            </h2>
            <p className="font-sans-ui text-base leading-relaxed text-muted-foreground">
              {t("atlas.howDesc")}
            </p>
            <p className="font-sans-ui text-sm text-muted-foreground mt-3">
              {t("atlas.howDesc2")}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              {t("atlas.resultTitle")}
            </h2>
            <p className="font-sans-ui text-base leading-relaxed text-muted-foreground">
              {t("atlas.resultDesc")}
            </p>
            <p className="font-sans-ui text-sm text-muted-foreground mt-3">
              {t("atlas.resultDesc2")}
            </p>
          </div>

          <div className="pt-4">
            <a
              href="https://atlas.blueinnovation.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans-ui text-sm font-semibold text-primary border-b-2 border-primary pb-1 hover:text-[hsl(var(--blue-accent))] hover:border-[hsl(var(--blue-accent))] transition-colors"
            >
              {t("atlas.ctaLink")} <ExternalLink size={13} />
            </a>
          </div>

          <div className="border-t border-border pt-8 mt-8">
            <p className="font-sans-ui text-xs text-muted-foreground leading-relaxed">
              {t("atlas.fundingNote1")}
            </p>
            <p className="font-sans-ui text-xs text-muted-foreground mt-2">
              {t("atlas.fundingNote2")}
            </p>
            <img src={atlasLoghi} alt="Loghi istituzionali finanziamento ATLAS" className="mt-4 max-w-md w-full" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
