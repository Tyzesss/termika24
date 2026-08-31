import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

interface MobileCarouselProps<T> {
  items: T[];
  renderItem: (item: T, idx: number) => ReactNode;
  className?: string;
  dotsOnDark?: boolean;
}

export function MobileCarousel<T>({
  items,
  renderItem,
  className,
  dotsOnDark = false,
}: MobileCarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
    skipSnaps: false,
    duration: 32,
    containScroll: false,
  });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (items.length === 0) return null;

  return (
    <div className={cn("block md:hidden", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-3">
          {items.map((item, idx) => (
            <div key={idx} className="min-w-0 shrink-0 grow-0 basis-full">
              {renderItem(item, idx)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Slajd ${idx + 1}`}
            aria-current={selected === idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={cn(
              "transition-all duration-300 ease-out",
              selected === idx
                ? "h-1.5 w-8 rounded-full bg-accent"
                : dotsOnDark
                  ? "h-1.5 w-1.5 rounded-full bg-navy-foreground/35"
                  : "h-1.5 w-1.5 rounded-full bg-muted-foreground/30",
            )}
          />
        ))}
      </div>
    </div>
  );
}
