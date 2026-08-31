import { useCallback, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, Images, MapPin, X, ZoomIn } from "lucide-react";
import { DarkEyebrow } from "./DarkEyebrow";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { MobileCarousel } from "./MobileCarousel";
import workHeatpump from "@/assets/work-heatpump.jpg";
import workAc from "@/assets/work-ac.jpg";
import workSolar from "@/assets/work-solar.jpg";
import workRecup from "@/assets/work-recup.jpg";
import workAcOutdoor from "@/assets/work-ac-outdoor.jpg";
import workUnderfloor from "@/assets/work-underfloor.jpg";
import workHeatpumpM from "@/assets/work-heatpump-m.jpg";
import workAcM from "@/assets/work-ac-m.jpg";
import workSolarM from "@/assets/work-solar-m.jpg";
import workRecupM from "@/assets/work-recup-m.jpg";
import workAcOutdoorM from "@/assets/work-ac-outdoor-m.jpg";
import workUnderfloorM from "@/assets/work-underfloor-m.jpg";

type Category =
  | "Kotłownie i c.o."
  | "Instalacje sanitarne"
  | "Pompy ciepła"
  | "Centralne ogrzewanie";

const PROJECTS: {
  image: string;
  imageMobile: string;
  category: Category;
  title: string;
  place: string;
  scope: string;
  alt: string;
  featured?: boolean;
}[] = [
  {
    image: workHeatpump,
    imageMobile: workHeatpumpM,
    category: "Pompy ciepła",
    title: "PKP Kraków, nastawnie Płaszów i Bieżanów",
    place: "Kraków, 2018",
    scope:
      "Instalacja c.o. i wod-kan wraz z technologią wytwarzania ciepła oraz montażem gazowych pomp ciepła.",
    alt: "Jednostka zewnętrzna pompy ciepła przy budynku technicznym",
    featured: true,
  },
  {
    image: workRecup,
    imageMobile: workRecupM,
    category: "Instalacje sanitarne",
    title: "Szpital Miejski w Rudzie Śląskiej",
    place: "Ruda Śląska, 2015-2016",
    scope:
      "Instalacja c.o., c.w.u. i kanalizacji, węzeł cieplny 910 kW oraz kolektory słoneczne.",
    alt: "Nowoczesna kotłownia i instalacja grzewcza w obiekcie użyteczności publicznej",
  },
  {
    image: workUnderfloor,
    imageMobile: workUnderfloorM,
    category: "Centralne ogrzewanie",
    title: "Uniwersytet Ekonomiczny we Wrocławiu",
    place: "Wrocław, 2018",
    scope: "Wymiana instalacji centralnego ogrzewania w budynkach należących do uczelni.",
    alt: "Rozdzielacz instalacji centralnego ogrzewania w pomieszczeniu technicznym",
  },
  {
    image: workAc,
    imageMobile: workAcM,
    category: "Instalacje sanitarne",
    title: "Dom Pomocy Społecznej w Gorlicach",
    place: "Gorlice, 2014",
    scope:
      "Instalacja c.o. i c.w.u. oraz adaptacja łazienek na pokoje kąpielowe dla niepełnosprawnych.",
    alt: "Instalacja sanitarna w budynku opieki społecznej",
  },
  {
    image: workSolar,
    imageMobile: workSolarM,
    category: "Kotłownie i c.o.",
    title: "Zespół Szkół Rolniczych w Zarzeczu",
    place: "Zarzecze, 2012",
    scope:
      "Modernizacja kotłowni gazowej 550 kW z wymianą kotła kondensacyjnego De Dietrich i automatyki.",
    alt: "Kotłownia gazowa po modernizacji w obiekcie szkolnym",
  },
  {
    image: workAcOutdoor,
    imageMobile: workAcOutdoorM,
    category: "Instalacje sanitarne",
    title: "Budowa ZMU w Krakowie",
    place: "Kraków, 2016",
    scope:
      "Instalacja c.o., ciepłej i zimnej wody oraz kanalizacji w zespole mieszkalno-usługowym.",
    alt: "Instalacje sanitarne w nowym budynku wielorodzinnym",
  },
];

function ProjectCard({
  project,
  featured,
  onOpen,
}: {
  project: (typeof PROJECTS)[number];
  featured: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group relative isolate h-full min-h-[11rem] w-full overflow-hidden rounded-2xl text-left",
        "border border-navy-foreground/15 bg-navy max-md:aspect-[4/5] max-md:min-h-0 max-md:shadow-none",
        "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0",
        "md:transition-all md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 md:hover:border-accent/40",
        featured && "md:min-h-full",
      )}
    >
      <img
        src={project.imageMobile}
        alt={project.alt}
        width={1024}
        height={1536}
        loading="lazy"
        className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 ease-out md:hidden"
      />
      <img
        src={project.image}
        alt=""
        width={1536}
        height={1024}
        loading="lazy"
        className="absolute inset-0 hidden size-full object-cover object-center transition-transform duration-700 ease-out md:block md:group-hover:scale-[1.04]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-navy/5"
        aria-hidden
      />
      <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-4 sm:p-5">
        <span className="w-fit rounded-full bg-navy-foreground/15 px-2.5 py-1 font-display text-[10px] font-semibold tracking-[0.14em] text-navy-foreground uppercase backdrop-blur-sm sm:text-[11px]">
          {project.category}
        </span>
        <h3
          className={cn(
            "mt-2 font-display font-semibold text-navy-foreground max-md:text-lg",
            featured ? "text-lg sm:text-2xl" : "text-sm sm:text-base",
          )}
        >
          {project.title}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-navy-foreground/75">
          <MapPin className="size-3 shrink-0" />
          {project.place}
        </p>
      </div>
      <span
        className="absolute top-3 right-3 inline-flex size-9 items-center justify-center rounded-full bg-navy-foreground/15 text-navy-foreground opacity-100 backdrop-blur-sm transition-all duration-500 ease-out md:opacity-0 md:group-hover:opacity-100"
        aria-hidden
      >
        <ZoomIn className="size-4" />
      </span>
    </button>
  );
}

