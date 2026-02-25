import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type Language = "it" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "en" ? "en" : "it") as Language;
  });

  const handleSetLang = useCallback((newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".");
      let value: any = translations[lang];
      for (const k of keys) {
        if (Array.isArray(value)) {
          value = value[parseInt(k)];
        } else {
          value = value?.[k];
        }
      }
      if (typeof value === "string") return value;
      // Fallback to Italian
      value = translations.it;
      for (const k of keys) {
        if (Array.isArray(value)) {
          value = value[parseInt(k)];
        } else {
          value = value?.[k];
        }
      }
      return typeof value === "string" ? value : key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const translations: Record<Language, any> = {
  it: {
    nav: {
      home: "Home",
      valori: "Valori",
      visione: "Visione",
      servizi: "Servizi",
      metodo: "Metodo",
      progetti: "Progetti",
      contatti: "Contatti",
      scopriWellbe: "Scopri Wellbe",
    },
    hero: {
      line1: "Costruiamo insieme",
      line2: "il migliore tra i futuri possibili",
      tagline: "Benessere · Innovazione · Progresso",
      scroll: "Scroll",
    },
    valori: {
      sectionLabel: "Chi siamo",
      title: "I nostri valori",
      badgeLabel: "Valori Fondanti",
      items: [
        {
          title: "Innovazione antropocentrica",
          description: "L'uomo è da sempre capace di innovare, noi innoviamo per l'uomo, creando soluzioni e percorsi che migliorano la vita delle Persone.",
        },
        {
          title: "Eccellenza Operativa",
          description: "Portiamo rigore, metodo e qualità in ogni progetto. L'eccellenza non è un traguardo, è il modo in cui lavoriamo ogni giorno.",
        },
        {
          title: "Sostenibilità globale",
          description: "Siamo una Società Benefit e operiamo con responsabilità verso l'ambiente e la società. Ogni nostra scelta considera l'impatto sul futuro del pianeta.",
        },
        {
          title: "Partnership Strategiche",
          description: "Crediamo nel potere delle reti. Costruiamo alleanze solide con imprese, università, istituzioni e investitori per moltiplicare l'impatto dell'innovazione.",
        },
      ],
    },
    visione: {
      sectionLabel: "Visione & Missione",
      heading1: "Innovazione che",
      heading2: "mette la",
      heading3: "Persona",
      heading4: "al centro",
      paragraph: "Immaginiamo un futuro in cui l'innovazione tecnologica sia un bene al servizio di tutti e contribuisca al progresso di una società più equa e sostenibile. Vogliamo essere protagonisti e facilitatori di un cambiamento non più rinviabile.",
      missionLabel: "La nostra missione",
      missionP1: "Blue Innovation nasce con l'obiettivo di potenziare il connubio possibile tra innovazione tecnologica e progresso sociale. Supportiamo le organizzazioni di ogni tipologia e dimensione nel percorso di trasformazione digitale e sostenibile.",
      missionP2Start: "La nostra attenzione all'uomo ci caratterizza e distingue: sviluppiamo tecnologie promuovendo ecosistemi di innovazione che pongono la",
      missionP2Bold: "Persona",
      missionP2End: "al centro della loro idea di futuro.",
    },
    servizi: {
      sectionLabel: "Cosa facciamo",
      title: "Soluzioni per",
      titleAccent: "l'innovazione",
      flagship: "Prodotto Flagship",
      wellbeSubtitle: "La prima piattaforma per la Corporate Social Responsibility",
      wellbeDesc: "Una piattaforma evoluta che trasforma la CSR in un asset strategico misurabile, connettendo imprese, persone e territorio in un ecosistema di valore condiviso.",
      scopriWellbe: "Scopri Wellbe",
      items: [
        { title: "Open Innovation", description: "Facilitiamo processi di innovazione aperta tra imprese, startup e centri di ricerca, creando sinergie ad alto valore aggiunto.", tag: "Ecosistema" },
        { title: "Technology Transfer", description: "Trasferiamo tecnologie sviluppate in contesti di ricerca verso applicazioni industriali e commerciali, colmando il gap tra laboratorio e mercato.", tag: "R&D" },
        { title: "Startup Sparking", description: "Supportiamo la nascita e la crescita di startup innovative con mentorship, accesso a reti di investitori e strumenti concreti per scalare il business.", tag: "Venture" },
        { title: "Ecosystem Facilitator", description: "Costruiamo e gestiamo ecosistemi dell'innovazione, connettendo attori pubblici e privati per generare impatto sostenibile nei territori.", tag: "Territorio" },
      ],
    },
    metodo: {
      sectionLabel: "Il Nostro Metodo",
      title: "Un processo",
      titleAccent: "collaudato e preciso",
      steps: [
        { title: "Analisi", description: "Ascoltiamo, analizziamo il contesto aziendale e di mercato, identificando opportunità e criticità con precisione diagnostica." },
        { title: "Strategia", description: "Definiamo un piano strategico chiaro, condiviso e orientato agli obiettivi di business, con priorità e roadmap dettagliate." },
        { title: "Azione", description: "Affianchiamo il team nella messa in opera della strategia, garantendo esecuzione efficace e adattabilità al cambiamento." },
        { title: "Crescita", description: "Monitoriamo i risultati, ottimizziamo i processi e consolidiamo il vantaggio competitivo per una crescita sostenibile." },
      ],
    },
    valueProposition: {
      sectionLabel: "Perché noi",
      title: "Il valore che portiamo",
      titleAccent: "ogni giorno",
      pillars: [
        { stat: "Sistemica", title: "Visione Sistemica", description: "Guardiamo all'innovazione come a un sistema interconnesso, dove ogni soluzione genera valore per l'intera rete di attori coinvolti." },
        { stat: "Concreto", title: "Impatto Concreto", description: "Ogni progetto si misura con risultati tangibili. Costruiamo percorsi di innovazione che generano valore reale per imprese e territori." },
        { stat: "Benefit", title: "Sostenibilità", description: "Siamo una Società Benefit certificata ISO 14001. La responsabilità ambientale e sociale è al centro del nostro modo di operare." },
        { stat: "Ecosystem", title: "Ecosistema & Rete", description: "Connettiamo startup, imprese, università e istituzioni per costruire reti di innovazione capaci di generare impatto duraturo." },
      ],
    },
    cta: {
      label: "Inizia Ora",
      title: "Trasforma oggi il futuro della tua azienda.",
      description: "Scopri come Blue Innovation può accompagnare la tua impresa verso una crescita strategica e sostenibile.",
      button: "Contattaci",
    },
    footer: {
      collaboriamo: "Collaboriamo",
      sedeLegale: "Sede Legale",
      sedeOperativa: "Sede Operativa",
      lavoraConNoi: "Lavora con noi",
    },
    progetti: {
      title: "Progetti",
      subtitle: "Innovazione applicata: i nostri progetti di impatto sul territorio.",
      scopri: "Scopri di più",
    },
    atlas: {
      subtitle: "Azioni per il Turismo Locale e il Benessere Sostenibile",
      intro1: "è un progetto di rigenerazione territoriale guidato da",
      intro1b: "con l'obiettivo di migliorare il benessere di cittadini, lavoratori e turisti e rendere i borghi più attrattivi, sostenibili e vivi tutto l'anno.",
      intro2: "Il progetto nasce dall'integrazione tra",
      intro2b: "tecnologia, dati e territorio",
      intro2c: ", e si propone come modello replicabile di sviluppo locale basato sul benessere delle persone, sulla destagionalizzazione del turismo e sulla creazione di nuove opportunità economiche e sociali.",
      ruoloTitle: "Il ruolo di Blue Innovation",
      ruoloDesc: "Blue Innovation è il motore tecnologico e scientifico del progetto ATLAS. Attraverso una piattaforma digitale proprietaria, raccoglie, analizza e trasforma dati sul benessere e sull'esperienza delle persone in azioni concrete di miglioramento per il territorio.",
      ruoloItems: [
        "Progettazione e somministrazione di survey avanzate a cittadini, turisti e lavoratori",
        "Integrazione di dati ambientali tramite sensori (qualità dell'aria, temperatura, umidità, illuminazione)",
        "Utilizzo di Business Intelligence e Machine Learning per analisi dei dati",
        "Restituzione di indicatori, report e raccomandazioni operative",
      ],
      ruoloNote: "L'approccio è human-centered: la persona è al centro di ogni decisione.",
      missionTitle: "Our Mission",
      missionDesc: "La missione di ATLAS è migliorare il benessere delle persone e la qualità della vita nei territori, trasformando i borghi in luoghi più attrattivi, sostenibili e vivibili tutto l'anno. Attraverso dati, tecnologia e un approccio scientifico, ATLAS mira a contrastare lo spopolamento, favorire la destagionalizzazione del turismo e creare nuove opportunità per cittadini, lavoratori e imprese.",
      missionDesc2: "Il progetto promuove un modello di sviluppo che integra innovazione digitale, sostenibilità sociale ed economia locale, in linea con i principi ESG e gli obiettivi dell'Agenda ONU 2030.",
      howTitle: "How It Works",
      howDesc: "ATLAS funziona come una piattaforma integrata di raccolta, analisi e trasformazione dei dati sul benessere. Blue Innovation progetta e somministra survey personalizzate rivolte a cittadini, turisti e lavoratori, rilevando percezioni, bisogni e livelli di benessere.",
      howDesc2: "I dati raccolti vengono elaborati tramite modelli di Business Intelligence e Machine Learning, individuando pattern ricorrenti, criticità e opportunità di miglioramento. La piattaforma restituisce report, KPI e raccomandazioni operative a enti, imprese e operatori locali.",
      resultTitle: "Risultati e Impatto",
      resultDesc: "ATLAS genera un impatto concreto sul territorio, migliorando il benessere di cittadini, lavoratori e turisti e rafforzando l'attrattività del borgo nel tempo. Il progetto contribuisce alla destagionalizzazione del turismo, rendendo il territorio vivibile e accessibile anche fuori dai periodi di punta.",
      resultDesc2: "Il progetto trasforma il borgo in un modello replicabile di rigenerazione territoriale, dimostrando come il benessere possa diventare un motore di sviluppo duraturo.",
      ctaLink: "Visita la Piattaforma ATLAS",
      fundingNote1: "In rispetto degli obblighi in materia di comunicazione e informazione previsti dall'art. 34 del Regolamento (UE) 2021/241",
      fundingNote2: "Atlas – Prot BRG0002855, COR 22446748, CUP C55H24002320001 – finanziato dall'Unione europea – NextGenerationEU",
      projectDesc: "Progetto di rigenerazione territoriale per migliorare il benessere di cittadini, lavoratori e turisti, rendendo i borghi più attrattivi, sostenibili e vivi tutto l'anno.",
    },
  },
  en: {
    nav: {
      home: "Home",
      valori: "Values",
      visione: "Vision",
      servizi: "Services",
      metodo: "Method",
      progetti: "Projects",
      contatti: "Contact",
      scopriWellbe: "Discover Wellbe",
    },
    hero: {
      line1: "Together we build",
      line2: "the best of all possible futures",
      tagline: "Well-being · Innovation · Progress",
      scroll: "Scroll",
    },
    valori: {
      sectionLabel: "Who we are",
      title: "Our values",
      badgeLabel: "Core Values",
      items: [
        {
          title: "Human-Centered Innovation",
          description: "Humans have always been capable of innovating — we innovate for people, creating solutions and paths that improve lives.",
        },
        {
          title: "Operational Excellence",
          description: "We bring rigor, method and quality to every project. Excellence is not a destination — it's the way we work every day.",
        },
        {
          title: "Global Sustainability",
          description: "As a Benefit Company, we operate responsibly toward the environment and society. Every decision considers the future of the planet.",
        },
        {
          title: "Strategic Partnerships",
          description: "We believe in the power of networks. We build solid alliances with businesses, universities, institutions and investors to multiply innovation impact.",
        },
      ],
    },
    visione: {
      sectionLabel: "Vision & Mission",
      heading1: "Innovation that",
      heading2: "puts",
      heading3: "People",
      heading4: "at the center",
      paragraph: "We envision a future where technological innovation serves everyone and contributes to a more equitable and sustainable society. We aim to be protagonists and facilitators of change that can no longer be postponed.",
      missionLabel: "Our mission",
      missionP1: "Blue Innovation was founded to strengthen the synergy between technological innovation and social progress. We support organizations of all types and sizes on their path to digital and sustainable transformation.",
      missionP2Start: "Our focus on people defines and distinguishes us: we develop technologies promoting innovation ecosystems that place the",
      missionP2Bold: "Person",
      missionP2End: "at the center of their vision for the future.",
    },
    servizi: {
      sectionLabel: "What we do",
      title: "Solutions for",
      titleAccent: "innovation",
      flagship: "Flagship Product",
      wellbeSubtitle: "The first platform for Corporate Social Responsibility",
      wellbeDesc: "An advanced platform that transforms CSR into a measurable strategic asset, connecting businesses, people and territory in a shared value ecosystem.",
      scopriWellbe: "Discover Wellbe",
      items: [
        { title: "Open Innovation", description: "We facilitate open innovation processes between companies, startups and research centers, creating high-value synergies.", tag: "Ecosystem" },
        { title: "Technology Transfer", description: "We transfer technologies from research contexts to industrial and commercial applications, bridging the gap between lab and market.", tag: "R&D" },
        { title: "Startup Sparking", description: "We support the birth and growth of innovative startups with mentorship, access to investor networks and concrete tools to scale.", tag: "Venture" },
        { title: "Ecosystem Facilitator", description: "We build and manage innovation ecosystems, connecting public and private actors to generate sustainable territorial impact.", tag: "Territory" },
      ],
    },
    metodo: {
      sectionLabel: "Our Method",
      title: "A process that is",
      titleAccent: "proven and precise",
      steps: [
        { title: "Analysis", description: "We listen, analyze the business and market context, identifying opportunities and challenges with diagnostic precision." },
        { title: "Strategy", description: "We define a clear, shared strategic plan oriented to business goals, with priorities and detailed roadmaps." },
        { title: "Action", description: "We support the team in executing the strategy, ensuring effective implementation and adaptability to change." },
        { title: "Growth", description: "We monitor results, optimize processes and consolidate competitive advantage for sustainable growth." },
      ],
    },
    valueProposition: {
      sectionLabel: "Why us",
      title: "The value we bring",
      titleAccent: "every day",
      pillars: [
        { stat: "Systemic", title: "Systemic Vision", description: "We view innovation as an interconnected system, where every solution generates value for the entire network of stakeholders." },
        { stat: "Concrete", title: "Concrete Impact", description: "Every project is measured by tangible results. We build innovation paths that generate real value for businesses and territories." },
        { stat: "Benefit", title: "Sustainability", description: "We are an ISO 14001 certified Benefit Company. Environmental and social responsibility is at the core of how we operate." },
        { stat: "Ecosystem", title: "Ecosystem & Network", description: "We connect startups, companies, universities and institutions to build innovation networks capable of lasting impact." },
      ],
    },
    cta: {
      label: "Start Now",
      title: "Transform your company's future today.",
      description: "Discover how Blue Innovation can guide your business toward strategic and sustainable growth.",
      button: "Contact Us",
    },
    footer: {
      collaboriamo: "Let's Collaborate",
      sedeLegale: "Legal Office",
      sedeOperativa: "Operational Office",
      lavoraConNoi: "Careers",
    },
    progetti: {
      title: "Projects",
      subtitle: "Applied innovation: our projects driving territorial impact.",
      scopri: "Learn more",
    },
    atlas: {
      subtitle: "Actions for Local Tourism and Sustainable Well-being",
      intro1: "is a territorial regeneration project led by",
      intro1b: "with the goal of improving the well-being of citizens, workers and tourists, making villages more attractive, sustainable and vibrant year-round.",
      intro2: "The project stems from the integration of",
      intro2b: "technology, data and territory",
      intro2c: ", and proposes itself as a replicable model of local development based on people's well-being, tourism deseasoning and the creation of new economic and social opportunities.",
      ruoloTitle: "Blue Innovation's Role",
      ruoloDesc: "Blue Innovation is the technological and scientific engine of the ATLAS project. Through a proprietary digital platform, it collects, analyzes and transforms data on well-being and people's experiences into concrete improvement actions for the territory.",
      ruoloItems: [
        "Design and administration of advanced surveys to citizens, tourists and workers",
        "Integration of environmental data through sensors (air quality, temperature, humidity, lighting)",
        "Use of Business Intelligence and Machine Learning for data analysis",
        "Delivery of indicators, reports and operational recommendations",
      ],
      ruoloNote: "The approach is human-centered: the person is at the center of every decision.",
      missionTitle: "Our Mission",
      missionDesc: "ATLAS's mission is to improve people's well-being and quality of life in territories, transforming villages into more attractive, sustainable and livable places year-round. Through data, technology and a scientific approach, ATLAS aims to combat depopulation, promote tourism deseasoning and create new opportunities for citizens, workers and businesses.",
      missionDesc2: "The project promotes a development model that integrates digital innovation, social sustainability and local economy, in line with ESG principles and UN 2030 Agenda goals.",
      howTitle: "How It Works",
      howDesc: "ATLAS works as an integrated platform for collecting, analyzing and transforming well-being data. Blue Innovation designs and administers personalized surveys to citizens, tourists and workers, capturing perceptions, needs and well-being levels.",
      howDesc2: "Collected data is processed through Business Intelligence and Machine Learning models, identifying recurring patterns, issues and improvement opportunities. The platform delivers reports, KPIs and operational recommendations to local entities, businesses and operators.",
      resultTitle: "Results and Impact",
      resultDesc: "ATLAS generates concrete impact on the territory, improving the well-being of citizens, workers and tourists while strengthening the village's attractiveness over time. The project contributes to tourism deseasoning, making the territory livable and accessible even outside peak periods.",
      resultDesc2: "The project transforms the village into a replicable model of territorial regeneration, demonstrating how well-being can become an engine of lasting development.",
      ctaLink: "Visit the ATLAS Platform",
      fundingNote1: "In compliance with communication and information obligations under Art. 34 of Regulation (EU) 2021/241",
      fundingNote2: "Atlas – Prot BRG0002855, COR 22446748, CUP C55H24002320001 – funded by the European Union – NextGenerationEU",
      projectDesc: "A territorial regeneration project to improve the well-being of citizens, workers and tourists, making villages more attractive, sustainable and vibrant year-round.",
    },
  },
};
