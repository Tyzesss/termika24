import { REALIZATIONS } from "./site";

export type Service = {
  slug: string;
  title: string;
  /** Dopełniacz: "Nasze realizacje {titleOf}" */
  titleOf: string;
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
    title: "Oględziny",
    body: "Przyjeżdżamy na obiekt albo siadamy do dokumentacji. Pierwsza wizyta nic nie kosztuje.",
  },
  {
    step: "02",
    title: "Wycena",
    body: "Dostajesz zakres i kwotę. Bez kotła czy pompy wrzuconych na zapas.",
  },
  {
    step: "03",
    title: "Montaż i rozruch",
    body: "Ta sama ekipa stawia instalację i ją odpala. Siedziba Gorlice, jedziemy po całej Polsce.",
  },
] as const;

export const SERVICES: Service[] = [
  {
    slug: "kotlownie",
    title: "Kotłownie",
    titleOf: "kotłowni",
    short: "Nowe kotłownie gazowe, olejowe i na paliwo stałe. Przebudowy i automatyka.",
    intro:
      "Stawiamy kotłownie od zera i przebudowujemy te, które już stoją. Domy, szkoły, szpitale, obiekty firmowe. Kocioł dobieramy do budynku, potem automatyka i rozruch.",
    sections: [
      {
        heading: "Gaz, olej albo paliwo stałe",
        body: "Kotły wiszące i stojące, z zasobnikiem ciepłej wody albo bez. Kondensacyjne, gdy ma to sens. Atmosferyczne z otwartą lub zamkniętą komorą. Na paliwo stałe: z podajnikiem lub bez, z regulacją spalania jeśli obiekt tego wymaga.",
      },
      {
        heading: "Nowa kotłownia i wymiana starej",
        body: "Robiliśmy kotłownie od 45 kW do 550 kW, magazyny oleju i węzły cieplne. Na obiektach stawialiśmy m.in. De Dietrich. Co zostaje, a co idzie do wymiany, widać po oględzinach.",
      },
    ],
    bullets: [
      "Dobór mocy kotła do budynku",
      "Automatyka i pierwsze uruchomienie",
      "Przebudowa istniejących kotłowni",
      "Domy i obiekty użyteczności publicznej",
    ],
    faq: [
      {
        q: "Tylko nowe kotłownie, czy też wymiana starego kotła?",
        a: "I jedno, i drugie. Wymieniamy kotły, przebudowujemy kotłownie gazowe i olejowe, dokładamy automatykę. Od zera też.",
      },
      {
        q: "Jaki kocioł: gaz, olej czy węgiel?",
        a: "Taki, jaki pasuje do budynku i przyłącza. Kondensat gazowy, olej, paliwo stałe. Moc liczymy po oględzinach, nie z metrażu na oko.",
      },
    ],
    match: ["kotłown", "kocioł", "kotły", "węzeł cieplny", "magazyn oleju"],
  },
  {
    slug: "centralne-ogrzewanie",
    title: "Centralne ogrzewanie",
    titleOf: "centralnego ogrzewania",
    short: "Nowe c.o. i wymiany. Trójnik albo rozdzielacz, grzejniki i rury pod budynek.",
    intro:
      "Nowe instalacje c.o. i wymiany w budynkach, które już stoją. Układ, rury i grzejniki tak, żeby ciepło szło równo i dało się to potem serwisować.",
    sections: [
      {
        heading: "Trójnik albo rozdzielacz",
        body: "Klasyczny układ trójnikowy albo rozdzielaczowy, zależnie od tego, jak budynek jest rozprowadzony i co da się ruszyć. Wymienialiśmy c.o. w szkołach, na uczelniach i w obiektach publicznych, często przy ruchu w środku.",
      },
      {
        heading: "Rury i grzejniki",
        body: "Grzejniki stalowe płytowe, aluminiowe, łazienkowe, dekoracyjne. Rury: miedź lutowana, stal spawana, stal ocynkowana zaciskana, polipropylen, wielowarstwowe. Na realizacjach szedł m.in. KAN-therm Steel.",
      },
    ],
    bullets: [
      "Nowe c.o. i wymiana starego",
      "Dobór grzejników do pomieszczeń",
      "Miedź, stal i rury wielowarstwowe",
      "Domy, szkoły, budynki wielorodzinne",
    ],
    faq: [
      {
        q: "Da się wymienić c.o., gdy budynek pracuje?",
        a: "Tak. Tak robiliśmy w szkołach i na uczelniach. Harmonogram układamy tak, żeby cięcia w ogrzewaniu były jak najkrótsze.",
      },
      {
        q: "Trójnik czy rozdzielacz?",
        a: "Zależy od ścian, stropów i tego, czy idziemy w wylewkę. Decyzja po oględzinach.",
      },
    ],
    match: ["c.o.", "grzejnik", "kan-therm"],
  },
  {
    slug: "pompy-ciepla",
    title: "Pompy ciepła",
    titleOf: "pomp ciepła",
    short: "Powietrze, grunt albo woda. Ogrzewanie budynku i ciepła woda.",
    intro:
      "Montujemy pompy ciepła do ogrzewania i ciepłej wody. Najczęściej powietrze-woda. Grunt albo woda, gdy działka i budynek na to pozwalają.",
    sections: [
      {
        heading: "Jak to działa",
        body: "Jedna pompa może ciągnąć c.o. i c.w.u. Albo osobny układ tylko do wody. Część urządzeń latem chłodzi. Moc liczymy po wizycie.",
      },
      {
        heading: "Dobór i montaż",
        body: "Typ i moc wynikają z budynku, izolacji i zużycia wody. Na nastawniach PKP w Krakowie stawialiśmy gazowe pompy ciepła. Uruchomienie i ustawienia robimy na miejscu.",
      },
    ],
    bullets: [
      "C.o. i ciepła woda w jednym układzie",
      "Powietrze, grunt albo woda",
      "Moc liczona do konkretnego budynku",
      "Montaż, uruchomienie, ustawienia",
    ],
    faq: [
      {
        q: "Powietrze, grunt czy woda?",
        a: "Najczęściej powietrze. Bez odwiertów, szybszy montaż. Grunt i woda mają sens tam, gdzie działka i dokumentacja na to pozwalają.",
      },
      {
        q: "Czy pompa zastępuje kocioł?",
        a: "Może iść sama albo w parze z kotłem. Zależy od budynku i od tego, ile chcesz zostawić gazu albo oleju w rezerwie.",
      },
    ],
    match: ["pomp ciepła", "pompy ciepła"],
  },
  {
    slug: "ogrzewanie-podlogowe",
    title: "Ogrzewanie podłogowe",
    titleOf: "ogrzewania podłogowego",
    short: "Podłoga i ściana. Mokra wylewka albo sucha zabudowa.",
    intro:
      "Podłogówka i ogrzewanie ścienne, zwykle w nowym budownictwie. Równe ciepło, bez baterii grzejników na ścianach. Albo jako drugi obieg przy zwykłym c.o.",
    sections: [
      {
        heading: "Mokra wylewka albo suchy system",
        body: "Standard: rura wielowarstwowa na izolacji i wylewka. Gdy wylewki nie ma albo nie wolno jej dołożyć, idziemy w suchą zabudowę. Rozdzielacze i regulację pętli robimy od razu, nie doklejamy później.",
      },
      {
        heading: "Ogrzewanie ścienne",
        body: "Ogrzewanie ścienne w mokrym układzie albo w suchej zabudowie. Ma sens w łazienkach, przy oknach tarasowych i tam, gdzie podłoga jest już zamknięta.",
      },
    ],
    bullets: [
      "Podłoga i ściana",
      "Wylewka albo sucha zabudowa",
      "Rozdzielacze i regulacja pętli",
      "Nowe budynki i przebudowy",
    ],
    faq: [
      {
        q: "Tylko w nowym domu?",
        a: "Najczęściej tak, bo wylewka. W istniejącym budynku da się suchy system, jeśli konstrukcja to uniesie.",
      },
      {
        q: "Podłoga w salonie, grzejniki w sypialniach?",
        a: "Tak. Jeden kocioł albo pompa, dwa obiegi. Część na podłodze, część na grzejnikach.",
      },
    ],
    match: ["podłog", "płaszczyznow"],
  },
  {
    slug: "instalacje-wod-kan",
    title: "Instalacje wod-kan",
    titleOf: "instalacji wod-kan",
    short: "Woda, kanalizacja, przyłącza. Deszczówka, biały montaż, zmiękczacz.",
    intro:
      "Ciepła i zimna woda, kanalizacja, przyłącza. W środku i na zewnątrz. Domy i obiekty publiczne.",
    sections: [
      {
        heading: "Ciepła i zimna woda",
        body: "Rury wielowarstwowe, stal nierdzewna, miedź. Prowadzenie pod tynk albo w szachtach, zależnie od etapu budowy.",
      },
      {
        heading: "Kanalizacja i deszczówka",
        body: "PVC albo system niskoszumowy. Ścieki zwykle idą grawitacyjnie do szamba, osadnika albo przydomowej oczyszczalni. Jak spadek nie wychodzi, stawiamy przepompownię. Deszczówka osobno: rury PVC i studzienki.",
      },
      {
        heading: "Biały montaż",
        body: "WC na stelażu albo kompakt, umywalki, bidety, wanny, kabiny z brodzikiem. Armatura po naszej instalacji, nie po obcej rurze zostawionej w ścianie.",
      },
      {
        heading: "Zmiękczacz",
        body: "Montaż zmiękczacza, gdy woda twarda niszczy kocioł, armaturę i pralkę. Mniej kamienia, mniej detergentu. Smak i zapach też zwykle lepsze.",
      },
    ],
    bullets: [
      "Ciepła i zimna woda",
      "Kanalizacja PVC i niskoszumowa",
      "Przyłącza, deszczówka, przepompownie",
      "Biały montaż i zmiękczacze",
    ],
    faq: [
      {
        q: "Tylko rury w domu, czy też przyłącze?",
        a: "Jedno i drugie. Przyłącze wodociągowe i kanalizacyjne oraz instalacja wewnątrz.",
      },
      {
        q: "Zmiękczacz i armatura też u Was?",
        a: "Tak. Zmiękczacz oraz biały montaż: WC, umywalki, wanny, kabiny.",
      },
    ],
    match: ["wod-kan", "c.w.u.", "kanaliz", "wodociąg", "łazien"],
  },
  {
    slug: "instalacje-gazowe",
    title: "Instalacje gazowe",
    titleOf: "instalacji gazowych",
    short: "Rury spawane i zaciskowe. Szafka gazomierza, zawór odcinający, detektor.",
    intro:
      "Instalacje gazowe wewnętrzne i przebudowy podejść. Często w jednym zakresie z kotłownią gazową i wymianą kotła.",
    sections: [
      {
        heading: "Rury i szafka gazomierza",
        body: "Stal spawana albo system zaciskowy. Szafki z podejściem pod gazomierz. Przebudowa podejść przy wymianie kotła, nie osobna ekipa na drugi dzień.",
      },
      {
        heading: "Odcięcie i detekcja",
        body: "Zawory odcinające i detektory gazu. Na kotłowniach z kotłami kondensacyjnymi stawialiśmy też aktywny system odcięcia, nie sam czujnik na ścianie.",
      },
    ],
    bullets: [
      "Stal spawana i zaciskana",
      "Szafki gazomierzy",
      "Zawory odcinające i detektory",
      "Prace przy kotłowniach gazowych",
    ],
    faq: [
      {
        q: "Gaz razem z kotłownią, czy osobno?",
        a: "Często razem. Wymiana kotła, nowe podejścia i szafka gazomierza w jednym zakresie.",
      },
      {
        q: "Co z bezpieczeństwem?",
        a: "Zawór odcinający i detektor. Na obiektach dokładaliśmy też aktywne odcięcie przy kotłach kondensacyjnych.",
      },
    ],
    match: ["instalacji gazow", "instalacja gazowa", "bezpieczeństwa gazu"],
  },
  {
    slug: "instalacje-solarne",
    title: "Instalacje solarne",
    titleOf: "instalacji solarnych",
    short: "Kolektory płaskie i próżniowe. Wsparcie c.w.u. i c.o., nie zamiast kotła.",
    intro:
      "Kolektory płaskie albo próżniowe. To dodatek do kotła: mniej gazu albo oleju przy podgrzewie wody, zimą trochę wsparcia c.o.",
    sections: [
      {
        heading: "Jak działa układ",
        body: "Kolektor zbiera ciepło ze słońca i oddaje je do zasobnika. Latem kocioł pali rzadziej. Zimą solar dokłada się do układu, nie zastępuje go.",
      },
      {
        heading: "Gdzie to robimy",
        body: "Kolektory stawialiśmy m.in. przy szpitalu w Rudzie Śląskiej, przedszkolu w Krynicy-Zdroju i w szkołach. Powierzchnię i zasobnik liczymy od zużycia ciepłej wody i od dachu.",
      },
    ],
    bullets: [
      "Kolektory płaskie i próżniowe",
      "Wsparcie c.w.u. i c.o.",
      "Dobór do dachu i zużycia wody",
      "Z kotłownią albo osobno",
    ],
    faq: [
      {
        q: "Czy solar zastępuje kocioł?",
        a: "Nie. Latem kocioł pracuje mniej. Zimą solar jest wsparciem, nie źródłem podstawowym.",
      },
      {
        q: "Płaskie czy próżniowe?",
        a: "Zależy od dachu, cienia i tego, ile ciepłej wody schodzi. Po oględzinach.",
      },
    ],
    match: ["kolektor"],
  },
  {
    slug: "instalacje-ppoz",
    title: "Instalacje p.poż.",
    titleOf: "instalacji p.poż.",
    short: "Hydranty w środku i na zewnątrz. Tryskacze według projektu obiektu.",
    intro:
      "Hydranty i tryskacze. Zakres z projektu i z wymagań obiektu.",
    sections: [
      {
        heading: "Hydranty w budynku i na zewnątrz",
        body: "Wewnętrzne na stalowych rurach ocynkowanych. Zewnętrzne na PE. Szafki, zawory, oznaczenia według dokumentacji, nie na oko.",
      },
      {
        heading: "Tryskacze z projektu",
        body: "Instalacja tryskaczowa idzie z dokumentacji obiektu. Robimy to tam, gdzie budynek musi mieć stałe zabezpieczenie wodne: hale, szkoły, obiekty publiczne.",
      },
    ],
    bullets: [
      "Hydranty wewnętrzne i zewnętrzne",
      "Stal ocynkowana i rury PE",
      "Instalacje tryskaczowe",
      "Obiekty publiczne i przemysłowe",
    ],
    faq: [
      {
        q: "Hydranty i tryskacze, czy tylko jedno?",
        a: "Oba, jeśli projekt tak każe. Hydranty wewnętrzne, zewnętrzne i tryskacze według dokumentacji obiektu.",
      },
      {
        q: "To raczej dla hal i szkół?",
        a: "Tak. Szkoły, hale, użyteczność publiczna, przemysł. Zakres z projektu p.poż.",
      },
    ],
    match: ["hydrant", "tryskacz", "p.poż", "ppoż"],
  },
  {
    slug: "wentylacja-klimatyzacja",
    title: "Wentylacja i klimatyzacja",
    titleOf: "wentylacji i klimatyzacji",
    short: "Wentylacja, klima, ciepło technologiczne i chłodnictwo.",
    intro:
      "Wentylacja, klimatyzacja, ciepło technologiczne i chłodnictwo. Ta sama ekipa, która stawia kotłownię i wod-kan, nie osobny podwykonawca na kanały.",
    sections: [
      {
        heading: "Domy, biura, obiekty publiczne",
        body: "Split, kanały, centrale. Ciepło technologiczne i chłodnictwo tam, gdzie proces albo serwerownia tego wymaga, nie na siłę w każdym salonie.",
      },
      {
        heading: "Razem z resztą instalacji",
        body: "Klima i wentylacja często idą w tym samym terminie co kotłownia, gaz i wod-kan. Jeden terminarz, mniej kolizji na budowie, jedna odpowiedzialność za rozruch.",
      },
    ],
    bullets: [
      "Wentylacja i klimatyzacja",
      "Ciepło technologiczne",
      "Chłodnictwo",
      "Domy, biura, obiekty publiczne",
    ],
    faq: [
      {
        q: "Klimę robicie razem z ogrzewaniem?",
        a: "Tak. Wentylacja, klimatyzacja i ciepło technologiczne wchodzą w ten sam zakres co kotłownia i wod-kan, jeśli tak umówimy.",
      },
      {
        q: "Tylko dom, czy też biuro i hala?",
        a: "Domy, biura, obiekty użyteczności publicznej. Co konkretnie, widać po oględzinach.",
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
