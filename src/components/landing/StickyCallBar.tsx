import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function StickyCallBar() {
  const [show, setShow] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 150);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sync = () => setNavOpen(document.body.dataset.mobileNavOpen === "true");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-mobile-nav-open"],
    });
    return () => observer.disconnect();
  }, []);

  const visible = show && !navOpen;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed right-4 left-4 z-50 md:hidden"
          style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
          initial={{ opacity: 0, y: 96 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 96 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex gap-3 rounded-2xl border border-border/70 bg-card p-2.5 shadow-lift">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-foreground/[0.04] text-navy shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-foreground/[0.08] hover:scale-[1.03] active:scale-[0.98]"
              aria-label="Napisz na WhatsApp"
            >
              <WhatsAppIcon className="size-5" />
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-cyan px-4 py-3 text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:scale-[1.015] active:scale-[0.98]"
            >
              <Phone className="size-4" />
              Zadzwoń teraz
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
