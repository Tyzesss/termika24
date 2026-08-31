import { BadgeCheck } from "lucide-react";
import { DarkEyebrow } from "./DarkEyebrow";
import { Reveal } from "./Reveal";

const BRANDS = ["Vaillant", "Viessmann", "De Dietrich", "Daikin", "Uponor", "Geberit"];

export function Brands() {
  const strip = [...BRANDS, ...BRANDS];

  return (
    <div
      className="relative z-10 -mt-36 pt-36 sm:-mt-48 sm:pt-48"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          transparent 0%,
          oklch(from var(--navy) l c h / 0.04) 12%,
          oklch(from var(--navy) l c h / 0.12) 24%,
          oklch(from var(--navy) l c h / 0.24) 36%,
          oklch(from var(--navy) l c h / 0.4) 48%,
          oklch(from var(--navy) l c h / 0.58) 58%,
          oklch(from var(--navy) l c h / 0.74) 68%,
          oklch(from var(--navy) l c h / 0.88) 78%,
          var(--navy) 88%,
          var(--navy) 100%
        )`,
      }}
    >
      <div className="relative pb-10 sm:pb-12">
        <div className="mx-auto flex max-w-6xl justify-center px-5 lg:px-8">
          <Reveal>
            <DarkEyebrow icon={BadgeCheck}>Sprawdzone systemy</DarkEyebrow>
          </Reveal>
        </div>

        <div
          className="partners-marquee partners-marquee--on-navy mt-7 md:hidden"
          aria-label={BRANDS.join(", ")}
        >
          <ul className="partners-marquee__track">
            {strip.map((brand, i) => (
              <li
                key={`${brand}-${i}`}
                className="partners-marquee__item font-display"
                aria-hidden={i >= BRANDS.length}
              >
                {brand}
              </li>
            ))}
          </ul>
          <div className="partners-marquee__fade partners-marquee__fade--left" aria-hidden />
          <div className="partners-marquee__fade partners-marquee__fade--right" aria-hidden />
        </div>

        <div className="mx-auto hidden max-w-6xl px-5 md:block lg:px-8">
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 md:gap-x-14">
            {BRANDS.map((brand) => (
              <li key={brand}>
                <span className="font-display text-xl font-semibold tracking-tight text-navy-foreground/40 transition-colors duration-300 hover:text-navy-foreground/70">
                  {brand}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
