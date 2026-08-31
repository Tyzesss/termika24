import { getRelatedRealizations } from "./services";
import workPkp from "@/assets/work-pkp-heatpump.jpg";
import workSzpital from "@/assets/work-szpital-wezel.jpg";
import workUe from "@/assets/work-ue-co.jpg";
import workDps from "@/assets/work-dps-lazienka.jpg";
import workZarzecze from "@/assets/work-zarzecze-kotlownia.jpg";
import workZmu from "@/assets/work-zmu-instalacje.jpg";
import workDebowiec from "@/assets/work-debowiec-kotlownia.png";
import workGolkowice from "@/assets/work-golkowice-kotlownia.png";
import workKrynica from "@/assets/work-krynica-kotlownia.png";
import workPolitechnika from "@/assets/work-politechnika-co.png";
import workSedziszow from "@/assets/work-sedziszow-gaz.png";
import workBuchcice from "@/assets/work-buchcice-gaz.png";
import workJablonica from "@/assets/work-jablonica-gaz.png";
import workGrabownica from "@/assets/work-grabownica-solar.png";
import workPompaOut from "@/assets/work-pompa-zewnetrzna.png";
import workPompaIn from "@/assets/work-pompa-wewnatrz.png";
import workPodlogowePetle from "@/assets/work-podlogowe-petle.png";
import workPodlogoweRoz from "@/assets/work-podlogowe-rozdzielacz.png";
import workPodlogoweSciana from "@/assets/work-podlogowe-sciana.png";
import workPpozHydrant from "@/assets/work-ppoz-hydrant.png";
import workPpozTryskacze from "@/assets/work-ppoz-tryskacze.png";
import workPpozZew from "@/assets/work-ppoz-zewnetrzny.png";
import workKlimaSplit from "@/assets/work-klima-split.png";
import workKlimaKanal from "@/assets/work-klima-kanal.png";
import workKlimaAgregat from "@/assets/work-klima-agregat.png";

export type RealizationCard = {
  title: string;
  year: string;
  scope: string;
  image: string;
  alt: string;
};

const BY_TITLE: Record<string, { image: string; alt: string }> = {
  "PKP Kraków, nastawnie Płaszów i Bieżanów": {
    image: workPkp,
    alt: "Jednostki zewnętrzne pomp ciepła przy budynku technicznym",
  },
  "Uniwersytet Ekonomiczny we Wrocławiu": {
    image: workUe,
    alt: "Rozdzielacz c.o. i grzejniki po wymianie instalacji",
  },
  "Szpital Miejski w Rudzie Śląskiej": {
    image: workSzpital,
    alt: "Węzeł cieplny z wymiennikami, pompami i izolowanymi rurociągami",
  },
  "Dom Pomocy Społecznej w Gorlicach": {
    image: workDps,
    alt: "Łazienka przystosowana dla osób niepełnosprawnych po adaptacji",
  },
  "Zespół Szkół Rolniczych w Zarzeczu": {
    image: workZarzecze,
    alt: "Zmodernizowana kotłownia gazowa z kotłem kondensacyjnym",
  },
  "Zespół Mieszkalno-Usługowy w Krakowie": {
    image: workZmu,
    alt: "Piony c.o., wod-kan i kanalizacji w nowym budynku",
  },
  "Szkoła Podstawowa i Gimnazjum w Dębowcu": {
    image: workDebowiec,
    alt: "Kotłownia gazowa 320 kW w szkole w Dębowcu",
  },
  "Szkoła Podstawowa w Gołkowicach": {
    image: workGolkowice,
    alt: "Dwa kotły kondensacyjne po przebudowie kotłowni w Gołkowicach",
  },
  "Przedszkole Miejskie nr 2 w Krynicy-Zdroju": {
    image: workKrynica,
    alt: "Kotłownia gazowa 180 kW w przedszkolu w Krynicy-Zdroju",
  },
  "Politechnika Rzeszowska": {
    image: workPolitechnika,
    alt: "Instalacja c.o. z grzejnikami i rozdzielaczem na uczelni",
  },
  "Urząd Gminy w Sędziszowie Małopolskim": {
    image: workSedziszow,
    alt: "Szafka gazomierza i instalacja gazowa przy urzędzie gminy",
  },
  "Szkoła Podstawowa w Buchcicach": {
    image: workBuchcice,
    alt: "Instalacja gazowa i kocioł kondensacyjny w szkole w Buchcicach",
  },
  "Zespół Szkół w Jabłonicy Polskiej": {
    image: workJablonica,
    alt: "Kotłownia gazowa z detektorem i zaworem odcinającym",
  },
  "Zespół Szkół w Grabownicy Starzeńskiej": {
    image: workGrabownica,
    alt: "Kolektory słoneczne na dachu szkoły w Grabownicy",
  },
};

