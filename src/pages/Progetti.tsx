import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import atlasCover from "@/assets/atlas-cover.png";
import { ArrowRight } from "lucide-react";

export default function Progetti() {
  const { t } = useLanguage();

  const projects = [
    {
      slug: "atlas",
      title: "ATLAS",
      subtitle: t("atlas.subtitle"),
      description: t("atlas.projectDesc"),
      image: atlasCover,
      location: "Crucoli (KR)",
      category: "Ecosystem Facilitator",
      year: "2025",
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-b from-[hsl(var(--navy-deep))] to-[hsl(var(--navy))]">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight">
            {t("progetti.title")}
          </h1>
          <p className="mt-4 text-white/60 font-sans-ui text-lg max-w-2xl">
            {t("progetti.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid gap-10">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/progetti/${project.slug}`}
                className="group grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-sans-ui text-[11px] font-semibold tracking-widest uppercase text-[hsl(var(--blue-accent))]">
                      {project.category}
                    </span>
                    <span className="text-muted-foreground text-xs">•</span>
                    <span className="font-sans-ui text-[11px] text-muted-foreground">
                      {project.location} — {project.year}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                    {project.title}
                  </h2>
                  <p className="font-sans-ui text-sm text-muted-foreground leading-relaxed mb-1">
                    {project.subtitle}
                  </p>
                  <p className="font-sans-ui text-sm text-muted-foreground leading-relaxed mt-3">
                    {project.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-sans-ui text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    {t("progetti.scopri")} <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
