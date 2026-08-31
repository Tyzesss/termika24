import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Droplets,
  Flame,
  Gauge,
  Shield,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { MobileCarousel } from "./MobileCarousel";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/services";

const ICONS: Record<string, LucideIcon> = {
  kotlownie: Flame,
  "centralne-ogrzewanie": Gauge,
  "pompy-ciepla": Thermometer,
  "ogrzewanie-podlogowe": Gauge,
  "instalacje-wod-kan": Droplets,
  "instalacje-gazowe": Flame,
  "instalacje-solarne": Sun,
  "instalacje-ppoz": Shield,
  "wentylacja-klimatyzacja": Wind,
};

function ServiceCard({
  service,
}: {
  service: (typeof SERVICES)[number];
}) {
  const Icon = ICONS[service.slug] ?? Flame;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7 max-md:shadow-none md:overflow-hidden md:shadow-card md:transition-all md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:border-accent/40 md:hover:shadow-lift">
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-cyan text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:bg-navy md:text-navy-foreground md:group-hover:bg-gradient-cyan md:group-hover:text-white">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
      <Link
        to="/uslugi/$slug"
        params={{ slug: service.slug }}
        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent transition-all duration-300 ease-out hover:gap-2.5 hover:text-accent/80"
      >
        Dowiedz się więcej <ArrowUpRight className="size-4" />
      </Link>
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
              Nasze usługi
            </span>
            <h2 className="mt-5 font-display text-3xl font-black sm:text-4xl md:whitespace-nowrap lg:text-5xl">
              Dla domu, szkoły
              <span className="hidden md:inline"> </span>
              <br className="md:hidden" />
              <span className="text-gradient-cyan">i firmy</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Instalacje wewnętrzne i przyłącza dla klientów indywidualnych, instytucjonalnych
              i biznesowych.
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
              <Reveal key={service.slug} delay={i * 0.07} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
