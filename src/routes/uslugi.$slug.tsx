import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { StickyCallBar } from "@/components/landing/StickyCallBar";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  getRelatedRealizations,
  getService,
  SERVICE_PROCESS,
  SERVICES,
} from "@/lib/services";
import { PHONE_DISPLAY, PHONE_HREF, SITE_NAME } from "@/lib/site";

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
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  const related = getRelatedRealizations(service.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header alwaysSolid />
      <main className="pt-[6.5rem] pb-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <p className="text-sm text-muted-foreground">
            <Link to="/" hash="uslugi" className="transition-colors hover:text-accent">
              Usługi
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{service.title}</span>
          </p>

          <h1 className="mt-5 font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{service.intro}</p>

          <div className="mt-10 space-y-8">
            {service.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl font-black text-foreground">{section.heading}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-black text-foreground">Zakres prac</h2>
            <ul className="mt-5 space-y-3">
              {service.bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Check className="size-3.5 text-accent" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-xl font-black text-foreground">Jak pracujemy</h2>
            <ol className="mt-5 grid gap-3 sm:grid-cols-3">
              {SERVICE_PROCESS.map((item) => (
                <li
                  key={item.step}
                  className="rounded-2xl border border-border/70 bg-card p-5"
                >
                  <span className="font-display text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                    {item.step}
                  </span>
                  <p className="mt-2 font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>

          {related.length > 0 ? (
            <div className="mt-10">
              <h2 className="font-display text-xl font-black text-foreground">
                Wybrane realizacje
              </h2>
              <ul className="mt-5 space-y-3">
                {related.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-border/70 bg-card p-5"
                  >
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-xs font-medium text-accent">{item.year}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.scope}</p>
                  </li>
                ))}
              </ul>
              <Link
                to="/"
                hash="realizacje"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent/80"
              >
                Wszystkie realizacje <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : null}

          <div className="mt-10">
            <h2 className="font-display text-xl font-black text-foreground">Pytania</h2>
            <Accordion type="single" collapsible className="mt-3">
              {service.faq.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`}>
                  <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild variant="cyan" size="xl">
              <Link to="/" hash="kontakt">
                Bezpłatna wycena <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href={PHONE_HREF}>
                <Phone className="size-4 text-accent" /> {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl px-5 lg:px-8">
          <h2 className="font-display text-xl font-black text-foreground">Inne usługi</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/uslugi/$slug"
                  params={{ slug: item.slug }}
                  className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-card"
                >
                  <span className="font-semibold text-foreground">{item.title}</span>
                  <span className="mt-1.5 text-sm text-muted-foreground">{item.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
}
