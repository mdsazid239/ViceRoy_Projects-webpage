
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/VP-VV-Logo-LockUp.png";
const terms = [
  {
    number: "1",
    title: "Intellectual Property",
    content:
      "All content featured on this landing page, including but not limited to text, images, graphics, logos, designs, and other materials, is the property of Moro Realities LLP, the respective project developer, or its licensors. Such content is protected under applicable intellectual property laws. No content may be copied, reproduced, modified, distributed, published, or used for any purpose without prior written permission from the respective rights holder.",
  },
  {
    number: "2",
    title: "Property Information",
    content:
      "The information provided on this landing page, including property details, specifications, pricing, offers, availability, and other related information, is for general informational purposes only and may be changed or updated without prior notice. Moro Realities LLP makes reasonable efforts to ensure that the information presented is accurate and up to date but does not warrant its completeness or accuracy and shall not be responsible for any errors, omissions, or changes.",
  },
  {
    number: "3",
    title: "User Obligations",
    content:
      "Users are required to provide accurate, complete, and current information when submitting enquiries, forms, or requests through this landing page. Users agree not to use the landing page for any unlawful, fraudulent, abusive, or harmful purpose, including attempting to gain unauthorized access, distributing spam, introducing malicious software, or interfering with the operation or security of the website.",
  },
  {
    number: "4",
    title: "Privacy and Data Collection",
    content:
      "Moro Realities LLP may collect, store, process, and use personal information submitted through this landing page in accordance with its applicable Privacy Policy. The landing page may also use third-party services and technologies, including cookies, analytics tools, pixels, or similar tracking technologies, to understand user activity and improve the website and its services.",
  },
  {
    number: "5",
    title: "Disclaimer of Liability",
    content:
      "To the extent permitted by applicable law, Moro Realities LLP shall not be liable for any loss, damage, cost, or expense arising from or in connection with the use of this landing page or reliance on the information provided herein. This includes, without limitation, any direct, indirect, incidental, consequential, financial, or property-related loss or damage.",
  },
  {
    number: "6",
    title: "Third-Party Links",
    content:
      "This landing page may contain links to third-party websites, platforms, or resources for the user's convenience. Moro Realities LLP does not control or endorse such third-party websites and is not responsible for their content, availability, security, privacy practices, or terms and conditions.",
  },
  {
    number: "7",
    title: "Modifications to These Terms",
    content:
      "Moro Realities LLP reserves the right to modify, update, or revise these Terms and Conditions at any time without prior notice. Users are encouraged to review this page periodically to remain informed of any changes. Continued use of the landing page following any modifications shall constitute acceptance of the revised terms.",
  },
  {
    number: "8",
    title: "Governing Law and Jurisdiction",
    content:
      "These Terms and Conditions shall be governed by and construed in accordance with the applicable laws of India. Any disputes arising out of or in connection with the use of this landing page shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.",
  },
];

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Amenities", id: "amenities" },
  { label: "Gallery", id: "gallery" },
  { label: "Location", id: "location" },
  { label: "Contact", id: "contact" },
];

