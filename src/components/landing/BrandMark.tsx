import logoMark from "@/assets/logo-mark.png";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  wordmarkClassName?: string;
};

export function BrandMark({ className, wordmarkClassName }: BrandMarkProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden
        className="size-11 shrink-0 bg-gradient-cyan sm:size-12"
        style={{
          maskImage: `url(${logoMark})`,
          WebkitMaskImage: `url(${logoMark})`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      />
      <span
        className={cn(
          "font-display text-xl font-bold tracking-tight sm:text-2xl",
          wordmarkClassName,
        )}
      >
        KLIMAT<span className="text-gradient-cyan">PRO</span>
      </span>
    </span>
  );
}
