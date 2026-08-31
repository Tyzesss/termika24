import { useEffect, useState, type ComponentType } from "react";

/** Loads Vercel Analytics only in production, on the client — skips Vite SSR on localhost. */
export function VercelAnalytics() {
  const [Analytics, setAnalytics] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (import.meta.env.DEV) return;

    let cancelled = false;
    void import("@vercel/analytics/react").then((mod) => {
      if (!cancelled) setAnalytics(() => mod.Analytics);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!Analytics) return null;
  return <Analytics />;
}