function Terms() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Home page
  const goHome = () => {
    setIsMenuOpen(false);
    navigate("/");
  };

  // Home page + section
  const goToSection = (sectionId) => {
    setIsMenuOpen(false);

    // If already on home page
    if (window.location.pathname === "/") {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Go to Home first
    navigate("/");

    // Wait for Home page to render
    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <div className="min-h-screen w-full bg-[#ffffff]">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#ffffff] shadow-sm">

        <div
          className="
            mx-auto
            flex
            min-h-16
            w-full
            max-w-7xl
            items-center
            justify-between
            gap-4
            px-4
            sm:min-h-20
            sm:px-6
            lg:px-8
            xl:px-10
          "
        >

          {/* LOGO */}
          <button
            type="button"
            onClick={goHome}
            aria-label="Go to Home"
            className="flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Viceroy Properties"
              draggable="false"
              className="
                h-8
                w-auto
                max-w-[170px]
                object-contain
                sm:h-10
                sm:max-w-[200px]
                md:h-11
                md:max-w-[220px]
                lg:h-12
                lg:max-w-[240px]
              "
            />
          </button>

          {/* ================= DESKTOP NAVBAR ================= */}
          <nav
            className="
              hidden
              items-center
              gap-1
              lg:flex
              xl:gap-2
            "
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  item.id === "home"
                    ? goHome()
                    : goToSection(item.id)
                }
                className="
                  rounded-lg
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-gray-700
                  transition
                  duration-300
                  hover:bg-gray-100
                  hover:text-[#0a645a]
                  xl:px-4
                  xl:text-base
                "
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* ================= HAMBURGER ================= */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              bg-[#ffffff]
              text-gray-800
              transition
              duration-300
              hover:bg-gray-100
              lg:hidden
              sm:h-11
              sm:w-11
              md:h-12
              md:w-12
            "
          >
            <span className="text-2xl leading-none sm:text-3xl">
              ☰
            </span>
          </button>
        </div>
      </header>

      {/* ================= MOBILE / TABLET MENU ================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">

          {/* OVERLAY */}
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
            className="
              absolute
              inset-0
              h-full
              w-full
              bg-black/50
            "
          />

          {/* MENU PANEL */}
          <aside
            className="
              absolute
              right-0
              top-0
              flex
              h-full
              w-[88%]
              max-w-[420px]
              flex-col
              overflow-y-auto
              bg-[#ffffff]
              shadow-2xl
              sm:w-[380px]
              md:w-[420px]
            "
          >

            {/* MENU HEADER */}
            <div
              className="
                flex
                shrink-0
                items-center
                justify-between
                border-b
                border-gray-200
                px-5
                py-4
                sm:px-7
                sm:py-5
              "
            >

              {/* MENU LOGO */}
              <button
                type="button"
                onClick={goHome}
                className="flex items-center"
              >
                <img
                  src={logo}
                  alt="Viceroy Properties"
                  draggable="false"
                  className="
                    h-8
                    w-auto
                    max-w-[170px]
                    object-contain
                    sm:h-10
                    sm:max-w-[200px]
                  "
                />
              </button>

              {/* CLOSE */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-3xl
                  text-gray-700
                  transition
                  hover:bg-gray-100
                  sm:h-11
                  sm:w-11
                "
              >
                ×
              </button>
            </div>

            {/* MOBILE NAV */}
            <nav
              className="
                flex
                flex-1
                flex-col
                gap-1
                px-5
                py-6
                sm:px-7
                sm:py-8
              "
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    item.id === "home"
                      ? goHome()
                      : goToSection(item.id)
                  }
                  className="
                    w-full
                    rounded-lg
                    px-4
                    py-3
                    text-left
                    text-base
                    font-medium
                    text-gray-700
                    transition
                    duration-300
                    hover:bg-gray-100
                    hover:text-[#0a645a]
                    sm:py-4
                    sm:text-lg
                  "
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="bg-[#ffffff] px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl text-center">

          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#0a645a]
              sm:text-sm
              sm:tracking-[0.25em]
            "
          >
            Legal Information
          </p>

          <h1
            className="
              text-3xl
              font-bold
              leading-tight
              text-gray-900
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Terms &amp; Conditions
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#0a645a]" />
        </div>
      </section>

      {/* ================= TERMS CONTENT ================= */}
      <main className="bg-[#ffffff] px-4 py-8 sm:px-6 sm:py-12 md:py-14 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-5xl">

          {/* INTRODUCTION */}
          <div
            className="
              mb-8
              rounded-xl
              border
              border-gray-100
              bg-[#ffffff]
              p-5
              sm:mb-10
              sm:p-7
              lg:p-8
            "
          >
            <p
              className="
                text-sm
                leading-7
                text-gray-600
                sm:text-base
                sm:leading-8
                lg:text-lg
              "
            >
              By accessing or using this landing page, you acknowledge that
              you have read, understood, and agree to be bound by the following
              Terms and Conditions.
            </p>
          </div>

          {/* TERMS */}
          <div className="space-y-7 sm:space-y-8">

            {terms.map((term) => (
              <section
                key={term.number}
                className="
                  border-b
                  border-gray-200
                  bg-[#ffffff]
                  pb-7
                  last:border-b-0
                  sm:pb-8
                "
              >
                <div className="flex items-start gap-3 sm:gap-5">

                  {/* NUMBER */}
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0a645a]
                      text-xs
                      font-bold
                      text-white
                      sm:h-10
                      sm:w-10
                      sm:text-sm
                    "
                  >
                    {term.number}
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">

                    <h2
                      className="
                        text-lg
                        font-semibold
                        leading-snug
                        text-gray-900
                        sm:text-xl
                        md:text-2xl
                      "
                    >
                      {term.title}
                    </h2>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-gray-600
                        sm:text-base
                        sm:leading-8
                      "
                    >
                      {term.content}
                    </p>

                  </div>
                </div>
              </section>
            ))}

          </div>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-200 bg-[#ffffff]">

        <div
          className="
            mx-auto
            max-w-7xl
            px-4
            py-7
            text-center
            sm:px-6
            sm:py-8
            lg:px-8
          "
        >
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Moro Realities LLP.
            All rights reserved.
          </p>
        </div>

      </footer>
    </div>
  );
}

export default Terms;