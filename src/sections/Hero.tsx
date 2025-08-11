export default function Hero() {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      ></div>
      <div className="mx-auto py-4 px-2 lg:px-96 sm:py-6 lg:py-12">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            KI-merket{" "}
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Dette er en tjeneste som merker bildet for deg. Merket vil bli
            plassert nederst i høyre hjørne. Velg det merket som gir best
            synlighet til bakgrunnen. Merk at du kan kun laste opp og ned én fil
            av gangen.
          </p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      ></div>
    </div>
  );
}
