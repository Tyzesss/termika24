import { motion, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import { useRouter, useRouterState } from "@tanstack/react-router";

const EASE = [0.22, 1, 0.36, 1] as const;

function jumpToTop() {
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  root.style.scrollBehavior = prev;
}

export function PageTransition({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });
  const reduce = useReducedMotion();
  const prevPath = useRef(pathname);

  useLayoutEffect(() => {
    const unsub = router.subscribe("onBeforeLoad", ({ pathChanged, toLocation }) => {
      if (!pathChanged) return;
      if (toLocation.hash) return;
      jumpToTop();
    });
    return unsub;
  }, [router]);

  useLayoutEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    if (hash) return;
    jumpToTop();
  }, [pathname, hash]);

  return (
    <motion.div
      key={pathname}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.38, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
