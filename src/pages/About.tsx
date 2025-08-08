//import FAQ from "@/sections/FAQ";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { HoverEffect } from "@/components/card-hover-effect";

const projects = [
  {
    title: "NRK",
    description: "",
    link: "https://info.nrk.no/nrks-retningslinjer-for-bruk-av-kunstig-intelligens/",
    backgroundImage: "/Users/bjornrleira/Documents/ki-merket/public/nrk.png",
  },
  {
    title: "Teknologirådet",
    description: "",
    link: "https://teknologiradet.no/blogg/mens-vi-venter-pa-ai-act-retningslinjer-for-kunstig-intelligens/",
  },
  {
    title: "NTNU",
    description: "",
    link: "https://i.ntnu.no/documents/1305837853/1306916738/2025-05-06+Retningslinjer+for+bruk+av+IKT-verkt%C3%B8y+med+generativ+KI.pdf/66de9b81-8631-64fe-8ddc-2deca559b043?t=1749022115156",
  },
  {
    title: "Helse Nord",
    description: "",
    link: "https://www.helse-nord.no/helsefaglig/kvalitet-og-pasientsikkerhet/retningslinjer-for-bruk-og-utvikling-av-kunstig-intelligens-i-helse-nord/://meta.com",
  },
  {
    title: "Digdir",
    description: "",
    link: "https://www.digdir.no/kunstig-intelligens/veiledning-ansvarlig-bruk-og-utvikling-av-kunstig-intelligens/4601",
  },
  {
    title: "Skatteetaten",
    description: "",
    link: "https://www.skatteetaten.no/stilogtone/god-praksis/kunstig-intelligens/",
  },
];

const sections = [
  { id: "hvorfor-ki-merket", label: "Hvorfor laget vi KI-merket" },
  {
    id: "markering-justert-materiale",
    label: "Markering av justert materiale",
  },
  {
    id: "eksempler-tidligere-debatt",
    label: "Tidligere debatt om KI-merking",
  },
  {
    id: "eksempler-tidligere-bruk",
    label: "Tidligere bruk av KI-merking",
  },
  {
    id: "andre-eksempler-og-reaksjoner",
    label: "Andre eksempler og reaksjoner",
  },
  // {
  //   id: "faq",
  //   label: "Ofte stilte spørsmål",
  // },
  {
    id: "relevante-artikler",
    label: "Relevante artikler",
  },
  // Add more as needed
];

