import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";

// const navigation = [
//   { name: "Hjem", link: "/" },
//   { name: "Om merket", link: "/pages/about" },
//   {
//     name: "Last ned brukermanual",
//     link: "/KI-merket-bruksmanual.pdf",
//     download: true,
//   },
//   {
//     name: "Kontakt",
//     onClick: () => {
//       const footer = document.querySelector("footer");
//       if (footer) {
//         footer.scrollIntoView({ behavior: "smooth" });
//       }
//     },
//   },
// ];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 justify-center items-center align-center">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">KI-Merket</span>
            <img alt="" src="./Ki-merket.png" className="h-18 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Åpne menyen</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {/* Navigation Button */}
          <Link to="/">
            <Button
              className="border border-transparent hover:border-blue-500 hover:text-blue-500"
              variant="secondary"
            >
              Hjem
            </Button>
          </Link>
          <Link to="/om-ki-merket">
            <Button
              className="border border-transparent hover:border-blue-500 hover:text-blue-500"
              variant="secondary"
            >
              Om KI-merket
            </Button>
          </Link>

          {/* Download Button */}
          <a href="/KI-merket_branding_guide.pdf" download>
            <Button
              className="border border-transparent hover:border-blue-500 hover:text-blue-500"
              variant="secondary"
            >
              Last ned PDF
            </Button>
          </a>
          <a href="/kimerket.zip" download>
            <Button
              className="border border-transparent hover:border-blue-500 hover:text-blue-500"
              variant="secondary"
            >
              Last ned .zip
            </Button>
          </a>

          {/* Contact Button */}
          <Link to="/kontakt">
            <Button
              variant="secondary"
              className="border border-transparent hover:border-blue-500 hover:text-blue-500"
            >
              Kontakt oss
            </Button>
          </Link>
          {/* {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              download={item.download}
              className="text-sm/6 p-2 rounded-xl font-semibold hover:bg-gray-50"
            >
              {item.name}
            </Link>
          ))} */}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed mx-auto inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="./Ki-merket.png" className="h-12 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg text-center font-semibold text-gray-900 hover:bg-gray-50 lg:text-base lg:text-left"
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hjem
                </Link>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg text-center font-semibold text-gray-900 hover:bg-gray-50 lg:text-base lg:text-left"
                  to="/om-ki-merket"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Om KI-merket
                </Link>
                <a
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg text-center font-semibold text-gray-900 hover:bg-gray-50 lg:text-base lg:text-left"
                  href="/KI-merket-bruksmanual.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Last ned brukermanual
                </a>

                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-lg text-center font-semibold text-gray-900 hover:bg-gray-50 lg:text-base lg:text-left"
                  to="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt oss
                </Link>
                {/* {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.link}
                    download={item.download}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))} */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
