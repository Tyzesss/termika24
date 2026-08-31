import { useEffect, useRef, useState } from "react";
import { CircleHelp, Phone } from "lucide-react";
import { DarkEyebrow } from "./DarkEyebrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { CheckList } from "./CheckList";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    q: "Ile trwa montaż pompy ciepła?",
    a: "Zazwyczaj 2-3 dni robocze. Termin potwierdzamy po darmowym audycie technicznym.",
  },
  {
    q: "Czy zapewniacie serwis gwarancyjny i pogwarancyjny?",
    a: "Tak, posiadamy autoryzowany serwis producentów i własny magazyn części zamiennych.",
  },
  {
    q: "Kiedy najlepiej zamontować klimatyzację?",
    a: "Przed sezonem letnim, ale montujemy przez cały rok. Poza sezonem terminy są krótsze.",
  },
  {
    q: "Czy pomagacie w doborze sprzętu?",
    a: "Tak, wykonujemy darmowy audyt i dobieramy moc urządzeń do realnych potrzeb budynku.",
  },
  {
    q: "Czy audyt i wycena są płatne?",
    a: "Nie. Audyt techniczny i orientacyjna wycena są bezpłatne i bez zobowiązań.",
  },
];

const ACCORDION_MS = 400;

export function Faq() {
  const [openItem, setOpenItem] = useState("");
  const [lockClosedHeight, setLockClosedHeight] = useState(true);
  const closeTimer = useRef(0);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const onValueChange = (value: string) => {
    setOpenItem(value);
    window.clearTimeout(closeTimer.current);
    if (value) {
      setLockClosedHeight(false);
      return;
    }
    closeTimer.current = window.setTimeout(() => {
      setLockClosedHeight(true);
    }, ACCORDION_MS);
  };

  return (
    <section id="faq" className="py-20 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-8">
        <Reveal className="flex flex-col items-start text-left text-navy-foreground lg:self-start">
          <DarkEyebrow data-scroll-target icon={CircleHelp}>
            FAQ
          </DarkEyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold sm:text-5xl">
            Często zadawane <span className="text-gradient-cyan">pytania</span>
          </h2>
          <p className="mt-4 max-w-md text-navy-foreground/70">
            Nie znalazłeś odpowiedzi? Zadzwoń, oddzwonimy w ciągu jednego dnia roboczego.
          </p>
          <CheckList
            items={[
              "Oferujemy darmowy audyt techniczny",
              "Pomagamy w dotacjach Czyste Powietrze",
              "Wyceniamy bez zobowiązań",
            ]}
          />
          <div className="mt-8 hidden w-full lg:block">
            <Button asChild variant="cyan" size="xl">
              <a href={PHONE_HREF}>
                <Phone className="size-4" /> Zadzwoń · {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal
          delay={0.12}
          className={cn(
            "relative flex min-h-0 flex-col lg:min-h-full",
            lockClosedHeight && "lg:h-0",
          )}
        >
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={onValueChange}
            className={cn(
              "flex flex-col gap-3 lg:flex-1",
              lockClosedHeight && "lg:h-full",
            )}
          >
            {ITEMS.map((item) => (
              <AccordionItem
                key={item.q}
                value={item.q}
                className="flex flex-col justify-center rounded-2xl border-0 bg-navy-foreground/8 px-6 text-navy-foreground shadow-none ring-1 ring-navy-foreground/15 transition-colors duration-300 hover:bg-navy-foreground/12 lg:flex-1 lg:data-[state=open]:flex-none data-[state=open]:justify-start"
              >
                <AccordionTrigger className="py-4 text-left text-base font-semibold text-navy-foreground transition-colors duration-300 hover:no-underline lg:py-5 [&>svg]:text-navy-foreground/55 [&>svg]:duration-400">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-navy-foreground/65">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
