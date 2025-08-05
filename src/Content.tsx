import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Gi innovative aktører muligheten til å vise ørlighet og transpasens",
    description:
      "Vi tror aktører som bruker KI-generert innhold bør kunne vise at de er åpne om dette. Dette kan bidra til å bygge tillit hos forbrukere.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Komme reguleringer i forkjøpet",
    description:
      "Vi tror det kan ha positive ringvirkninger å komme formelle vedtak i forkjøpet.",
    icon: LockClosedIcon,
  },
  {
    name: "Styrke forbrukerrettigheter",
    description:
      "På lik måte som at retusjerte bilder skal merkes, mener vi at KI-generert innhold bør merkes. Dette gir forbrukere bedre mulighet til å ta informerte valg.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div id="om-merket" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base/7 font-semibold text-indigo-600">
                Deploy faster
              </h2> */}
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Om KI-merket
              </p>
              <p className=" text-left mt-6 text-lg/8 text-gray-700">
                Fra 2022 krever markedsføringsloven at retusjert
                reklamemateriell skal merkes. I ettertid har eksplosjonen av
                KI-generert innhold åpnet for en bred diskusjon om hvorvidt
                merking av generert innhold bør følge liknende lovverk som
                retusjerte bilder.{" "}
              </p>
              <p className=" text-left mt-6 text-lg/8 text-gray-700">
                I 2023 utførte Forbrukertilsynet en utredning av behovet for
                merking av innhold generert med kunstig intelligens.
                Konklusjonen var å “stå på stedet hvil”, der vedtak fattet i
                Europakommisjonen skal være veiledende for beslutninger i norsk
                lovgivning. Likevel ser vi et behov for å gå lenger – tidligere.
                KI-generert innhold blir stadig vanskeligere å skille fra ekte
                materiale. Dette svekker forbrukerens evne til å vite hva som er
                ekte, og kan bidra til å undergrave tilliten til informasjon og
                merkevarer. Vi mener det er på tide å ta ansvar.
                <dl className="my-10 space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-indigo-600"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
                Vi mener det er for dårlig å vente på formelle vedtak. For å
                komme reguleringene i forkjøpet, i et marked hvor forskjellen
                mellom genererte bilder og ekte blir stadig mindre, har vi
                utviklet et KI-merke som alle kan bruke. Vi tror den beste måten
                å avdekke behovet for et slikt merke, er å sette det ut i
                praksis.
              </p>
              <p
                id="kontakt"
                className=" text-left mt-6 text-lg/8 text-gray-700"
              >
                Har du innspill eller tanker om KI-merket? Send oss gjerne en
                e-post:
                <a href="mailto:herman@comte.no"> Herman Billett </a>/{" "}
                <a href="mailto:bjorn@comte.no"> Bjørn Ravlo-Leira </a>
              </p>
              <p className=" text-left mt-6 text-lg/8 text-gray-700">
                Gi beskjed om du ønsker dette tilpasset for bruk i f.eks.
                nettside, presentasjon eller presse.
              </p>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="./public/KI-merking-eksempel.png"
            className="w-3xl rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
