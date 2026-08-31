import { REALIZATIONS } from "./site";

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  sections: { heading: string; body: string }[];
  bullets: string[];
  faq: { q: string; a: string }[];
  /** Frazy do dopasowania realizacji (title + scope). */
  match: string[];
};

export const SERVICE_PROCESS = [
  {
    step: "01",
    title: "Wizyta i oględziny",
    body: "Oglądamy budynek albo dokumentację. Wycena i pierwsza wizyta są bezpłatne.",
  },
  {
    step: "02",
    title: "Dobór i wycena",
    body: "Dobieramy urządzenia i zakres. Bez dokładania sprzętu, którego obiekt nie potrzebuje.",
  },
  {
    step: "03",
    title: "Montaż i uruchomienie",
    body: "Jedna ekipa od instalacji po rozruch. Działamy z Gorlic w całym kraju.",
  },
] as const;

export const SERVICES: Service[] = [
  {
    slug: "kotlownie",
    title: "Kotłownie",
    short:
      "Kotłownie gazowe, olejowe i na paliwa stałe. Nowe instalacje, modernizacje i automatyka.",
    intro:
      "Projektujemy, budujemy i modernizujemy kotłownie w domach, szkołach, szpitalach i obiektach firmowych. Dobieramy kocioł do budynku, montujemy automatykę i uruchamiamy instalację.",
    sections: [
      {
        heading: "Co montujemy",
        body: "Kotły gazowe wiszące i stojące, z podgrzewaczem wody lub bez. Kotły kondensacyjne o wysokiej sprawności, kotły atmosferyczne z otwartą lub zamkniętą komorą spalania oraz kotły na paliwo stałe z podajnikiem lub bez, z możliwością automatycznej regulacji spalania. Kotłownie gazowe, olejowe i na paliwa stałe.",
      },
      {
        heading: "Nowe kotłownie i modernizacje",
        body: "Robimy kotłownie od zera i przebudowujemy istniejące. W portfolio mamy m.in. wymiany kotłów De Dietrich, kotłownie od 45 kW do 550 kW, magazyny oleju i węzły cieplne. Zakres ustalamy po oględzinach obiektu.",
      },
    ],
    bullets: [
      "Dobór mocy i typu kotła",
      "Automatyka i uruchomienie",
      "Modernizacja starych kotłowni",
      "Obiekty mieszkalne i użyteczności publicznej",
    ],
    faq: [
      {
        q: "Czy modernizujecie stare kotłownie, czy tylko budujecie nowe?",
        a: "Oba zakresy. Wymieniamy kotły, przebudowujemy kotłownie gazowe i olejowe, dokładamy automatykę i węzły cieplne. Robimy też kotłownie od zera.",
      },
      {
        q: "Jakie kotły wchodzą w grę?",
        a: "Gazowe (w tym kondensacyjne), olejowe i na paliwo stałe. Moc i typ dobieramy do budynku, nie odwrotnie.",
      },
    ],
    match: ["kotłown", "kocioł", "kotły", "węzeł cieplny", "magazyn oleju"],
  },
  {
    slug: "centralne-ogrzewanie",
    title: "Centralne ogrzewanie",
    short:
      "Systemy trójnikowe i rozdzielaczowe. Grzejniki stalowe, aluminiowe i rury miedziane, stalowe oraz wielowarstwowe.",
    intro:
      "Wykonujemy instalacje centralnego ogrzewania w budynkach nowych i istniejących. Dobieramy układ, rury i grzejniki tak, żeby ciepło szło równomiernie i dało się serwisować.",
    sections: [
      {
        heading: "Układy",
        body: "System tradycyjny trójnikowy albo rozdzielaczowy, w zależności od budynku i sposobu rozprowadzenia. Wymieniamy też stare instalacje c.o. w szkołach, uczelniach i obiektach publicznych.",
      },
      {
        heading: "Materiały",
        body: "Grzejniki stalowe płytowe, aluminiowe, łazienkowe i dekoracyjne. Rury miedziane lutowane, stalowe spawane, stalowe ocynkowane w systemie zaciskanym oraz rury polipropylenowe i wielowarstwowe. Na realizacjach stosowaliśmy m.in. KAN-therm Steel.",
      },
    ],
    bullets: [
      "Nowe instalacje i wymiany",
      "Dobór grzejników",
      "Rury miedziane, stalowe i wielowarstwowe",
      "Domy, szkoły i obiekty wielorodzinne",
    ],
    faq: [
      {
        q: "Czy wymieniacie starą instalację c.o. w czynnym budynku?",
        a: "Tak. Wymienialiśmy c.o. w szkołach, uczelniach i obiektach publicznych. Harmonogram ustalamy tak, żeby ograniczyć postoje.",
      },
      {
        q: "Jaki układ: trójnikowy czy rozdzielaczowy?",
        a: "Zależy od budynku i rozprowadzenia. Dobieramy po oględzinach, nie z katalogu.",
      },
    ],
    match: ["c.o.", "grzejnik", "kan-therm"],
  },
  {
    slug: "pompy-ciepla",
    title: "Pompy ciepła",
    short: "Montaż do c.o. i ciepłej wody użytkowej. Źródła: powietrze, grunt lub woda.",
    intro:
      "Montujemy pompy ciepła do ogrzewania budynku i przygotowania ciepłej wody użytkowej. Źródłem może być powietrze, grunt, woda powierzchniowa lub podziemna.",
    sections: [
      {
        heading: "Jak to działa",
        body: "Pompa ciepła korzysta z energii naturalnej. Czynnik roboczy jest sprężany i rozprężany, dzięki czemu instalacja może ogrzewać albo chłodzić. Pompy c.w.u. wykorzystują ciepło z powietrza do podgrzewu wody.",
      },
      {
        heading: "Dobór i montaż",
        body: "Moc i typ urządzenia dobieramy do budynku po wizycie. W realizacjach mamy też gazowe pompy ciepła, m.in. na nastawniach PKP w Krakowie. Uruchomienie i konfigurację robimy na miejscu.",
      },
    ],
    bullets: [
      "C.o. i c.w.u. w jednym układzie",
      "Powietrze, grunt lub woda",
      "Dobór mocy do budynku",
      "Montaż i uruchomienie",
    ],
    faq: [
      {
        q: "Powietrze, grunt czy woda?",
        a: "Najczęściej powietrze, bo nie wymaga odwiertów. Grunt i woda wchodzą tam, gdzie budynek i działka na to pozwalają. Decyzja po wizycie.",
      },
      {
        q: "Czy pompa ciepła zastępuje kocioł?",
        a: "Może pracować samodzielnie albo w układzie z kotłem. Dobieramy wariant do budynku i kosztów eksploatacji.",
      },
    ],
    match: ["pomp ciepła", "pompy ciepła"],
  },
  {
    slug: "ogrzewanie-podlogowe",
    title: "Ogrzewanie podłogowe",
    short: "Ogrzewanie płaszczyznowe podłogowe i ścienne. Wylewka mokra lub sucha zabudowa.",
    intro:
      "Wykonujemy ogrzewanie płaszczyznowe podłogowe i ścienne, najczęściej w nowo budowanych obiektach. Równomierne ciepło, bez grzejników na ścianach albo jako uzupełnienie c.o.",
    sections: [
      {
        heading: "Podłoga",
        body: "System standard: rura wielowarstwowa na płycie izolacyjnej i mokra wylewka. Albo system suchej zabudowy, gdy wylewka nie wchodzi w grę.",
      },
      {
        heading: "Ściana",
        body: "Ogrzewanie ścienne w systemie mokrym lub suchej zabudowy. Dobieramy wariant do konstrukcji i etapu budowy.",
      },
    ],
    bullets: [
      "Podłoga i ściana",
      "Wylewka mokra lub sucha zabudowa",
      "Rozdzielacze i regulacja pętli",
      "Nowe budynki i przebudowy",
    ],
    faq: [
      {
        q: "Czy podłogówka tylko w nowym domu?",
        a: "Najczęściej tak, ale da się też w przebudowie: sucha zabudowa, gdy mokra wylewka odpadnie.",
      },
      {
        q: "Czy da się połączyć z grzejnikami?",
        a: "Tak. Część pomieszczeń na podłodze, część na grzejnikach. Jeden kocioł albo pompa, dwa obiegi.",
      },
    ],
    match: ["podłog", "płaszczyznow"],
  },
  {
    slug: "instalacje-wod-kan",
    title: "Instalacje wod-kan",
    short: "Ciepła i zimna woda oraz kanalizacja. Rury wielowarstwowe, PVC i systemy niskoszumowe.",
    intro:
      "Robimy instalacje ciepłej i zimnej wody oraz kanalizację sanitarną, także przyłącza. Wewnątrz budynku i na zewnątrz, w domach i obiektach publicznych.",
    sections: [
      {
        heading: "Woda",
        body: "Instalacje ciepłej i zimnej wody z rur wielowarstwowych, ze stali nierdzewnej i miedzi.",
      },
      {
        heading: "Kanalizacja sanitarna i deszczowa",
        body: "Kanalizacja sanitarna w rurach PVC albo w systemie niskoszumowym. Ścieki najczęściej spływają grawitacyjnie do szamba, osadnika lub przydomowej oczyszczalni. Stosujemy też przepompownie. Osobno wykonujemy kanalizację deszczową: rury PVC i studzienki.",
      },
      {
        heading: "Biały montaż",
        body: "Montaż kompletnej armatury: WC (kompakty i stelaże ze miskami wiszącymi), umywalki, bidety, wanny, kabiny prysznicowe z brodzikami.",
      },
      {
        heading: "Zmiękczacze wody",
        body: "Montaż urządzeń do zmiękczania wody. Woda zmiękczona mniej niszczy instalację grzewczą, armaturę i AGD. Mniej osadów, mniej detergentów, lepszy smak i zapach.",
      },
    ],
    bullets: [
      "Ciepła i zimna woda",
      "Kanalizacja PVC i niskoszumowa",
      "Przyłącza, deszczówka i przepompownie",
      "Biały montaż i zmiękczacze",
    ],
    faq: [
      {
        q: "Czy robicie przyłącza, czy tylko rury w budynku?",
        a: "Jedno i drugie. Przyłącza wodociągowe i kanalizacyjne oraz instalacje wewnętrzne.",
      },
      {
        q: "Czy montujecie zmiękczacz i armaturę łazienkową?",
        a: "Tak. Zmiękczacze oraz biały montaż: WC, umywalki, wanny, kabiny.",
      },
    ],
    match: ["wod-kan", "c.w.u.", "kanaliz", "wodociąg", "łazien"],
  },
  {
    slug: "instalacje-gazowe",
    title: "Instalacje gazowe",
    short: "Rury stalowe spawane i zaciskowe. Szafki gazomierzy i aktywne systemy bezpieczeństwa.",
    intro:
      "Wykonujemy instalacje gazowe wewnętrzne i przebudowy podejść. Prace łączymy często z kotłownią gazową i wymianą kotła.",
    sections: [
      {
        heading: "Zakres",
        body: "Instalacje w rurach stalowych spawanych oraz w systemie zaciskowym. Montaż szafek z podejściami pod gazomierze.",
      },
      {
        heading: "Bezpieczeństwo",
        body: "Aktywne systemy bezpieczeństwa: zawory odcinające i detektory gazu. Na realizacjach montowaliśmy m.in. aktywny system bezpieczeństwa przy kotłach kondensacyjnych.",
      },
    ],
    bullets: [
      "Rury spawane i zaciskowe",
      "Szafki gazomierzy",
      "Zawory odcinające i detektory",
      "Prace przy kotłowniach gazowych",
    ],
    faq: [
      {
        q: "Czy instalację gazową robicie razem z kotłownią?",
        a: "Często tak. Wymiana kotła, przebudowa podejść i szafka gazomierza w jednym zakresie.",
      },
      {
        q: "Co z bezpieczeństwem?",
        a: "Zawory odcinające i detektory gazu. Na obiektach stawialiśmy też aktywny system odcięcia.",
      },
    ],
    match: ["instalacji gazow", "instalacja gazowa", "bezpieczeństwa gazu"],
  },
  {
    slug: "instalacje-solarne",
    title: "Instalacje solarne",
    short: "Kolektory płaskie i próżniowe wspomagające c.o. i podgrzew c.w.u.",
    intro:
      "Montujemy instalacje solarne na kolektorach płaskich i próżniowych. To uzupełnienie kotła: mniej gazu albo oleju przy podgrzewie wody i wsparciu c.o.",
    sections: [
      {
        heading: "Jak działa układ",
        body: "Kolektory zbierają energię z promieni słonecznych i oddają ciepło przez czynnik grzewczy do zbiorników. Wspomagają kocioł centralnego ogrzewania i podgrzew ciepłej wody użytkowej.",
      },
      {
        heading: "Gdzie to robimy",
        body: "Kolektory stawialiśmy m.in. przy szpitalu w Rudzie Śląskiej, przedszkolu w Krynicy-Zdroju i szkołach. Dobór powierzchni i zbiornika zależy od zużycia c.w.u. i dachu.",
      },
    ],
    bullets: [
      "Kolektory płaskie i próżniowe",
      "Wsparcie c.o. i c.w.u.",
      "Dobór do budynku",
      "Montaż z kotłownią lub osobno",
    ],
    faq: [
      {
        q: "Czy solar zastępuje kocioł?",
        a: "Nie. Wspomaga podgrzew c.w.u. i c.o. Latem kocioł pracuje rzadziej, zimą solar dokłada się do układu.",
      },
      {
        q: "Płaskie czy próżniowe?",
        a: "Zależy od dachu, zacienienia i zapotrzebowania na ciepłą wodę. Dobieramy po oględzinach.",
      },
    ],
    match: ["kolektor"],
  },
  {
    slug: "instalacje-ppoz",
    title: "Instalacje p.poż.",
    short: "Instalacje hydrantowe wewnętrzne i zewnętrzne oraz systemy tryskaczowe.",
    intro:
      "Wykonujemy instalacje przeciwpożarowe hydrantowe i tryskaczowe. Zakres dopasowujemy do projektu i wymagań obiektu.",
    sections: [
      {
        heading: "Hydranty",
        body: "Hydranty wewnętrzne na rurach stalowych ocynkowanych oraz hydranty zewnętrzne na rurach PE.",
      },
      {
        heading: "Tryskacze",
        body: "Instalacje tryskaczowe według dokumentacji. Prace prowadzimy w obiektach, które wymagają stałego zabezpieczenia wodnego.",
      },
    ],
    bullets: [
      "Hydranty wewnętrzne i zewnętrzne",
      "Rury stalowe ocynkowane i PE",
      "Instalacje tryskaczowe",
      "Obiekty publiczne i przemysłowe",
    ],
    faq: [
      {
        q: "Czy robicie hydranty i tryskacze?",
        a: "Tak. Hydranty wewnętrzne i zewnętrzne oraz instalacje tryskaczowe według projektu obiektu.",
      },
      {
        q: "Dla kogo to jest?",
        a: "Szkoły, hale, obiekty użyteczności publicznej i przemysł. Zakres z dokumentacji p.poż.",
      },
    ],
    match: ["hydrant", "tryskacz", "p.poż", "ppoż"],
  },
  {
    slug: "wentylacja-klimatyzacja",
    title: "Wentylacja i klimatyzacja",
    short: "Wentylacja, klimatyzacja, ciepło technologiczne i chłodnictwo w domach i obiektach.",
    intro:
      "Specjalizujemy się też w wentylacji, klimatyzacji, cieple technologicznym i chłodnictwie. To część robót instalacyjnych wewnętrznych, obok c.o. i wod-kan.",
    sections: [
      {
        heading: "Zakres",
        body: "Wentylacja i klimatyzacja w domach, biurach i obiektach użyteczności publicznej. Ciepło technologiczne i chłodnictwo tam, gdzie budynek tego wymaga.",
      },
      {
        heading: "Z jednym zespołem",
        body: "Te instalacje często idą w pakiecie z kotłownią, wod-kan i gazem. Jeden wykonawca oznacza mniej kolizji na budowie i jedną odpowiedzialność za uruchomienie.",
      },
    ],
    bullets: [
      "Wentylacja i klimatyzacja",
      "Ciepło technologiczne",
      "Chłodnictwo",
      "Domy i obiekty publiczne",
    ],
    faq: [
      {
        q: "Czy klimatyzację robicie razem z ogrzewaniem?",
        a: "Tak. Wentylacja, klimatyzacja i ciepło technologiczne wchodzą w ten sam zakres robót instalacyjnych.",
      },
      {
        q: "Tylko domy, czy też biura i hale?",
        a: "Domy, biura i obiekty użyteczności publicznej. Zakres po oględzinach.",
      },
    ],
    match: ["klimatyz", "wentyl", "chłodnict", "ciepło technologicz"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedRealizations(slug: string, limit = 4) {
  const service = getService(slug);
  if (!service?.match.length) return [];
  const keys = service.match.map((k) => k.toLowerCase());
  return REALIZATIONS.filter((r) => {
    const hay = `${r.title} ${r.scope}`.toLowerCase();
    return keys.some((k) => hay.includes(k));
  }).slice(0, limit);
}
