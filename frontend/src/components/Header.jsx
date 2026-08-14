import { useState } from "react";
import logo from "../assets/images/VP-VV-Logo LockUp.png";
const navItems = [
  { label: "Home", target: "home" },
  { label: "Overview", target: "overview" },
  { label: "Highlights", target: "highlights" },
  { label: "Amenities", target: "amenities" },
  { label: "Floor Plans", target: "floor-plans" },
  { label: "Gallery", target: "gallery" },
  { label: "Location", target: "location" },
  { label: "Contact", target: "contact" },
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
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-black/5 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8 xl:px-10">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Viceroy Versova"
            className="h-9 w-auto object-contain sm:h-11 lg:h-12"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => scrollToSection(item.target)}
              className="whitespace-nowrap text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-black focus:outline-none focus-visible:text-black"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="hidden shrink-0 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 lg:block xl:px-6 xl:py-3"
        >
          Enquire Now
        </button>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 lg:hidden"
        >
          <span className="relative flex h-5 w-6 flex-col justify-between">
            <span
              className={`block h-0.5 w-6 origin-center bg-black transition-all duration-300 ${
                menuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`block h-0.5 w-6 origin-center bg-black transition-all duration-300 ${
                menuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile / Tablet Navigation */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-h-[calc(100vh-4rem)] max-w-7xl overflow-y-auto px-4 py-3 sm:px-6">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => scrollToSection(item.target)}
                className="border-b border-gray-100 py-3.5 text-left text-sm font-medium text-gray-700 transition-colors hover:text-black active:bg-gray-50"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile CTA */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-4 w-full rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-gray-800 active:bg-gray-900"
            >
              Enquire Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;