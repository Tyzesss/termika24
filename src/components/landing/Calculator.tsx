import { useState } from "react";
import { ArrowLeft, ArrowRight, Calculator as CalcIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { CheckList } from "./CheckList";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll-to-section";

const PRODUCTS = ["Klimatyzacja", "Pompa ciepła", "Fotowoltaika", "Rekuperacja"] as const;
const BUILDING = ["Nowy budynek", "Modernizowany"] as const;
const AREA = ["do 50 m²", "50-80 m²", "80-120 m²", "120-180 m²", "powyżej 180 m²"] as const;

type Product = (typeof PRODUCTS)[number];
type Area = (typeof AREA)[number];
type Step = 1 | 2 | 3 | 4;

const STEP_LABELS = ["Instalacja", "Budynek", "Powierzchnia", "Wycena"] as const;

/** Orientacyjne widełki brutto wg typu instalacji i powierzchni. */
const RANGES: Record<Product, Record<Area, [number, number]>> = {
  Klimatyzacja: {
    "do 50 m²": [4500, 7500],
    "50-80 m²": [6500, 11000],
    "80-120 m²": [9000, 16000],
    "120-180 m²": [14000, 24000],
    "powyżej 180 m²": [20000, 36000],
  },
  "Pompa ciepła": {
    "do 50 m²": [22000, 32000],
    "50-80 m²": [28000, 40000],
    "80-120 m²": [35000, 50000],
    "120-180 m²": [45000, 65000],
    "powyżej 180 m²": [55000, 82000],
  },
  Fotowoltaika: {
    "do 50 m²": [12000, 18000],
    "50-80 m²": [16000, 24000],
    "80-120 m²": [22000, 32000],
    "120-180 m²": [28000, 42000],
    "powyżej 180 m²": [35000, 55000],
  },
  Rekuperacja: {
    "do 50 m²": [11000, 17000],
    "50-80 m²": [14000, 21000],
    "80-120 m²": [18000, 27000],
    "120-180 m²": [23000, 35000],
    "powyżej 180 m²": [29000, 44000],
  },
};

function OptionButton({
  label,
  selected,
  onClick,
  className,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex min-h-11 w-full cursor-pointer items-center justify-center rounded-xl border px-3 py-3 text-sm font-semibold transition-all duration-300 ease-out sm:h-full sm:min-h-0 sm:px-4 sm:py-5 sm:text-lg",
        selected
          ? "border-accent bg-accent/20 text-navy-foreground"
          : "border-navy-foreground/15 bg-navy-foreground/5 text-navy-foreground/70 hover:scale-[1.015] hover:border-accent/50 hover:text-navy-foreground",
        className,
      )}
    >
      {label}
    </button>
  );
}

