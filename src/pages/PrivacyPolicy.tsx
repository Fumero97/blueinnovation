import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-14 py-16 lg:py-24">
          <button
            onClick={() => navigate(-1)}
            className="font-sans-ui flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 text-sm mb-10 group"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1 duration-200" />
            Torna al sito
          </button>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-white/30" />
            <span className="font-sans-ui text-[11px] font-semibold tracking-[0.22em] uppercase text-white/40">
              Legale
            </span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Informativa Privacy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 lg:px-14 py-16 lg:py-24">
        <div className="prose prose-slate max-w-none">

          <p className="font-sans-ui text-muted-foreground leading-relaxed mb-8">
            La società <strong className="text-foreground">Blue Innovation S.r.l.</strong> (P. IVA 03833320785), con sede legale in Rende in Via Gioacchino Rossini, 155/E in qualità di titolare del trattamento dati personali di seguito il "Titolare", rappresentata dall'Amministratore Unico Ing. Gabriele Zangara del sito web www.blueinnovation.it (di seguito il "Sito"), informa i visitatori del Sito (di seguito gli "Interessati") ai sensi dell'art. 13 del regolamento europeo n. 2016/679, il General Data Protection Regulation (GDPR).
          </p>

          <p className="font-sans-ui text-muted-foreground leading-relaxed mb-8">
            Il Titolare è a conoscenza dell'importanza del trattamento dei dati personali degli Interessati e, per questo motivo, si prende cura di indicare quali dati vengono trattati e come questi vengono trattati. Procedendo nella navigazione del Sito o indicando la volontà di usufruire dei servizi forniti dallo stesso, l'Interessato dichiara di aver letto e accettato la presente informativa (di seguito "Informativa"), rilasciando così il consenso per il trattamento dei dati personali da parte del Titolare. Per qualsiasi informazione, dubbio o richiesta relativi alla presente Informativa, il Titolare mette a disposizione degli Interessati il seguente indirizzo email: <a href="mailto:info@blueinnovation.it" className="text-primary hover:underline">info@blueinnovation.it</a>. Il Responsabile della protezione dei dati è l'avv. Sergio Niger (email: <a href="mailto:sergioniger@gmail.com" className="text-primary hover:underline">sergioniger@gmail.com</a>).
          </p>

          <Section title="Quali sono i diritti dell'Interessato in relazione al trattamento dei dati personali?">
            <p className="font-sans-ui text-muted-foreground leading-relaxed mb-4">L'Interessato ha i seguenti diritti:</p>
            <ul className="font-sans-ui text-muted-foreground space-y-2 pl-0 list-none">
              {[
                "diritto di essere informato che vi sia un trattamento dati in essere che lo riguarda e, in caso positivo, accedere ai dati personali trattati;",
                "diritto di rettifica dei dati personali;",
                "diritto alla cancellazione (diritto all'oblio) dei dati personali che lo riguardano;",
                "diritto alla limitazione del trattamento dei dati personali che lo riguardano;",
                "diritto alla portabilità dei dati per ricevere, o far trasmettere ad altro Titolare, i dati personali che lo riguardano in formato strutturato, di uso comune e leggibile da dispositivo automatico;",
                "diritto di opporsi al trattamento dei dati personali;",
                "diritto di ritirare il consenso precedentemente rilasciato;",
                "diritto di effettuare reclamo alle autorità competenti per violazione del trattamento dati personali.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Come esercitare i diritti?">
            <p className="font-sans-ui text-muted-foreground leading-relaxed mb-4">
              L'Interessato potrà esercitare i propri diritti scrivendo all'indirizzo email sopra indicato.
            </p>
            <p className="font-sans-ui text-muted-foreground leading-relaxed mb-4">
              Il Titolare non intende far sostenere nessun costo agli Interessati per esercitare uno dei loro diritti, ma per far ciò il Titolare potrebbe richiedere specifiche informazioni per dar seguito alle comunicazioni dell'Interessato in relazione ai diritti.
            </p>
            <p className="font-sans-ui text-muted-foreground leading-relaxed">
              Le menzionate comunicazioni vengono solitamente riscontrate entro 30 giorni dalla ricezione della comunicazione stessa, ma in caso questo termine non potrà essere rispettato (ad es. per eccessivo carico di richieste o complessità della risposta) sarà cura del Titolare comunicarlo all'Interessato e mantenerlo aggiornato sugli sviluppi della comunicazione inviata.
            </p>
          </Section>

          <Section title="Quali dati personali vengono trattati?">
            <p className="font-sans-ui text-muted-foreground leading-relaxed mb-6">
              Il Titolare tratta i dati personali che gli vengono forniti sia dall'Interessato che da terze parti al fine di poter dar seguito alle richieste di contatto dell'Interessato pervenute tramite il Sito (di seguito i "Servizi").
            </p>

            <h4 className="font-sans-ui font-semibold text-foreground text-sm tracking-wide uppercase mb-3">Dati forniti direttamente dall'Interessato</h4>
            <Table
              headers={["Categoria di Dati Personali", "Tipologie di Dati"]}
              rows={[
                ["Dati identificativi e di contatto", "Nome, cognome, residenza/domicilio, indirizzo email, telefono"],
                ["Dati tecnici", "Indirizzo IP, cookies"],
              ]}
            />

            <h4 className="font-sans-ui font-semibold text-foreground text-sm tracking-wide uppercase mb-3 mt-8">Dati raccolti da terze parti</h4>
            <Table
              headers={["Terza Parte Fonte di Dati Personali", "Tipologie di Dati"]}
              rows={[
                ["Fornitori di analytics", "Dati comportamentali, Dati tecnici"],
              ]}
            />

            <div className="mt-6 space-y-4">
              <p className="font-sans-ui text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Dati aggregati:</strong> Il Titolare può raccogliere, utilizzare e condividere dati aggregati, come dati statistici o demografici, per qualsiasi finalità. I dati aggregati possono derivare dai dati personali dell'Interessato, ma una volta aggregati non costituiscono un dato personale ai sensi del GDPR in quanto non sono in grado di identificare direttamente o indirettamente l'Interessato.
              </p>
              <p className="font-sans-ui text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Dati Particolari:</strong> Il Titolare non tratta nessuna categoria di dati particolari dell'Interessato (per dato particolare si intende un dato relativo a origine etnica o raziale, convinzioni religiose o filosofiche, orientamento sessuale, opinioni politiche, appartenenza sindacale, dati genetici, biometrici e di salute), come non tratta nessun dato relativo a condanne penali e reati relativi all'Interessato.
              </p>
            </div>
          </Section>

          <Section title="Perché vengono trattati i dati personali?">
            <p className="font-sans-ui text-muted-foreground leading-relaxed mb-6">
              Il Titolare tratta i dati personali per le seguenti finalità. Il GDPR richiede che, per ogni finalità di trattamento dei dati personali, il Titolare abbia una base legale per effettuare il trattamento.
            </p>
            <Table
              headers={["Finalità", "Descrizione", "Conservazione"]}
              rows={[
                ["Fornire supporto agli Interessati", "Risolvere problematiche tecniche riscontrate dagli Interessati durante la navigazione, loro richieste di assistenza, migliorare i Servizi e il Sito e fornire il supporto richiesto dagli Interessati.", "I dati verranno conservati sino all'evasione della richiesta di supporto degli Interessati"],
                ["Newsletter", "Il Titolare potrà inviare aggiornamenti, non a contenuto commerciale, per informare l'Interessato rispetto agli sviluppi della propria attività.", "I dati verranno conservati per 24 mesi"],
                ["Comunicazione a partner commerciali", "Il Titolare, previo consenso, potrà comunicare i dati dell'Interessato ai partner commerciali indicati sul Sito.", "I dati verranno conservati per 12 mesi"],
                ["Rispettare gli obblighi di legge", "Il Titolare potrà trattare i dati personali dell'Interessato per rispettare gli obblighi legislativi e regolamentari.", "I dati personali verranno conservati per il periodo di tempo determinato dalla legge."],
              ]}
            />
          </Section>

          <Section title="Cosa accade se l'Interessato non fornisce i necessari dati personali?">
            <p className="font-sans-ui text-muted-foreground leading-relaxed">
              Qualora i dati risultino necessari per erogare i Servizi e per fornire supporto agli Interessati, il Titolare non sarà in grado di erogarli e supportare l'Interessato nelle proprie richieste. In tal caso il Titolare potrà, alternativamente, richiedere l'integrazione dei dati personali o cancellare i dati personali dell'Interessato impedendo l'erogazione dei Servizi.
            </p>
          </Section>

          <Section title="A chi vengono comunicati e diffusi i dati personali?">
            <h4 className="font-sans-ui font-semibold text-foreground text-sm tracking-wide uppercase mb-3">a) Comunicazione</h4>
            <Table
              headers={["Destinatari", "Scopo della Comunicazione"]}
              rows={[
                ["Fornitori", "I fornitori del Titolare lo supportano nell'erogazione dei Servizi con, a titolo esemplificativo e non esaustivo, sviluppo del Sito, hosting, mantenimento, backup, infrastruttura virtuale."],
                ["Consulenti esterni", "In caso di obblighi di legge o obbligazioni relative ad un rapporto instaurato con l'Interessato, il Titolare potrà comunicare i dati personali a consulenti esterni, quali, ad esempio, il commercialista e l'avvocato."],
                ["Autorità e procedimenti giudiziali", "Il Titolare potrà comunicare i dati personali degli interessati ad autorità statali e/o amministrative e/o giudiziarie nel caso questo sia obbligatorio in base alla legge."],
                ["Partner commerciali", "Il Titolare potrà comunicare i dati ai partner commerciali indicati sul Sito o, ove non presenti, ove vi siano specifici accordi di partnership."],
              ]}
            />
            <p className="font-sans-ui text-muted-foreground leading-relaxed mt-6">
              <strong className="text-foreground">b) Diffusione:</strong> I dati personali degli Interessati non verranno diffusi.
            </p>
          </Section>

          <Section title="Dove conserviamo i dati personali?">
            <p className="font-sans-ui text-muted-foreground leading-relaxed">
              Il Titolare conserva i dati personali in archivi cartacei all'interno della sede del Titolare, oltre ad archivi informatici situati sia all'interno dell'Unione Europea, sia al di fuori qualora ciò sia strumentale al perseguimento delle finalità sopra indicate. In tale ultimo caso il Titolare si assicura che società non aventi sedi all'interno dell'Unione Europea stiano trattando con la massima riservatezza i dati personali nel rispetto delle decisioni di adeguatezza della Commissione Europea.
            </p>
          </Section>

          <Section title="Come vengono trattati i dati personali?">
            <p className="font-sans-ui text-muted-foreground leading-relaxed">
              Il Titolare tratta i dati personali degli Interessati adottando le idonee misure di sicurezza volte ad impedire l'accesso, la divulgazione, la modifica e la distruzione non autorizzate. Il trattamento dei dati è eseguito attraverso procedure informatiche, mezzi telematici e, in via residuale, su supporti cartacei da parte di soggetti interni appositamente autorizzati nonché dai responsabili esterni in caso nominati.
            </p>
          </Section>

          <Section title="Qual è la politica sul trattamento dati dei minori?">
            <p className="font-sans-ui text-muted-foreground leading-relaxed mb-4">
              Il Titolare è a conoscenza della delicatezza del trattamento dati dei minori. In particolare i Servizi non vogliono essere erogati a minori di anni 14 e il Titolare non tratta volontariamente dati di minori di 14 anni: in tal senso, si richiede agli Interessati di non richiedere l'erogazione dei Servizi nel caso l'età sia minore di 14 anni.
            </p>
            <p className="font-sans-ui text-muted-foreground leading-relaxed">
              Il Titolare incoraggia chi esercita la responsabilità genitoriale sui minori di 14 anni a controllare che questi non richiedano l'erogazione dei Servizi e, in ogni caso, ad educare i minori di 14 anni a non rilasciare i loro dati personali tramite il Sito.
            </p>
          </Section>

          <Section title="Cosa succede se ci sono link ad altri siti web?">
            <p className="font-sans-ui text-muted-foreground leading-relaxed">
              Il Titolare informa gli Interessati che la presente Informativa si applica solo al Sito e, nel caso vi siano link ad altri siti web, l'Interessato dovrà verificare le informative di detti siti prima di rilasciare i propri dati personali. Il Titolare non si prende alcuna responsabilità per i dati personali forniti dagli Interessati in altri siti web.
            </p>
          </Section>

          <Section title="Cambiamenti all'Informativa">
            <p className="font-sans-ui text-muted-foreground leading-relaxed">
              Il Titolare si riserva il diritto di modificare la presente Informativa in qualsiasi momento. In caso di modifiche il Titolare caricherà su questa pagina la nuova informativa e, in tal senso, si esorta l'Interessato a controllare le modifiche dell'Informativa. Continuando ad utilizzare il Sito successivamente alle modifiche, l'Interessato accetta tali modifiche e acconsente al trattamento dati così come modificato.
            </p>
          </Section>

        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-border">
        <div className="max-w-4xl mx-auto px-8 lg:px-14 py-6 flex items-center justify-between">
          <span className="font-sans-ui text-xs text-muted-foreground">
            © {new Date().getFullYear()} Blue Innovation S.r.l. — P.IVA 03833320785
          </span>
          <button
            onClick={() => navigate(-1)}
            className="font-sans-ui text-xs text-primary hover:underline"
          >
            ← Torna al sito
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border mt-12 pt-10">
      <h2 className="font-display text-2xl font-bold text-foreground mb-6 tracking-tight leading-snug">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            {headers.map((h) => (
              <th key={h} className="font-sans-ui text-left text-[11px] font-semibold tracking-[0.12em] uppercase text-foreground/60 px-4 py-3">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="font-sans-ui text-muted-foreground px-4 py-4 leading-relaxed align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
