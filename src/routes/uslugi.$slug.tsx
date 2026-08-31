import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, CircleHelp, Hammer, Phone } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { StickyCallBar } from "@/components/landing/StickyCallBar";
import { MobileCarousel } from "@/components/landing/MobileCarousel";
import { DarkEyebrow } from "@/components/landing/DarkEyebrow";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getService, SERVICE_PROCESS, SERVICES } from "@/lib/services";
import { getServiceRealizationCards } from "@/lib/realization-cards";
import { ServiceRealizations } from "@/components/landing/ServiceRealizations";
import { PHONE_DISPLAY, PHONE_HREF, SITE_NAME } from "@/lib/site";
import imgKotlownie from "@/assets/service-kotlownie.jpg";
import imgCo from "@/assets/service-co.jpg";
import imgPompy from "@/assets/service-pompy.jpg";
import imgPodlogowe from "@/assets/service-podlogowe.jpg";
import imgWodkan from "@/assets/service-wodkan.jpg";
import imgGaz from "@/assets/service-gaz.jpg";
import imgSolar from "@/assets/service-solar.jpg";
import imgPpoz from "@/assets/service-ppoz.jpg";
import imgKlima from "@/assets/service-klima.jpg";

const IMAGES: Record<string, { src: string; alt: string }> = {
  kotlownie: {
    src: imgKotlownie,
    alt: "Kotłownia z kotłami kondensacyjnymi, pompami i instalacją c.o.",
  },
  "centralne-ogrzewanie": {
    src: imgCo,
    alt: "Rozdzielacz centralnego ogrzewania i grzejnik stalowy",
  },
  "pompy-ciepla": {
    src: imgPompy,
    alt: "Jednostka zewnętrzna pompy ciepła przy budynku",
  },
  "ogrzewanie-podlogowe": {
    src: imgPodlogowe,
    alt: "Pętle ogrzewania podłogowego na płycie izolacyjnej",
  },
  "instalacje-wod-kan": {
    src: imgWodkan,
    alt: "Instalacja wod-kan: rury wody i kanalizacji w łazience",
  },
  "instalacje-gazowe": {
    src: imgGaz,
    alt: "Instalacja gazowa ze szafką gazomierza i zaworem odcinającym",
  },
  "instalacje-solarne": {
    src: imgSolar,
    alt: "Kolektory słoneczne na dachu budynku",
  },
  "instalacje-ppoz": {
    src: imgPpoz,
    alt: "Hydrant wewnętrzny i rury instalacji tryskaczowej",
  },
  "wentylacja-klimatyzacja": {
    src: imgKlima,
    alt: "Klimatyzacja i kanały wentylacyjne w obiekcie",
  },
};

function OtherServiceCard({ item }: { item: (typeof SERVICES)[number] }) {
  const thumb = IMAGES[item.slug];

  return (
    <Link
      to="/uslugi/$slug"
      params={{ slug: item.slug }}
      resetScroll
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card max-md:shadow-none md:transition-all md:duration-300 md:hover:border-accent/40 md:hover:shadow-card"
    >
      {thumb ? (
        <img
          src={thumb.src}
          alt=""
          className="aspect-[16/10] w-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-[1.03]"
        />
      ) : null}
      <span className="flex flex-1 flex-col p-5">
        <span className="font-semibold text-foreground">{item.title}</span>
        <span className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{item.short}</span>
      </span>
    </Link>
  );
}