export function Calculator() {
  const [step, setStep] = useState<Step>(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [building, setBuilding] = useState<string | null>(null);
  const [area, setArea] = useState<Area | null>(null);
  const [result, setResult] = useState<[number, number] | null>(null);

  const compute = (p: Product, b: string, a: Area) => {
    const base = RANGES[p][a];
    const factor = b === "Modernizowany" ? 1.1 : 1;
    setResult([
      Math.round((base[0] * factor) / 100) * 100,
      Math.round((base[1] * factor) / 100) * 100,
    ]);
  };

  const goBack = () => {
    if (step === 1) return;
    setResult(null);
    setStep((s) => (s - 1) as Step);
  };

  const restart = () => {
    setStep(1);
    setProduct(null);
    setBuilding(null);
    setArea(null);
    setResult(null);
  };

  const pickProduct = (value: Product) => {
    setProduct(value);
    setBuilding(null);
    setArea(null);
    setResult(null);
    setStep(2);
  };

  const pickBuilding = (value: string) => {
    setBuilding(value);
    setArea(null);
    setResult(null);
    setStep(3);
  };

  const pickArea = (value: Area) => {
    if (!product || !building) return;
    setArea(value);
    compute(product, building, value);
    setStep(4);
  };

  return (
    <section id="kalkulator" className="pt-4 pb-20 md:pt-6 md:pb-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-stretch lg:gap-14 lg:px-8">
        <Reveal className="flex h-full flex-col items-start text-left text-navy-foreground">
          <div>
            <p
              data-scroll-target
              className="font-display text-lg font-medium text-navy-foreground/70 sm:text-xl"
            >
              Chcesz podobną instalację u siebie?
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
              Sprawdź koszt inwestycji <span className="text-gradient-cyan">w 30 sekund</span>
            </h2>
            <p className="mt-4 max-w-md text-navy-foreground/70">
              Trzy pytania, orientacyjny zakres kosztów.
            </p>
          </div>
          <CheckList
            spread
            items={[
              "Orientacyjny koszt inwestycji od razu",
              "Wyliczenie według metrażu i instalacji",
              "Końcowa wycena po oględzinach na miejscu",
              "Audyt i wycena bez zobowiązań",
            ]}
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col rounded-2xl bg-navy-foreground/8 p-4 ring-1 ring-navy-foreground/15 sm:h-[23.5rem] sm:p-8">
            <div className="mb-3 flex shrink-0 items-center justify-between gap-3 sm:mb-5">
              <div className="flex flex-1 gap-1.5">
                {STEP_LABELS.map((label, i) => {
                  const n = (i + 1) as Step;
                  const active = step === n;
                  const done = step > n;
                  return (
                    <div key={label} className="flex flex-1 flex-col gap-1.5">
                      <div
                        className={cn(
                          "h-1 rounded-full transition-colors duration-300",
                          active || done ? "bg-accent" : "bg-navy-foreground/15",
                        )}
                      />
                      <span
                        className={cn(
                          "hidden text-[10px] font-semibold tracking-wide uppercase sm:block",
                          active ? "text-accent" : done ? "text-navy-foreground/70" : "text-navy-foreground/35",
                        )}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <span className="shrink-0 text-xs font-semibold text-navy-foreground/55">
                {step}/4
              </span>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              {step === 1 && (
                <div
                  key="step-1"
                  className="flex h-full w-full flex-col animate-in fade-in slide-in-from-right-2 duration-300"
                >
                  <p className="text-xs font-semibold tracking-wide text-navy-foreground/55 uppercase">
                    Krok 1: Co wyceniamy?
                  </p>
                  <p className="mt-0.5 text-xs text-navy-foreground/55 sm:mt-1 sm:text-sm">
                    Wybierz typ instalacji, którą chcesz wycenić.
                  </p>
                  <div className="mt-3 grid grid-cols-2 grid-rows-2 gap-2 sm:mt-4 sm:min-h-0 sm:flex-1 sm:gap-3">
                    {PRODUCTS.map((option) => (
                      <OptionButton
                        key={option}
                        label={option}
                        selected={product === option}
                        onClick={() => pickProduct(option)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div
                  key="step-2"
                  className="flex h-full w-full flex-col animate-in fade-in slide-in-from-right-2 duration-300"
                >
                  <p className="text-xs font-semibold tracking-wide text-navy-foreground/55 uppercase">
                    Krok 2: Rodzaj budynku
                  </p>
                  <p className="mt-0.5 text-xs text-navy-foreground/55 sm:mt-1 sm:text-sm">
                    Dla: <span className="font-medium text-navy-foreground">{product}</span>
                  </p>
                  <div className="mt-3 grid grid-cols-2 grid-rows-1 gap-2 sm:mt-4 sm:min-h-0 sm:flex-1 sm:gap-3">
                    {BUILDING.map((option) => (
                      <OptionButton
                        key={option}
                        label={option}
                        selected={building === option}
                        onClick={() => pickBuilding(option)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div
                  key="step-3"
                  className="flex h-full w-full flex-col animate-in fade-in slide-in-from-right-2 duration-300"
                >
                  <p className="text-xs font-semibold tracking-wide text-navy-foreground/55 uppercase">
                    Krok 3: Powierzchnia
                  </p>
                  <p className="mt-0.5 text-xs text-navy-foreground/55 sm:mt-1 sm:text-sm">
                    Podaj przybliżoną powierzchnię instalacji / budynku.
                  </p>
                  <div className="mt-3 grid auto-rows-fr grid-cols-2 gap-2 sm:mt-4 sm:min-h-0 sm:flex-1 sm:grid-cols-3 sm:gap-3">
                    {AREA.map((option) => (
                      <OptionButton
                        key={option}
                        label={option}
                        selected={area === option}
                        onClick={() => pickArea(option)}
                        className={cn(option === "powyżej 180 m²" && "col-span-2 sm:col-span-1")}
                      />
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && result && (
                <div
                  key="step-4"
                  className="flex h-full w-full flex-col animate-in fade-in slide-in-from-right-2 duration-300"
                >
                  <p className="text-xs font-semibold tracking-wide text-navy-foreground/55 uppercase">
                    Krok 4: Twoja wycena
                  </p>
                  <div className="mt-2 flex flex-col rounded-xl border border-navy-foreground/15 bg-navy-foreground/8 px-3 py-3 text-center sm:mt-3 sm:min-h-0 sm:flex-1 sm:justify-center sm:px-5 sm:py-5">
                    <p className="text-[10px] font-medium tracking-wide text-accent uppercase sm:text-xs">
                      {product}
                    </p>
                    <p className="mt-1 font-display text-xl font-bold text-navy-foreground sm:mt-1.5 sm:text-3xl">
                      {result[0].toLocaleString("pl-PL")} – {result[1].toLocaleString("pl-PL")} zł
                    </p>
                    <p className="mt-1 text-[11px] text-navy-foreground/60 sm:mt-1.5 sm:text-xs">
                      {building} · {area}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-navy-foreground/60 sm:mt-1.5 sm:text-xs">
                      Szacunek orientacyjny. Zostaw kontakt, aby otrzymać dokładną ofertę.
                    </p>
                  </div>
                  <div className="mt-2.5 grid shrink-0 grid-cols-2 gap-2 sm:mt-3 sm:flex sm:flex-row">
                    <Button
                      asChild
                      variant="cyan"
                      size="lg"
                      className="h-10 min-h-10 rounded-full px-2 text-xs whitespace-normal sm:h-11 sm:min-h-11 sm:flex-1 sm:rounded-xl sm:px-8 sm:text-sm sm:whitespace-nowrap"
                    >
                      <a
                        href="#kontakt"
                        className="h-10 min-h-10 rounded-full sm:h-11 sm:rounded-xl"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection("#kontakt");
                        }}
                      >
                        <CalcIcon className="size-3.5 sm:size-4" /> Poproś o wycenę
                      </a>
                    </Button>
                    <Button
                      type="button"
                      variant="hero"
                      size="lg"
                      className="h-10 min-h-10 rounded-full px-2 text-xs sm:h-11 sm:min-h-11 sm:flex-1 sm:rounded-xl sm:px-8 sm:text-sm"
                      onClick={restart}
                    >
                      Licz od nowa
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-3 flex h-7 shrink-0 items-end sm:mt-auto sm:h-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-navy-foreground/60 transition-colors hover:text-navy-foreground"
                >
                  <ArrowLeft className="size-4" />
                  {step === 4 ? "Zmień powierzchnię" : "Wstecz"}
                </button>
              ) : (
                <p className="text-xs text-navy-foreground/40">
                  Kliknij opcję, aby przejść dalej <ArrowRight className="ml-1 inline size-3" />
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
