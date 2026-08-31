import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MobileCarousel } from "./MobileCarousel";
import { Reveal } from "./Reveal";
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL } from "@/lib/site";

const REASONS: {
  icon: LucideIcon;
  title: string;
  tag: string;
  text: string;
}[] = [
  {
    icon: Award,
    title: "Doświadczenie od 2006",
    tag: "20+ lat na rynku",
    text: "Systematyczne szkolenia i sprawdzone procedury montażu. Wiemy, jak dopasować instalację do domu, firmy i budynku użyteczności publicznej.",
  },
  {
    icon: ShieldCheck,
    title: "Materiały z atestami",
    tag: "Bezpieczeństwo i jakość",
    text: "Pracujemy na certyfikowanych komponentach od sprawdzonych producentów. Każdy projekt traktujemy jak inwestycję na lata, nie jednorazowy remont.",
  },
  {
    icon: MapPinned,
    title: "Gorlice i cała Polska",
    tag: "Dojazd do klienta",
    text: "Siedziba w Gorlicach, ale realizujemy zlecenia w całym kraju. Od lokalnych inwestycji po większe obiekty komercyjne i publiczne.",
  },
  {
    icon: Users,
    title: "Jeden zespół, pełna obsługa",
    tag: "Od wyceny po serwis",
    text: "Dobór urządzeń, montaż, uruchomienie i wsparcie po instalacji. Masz jednego partnera na każdym etapie projektu.",
  },
];

function loopOffset(index: number, selected: number, length: number) {
  let delta = index - selected;
  const half = length / 2;
  if (delta > half) delta -= length;
  if (delta < -half) delta += length;
  return delta;
}

function GoogleStar({ fill }: { fill: number }) {
  const path =
    "M12 2.1 14.94 8.4l6.86.74-5.12 4.7 1.42 6.76L12 17.77 5.9 20.6l1.42-6.76-5.12-4.7 6.86-.74L12 2.1z";
  return (
    <span className="relative size-5 shrink-0">
      <svg viewBox="0 0 24 24" className="size-5 text-accent/20" aria-hidden>
        <path fill="currentColor" d={path} />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="absolute inset-0 size-5 text-accent"
        style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
        aria-hidden
      >
        <path fill="currentColor" d={path} />
      </svg>
    </span>
  );
}

function ReasonCard({
  item,
  faded = false,
}: {
  item: (typeof REASONS)[number];
  faded?: boolean;
}) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl bg-card p-5 sm:p-6 md:min-h-[17rem] md:p-8",
        faded
          ? "border border-transparent"
          : "border border-border/70 max-md:shadow-none md:border-border/40",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-cyan text-white">
          <item.icon className="size-5" />
        </span>
        <span className="rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-accent uppercase">
          {item.tag}
        </span>
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-foreground md:text-2xl">{item.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
        {item.text}
      </p>
    </article>
  );
}

function ReasonCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: false,
    duration: 28,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Poprzednia karta"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-2 z-30 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-border/70 bg-card text-foreground shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-transparent hover:bg-gradient-cyan hover:text-white hover:shadow-glow md:inline-flex lg:left-1"
      >
        <ChevronLeft className="size-5" strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label="Następna karta"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-2 z-30 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-border/70 bg-card text-foreground shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-transparent hover:bg-gradient-cyan hover:text-white hover:shadow-glow md:inline-flex lg:right-1"
      >
        <ChevronRight className="size-5" strokeWidth={2} />
      </button>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-background via-background/80 to-transparent md:w-28 lg:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-background via-background/80 to-transparent md:w-28 lg:w-36" />

      <div className="overflow-hidden py-4 md:px-8 md:pt-5 md:pb-14 lg:px-10" ref={emblaRef}>
        <div className="flex items-center touch-pan-y">
          {REASONS.map((item, idx) => {
            const dist = Math.abs(loopOffset(idx, selected, REASONS.length));
            const active = dist === 0;
            return (
              <div
                key={item.title}
                className="min-w-0 shrink-0 grow-0 basis-[86%] px-1 sm:basis-[70%] md:basis-[46%] md:px-0 lg:basis-[42%]"
              >
                <div
                  role="button"
                  tabIndex={active ? -1 : 0}
                  onClick={() => {
                    if (!active) emblaApi?.scrollTo(idx);
                  }}
                  onKeyDown={(e) => {
                    if (!active && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      emblaApi?.scrollTo(idx);
                    }
                  }}
                  className={cn(
                    "origin-center cursor-pointer rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    active
                      ? "z-10 scale-100 shadow-[0_10px_28px_oklch(0.21_0.05_265/0.08)] opacity-100 md:scale-[1.14]"
                      : "z-0 scale-[0.88] opacity-35 md:scale-[0.68]",
                    dist > 1 && "scale-[0.82] opacity-15 md:scale-[0.58]",
                  )}
                >
                  <ReasonCard item={item} faded={!active} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-1.5 md:mt-4">
        {REASONS.map((item, idx) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Karta ${idx + 1}: ${item.title}`}
            aria-current={selected === idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={cn(
              "transition-all duration-300 ease-out",
              selected === idx
                ? "h-1.5 w-8 rounded-full bg-accent"
                : "h-1.5 w-1.5 rounded-full bg-muted-foreground/30",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="dlaczego"
      className="flex flex-col py-16 max-md:pb-28 md:min-h-svh md:justify-center md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            data-scroll-target
            className="mx-auto block w-fit font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase"
          >
            Dlaczego TERMIKA
          </span>
          <h2 className="mt-5 font-display text-3xl font-black sm:text-5xl">
            Zaufanie, które
            <br />
            <span className="text-gradient-cyan">budujemy latami</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Jeden zespół, sprawdzone materiały i realne wsparcie na każdym etapie inwestycji.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-4 md:mt-5">
          <MobileCarousel items={REASONS} renderItem={(item) => <ReasonCard item={item} />} />
          <div className="hidden md:block">
            <ReasonCarousel />
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4"
            aria-label={`Opinie Google: ocena ${GOOGLE_RATING.toLocaleString("pl-PL")}. Otwórz w Google Maps.`}
          >
            <span className="font-display text-4xl font-black leading-none tracking-tight text-accent">
              {GOOGLE_RATING.toLocaleString("pl-PL")}
            </span>
            <span className="flex flex-col items-start gap-1">
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }, (_, i) => {
                  const fill = Math.min(1, Math.max(0, GOOGLE_RATING - i));
                  return <GoogleStar key={i} fill={fill} />;
                })}
              </span>
              <span className="font-display text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase transition-colors duration-300 group-hover:text-accent">
                Opinie Google
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
