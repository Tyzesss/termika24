import termikaLogoDark from "@/assets/termika-logo.png";
import termikaLogoLight from "@/assets/termika-logo-light.png";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  /** Logo tone for the background it sits on */
  tone?: "on-dark" | "on-light";
  /** @deprecated kept for call-site compat; logo is always the image */
  wordmarkClassName?: string;
};

export function BrandMark({ className, tone = "on-dark" }: BrandMarkProps) {
  const src = tone === "on-light" ? termikaLogoDark : termikaLogoLight;

  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={src}
        alt="FHU TERMIKA, firma instalacyjna Gorlice"
        width={276}
        height={59}
        className="h-10 w-auto max-w-[min(220px,48vw)] object-contain object-left sm:h-11"
      />
    </span>
  );
}
