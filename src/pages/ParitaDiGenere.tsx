import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { genderEquality } from "@/content/genderEquality";
import policyAsset from "@/assets/politica-parita-di-genere.pdf.asset.json";

export default function ParitaDiGenere() {
  const { lang } = useLanguage();
  const content = genderEquality[lang];
  const it = lang === "it";
  const download = (
    <div className="flex flex-col items-start gap-1">
      <Button asChild variant="link" className="h-auto justify-start px-0 py-2 whitespace-normal text-left">
        <a href={policyAsset.url} download="Politica-Parita-di-Genere-Blue-Innovation.pdf">
          <Download aria-hidden="true" />{content.download}
        </a>
      </Button>
      <Button asChild variant="link" className="h-auto justify-start px-0 py-2 whitespace-normal text-left">
        <a href={`https://blueinnovation.lovable.app${policyAsset.url}`} target="_blank" rel="noopener noreferrer">
          <FileText aria-hidden="true" />{it ? "Apri il PDF" : "Open PDF"}
        </a>
      </Button>
    </div>
  );
  const details = [
    [it ? "Programma" : "Programme", "PR Calabria FESR FSE+ 2021–2027"],
    [it ? "Azione" : "Action", it ? '4.c.1 “Sostenere l’occupazione femminile”' : '4.c.1 “Supporting women’s employment”'],
    [it ? "Approvazione" : "Approval", "DDG n. 18860 del 18/12/2024"],
    [content.policy, `${content.company}, 13/10/2026`],
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <section className="border-b border-border pt-36 pb-14 lg:pt-40 lg:pb-16">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-14">
            <p className="font-sans-ui text-xs uppercase text-muted-foreground mb-6">{content.label}</p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
              {content.title}<br />{content.titleEnd}
            </h1>
          </div>
        </section>
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-14 py-12 lg:py-20 grid gap-12 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-24">
          <aside className="font-sans-ui text-sm">
            <div className="lg:sticky lg:top-24">
              <h2 className="font-sans-ui font-semibold text-sm mb-3">{it ? "Finanziamento" : "Funding"}</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">{it
                ? 'Finanziato sull’Avviso Pubblico per la concessione di contributi alle PMI per la “Certificazione della parità di genere”.'
                : 'Funded under the public call for grants to SMEs for “Gender equality certification”.'}</p>
              <dl>
                {details.map(([label, value]) => (
                  <div key={label} className="border-t border-border py-3 last:border-b">
                    <dt className="text-muted-foreground mb-1">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-3">{download}</div>
            </div>
          </aside>
          <article className="font-sans-ui text-base leading-[1.8] text-foreground/80 min-w-0">
            {content.intro.map((text) => <p className="mb-6" key={text}>{text}</p>)}
            <ol className="list-decimal pl-8 border-l border-border space-y-3 mb-8 marker:text-primary">
              {content.principles.map((text) => <li className="pl-2" key={text}>{text}</li>)}
            </ol>
            <p className="mb-6">{content.commitmentIntro}</p>
            <ul className="list-disc pl-6 space-y-4 mb-8 marker:text-primary">
              {content.commitments.map((text) => <li className="pl-2" key={text}>{text}</li>)}
            </ul>
            {content.closing.map((text) => <p className="mb-6" key={text}>{text}</p>)}
            <div className="border-y border-border py-7 mt-10 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
              <div className="flex gap-3 items-start">
                <FileText className="mt-1 shrink-0 text-primary" size={22} aria-hidden="true" />
                <div>
                  <h2 className="font-sans-ui text-base font-semibold text-foreground">{content.policy}</h2>
                  <p className="text-sm text-muted-foreground">{content.pdfNote}</p>
                </div>
              </div>
              {download}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}