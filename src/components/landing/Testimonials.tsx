import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileCarousel } from "./MobileCarousel";
import { Reveal } from "./Reveal";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS_URL } from "@/lib/site";

const REVIEWS = [
  {
    name: "Marcin",
    place: "Twoje miasto",
    service: "Pompa ciepła",
    text: "Pompa ciepła zamontowana w dwa dni, ekipa zostawiła po sobie idealny porządek. Rachunki za ogrzewanie spadły o ponad połowę.",
  },
  {
    name: "Anna",
    place: "Twoje miasto",
    service: "Klimatyzacja",
    text: "Pełen profesjonalizm od pierwszej rozmowy. Doradzili tańsze rozwiązanie niż to, o które pytałam. Klimatyzacja działa bezgłośnie.",
  },
  {
    name: "Tomasz",
    place: "Twoje miasto",
    service: "Fotowoltaika",
    text: "Fotowoltaika i rekuperacja w jednym projekcie. Wszystko dopięte na czas, formalności dotacyjne załatwione za nas.",
  },
  {
    name: "Katarzyna",
    place: "Twoje miasto",
    service: "Audyt",
    text: "Audyt konkretny, bez naciągania na zbędne urządzenia. Montaż w terminie, serwis oddzwania, gdy trzeba.",
  },
];

function loopOffset(index: number, selected: number, length: number) {
  let delta = index - selected;
  const half = length / 2;
  if (delta > half) delta -= length;
  if (delta < -half) delta += length;
  return delta;
}

function ReviewCard({
  review,
  faded = false,
}: {
  review: (typeof REVIEWS)[number];
  faded?: boolean;
}) {
  return (
    <figure
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl bg-card p-4 sm:p-5 md:min-h-[17rem] md:p-8",
        faded
          ? "border border-transparent"
          : "border border-border/70 max-md:shadow-none md:border-border/40",
      )}
    >
      <Quote
        className="pointer-events-none absolute top-3 right-3 size-10 text-accent/20 md:size-12"
        strokeWidth={1.5}
        aria-hidden
      />
      <blockquote className="min-h-0 flex-1 pr-10 text-sm leading-relaxed text-muted-foreground md:pr-12 md:text-xl md:leading-snug lg:text-[1.375rem]">
        „{review.text}”
      </blockquote>
      <figcaption className="mt-3 flex items-center gap-3 border-t border-border/70 pt-2.5 md:mt-6 md:pt-5">
        <span
          aria-hidden
          className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/12 font-display text-sm font-bold text-accent md:size-11 md:text-base"
        >
          {review.name[0]}
        </span>
        <div className="min-w-0 flex-1">
          <span className="block truncate text-sm font-semibold text-foreground md:text-lg">
            {review.name}
          </span>
          <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground md:text-sm">
            <span className="truncate">{review.place}</span>
            <span className="size-0.5 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden />
            <span className="truncate font-medium text-accent">{review.service}</span>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-0.5" aria-label="5 na 5">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star key={s} className="size-4 fill-accent text-accent md:size-5" />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

function ReviewCarousel() {
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
        aria-label="Poprzednia opinia"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute top-1/2 left-2 z-30 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-border/70 bg-card text-foreground shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-transparent hover:bg-gradient-cyan hover:text-white hover:shadow-glow md:inline-flex lg:left-1"
      >
        <ChevronLeft className="size-5" strokeWidth={2} />
      </button>
      <button
        type="button"
        aria-label="Następna opinia"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute top-1/2 right-2 z-30 hidden size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-xl border border-border/70 bg-card text-foreground shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-transparent hover:bg-gradient-cyan hover:text-white hover:shadow-glow md:inline-flex lg:right-1"
      >
        <ChevronRight className="size-5" strokeWidth={2} />
      </button>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-background via-background/80 to-transparent md:w-28 lg:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-background via-background/80 to-transparent md:w-28 lg:w-36" />

      <div className="overflow-hidden py-4 md:px-8 md:pt-5 md:pb-14 lg:px-10" ref={emblaRef}>
        <div className="flex items-center touch-pan-y">
          {REVIEWS.map((review, idx) => {
            const dist = Math.abs(loopOffset(idx, selected, REVIEWS.length));
            const active = dist === 0;
            return (
              <div
                key={review.name}
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
                  <ReviewCard review={review} faded={!active} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-center gap-1.5 md:mt-4">
        {REVIEWS.map((review, idx) => (
          <button
            key={review.name}
            type="button"
            aria-label={`Opinia ${idx + 1}`}
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
      id="opinie"
      className="flex flex-col py-16 max-md:pb-28 md:min-h-svh md:justify-center md:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            data-scroll-target
            className="mx-auto block w-fit font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase"
          >
            Opinie klientów
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-5xl">
            Co mówią o nas <span className="text-gradient-cyan">klienci?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Opinie z naszego profilu Google Maps.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-80 md:mt-6"
          >
            <span className="flex items-center gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent md:size-5" />
              ))}
            </span>
            <span className="text-base font-bold text-foreground md:text-xl">{GOOGLE_RATING}</span>
            <span className="text-sm text-muted-foreground md:text-base">· {GOOGLE_REVIEW_COUNT} opinii</span>
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mt-4 md:mt-5">
          <MobileCarousel
            items={REVIEWS}
            renderItem={(review) => <ReviewCard review={review} />}
          />
          <div className="hidden md:block">
            <ReviewCarousel />
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Button asChild variant="cyan" size="xl">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Zobacz wszystkie opinie <ExternalLink className="size-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
