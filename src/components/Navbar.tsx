import { useState, useEffect } from "react";
import { Menu, X, ExternalLink, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImg from "@/assets/logo.png";
import logoWhiteImg from "@/assets/logo-white.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.valori"), href: "#valori" },
    { label: t("nav.visione"), href: "#visione" },
    { label: t("nav.servizi"), href: "#servizi" },
    { label: t("nav.metodo"), href: "#metodo" },
    { label: t("nav.progetti"), href: "/progetti", isRoute: true },
    { label: t("nav.contatti"), href: "#contatti" },
  ];

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      if (!isHome) {
        window.location.href = "/" + href;
        return;
      }
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-full px-8 lg:px-14 flex items-center justify-between h-[68px]">
        <Link
          to="/"
          className="flex items-center transition-all duration-500"
        >
          <img src={scrolled ? logoImg : logoWhiteImg} alt="Blue Innovation" className="h-8 w-auto transition-all duration-500" />
        </Link>

        {/* Desktop Nav */}
        <ul className={`hidden lg:flex items-center gap-10 transition-all duration-500 ${
          scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="font-sans-ui text-[13px] font-medium tracking-wide text-foreground hover:text-navy transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-primary" />
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="font-sans-ui text-[13px] font-medium tracking-wide text-foreground hover:text-navy transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 bg-primary" />
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* CTA + Lang */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Language switcher */}
          <button
            onClick={() => setLang(lang === "it" ? "en" : "it")}
            className={`font-sans-ui flex items-center gap-1.5 text-[12px] font-semibold tracking-wide transition-all duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            <span className="text-[16px] leading-none">{lang === "it" ? "🇬🇧" : "🇮🇹"}</span>
            {lang === "it" ? "EN" : "IT"}
          </button>

          <a
            href="https://www.wellbe.bio/"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-sans-ui flex items-center gap-1.5 text-[13px] font-semibold tracking-wide transition-all duration-300 ${
              scrolled
                ? "text-primary hover:text-navy border-b border-primary pb-0.5 hover:border-navy"
                : "text-white/90 hover:text-white border-b border-white/50 pb-0.5 hover:border-white"
            }`}
          >
            {t("nav.scopriWellbe")}
            <ExternalLink size={11} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } bg-white border-b border-border`}
      >
        <ul className="px-8 py-6 flex flex-col gap-0">
          {navLinks.map((link) => (
            <li key={link.label} className="border-b border-border last:border-0">
              {link.isRoute ? (
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left py-4 font-sans-ui text-[15px] font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-4 font-sans-ui text-[15px] font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
          <li className="pt-5 flex items-center justify-between">
            <a
              href="https://www.wellbe.bio/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-ui inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary pb-0.5"
            >
              {t("nav.scopriWellbe")} <ExternalLink size={11} />
            </a>
            <button
              onClick={() => setLang(lang === "it" ? "en" : "it")}
              className="font-sans-ui flex items-center gap-1.5 text-[13px] font-semibold text-muted-foreground hover:text-foreground"
            >
              <span className="text-[16px] leading-none">{lang === "it" ? "🇬🇧" : "🇮🇹"}</span>
              {lang === "it" ? "EN" : "IT"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
