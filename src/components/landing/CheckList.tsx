import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckList({
  items,
  className,
  spread = false,
}: {
  items: string[];
  className?: string;
  spread?: boolean;
}) {
  return (
    <ul
      className={cn(
        "hidden lg:flex lg:flex-col",
        spread ? "mt-8 min-h-0 flex-1 justify-between" : "mt-8 space-y-3",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-navy-foreground/80">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20 transition-transform duration-300 ease-out">
            <Check className="size-3.5 text-accent" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
