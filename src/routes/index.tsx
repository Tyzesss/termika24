import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Realizations } from "@/components/landing/Realizations";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { StickyCallBar } from "@/components/landing/StickyCallBar";
import { scrollToSection } from "@/lib/scroll-to-section";
import { SITE_TITLE } from "@/lib/site";

const description =
  "TERMIKA: pompy ciepła, klimatyzacja, kotłownie i instalacje sanitarne w Gorlicach i okolicach. Bezpłatna wycena, montaż i serwis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: description },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;
    const timer = window.setTimeout(() => scrollToSection(hash), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="bg-background">
          <Services />
        </div>
        <div className="bg-navy">
          <Realizations />
        </div>
        <div className="bg-background">
          <Testimonials />
        </div>
        <div className="bg-navy">
          <Faq />
        </div>
        <div className="bg-background">
          <Contact />
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
}
