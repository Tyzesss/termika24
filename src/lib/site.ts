export const SITE_NAME = "TERMIKA";
export const SITE_TITLE = "TERMIKA - firma instalacyjna w Gorlicach | kotłownie, c.o., wod-kan";
export const COMPANY_LEGAL_NAME = 'FHU „TERMIKA" Zbigniew Jedlecki';
export const EMAIL = "termika24@gmail.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const PHONE_DISPLAY = "608 630 085";
export const PHONE_E164 = "+48608630085";
export const PHONE_HREF = `tel:${PHONE_E164}`;

const WHATSAPP_TEXT = encodeURIComponent("Dzień dobry, chciałbym zapytać o instalację.");
export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164.replace("+", "")}?text=${WHATSAPP_TEXT}`;

export const ADDRESS = "ul. Chopina 40, 38-300 Gorlice";
export const SERVICE_AREA = "Gorlice i okolice oraz cała Polska, dojazd do klienta";
export const NIP = "738-132-68-53";
export const REGON = "121051417";
export const HOURS = "Pn - Pt: 8:00 - 16:00";

export const MAPS_URL = "https://maps.app.goo.gl/Ra5oPrKKTiSP51U37";
export const GOOGLE_REVIEWS_URL = MAPS_URL;
export const GOOGLE_RATING = 4.4;
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=FHU+TERMIKA,+ul.+Chopina+40,+38-300+Gorlice&hl=pl&z=17&output=embed";

/** Unikalne inwestycje z portfolio (bez duplikatów z archiwum strony). */
export const REALIZATIONS = [
  {
    title: "PKP Kraków, nastawnie Płaszów i Bieżanów",
    year: "2018",
    scope: "Instalacja c.o. i wod-kan, technologia wytwarzania ciepła, gazowe pompy ciepła.",
  },
  {
    title: "Uniwersytet Ekonomiczny we Wrocławiu",
    year: "2018",
    scope: "Wymiana instalacji centralnego ogrzewania w budynkach uczelni.",
  },
  {
    title: "Szkoła Podstawowa i Gimnazjum w Dębowcu",
    year: "2017",
    scope: "Instalacja c.o. oraz budowa kotłowni 320 kW.",
  },
  {
    title: "Politechnika Rzeszowska",
    year: "2017",
    scope: "Wykonanie instalacji c.o.",
  },
  {
    title: "Uzdrowisko Horyniec-Zdrój",
    year: "2016",
    scope: "Wymiana instalacji c.o.",
  },
  {
    title: "Specjalny Ośrodek Szkolno-Wychowawczy w Częstochowie",
    year: "2016",
    scope: "Wykonanie instalacji c.o.",
  },
  {
    title: "Zespół Szkół im. W. Biegańskiego w Częstochowie",
    year: "2016",
    scope: "Wykonanie instalacji c.o.",
  },
  {
    title: "Zespół Mieszkalno-Usługowy w Krakowie",
    year: "2016",
    scope: "Instalacja c.o., ciepłej i zimnej wody oraz kanalizacji.",
  },
  {
    title: "Szpital Miejski w Rudzie Śląskiej",
    year: "2015-2016",
    scope: "Instalacja c.o., c.w.u. i kanalizacji, węzeł cieplny 910 kW, kolektory słoneczne.",
  },
  {
    title: "Szkoła Podstawowa w Gołkowicach",
    year: "2014",
    scope: "Przebudowa kotłowni gazowej, dwa kotły kondensacyjne 340 kW.",
  },
  {
    title: "Przedszkole Miejskie nr 2 w Krynicy-Zdroju",
    year: "2014",
    scope: "Przebudowa kotłowni gazowej 180 kW, instalacja gazowa, kolektory słoneczne.",
  },
  {
    title: "Szkoła Podstawowa w Oleszycach",
    year: "2014",
    scope: "Przebudowa kotłowni gazowej 311 kW.",
  },
  {
    title: "Dom Pomocy Społecznej w Gorlicach",
    year: "2014",
    scope: "Instalacja c.o. i c.w.u., adaptacja łazienek na pokoje kąpielowe dla niepełnosprawnych.",
  },
  {
    title: 'PDM "GODROM"',
    year: "2013",
    scope: "Przebudowa kotłowni gazowej 45 kW.",
  },
  {
    title: "Szkoła Podstawowa nr 2 w Ropie",
    year: "2013",
    scope: "Przebudowa kotłowni 130 kW wraz z instalacją c.o.",
  },
  {
    title: "Zespół Szkół w Grabownicy Starzeńskiej",
    year: "2013",
    scope: "Budowa kotłowni gazowej 130 kW, instalacje c.o. i c.w.u., kolektory słoneczne.",
  },
  {
    title: "Urząd Gminy w Sędziszowie Małopolskim",
    year: "2013",
    scope: "Budowa kotłowni 90 kW oraz przebudowa instalacji gazowej.",
  },
  {
    title: "Zespół Szkół Rolniczych w Zarzeczu",
    year: "2012",
    scope: "Przebudowa kotłowni gazowej 550 kW wraz z automatyką.",
  },
  {
    title: 'BST "GODROM" w Gorlicach',
    year: "2012",
    scope: "Kotłownia olejowa 250 kW, magazyn oleju 10 tys. litrów, instalacja c.o.",
  },
  {
    title: "Zespół Szkół im. J. K. Witkiewicza w Kazimierzu Dolnym",
    year: "2012",
    scope: "Kotłownia gazowa 150 kW, instalacje c.o. i c.w.u.",
  },
  {
    title: "Dom Zdrojowy w Wapiennem",
    year: "2012",
    scope: "Instalacja c.o. z grzejnikami, wod-kan oraz kotłownia gazowa.",
  },
  {
    title: "Hala produkcyjna TLC O/Gorlice",
    year: "2011-2012",
    scope: "Kanalizacja deszczowa i sanitarna, przyłącze wodociągowe, kotłownia gazowa 170 kW.",
  },
  {
    title: "Szkoła Podstawowa w Czudcu",
    year: "2009",
    scope: "Kotłownia gazowa 130 kW De Dietrich, instalacja c.o. KAN-therm Steel, wymiana grzejników.",
  },
  {
    title: "Publiczne Gimnazjum w Krynicy-Zdroju",
    year: "2010",
    scope: "Wymiana instalacji c.o. na KAN-therm Steel i PP, montaż grzejników aluminiowych.",
  },
  {
    title: "Zespół Szkół w Babicy",
    year: "2010",
    scope: "Kotłownia gazowa 130 kW De Dietrich, instalacja c.o. KAN-therm Steel, wymiana grzejników.",
  },
  {
    title: "Zespół Szkół Publicznych w Jedliczu",
    year: "2010",
    scope: "Wymiana instalacji c.o. wraz z montażem grzejników.",
  },
  {
    title: "OSP w Wilkowisku",
    year: "2010",
    scope: "Nowa instalacja c.o. z grzejnikami oraz kotłownia gazowa 65 kW De Dietrich.",
  },
  {
    title: "Szkoła Podstawowa w Horyńcu-Zdroju",
    year: "2011",
    scope: "Wymiana instalacji c.o. w technologii KAN-therm Steel, montaż grzejników.",
  },
  {
    title: "Gimnazjum w Załucznem",
    year: "2011",
    scope: "Wymiana kotła olejowego 100 kW De Dietrich z magazynem oleju 10 tys. litrów.",
  },
  {
    title: "Szkoła Podstawowa w Buchcicach",
    year: "2011",
    scope: "Kotłownia gazowa 90 kW De Dietrich, wymiana instalacji gazowej, c.o. i grzejników.",
  },
  {
    title: "Zespół Szkół w Jabłonicy Polskiej",
    year: "2011",
    scope: "Kotłownia gazowa 130 kW De Dietrich z aktywnym systemem bezpieczeństwa gazu.",
  },
] as const;

export const REALIZATIONS_COUNT = REALIZATIONS.length;
