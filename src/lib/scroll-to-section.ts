/** Smooth-scroll to an in-page section, accounting for the fixed header bar only
 * (ignores open/closing mobile nav height so burger links land correctly).
 */

const SECTION_GAP = 20;
/** Extra space under the navbar after scroll, desktop only. Negative = more gap. */
const DESKTOP_NUDGE: Record<string, number> = {
  faq: -192,
  uslugi: -24,
  kontakt: -24,
};

let navScrollRaf = 0;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

/** Collapsed navbar offset — measures the top bar only, not #mobile-nav. */
function getNavScrollOffset() {
  const header = document.querySelector("header");
  if (!header) return 88 + SECTION_GAP;
  const bar = header.querySelector<HTMLElement>(":scope > div.mx-auto");
  if (bar) {
    return bar.getBoundingClientRect().bottom + SECTION_GAP;
  }
  return header.getBoundingClientRect().height + SECTION_GAP;
}

function animateScrollTo(targetY: number, durationMs: number, onDone: () => void) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 1) {
    onDone();
    return;
  }

  if (navScrollRaf) cancelAnimationFrame(navScrollRaf);

  const startTime = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - startTime) / durationMs);
    window.scrollTo(0, startY + distance * easeOutCubic(t));
    if (t < 1) {
      navScrollRaf = requestAnimationFrame(tick);
    } else {
      navScrollRaf = 0;
      onDone();
    }
  };
  navScrollRaf = requestAnimationFrame(tick);
}

export function scrollToSection(href: string) {
  const id = href.startsWith("#") ? href.slice(1) : href;
  if (!id) return;

  const root = document.documentElement;
  root.dataset.navScrolling = "true";
  root.style.scrollBehavior = "auto";

  const finish = (y: number) => {
    window.scrollTo(0, y);
    requestAnimationFrame(() => {
      window.scrollTo(0, y);
      delete root.dataset.navScrolling;
      root.style.scrollBehavior = "";
    });
  };

  if (id === "top") {
    animateScrollTo(0, 520, () => {
      if (location.hash !== "#top") history.replaceState(null, "", "#top");
      finish(0);
    });
    return;
  }

  const section = document.getElementById(id);
  if (!section) {
    delete root.dataset.navScrolling;
    root.style.scrollBehavior = "";
    return;
  }

  // Measure the section box, not Reveal children — their initial transform
  // would skew the offset when the section is still off-screen.
  const paddingTop = parseFloat(getComputedStyle(section).paddingTop) || 0;
  const desktopNudge = window.matchMedia("(min-width: 1024px)").matches
    ? (DESKTOP_NUDGE[id] ?? 0)
    : 0;
  const targetY = Math.max(
    0,
    section.getBoundingClientRect().top +
      window.scrollY +
      paddingTop -
      getNavScrollOffset() +
      desktopNudge,
  );

  // Hash update without a matching id — otherwise the browser native-scrolls
  // to scroll-margin (higher than our target) after the animation.
  section.removeAttribute("id");
  if (location.hash !== `#${id}`) {
    history.replaceState(null, "", `#${id}`);
  }

  animateScrollTo(targetY, 520, () => {
    section.id = id;
    finish(targetY);
  });
}
