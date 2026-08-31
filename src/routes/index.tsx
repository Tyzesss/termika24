import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Realizations } from "@/components/landing/Realizations";
import { Calculator } from "@/components/landing/Calculator";
import { Testimonials } from "@/components/landing/Testimonials";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { StickyCallBar } from "@/components/landing/StickyCallBar";

const title = "KLIMATPRO - Pompy ciepła, klimatyzacja i fotowoltaika";
const description =
  "Premium instalacje HVAC: pompy ciepła, klimatyzacja, fotowoltaika i rekuperacja. Darmowy audyt, montaż w 2-3 dni, autoryzowany serwis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <Hero />
        <div className="bg-background">
          <Services />
        </div>
        <div className="bg-navy">
          <Realizations />
          <Calculator />
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
