import type { ComponentProps } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type DarkEyebrowProps = ComponentProps<"span"> & {
  icon?: LucideIcon;
};

export function DarkEyebrow({ children, icon: Icon, className, ...props }: DarkEyebrowProps) {
  return (
    <span
      className={cn(
        "glass-panel flex w-fit items-center gap-2 rounded-full px-4 py-2 leading-none text-xs font-semibold tracking-wide text-navy-foreground uppercase",
        className,
      )}
      {...props}
    >
      {Icon ? <Icon className="size-3.5 text-accent" /> : null}
      {children}
    </span>
  );
}