const EXTRAS: Record<string, RealizationCard[]> = {
  "pompy-ciepla": [
    {
      title: "Jednostki zewnętrzne",
      year: "",
      scope: "Pompy powietrze-woda na betonowych podstawach, izolowane podejścia do budynku.",
      image: workPompaOut,
      alt: "Jednostki zewnętrzne pomp ciepła powietrze-woda",
    },
    {
      title: "Moduł wewnętrzny i zasobnik",
      year: "",
      scope: "Hydrobox, zasobnik c.w.u. i automatyka po stronie instalacji.",
      image: workPompaIn,
      alt: "Moduł wewnętrzny pompy ciepła z zasobnikiem ciepłej wody",
    },
  ],
  "ogrzewanie-podlogowe": [
    {
      title: "Pętle na izolacji",
      year: "",
      scope: "Rura wielowarstwowa na płycie, przed wylewką. Układ pod salon i łazienki.",
      image: workPodlogowePetle,
      alt: "Pętle ogrzewania podłogowego na izolacji",
    },
    {
      title: "Rozdzielacz i regulacja",
      year: "",
      scope: "Obiegi z przepływomierzami. Ustawienie pętli na miejscu, nie z szablonu.",
      image: workPodlogoweRoz,
      alt: "Rozdzielacz ogrzewania podłogowego z zaworami obiegów",
    },
    {
      title: "Ogrzewanie ścienne",
      year: "",
      scope: "Pętle na ścianie, gdy podłoga jest już zamknięta albo w łazience przy oknie.",
      image: workPodlogoweSciana,
      alt: "Ogrzewanie ścienne przed tynkiem",
    },
  ],
  "instalacje-ppoz": [
    {
      title: "Hydrant wewnętrzny",
      year: "",
      scope: "Szafka, zawór i oznaczenia według dokumentacji obiektu.",
      image: workPpozHydrant,
      alt: "Hydrant wewnętrzny w korytarzu obiektu publicznego",
    },
    {
      title: "Instalacja tryskaczowa",
      year: "",
      scope: "Rury i tryskacze z projektu. Hale, szkoły, obiekty publiczne.",
      image: workPpozTryskacze,
      alt: "Rury tryskaczowe pod stropem hali",
    },
    {
      title: "Hydrant zewnętrzny",
      year: "",
      scope: "Nadziemny hydrant na przyłączu PE, przy budynku i drodze pożarowej.",
      image: workPpozZew,
      alt: "Hydrant zewnętrzny przy budynku",
    },
  ],
  "wentylacja-klimatyzacja": [
    {
      title: "Klimatyzacja split",
      year: "",
      scope: "Jednostka wewnętrzna, podejścia i odprowadzenie skroplin.",
      image: workKlimaSplit,
      alt: "Klimatyzator ścienny w pomieszczeniu biurowym",
    },
    {
      title: "Wentylacja kanałowa",
      year: "",
      scope: "Kanały, centrale i połączenia elastyczne. Biura i obiekty publiczne.",
      image: workKlimaKanal,
      alt: "Kanały wentylacyjne i centrala w przestrzeni technicznej",
    },
    {
      title: "Agregaty na dachu",
      year: "",
      scope: "Jednostki zewnętrzne na dachu płaskim, jeden terminarz z resztą instalacji.",
      image: workKlimaAgregat,
      alt: "Agregaty klimatyzacji na dachu budynku",
    },
  ],
};

export function getServiceRealizationCards(slug: string): RealizationCard[] {
  const related = getRelatedRealizations(slug, 8).flatMap((item) => {
    const media = BY_TITLE[item.title];
    if (!media) return [];
    return [{ ...item, ...media }];
  });

  const padded = [...related];
  const seen = new Set(padded.map((item) => item.image));

  for (const extra of EXTRAS[slug] ?? []) {
    if (padded.length >= 4) break;
    if (seen.has(extra.image)) continue;
    padded.push(extra);
    seen.add(extra.image);
  }

  return padded.slice(0, 4);
}
