import type { LucideIcon } from "lucide-react";
import type { MouseEvent } from "react";
import { ArrowUpRight, Fan, Gauge, Snowflake, Sun, Thermometer, Wrench } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";
import { MobileCarousel } from "./MobileCarousel";
import { Reveal } from "./Reveal";

const SERVICES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Thermometer,
    title: "Pompy Ciepła",
    desc: "Ogrzewanie i chłodzenie w jednym systemie. Montaż z 5 latami gwarancji i pełnym doborem mocy.",
  },
  {
    icon: Snowflake,
    title: "Klimatyzacja",
    desc: "Rozwiązania Split i Multi-split dla domu i biura. Ciche jednostki i estetyczny montaż.",
  },
  {
    icon: Sun,
    title: "Fotowoltaika",
    desc: "Niezależność energetyczna z panelami Tier 1 i inteligentnym zarządzaniem produkcją.",
  },
  {
    icon: Gauge,
    title: "Ogrzewanie Podłogowe",
    desc: "Komfort i oszczędność. Równomierne ciepło w całym domu przy niższych kosztach.",
  },
  {
    icon: Fan,
    title: "Rekuperacja",
    desc: "Czyste powietrze bez strat ciepła. Filtracja pyłów i stała wymiana powietrza.",
  },
  {
    icon: Wrench,
    title: "Serwis i Konserwacja",
    desc: "Szybka reakcja, przeglądy okresowe oraz naprawy gwarancyjne i pogwarancyjne.",
  },
];

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7 max-md:shadow-none md:overflow-hidden md:shadow-card md:transition-all md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:border-accent/40 md:hover:shadow-lift">
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-cyan text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:bg-navy md:text-navy-foreground md:group-hover:bg-gradient-cyan md:group-hover:text-white">
        <service.icon className="size-5" />
      </span>
      <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
      <a
        href="#kontakt"
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          scrollToSection("#kontakt");
        }}
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent-foreground/80 transition-all duration-300 ease-out hover:gap-2.5 hover:text-accent"
      >
        Dowiedz się więcej <ArrowUpRight className="size-4" />
      </a>
    </article>
  );
}

export function Services() {
  return (
    <section id="uslugi" className="pt-16 pb-20 max-md:pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center">
            <span
              data-scroll-target
              className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase"
            >
              Nasze Usługi
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold sm:text-4xl md:whitespace-nowrap lg:text-5xl">
              Wszystko czego potrzebuje
              <span className="hidden md:inline"> </span>
              <br className="md:hidden" />
              <span className="text-gradient-cyan">Twój dom</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Jeden zespół specjalistów odpowiada za dobór, montaż i opiekę nad Twoją instalacją.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14">
          <MobileCarousel
            items={SERVICES}
            renderItem={(service) => <ServiceCard service={service} />}
          />
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.07} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
