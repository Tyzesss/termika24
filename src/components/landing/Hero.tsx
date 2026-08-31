import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Phone, ShieldCheck } from "lucide-react";
import type { MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-to-section";
import { PHONE_HREF } from "@/lib/site";
import { Counter } from "./Counter";
import { Brands } from "./Brands";
import { DarkEyebrow } from "./DarkEyebrow";
import heroImage from "@/assets/hero-kotlownia-bright.png";

const STATS = [
  { value: 20, suffix: "", label: "Lat doświadczenia" },
  { value: 30, suffix: "+", label: "Realizacje" },
  { value: 9, suffix: "", label: "Rodzajów instalacji" },
  { value: 2006, suffix: "", label: "Rok założenia", static: true },
];

const goTo = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  scrollToSection(href);
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-x-clip bg-navy">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Nowoczesna kotłownia z kotłami kondensacyjnymi i instalacją c.o."
          width={1920}
          height={1080}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="size-full origin-center scale-[1.04] object-cover object-[50%_40%] brightness-[0.64]"
        />
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-hero-side)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="relative z-20 flex min-h-dvh flex-col md:h-svh md:min-h-svh">
        <div className="relative z-0 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-8 px-5 pt-28 pb-16 sm:gap-14 sm:pt-32 sm:pb-16 md:h-full lg:px-8 lg:pt-36 lg:pb-20">
          <motion.div
            initial={reduce ? false : { y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
          >
            <DarkEyebrow icon={ShieldCheck}>Certyfikowany instalator</DarkEyebrow>

            <h1 className="mt-5 font-display text-[clamp(2.4rem,7.2vw+0.5rem,3.5rem)] leading-[1.05] font-black tracking-tight text-navy-foreground sm:mt-6 sm:text-6xl sm:tracking-normal lg:text-7xl [filter:drop-shadow(0_4px_12px_oklch(0_0_0_/_0.28))_drop-shadow(0_12px_32px_oklch(0_0_0_/_0.32))_drop-shadow(0_24px_48px_oklch(0_0_0_/_0.22))]">
              Od kotłowni
              <br className="sm:hidden" />{" "}
              po przyłącza.
              <br />
              <span className="text-gradient-cyan max-sm:whitespace-nowrap">Jedna ekipa, cały kraj.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm text-navy-foreground/85 sm:mt-6 sm:text-lg">
              Instalacje wod-kan, gazowe i grzewcze, kotłownie oraz wentylacja.
              Siedziba Gorlice, działamy w całym kraju.
            </p>

            <div className="mt-7 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
              <Button asChild variant="cyan" size="xl">
                <a
                  href="#uslugi"
                  onClick={goTo("#uslugi")}
                  className="w-full rounded-full uppercase sm:w-auto sm:rounded-xl sm:normal-case"
                >
                  Sprawdź ofertę <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="hero" size="xl">
                <a
                  href={PHONE_HREF}
                  className="w-full rounded-full uppercase sm:w-auto sm:rounded-xl sm:normal-case"
                >
                  <Phone className="size-4 text-accent" /> Zadzwoń teraz
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto grid w-full max-w-[58rem] shrink-0 grid-cols-2 gap-x-6 gap-y-3.5 max-md:mt-1 sm:gap-3.5 lg:grid-cols-4 lg:gap-4"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i >= 2
                    ? "glass-panel hidden flex-col items-center justify-center text-center md:flex md:rounded-2xl md:px-5 md:py-6 md:transition-transform md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1"
                    : "glass-panel flex flex-col items-center justify-center text-center max-md:border-transparent max-md:bg-transparent max-md:p-0 max-md:shadow-none max-md:[backdrop-filter:none] max-md:[-webkit-backdrop-filter:none] md:rounded-2xl md:px-5 md:py-6 md:transition-transform md:duration-500 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1"
                }
              >
                <div className="font-display text-4xl font-black leading-none text-accent lg:text-[2.75rem]">
                  {stat.static ? stat.value : <Counter to={stat.value} />}
                  <span>{stat.suffix}</span>
                </div>
                <p className="mt-2 text-[13px] leading-snug font-medium tracking-wide text-navy-foreground/70 uppercase sm:mt-2 sm:text-xs">
                  {stat.label}
                </p>
                <span className="mt-2.5 h-0.5 w-8 rounded-full bg-accent/75 sm:mt-3 sm:w-7" aria-hidden />
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#uslugi"
            aria-label="Przewiń dalej"
            onClick={goTo("#uslugi")}
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, 8, 0] }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    opacity: { duration: 0.6, delay: 0.8 },
                    y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
                  }
            }
            className="relative z-20 mx-auto mt-6 mb-1 flex w-fit items-center justify-center text-navy-foreground/55 transition-colors duration-300 hover:text-navy-foreground/90 md:absolute md:inset-x-0 md:bottom-10 md:mt-0 md:mb-0"
          >
            <ChevronDown className="size-7 stroke-[1.5]" />
          </motion.a>
        </div>
      </div>

      <Brands />
    </section>
  );
}
