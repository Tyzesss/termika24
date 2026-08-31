import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/services";
import {
  ADDRESS,
  EMAIL,
  EMAIL_HREF,
  HOURS,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), "Serwis", "Inne"];

const INFO = [
  {
    icon: Phone,
    label: "Zadzwoń",
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: EMAIL,
    href: EMAIL_HREF,
  },
  {
    icon: MapPin,
    label: "Adres",
    value: ADDRESS,
    href: MAPS_URL,
  },
  {
    icon: Clock,
    label: "Godziny",
    value: HOURS,
    href: null as string | null,
  },
];

/** Matches one-color-template LeadForm field chrome (KLIMATPRO accent). */
const inputClass =
  "h-11 w-full rounded-xl border border-[#e2e8f0] bg-card px-3.5 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20";

const labelClass = "text-xs font-medium text-foreground";

const selectTriggerClass = cn(
  "h-11 w-full rounded-xl border border-[#e2e8f0] bg-card px-3.5 text-sm text-foreground shadow-none focus:border-accent focus:ring-2 focus:ring-accent/20 data-[placeholder]:text-muted-foreground",
);

export function Contact() {
  const [service, setService] = useState("");

  return (
    <section id="kontakt" className="pt-20 pb-10 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span
            data-scroll-target
            className="mx-auto block w-fit font-display text-xs font-semibold tracking-[0.18em] text-gradient-cyan uppercase"
          >
            Kontakt
          </span>
          <h2 className="mt-5 font-display text-3xl font-black sm:text-4xl md:whitespace-nowrap lg:text-5xl">
            Porozmawiajmy o
            <span className="hidden md:inline"> </span>
            <br className="md:hidden" />
            <span className="text-gradient-cyan">Twoim projekcie</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Odpowiadamy w ciągu jednego dnia roboczego. Wycena i wizyta wstępna są bezpłatne.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:items-stretch lg:gap-8">
          <div className="contents lg:flex lg:h-full lg:flex-col lg:gap-4">
            <Reveal className="order-1">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {INFO.map((item) => {
                  const inner = (
                    <div className="group flex h-full min-h-[5.5rem] w-full min-w-0 items-center gap-3.5 rounded-2xl border border-border/70 bg-card px-4 py-4 shadow-card transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[8.5rem] sm:flex-col sm:items-start sm:justify-center sm:gap-3 sm:p-5 md:hover:-translate-y-1 md:hover:border-accent/30 md:hover:shadow-lift">
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-cyan text-white sm:rounded-xl">
                        <item.icon className="size-5" />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-col justify-center text-left">
                        <p className="text-[0.6875rem] leading-none font-semibold tracking-[0.08em] text-muted-foreground uppercase sm:text-xs sm:tracking-wide">
                          {item.label}
                        </p>
                        <p className="mt-1.5 text-[0.9375rem] leading-snug font-semibold break-words text-foreground sm:text-sm sm:font-medium">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex h-full w-full min-w-0"
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label} className="flex h-full w-full min-w-0">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="order-3 flex min-h-44 flex-col lg:min-h-0 lg:flex-1">
              <div className="relative min-h-52 overflow-hidden rounded-2xl bg-muted shadow-card lg:h-full lg:flex-1 lg:min-h-0">
                <iframe
                  title={`Mapa Google: ${ADDRESS}`}
                  src={MAPS_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] max-w-none border-0"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="order-2 flex h-full flex-col">
            <div
              className="mb-4 flex items-center gap-4 lg:hidden"
              aria-hidden
            >
              <span className="h-px flex-1 bg-border" />
              <span className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Lub
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Dziękujemy! Odezwiemy się w ciągu 24 godzin.");
                (e.target as HTMLFormElement).reset();
                setService("");
              }}
              className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-7 shadow-card sm:p-9 lg:shadow-lift"
            >
              <div className="mb-5 text-center">
                <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  Bezpłatna <span className="text-gradient-cyan">wycena</span>
                </h3>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Oddzwonimy z propozycją w ciągu 24 godzin
                </p>
              </div>

              <div className="grid gap-3.5 text-left">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <Label htmlFor="name" className={labelClass}>
                      Imię
                    </Label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="given-name"
                      placeholder="Twoje imię"
                      className={inputClass}
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="phone" className={labelClass}>
                      Telefon
                    </Label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Twój numer"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="email" className={labelClass}>
                    E-mail
                  </Label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Twój e-mail"
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="service" className={labelClass}>
                    Rodzaj usługi
                  </Label>
                  <Select value={service || undefined} onValueChange={setService}>
                    <SelectTrigger id="service" className={selectTriggerClass}>
                      <SelectValue placeholder="Wybierz z listy" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg">
                      {SERVICE_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="message" className={labelClass}>
                    Wiadomość
                  </Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Opisz krótko swój budynek i oczekiwania..."
                    className="min-h-28 w-full resize-none rounded-xl border border-[#e2e8f0] bg-card px-3.5 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20"
                  />
                </div>

                <label className="flex cursor-pointer items-center gap-2.5 text-xs leading-snug text-muted-foreground">
                  <span className="relative inline-flex size-4 shrink-0">
                    <input
                      required
                      type="checkbox"
                      name="rodo"
                      className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
                    />
                    <span
                      className="pointer-events-none flex size-4 items-center justify-center rounded border-2 border-[#94a3b8] bg-white transition-colors peer-checked:border-accent peer-checked:bg-accent peer-checked:[&_svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-accent/40"
                      aria-hidden
                    >
                      <svg
                        viewBox="0 0 12 12"
                        className="size-2.5 text-white opacity-0 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 6.2 4.8 9 10 3" />
                      </svg>
                    </span>
                  </span>
                  <span className="min-w-0">
                    Akceptuję{" "}
                    <Link
                      to="/polityka-prywatnosci"
                      className="text-accent underline underline-offset-2 hover:text-foreground"
                    >
                      Politykę prywatności
                    </Link>{" "}
                    i wyrażam zgodę na kontakt.
                  </span>
                </label>
              </div>

              <Button type="submit" variant="cyan" size="xl" className="mt-6 h-11 w-full rounded-xl text-sm">
                Wyślij zapytanie <Send className="size-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