export function Realizations() {
  const [active, setActive] = useState<number | null>(null);

  const current = active != null ? PROJECTS[active] : null;

  const close = () => setActive(null);
  const openAt = (idx: number) => setActive(idx);

  const showPrev = useCallback(() => {
    setActive((i) => (i == null ? i : (i - 1 + PROJECTS.length) % PROJECTS.length));
  }, []);

  const showNext = useCallback(() => {
    setActive((i) => (i == null ? i : (i + 1) % PROJECTS.length));
  }, []);

  useEffect(() => {
    if (active == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, showPrev, showNext]);

  return (
    <section id="realizacje" className="pt-16 pb-8 md:pt-20 md:pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl text-left text-navy-foreground md:mx-auto md:text-center">
          <DarkEyebrow data-scroll-target icon={Images} className="md:mx-auto">
            Realizacje
          </DarkEyebrow>
          <h2 className="mt-5 font-display text-3xl font-black sm:text-5xl md:whitespace-nowrap">
            Instalacje, które
            <span className="hidden md:inline"> </span>
            <br className="md:hidden" />
            <span className="text-gradient-cyan">już działają</span>
          </h2>
          <p className="mt-4 max-w-2xl text-navy-foreground/70 md:mx-auto">
            Ponad 30 udokumentowanych inwestycji z portfolio TERMIKA: szpitale, szkoły,
            uczelnie, obiekty PKP i budynki wielorodzinne. Poniżej wybrane realizacje.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14">
          <MobileCarousel
            items={PROJECTS}
            dotsOnDark
            className="animate-in fade-in duration-500 ease-out"
            renderItem={(project, i) => (
              <ProjectCard project={project} featured onOpen={() => openAt(i)} />
            )}
          />
          <div className="hidden gap-4 md:grid md:grid-cols-12 md:auto-rows-[minmax(15.25rem,auto)]">
            {PROJECTS.map((project, i) => {
              const featured = Boolean(project.featured);
              return (
                <Reveal
                  key={project.title}
                  delay={Math.min(i, 4) * 0.06}
                  className={cn(
                    "h-full",
                    featured && "md:col-span-8 md:row-span-2",
                    !featured && "md:col-span-4",
                  )}
                >
                  <ProjectCard
                    project={project}
                    featured={featured}
                    onOpen={() => openAt(i)}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog.Root open={current != null} onOpenChange={(open) => !open && close()}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[80] bg-navy/88 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed inset-0 z-[81] flex flex-col outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            {current ? (
              <>
                <Dialog.Title className="sr-only">
                  {current.title}, {current.category}
                </Dialog.Title>
                <div className="flex items-center justify-between gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-3 sm:px-6">
                  <div className="min-w-0">
                    <p className="font-display text-[10px] font-semibold tracking-[0.16em] text-accent uppercase">
                      {current.category}
                    </p>
                    <p className="truncate font-display text-base font-semibold text-navy-foreground sm:text-lg">
                      {current.title}
                    </p>
                  </div>
                  <Dialog.Close
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-navy-foreground transition-colors hover:bg-navy-foreground/10"
                    aria-label="Zamknij"
                  >
                    <X className="size-5" />
                  </Dialog.Close>
                </div>

                <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
                  {PROJECTS.length > 1 ? (
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Poprzednie zdjęcie"
                      className="absolute top-1/2 left-2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-navy-foreground/20 sm:inline-flex"
                    >
                      <ChevronLeft className="size-6" />
                    </button>
                  ) : null}
                  <figure className="flex max-h-full max-w-5xl flex-col items-center">
                    <img
                      src={current.image}
                      alt={current.alt}
                      width={1536}
                      height={1024}
                      className="max-h-[min(72vh,44rem)] w-auto max-w-full rounded-xl object-contain shadow-lift"
                    />
                    <figcaption className="mt-4 max-w-xl text-center text-sm text-navy-foreground/70">
                      <span className="flex items-center justify-center gap-1.5">
                        <MapPin className="size-3.5 shrink-0" />
                        {current.place}
                      </span>
                      <span className="mt-2 block text-navy-foreground/55">{current.scope}</span>
                      {PROJECTS.length > 1 ? (
                        <span className="mt-2 block text-navy-foreground/40">
                          {active! + 1} / {PROJECTS.length}
                        </span>
                      ) : null}
                    </figcaption>
                  </figure>
                  {PROJECTS.length > 1 ? (
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Następne zdjęcie"
                      className="absolute top-1/2 right-2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-navy-foreground/20 sm:inline-flex"
                    >
                      <ChevronRight className="size-6" />
                    </button>
                  ) : null}
                </div>

                {PROJECTS.length > 1 ? (
                  <div className="flex justify-center gap-3 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:hidden">
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label="Poprzednie zdjęcie"
                      className="inline-flex size-11 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Następne zdjęcie"
                      className="inline-flex size-11 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  </div>
                ) : null}
              </>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