function Sidebar() {
  return (
    <nav className="top-40 p-4 w-64 flex lg:flex-col gap-10">
      <ul className="text-left lg:fixed space-y-2 w-full">
        {sections.map((section) => (
          <li key={section.id} className="w-full">
            <a
              href={`#${section.id}`}
              className="text-blue-600 hover:underline block w-full break-words"
              style={{ wordBreak: "break-word", whiteSpace: "normal" }}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function About() {
  return (
    <div className="flex flex-col justify-center mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 max-w-[1200px]">
      {" "}
      <div className="relative flex isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex flex-col">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            {/* Original: text left, image right */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <h1
                    id="hvorfor-ki-merket"
                    className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
                  >
                    Hvorfor laget vi KI-merket?
                  </h1>
                  <p className="mt-6 text-base/7 lg:text-xl/8 text-gray-700 text-left">
                    Kunstig intelligens (KI) er tilstede i de fleste, om ikke i
                    alle, aspekter ved fysisk og digital innholdsproduksjon. Per
                    i dag (06.08.2025) finnes det ingen standard merking for
                    innhold produsert av eller med kunstig intelligens, på samme
                    måte som det finnes for retusjert reklame. Dette er til
                    tross for at etterlysninger etter det er flere år gamle (se
                    eksempler lengre ned på siden). Denne guiden introduserer et
                    merke som kan brukes av alle som ønsker å være åpne og
                    ærlige om hvordan de produserer innhold. Samtidig oppfordrer
                    den offentlige instanser til å introdusere ett påbud for å
                    bidra til å beskytte forbrukerrettigheter.
                  </p>
                </div>
              </div>
            </div>
            <div className="-mt-12 lg:-mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/ki-logo.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="mt-2 text-xs text-left">
                (Illustrasjon: Magnus Hestad/Herman Billett/Bjørn Ravlo-Leira)
              </p>
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-left text-base/7 text-gray-600 lg:max-w-lg">
                  <p>
                    Symbolet for merking av innhold produsert med kunstig
                    intelligent - KI-merket - og de tilhørende retningslinjene
                    for bruken av merket, er produsert av Comte Bureau og gjort
                    offentlig tilgjengelig for alle som ønsker å bruke det.
                    Intensjonen med merket er ikke å forstyrre uttrykket til
                    innholdet som blir produsert, men å gjøre publikum
                    oppmerksom på hvordan det er laget. Vi anerkjenner at siste
                    ord ikke er sagt i diskusjonen om KI-produsert innhold, men
                    håper denne merkingen kan være med på å skape åpenhet om
                    temaet.
                  </p>

                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                    En pågående diskusjon{" "}
                  </h2>
                  <p className="mt-6 text-left">
                    Vi annerkjenner at samtalen om KI og innholdsproduksjon
                    fortsatt pågår, og vi ønsker at dette merket skal være et
                    bidrag til en mer åpen og ærlig dialog.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Duplicated: image left, text right */}
          <div className="mx-auto mt-24 grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-mt-12 lg:-mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/retusjering-eksempel.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="mt-2 text-xs text-left">
                (Illustrasjon: Forbrukertulsynet/Ada Wikdahl/Animer)
              </p>
            </div>
            <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
              <div className="lg:pl-4">
                <div className="lg:max-w-lg">
                  <h1
                    id="markering-justert-materiale"
                    className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
                  >
                    Markering av justert materiale{" "}
                  </h1>
                  <p className="mt-6 text-base/7 lg:text-xl/8 text-gray-700 text-left">
                    1. Juli 2022 ble det i markedsføringslovens paragraf 2 krevd
                    at all reklame der en kropps fasong, størrelse eller hud er
                    endret ved retusjering eller annen manipulering, skal merkes
                    med et standardmerke. Formålet med den nye regelen var å
                    motvirke kroppspress i samfunnet som kan tilskrives
                    idealiserte personer i reklame. Kravet om å merke retusjert
                    reklame skal bidra til å bevisstgjøre forbrukere, særlig
                    barn og unge, om at reklamen ikke viser personer slik de ser
                    ut i virkeligheten. Målet er å redusere bruken av
                    idealiserte kropper som er retusjert i reklame.
                  </p>
                  <div className="text-left text-base/7 text-gray-600 lg:max-w-lg mt-8">
                    <p>
                      Som nevnt over, vil formålet med KI-merket være å gi
                      opplysning til forbrukere om hvordan innhold er produsert
                      og hvilken virkelighet den formidler. På samme måte som
                      retusjert reklame ønsker vi å sikre forbrukerrettigheter
                      med formål om: å gi forbrukere mulighet til å ta
                      informerte valg basert på sann fremstilling av produkter
                      eller tjenester, og dermed fremme transparens i bruken av
                      KI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*!!!*/}
          <h1
            id="eksempler-tidligere-debatt"
            className="mt-24 text-left text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
          >
            Tidligere debatt om KI-merking{" "}
          </h1>{" "}
          <div className="mx-auto mt-12 grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-mt-12 lg:-mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/tidligere-debatt-eksempel-1.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="mt-2 text-xs text-left">
                (PNAS Nexus, Volume 4, Issue 6, June 2025,
                pgaf170, https://doi.org/10.1093/pnasnexus/pgaf170 Published: 28
                May 2025)
              </p>
            </div>
            <div className="-mt-12 lg:-mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/tidligere-debatt-eksempel-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />

              <p className="mt-2 text-xs text-left">
                (Lindsey, Drew. "A Deep Dive into AI Labels on Social Media."
                https://fusecreate.com/a-deep-dive-into-ai-labels-on-social-media/,
                15. april 2025.)
              </p>
            </div>
          </div>
          {/*!!!*/}
          <h1
            id="eksempler-tidligere-bruk"
            className="mt-24 text-left text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
          >
            Tidligere bruk av KI-merking{" "}
          </h1>{" "}
          <div className="mx-auto mt-12 grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-mt-12 lg:-mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/eksempel-tidligere-bruk-1.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">
                Treningskjeden Sats med reklamestunt foran Stortinget i 2023
              </p>
              <p className="mt-2 text-xs text-left">(Foto: Kampanje.no)</p>
            </div>
            <div className="-mt-12 lg:-mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="eksempel-tidligere-bruk-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">
                Boligbyggelaget BORI sin kampanje fra 2024
              </p>
              <p className="mt-2 text-xs text-left">(Foto: BORI/Nucleus)</p>
            </div>
          </div>
          {/* <div className="mx-auto mt-12 grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-mt-12 -mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="eksempel-tidligere-bruk-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
            </div>
            <div className="-mt-12 -mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="eksempel-tidligere-bruk-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">awdawd</p>
            </div>
          </div> */}
          {/*!!!*/}
          <h1
            id="andre-eksempler-og-reaksjoner"
            className="mt-24 text-left text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
          >
            Andre eksempler og reaksjoner{" "}
          </h1>{" "}
          <div className="mx-auto mt-24 grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-mt-12 lg:-mr-12 flex flex-col gap-4 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/velvet-sundown-1.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="mt-2 text-xs text-left">(Foto: tek.no)</p>
              <img
                alt=""
                src="/velvet-sundown-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="mt-2 text-xs text-left">(Foto: tek.no)</p>
            </div>
            <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
              <div className="lg:pl-4">
                <div className="lg:max-w-lg">
                  <h2
                    id="markering-justert-materiale"
                    className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
                  >
                    Spotify AI-rtister{" "}
                  </h2>
                  <p className="mt-6 text-xl/8 text-gray-700 text-left">
                    Eksempelet med «The Velvet Sundown» viser hvordan
                    plattformer som Spotify kan inneholde artister og band som
                    aldri har eksistert. Uten merking vil brukere tro at de
                    lytter til ekte mennesker, noe som kan oppleves som
                    villedende og bryter med prinsippet om åpenhet. Bandet har
                    på kort tid fått nesten en halv million månedlige lyttere på
                    Spotify. Men det er sterke indikasjoner på at bandet ikke
                    eksisterer i virkeligheten, melder The Next Web.
                  </p>

                  <p className="mt-2 text-xs text-left">
                    Kilde: Norum Bugge, Torstein. "Populært band på Spotify
                    fremstår som AI-generert: Har sneket seg inn på populære
                    spillelister." Publisert 1. juli. 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2
            id="markering-justert-materiale"
            className="mt-2 text-3xl text-left font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl"
          >
            Norske eksempler
          </h2>
          <div className="mx-auto mt-12 grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-mt-12 lg:-mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/atb-1.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">
                Hentet fra den mye omdiskuterte Ki produserte reklame-kampanjen
                til Buss-selskapet AtB i Trondheim som ble lanserte våren 2025.
                (Foto: Skjermdump Atb_no Instagram)
              </p>
              <p className="mt-2 text-xs text-left">
                (Foto: Skjermdump Atb_no/Instagram)
              </p>

              <ArrowDownIcon className="mx-auto w-12" />
            </div>
            <div className="-mt-12 lg:-mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/xxl-1.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">
                XXL brukte i 2023 AI-genererte modeller, i sine reklamer.
              </p>
              <p className="mt-2 text-xs text-left">(Foto: kode24.no)</p>
              {/* <a
                className="text-left"
                href="https://www.kode24.no/artikkel/xxl-lagde-ai-genererte-modeller-uten-a-si-fra/192237"
              >
                Link
              </a> */}
              <ArrowDownIcon className="mx-auto w-12" />
            </div>
          </div>
          <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-mt-12 lg:-mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/atb-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="mt-2 text-xs text-left">
                (Foto: Skjermdump Adressa.no)
              </p>
            </div>
            <div className="-mt-12 lg:-mr-12 p-1 lg:p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/xxl-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="mt-2 text-xs text-left">
                (Foto: Skjermdump KOM24.no)
              </p>
            </div>
          </div>
          {/* <div id="faq">
            <FAQ />
          </div> */}
          <div id="relevante-artikler" className="mx-auto mt-12">
            <h1
              id="eksempler-tidligere-bruk"
              className="mt-24 text-left text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
            >
              Relevante artikler og veiledere om bruk av KI
            </h1>
            <div className="max-w-5xl mx-auto px-2 lg:px-8">
              <HoverEffect items={projects} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
