import { useState } from "react";
import logo from "../assets/images/VP-VV-Logo-LockUp.png";
const navItems = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
   { label: "Project", target: "project" },
  { label: "Gallery", target: "gallery" },
  { label: "Amenities", target: "amenities" },
  { label: "Contact", target: "contact" },
  { label: "Location", target: "location" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (target) => {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] w-full bg-white shadow-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-4 sm:h-[80px] sm:px-6 md:px-8 lg:h-[84px] lg:px-10 xl:px-14">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          aria-label="Go to Home"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Viceroy Properties - Viceroy Versova"
            draggable="false"
            className="block h-9 w-auto max-w-[190px] object-contain sm:h-11 sm:max-w-[220px] md:h-12 md:max-w-[240px] lg:h-14 lg:max-w-[260px] xl:h-16 xl:max-w-[290px]"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center lg:flex lg:gap-4 xl:gap-6 2xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => scrollToSection(item.target)}
              className="whitespace-nowrap text-sm font-medium text-[#0a645a] transition duration-200 hover:text-[#084f47] focus:outline-none xl:text-[15px]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Enquire Button */}
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="hidden shrink-0 rounded-full bg-[#0a645a] px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-[#084f47] focus:outline-none focus:ring-2 focus:ring-[#0a645a] focus:ring-offset-2 lg:block xl:px-6 xl:py-3"
        >
          Enquire Now
        </button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#0a645a]/20 bg-white lg:hidden"
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 block h-[2px] w-6 bg-[#0a645a] transition-all duration-300 ${
                menuOpen ? "top-[9px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[9px] block h-[2px] w-6 bg-[#0a645a] transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-[18px] block h-[2px] w-6 bg-[#0a645a] transition-all duration-300 ${
                menuOpen ? "top-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[calc(100vh-72px)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="max-h-[calc(100vh-72px)] overflow-y-auto px-4 py-4 sm:px-6 md:px-8">
          <div className="mx-auto flex w-full max-w-2xl flex-col">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => scrollToSection(item.target)}
                className="w-full border-b border-gray-100 px-2 py-4 text-left text-base font-medium text-[#0a645a] transition duration-200 hover:bg-gray-50 hover:text-[#084f47] active:bg-gray-100"
              >
                {item.label}
              </button>
            ))}

            {/* <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-5 w-full rounded-full bg-[#0a645a] px-6 py-3.5 text-base font-semibold text-white transition duration-200 hover:bg-[#084f47] active:bg-[#063d37]"
            >
              Enquire Now
            </button> */}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;