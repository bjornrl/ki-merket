import FAQ from "@/sections/FAQ";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

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
  // Add more as needed
];

function Sidebar() {
  return (
    <nav className="top-40 p-4 w-64 flex flex-col gap-10">
      <ul className="text-left fixed space-y-2 w-full">
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
    <div className="flex flex-col justify-center mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      {" "}
      {/* <h1 className="pt-40 text-3xl font-bold tracking-tight text-gray-900">
        Om KI-merket
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        KI-merket er en tjeneste som automatisk merker bilder med et synlig
        merke for å indikere at de er generert eller redigert ved hjelp av
        kunstig intelligens. Dette bidrar til å øke bevisstheten om AI-generert
        innhold og fremmer ansvarlig bruk av teknologi. <br></br>KI-merket er en
        tjeneste som automatisk merker bilder med et synlig merke for å indikere
        at de er generert eller redigert ved hjelp av kunstig intelligens. Dette
        bidrar til å øke bevisstheten om AI-generert innhold og fremmer
        ansvarlig bruk av teknologi.KI-merket er en tjeneste som automatisk
        merker bilder med et synlig merke for å indikere at de er generert eller
        redigert ved hjelp av kunstig intelligens. Dette bidrar til å øke
        bevisstheten om AI-generert innhold og fremmer ansvarlig bruk av
        teknologi.KI-merket er en tjeneste som automatisk merker bilder med et
        synlig merke for å indikere at de er generert eller redigert ved hjelp
        av kunstig intelligens. Dette bidrar til å øke bevisstheten om
        AI-generert innhold og fremmer ansvarlig bruk av teknologi.KI-merket er
        en tjeneste som automatisk merker bilder med et synlig merke for å
        indikere at de er generert eller redigert ved hjelp av kunstig
        intelligens. Dette bidrar til å øke bevisstheten om AI-generert innhold
        og fremmer ansvarlig bruk av teknologi.KI-merket er en tjeneste som
        automatisk merker bilder med et synlig merke for å indikere at de er
        generert eller redigert ved hjelp av kunstig intelligens. Dette bidrar
        til å øke bevisstheten om AI-generert innhold og fremmer ansvarlig bruk
        av teknologi.
      </p> */}
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
        <div>
          <Sidebar />
        </div>
        <div className="flex flex-col">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            {/* Original: text left, image right */}
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  {/* <p className="text-base/7 font-semibold text-indigo-600">
                  Deploy faster
                </p> */}
                  <h1
                    id="hvorfor-ki-merket"
                    className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
                  >
                    Hvorfor laget vi KI-merket?
                  </h1>
                  <p className="mt-6 text-xl/8 text-gray-700 text-left">
                    Kunstig intelligens (KI) er tilstede i de fleste, om ikke i
                    alle, aspekter ved fysisk og digital innholdsproduksjon. Per
                    i dag (30.06.2025) finnes det ingen standard merking for
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
            <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
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
                    Det må sies at samtalen om KI og innholdsproduksjon fortsatt
                    pågår, og vi ønsker at dette merket skal være et bidrag til
                    en mer åpen og ærlig dialog.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Duplicated: image left, text right */}
          <div className="mx-auto mt-24 grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
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
                  <p className="mt-6 text-xl/8 text-gray-700 text-left">
                    1. Juli 2022 ble det markedsføringslovens paragraf 2 krevd
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
                  <div className="max-w-xl text-left text-base/7 text-gray-600 lg:max-w-lg mt-8">
                    <p>
                      Som nevnt i over, vil formålet med KI-merket være å gi
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
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/tidligere-debatt-eksempel-1.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">
                PNAS Nexus, Volume 4, Issue 6, June 2025,
                pgaf170, https://doi.org/10.1093/pnasnexus/pgaf170 Published: 28
                May 2025
              </p>
            </div>
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/tidligere-debatt-eksempel-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">
                Lindsey, Drew. "A Deep Dive into AI Labels on Social Media."
                https://fusecreate.com/a-deep-dive-into-ai-labels-on-social-media/,
                15. april 2025.
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
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/eksempel-tidligere-bruk-1.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">Caption 1</p>
            </div>
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="eksempel-tidligere-bruk-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">awdawd</p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="eksempel-tidligere-bruk-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
            </div>
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="eksempel-tidligere-bruk-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">awdawd</p>
            </div>
          </div>
          {/*!!!*/}
          <h1
            id="andre-eksempler-og-reaksjoner"
            className="mt-24 text-left text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"
          >
            Andre eksempler og reaksjoner{" "}
          </h1>{" "}
          <div className="mx-auto mt-24 grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="-mt-12 -mr-12 flex flex-col gap-4 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/velvet-sundown-1.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <img
                alt=""
                src="/velvet-sundown-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
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

                  <p className="mt-6 text-base/7 text-gray-700 text-left">
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
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
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
              <ArrowDownIcon className="mx-auto w-12" />
            </div>
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/xxl-1.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">
                XXL brukte i 2023 AI-genererte modeller, i sine reklamer. (Foto
                hentet fra kode24.no)
              </p>
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
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/atb-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">Skjermdump Adressa.no</p>
            </div>
            <div className="-mt-12 -mr-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                alt=""
                src="/xxl-2.jpg"
                className=" rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
              <p className="text-left mt-4">Skjermdump KOM24.no</p>
            </div>
          </div>
        </div>
        {/* <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Deploy faster
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                Markering av justert materiale{" "}
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
                Suspendisse eget egestas a elementum pulvinar et feugiat blandit
                at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-6 text-white"
                      >
                        <path
                          d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Push to deploy
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                    suspendisse semper morbi. Odio urna massa nunc massa.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-6 text-white"
                      >
                        <path
                          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    SSL certificates
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero
                    dolor eget. Sem sodales gravida quam turpis enim lacus amet.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-6 text-white"
                      >
                        <path
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Simple queues
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Quisque est vel vulputate cursus. Risus proin diam nunc
                    commodo. Lobortis auctor congue commodo diam neque.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-6 text-white"
                      >
                        <path
                          d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    Advanced security
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt
                    mattis aliquet hac quis. Id hac maecenas ac donec pharetra
                    eget.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div> */}
      </div>
      <FAQ />
    </div>
  );
}
