import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll-to-section";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { BrandMark } from "./BrandMark";

const NAV = [
  { label: "Usługi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Dlaczego my", href: "#dlaczego" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header({ alwaysSolid = false }: { alwaysSolid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.dataset.mobileNavOpen = open ? "true" : "false";
    return () => {
      delete document.body.dataset.mobileNavOpen;
    };
  }, [open]);

  const navHref = (hash: string) => (alwaysSolid ? `/${hash}` : hash);

  const goTo = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToSection(href);
      });
    });
  };

  const onNav = (hash: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (alwaysSolid) {
      setOpen(false);
      return;
    }
    goTo(hash)(e);
  };

  const solid = alwaysSolid || scrolled || open;

  return (
    <>
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        aria-hidden={!open}
        aria-label="Zamknij menu"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-navy/40 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[padding,background-color] duration-500 ease-out",
          open
            ? "overflow-hidden bg-navy pt-[max(0.375rem,env(safe-area-inset-top))] pb-1.5"
            : solid
              ? "bg-navy pt-[max(0.375rem,env(safe-area-inset-top))] pb-1.5"
              : "bg-transparent pt-[max(0.75rem,env(safe-area-inset-top))] sm:pt-[max(1rem,env(safe-area-inset-top))]",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500 ease-out",
            solid ? "border-b border-navy-foreground/10 opacity-100 shadow-lift" : "opacity-0",
          )}
        />
        <div className="relative mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-5 py-4 lg:px-8">
          {alwaysSolid ? (
            <Link to="/" aria-label="TERMIKA">
              <BrandMark />
            </Link>
          ) : (
            <a href="#top" aria-label="TERMIKA" onClick={goTo("#top")}>
              <BrandMark />
            </a>
          )}

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={navHref(item.href)}
                onClick={onNav(item.href)}
                className="text-sm font-medium text-navy-foreground/80 transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm font-semibold text-navy-foreground transition-colors duration-300 hover:text-accent"
            >
              <Phone className="size-4 text-accent" />
              {PHONE_DISPLAY}
            </a>
            <Button asChild variant="cyan" size="pill">
              <a href={navHref("#kontakt")} onClick={onNav("#kontakt")}>
                Darmowa wycena
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex size-10 items-center justify-center rounded-full text-navy-foreground transition-colors hover:bg-navy-foreground/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          >
            <Menu
              className={cn(
                "size-5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                open ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100",
              )}
              aria-hidden
            />
            <X
              className={cn(
                "absolute size-5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0",
              )}
              aria-hidden
            />
          </button>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "grid bg-navy transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
          aria-hidden={!open}
          inert={!open ? true : undefined}
        >
          <div className="overflow-hidden">
            <div className="border-t border-navy-foreground/10 px-5 pt-2 pb-10">
              <nav className="flex flex-col gap-0.5">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={navHref(item.href)}
                    tabIndex={open ? undefined : -1}
                    onClick={onNav(item.href)}
                    className="rounded-xl px-3.5 py-2.5 text-[0.95rem] font-semibold tracking-tight text-navy-foreground transition-colors duration-200 hover:bg-navy-foreground/10 hover:text-accent active:bg-navy-foreground/10"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                href={PHONE_HREF}
                tabIndex={open ? undefined : -1}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cyan px-4 py-3 text-sm font-semibold text-white shadow-glow transition-transform active:scale-[0.98]"
                onClick={() => setOpen(false)}
              >
                <Phone className="size-4 shrink-0" />
                <span>Zadzwoń · {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
