import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImg from "@/assets/logo.png";
import logoWhiteImg from "@/assets/logo-white.png";
import certGreenHosting from "@/assets/cert-green-hosting.png";
import certIso from "@/assets/cert-iso14001.png";
import certBenefit from "@/assets/cert-societa-benefit.png";

export default function Footer() {
  const { t } = useLanguage();

  const menuLinks = [
    { label: t("nav.valori"), href: "#valori" },
    { label: t("nav.visione"), href: "#visione" },
    { label: t("nav.servizi"), href: "#servizi" },
    { label: t("nav.metodo"), href: "#metodo" },
    { label: t("nav.contatti"), href: "#contatti" },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white">

      {/* CTA band */}
      <div className="border-b" style={{ borderColor: "hsl(213 60% 22%)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px" style={{ background: "hsl(210 80% 40%)" }} />
                <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: "hsl(210 80% 60%)" }}>
                  {t("footer.collaboriamo")}
                </span>
              </div>
              <h2 className="font-display text-5xl lg:text-7xl font-bold text-white leading-[1.04] tracking-tight">
                Let's work
                <br />
                <span className="font-normal italic" style={{ color: "hsl(213 30% 55%)" }}>together</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@blueinnovation.it"
                className="font-sans-ui flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium group"
              >
                <Mail size={15} className="flex-shrink-0" />
                <span className="border-b border-white/20 pb-0.5 group-hover:border-white transition-colors">info@blueinnovation.it</span>
              </a>
              <a
                href="https://www.linkedin.com/company/blueinnovation-srl/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-ui flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium group"
              >
                <Linkedin size={15} className="flex-shrink-0" />
                <span className="border-b border-white/20 pb-0.5 group-hover:border-white transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Nav + logo band */}
      <div className="border-b" style={{ borderColor: "hsl(213 60% 20%)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="inline-flex">
              <img src={logoWhiteImg} alt="Blue Innovation" className="h-8 w-auto" />
            </div>

            <nav>
              <ul className="flex flex-wrap gap-8">
                {menuLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-sans-ui text-[13px] font-medium text-white/40 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="https://www.wellbe.bio/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-ui inline-flex items-center gap-2 text-[13px] font-semibold text-white/50 hover:text-white transition-colors duration-200 border-b border-white/20 pb-0.5 hover:border-white/50"
            >
              {t("nav.scopriWellbe")}
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>

      {/* Company info band */}
      <div className="border-t" style={{ borderColor: "hsl(213 60% 18%)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-[auto_auto_auto_1fr] gap-8 lg:gap-16 items-start">
            <div>
              <p className="font-sans-ui text-[13px] font-bold text-white/70 mb-2">Blue Innovation s.r.l</p>
              <div className="font-sans-ui text-[12px] text-white/40 space-y-0.5 leading-relaxed">
                <p>info@blueinnovation.it</p>
                <p>P.IVA 03833320785</p>
                <p>PEC blueinnovation@pec.it</p>
                <p>SDI: KRRH6B9</p>
              </div>
            </div>

            <div>
              <p className="font-sans-ui text-[13px] font-bold text-white/70 mb-2">{t("footer.sedeLegale")}</p>
              <div className="font-sans-ui text-[12px] text-white/40 space-y-0.5 leading-relaxed">
                <p>Via Gioacchino Rossini 155E,</p>
                <p>87036 Rende CS</p>
              </div>
            </div>

            <div>
              <p className="font-sans-ui text-[13px] font-bold text-white/70 mb-2">{t("footer.sedeOperativa")}</p>
              <div className="font-sans-ui text-[12px] text-white/40 space-y-0.5 leading-relaxed">
                <p>Via Vincenzo Biscardi, 15,</p>
                <p>87100 Cosenza CS</p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1 flex items-center justify-start lg:justify-end gap-4">
              <img src={certBenefit} alt="Società Benefit" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src={certGreenHosting} alt="Green Hosting" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              <img src={certIso} alt="ISO 14001" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "hsl(213 60% 16%)" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap gap-6">
            {["Privacy Policy", "Terms & Conditions"].map((item) => (
              <Link key={item} to="/privacy-policy" className="font-sans-ui text-[11px] text-white/25 hover:text-white/50 transition-colors">
                {item}
              </Link>
            ))}
            <a
              href="https://www.notion.so/Lavora-Blue-Innovation-15a28ceeb7d980a8a4fada20718d331c"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-ui text-[11px] text-white/25 hover:text-white/50 transition-colors"
            >
              {t("footer.lavoraConNoi")}
            </a>
            <span className="font-sans-ui text-[11px] text-white/20">
              © {new Date().getFullYear()} Blue Innovation s.r.l. — Made with 💙 in Calabria
            </span>
          </div>
          <a
            href="https://www.linkedin.com/company/blueinnovation-srl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 hover:text-white/60 transition-colors"
          >
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