export const Route = createFileRoute("/uslugi/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    const title = service ? `${service.title} | ${SITE_NAME}` : SITE_NAME;
    return {
      meta: [
        { title },
        { name: "description", content: service?.intro ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: service?.intro ?? "" },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const media = IMAGES[service.slug];
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const related = getServiceRealizationCards(service.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header alwaysSolid />
      <main>
        <section className="relative isolate overflow-hidden bg-navy">
          {media ? (
            <img
              src={media.src}
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
          ) : null}
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "var(--gradient-service-hero)" }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "var(--gradient-service-hero-side)" }}
            aria-hidden
          />

          <div className="relative mx-auto flex min-h-[28rem] max-w-7xl flex-col justify-end px-5 pt-32 pb-14 sm:min-h-[32rem] sm:pt-36 sm:pb-16 lg:min-h-[36rem] lg:px-8 lg:pb-20">
            <h1 className="max-w-3xl font-display text-4xl font-black tracking-tight text-navy-foreground sm:text-5xl lg:text-6xl [filter:drop-shadow(0_2px_8px_oklch(0_0_0_/_0.55))_drop-shadow(0_8px_24px_oklch(0_0_0_/_0.45))]">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/92 sm:text-lg [text-shadow:0_1px_12px_oklch(0_0_0_/_0.7)]">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild variant="cyan" size="xl">
                <Link to="/" hash="kontakt">
                  Bezpłatna wycena <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="hero" size="xl">
                <a href={PHONE_HREF}>
                  <Phone className="size-4 text-accent" /> {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <div className="bg-background">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-12">
              <div className="flex flex-col justify-center gap-8 lg:col-span-6 xl:col-span-7 xl:gap-10">
                {service.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="flex items-center gap-3 font-display text-2xl font-black text-foreground sm:text-3xl">
                      <span className="h-8 w-1 shrink-0 rounded-full bg-gradient-cyan" aria-hidden />
                      {section.heading}
                    </h2>
                    <p className="mt-3 max-w-prose pl-4 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-[1.05rem] sm:leading-8">
                      {section.body}
                    </p>
                  </section>
                ))}
              </div>

              {media ? (
                <div className="relative lg:col-span-6 xl:col-span-5">
                  <div
                    className="absolute -inset-3 rounded-[2rem] bg-gradient-cyan opacity-25 blur-2xl"
                    aria-hidden
                  />
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="relative h-56 w-full rounded-3xl object-cover shadow-card ring-2 ring-accent/35 sm:h-72 lg:h-full lg:min-h-[18rem]"
                  />
                </div>
              ) : null}
            </div>

            <div className="mt-10 rounded-3xl border border-accent/25 bg-accent/[0.06] p-7 sm:mt-12 sm:p-8">
              <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
                Oferta
              </span>
              <h2 className="mt-2 font-display text-xl font-black text-foreground">Zakres prac</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-snug text-foreground/80">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20">
                      <Check className="size-3.5 text-accent" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-navy">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
            <section>
              <DarkEyebrow icon={Hammer}>Proces</DarkEyebrow>
              <h2 className="mt-5 font-display text-3xl font-black text-navy-foreground sm:text-4xl">
                Jak <span className="text-gradient-cyan">pracujemy</span>
              </h2>
              <ol className="mt-8 grid gap-5 sm:grid-cols-3 sm:gap-6">
                {SERVICE_PROCESS.map((item) => (
                  <li
                    key={item.step}
                    className="rounded-3xl bg-navy-foreground/8 p-7 ring-1 ring-navy-foreground/15 sm:p-8"
                  >
                    <span className="font-display text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                      {item.step}
                    </span>
                    <p className="mt-4 font-semibold text-navy-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">{item.body}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>

        <ServiceRealizations titleOf={service.titleOf} items={related} />

        <div className="bg-navy">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
            <section className="flex flex-col gap-12">
              <div className="flex flex-col">
                <DarkEyebrow icon={CircleHelp}>FAQ</DarkEyebrow>
                <h2 className="mt-5 font-display text-2xl font-black text-navy-foreground sm:text-3xl">
                  Często zadawane <span className="text-gradient-cyan">pytania</span>
                </h2>
                <Accordion type="single" collapsible className="mt-6 flex flex-col gap-3">
                  {service.faq.map((item, i) => (
                    <AccordionItem
                      key={item.q}
                      value={`faq-${i}`}
                      className="rounded-2xl border-0 bg-navy-foreground/8 px-6 text-navy-foreground shadow-none ring-1 ring-navy-foreground/15"
                    >
                      <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy-foreground hover:no-underline [&>svg]:text-navy-foreground/55">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-sm leading-relaxed text-navy-foreground/65">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <div className="flex w-full flex-col justify-between gap-8 rounded-3xl bg-gradient-cyan p-8 text-white sm:p-10 lg:flex-row lg:items-center lg:gap-12">
                <div className="lg:max-w-xl">
                  <h2 className="font-display text-2xl font-black">Potrzebujesz wyceny?</h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/85">
                    Napisz albo zadzwoń. Pierwsza wizyta i wycena nic nie kosztują.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto lg:shrink-0">
                  <Button
                    asChild
                    variant="ghost"
                    size="xl"
                    className="w-full bg-white font-semibold text-navy shadow-none hover:scale-100 hover:bg-white/90 hover:text-navy sm:flex-1 lg:w-auto lg:flex-none"
                  >
                    <Link to="/" hash="kontakt">
                      Formularz kontaktowy <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="xl"
                    className="w-full border border-white/70 bg-transparent font-semibold text-white shadow-none hover:scale-100 hover:bg-white/15 hover:text-white sm:flex-1 lg:w-auto lg:flex-none"
                  >
                    <a href={PHONE_HREF}>
                      <Phone className="size-4" /> {PHONE_DISPLAY}
                    </a>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="bg-background">
          <section className="mx-auto max-w-7xl px-5 pt-12 pb-8 sm:py-16 lg:px-8 lg:py-20">
            <span className="font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase">
              Oferta
            </span>
            <h2 className="mt-3 font-display text-2xl font-black text-foreground sm:text-3xl">
              Inne <span className="text-gradient-cyan">usługi</span>
            </h2>
            <div className="mt-8">
              <MobileCarousel
                key={service.slug}
                items={others}
                renderItem={(item) => <OtherServiceCard item={item} />}
              />
              <ul className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
                {others.map((item) => (
                  <li key={item.slug}>
                    <OtherServiceCard item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
}
