const mediaOutlets = [
  {
    name: "NRK",
    logo: "/media_logos/NRK_logo_(2022).png",
    href: "https://www.nrk.no/arkiv/artikkel/slik-vil-dei-begynne-a-merke-falske-ki-bilde-1.17601014",
    logoClassName: "h-10 w-auto",
  },
  {
    name: "Kode24",
    logo: "/media_logos/kode24_logo.png",
    href: "https://www.kode24.no/artikkel/vil-merke-ai-reklame-du-har-rett-til-a-vite/243626",
    logoClassName: "h-10 w-auto",
  },
  {
    name: "KOM24",
    logo: "/media_logos/kom24_logo.svg",
    href: "https://www.kom24.no/ai-artificial-intelligence-bjorn-ravlo-leira/mener-ki-merking-bor-tas-pa-alvor-for-det-blir-for-sent/909604",
    logoClassName: "h-8 w-auto",
    logoWrapperClassName: "rounded-md bg-[#3B3052] px-4 py-2",
  },
];

export default function MediaBanner() {
  return (
    <section
      id="ki-merket-i-media"
      aria-labelledby="ki-merket-i-media-heading"
      className="py-12 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <h2
          id="ki-merket-i-media-heading"
          className="text-center font-regular tracking-tight text-gray-900 sm:text-3xl"
        >
          KI-merket i media
        </h2> */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20">
          {mediaOutlets.map((outlet) => (
            <a
              key={outlet.name}
              href={outlet.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-24 items-center rounded-lg px-6 transition-opacity hover:opacity-75"
              aria-label={`Les artikkelen om KI-merket hos ${outlet.name}`}
            >
              <span className={outlet.logoWrapperClassName}>
                <img
                  src={outlet.logo}
                  alt={outlet.name}
                  className={outlet.logoClassName?.replace(/h-\d+/, 'h-16')}
                />
              </span>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
