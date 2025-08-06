export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#171FE8] rounded-lg shadow-sm dark:bg-gray-900 m-4"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://comte.no/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src="/Comte-logo.png" className="h-8" alt="Comte Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.comte.no/kontakt"
                className="hover:underline me-4 md:me-6"
              >
                Kontakt oss
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://comte.no/" className="hover:underline">
            Comte
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
