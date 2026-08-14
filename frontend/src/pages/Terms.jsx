import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/VP-VV-Logo LockUp.png";

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

function Terms() {
  const navigate = useNavigate();

  // Start page from top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center"
            aria-label="Go to home"
          >
            <img
              src={logo}
              alt="Viceroy Properties"
              draggable="false"
              className="
                h-10
                w-auto
                max-w-[220px]
                object-contain
                sm:h-12
                lg:h-14
              "
            />
          </button>

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="
              rounded-full
              bg-[#0a645a]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#084f47]
              sm:px-6
              sm:py-3
            "
          >
            Back to Home
          </button>

        </div>
      </header>

      {/* =====================================================
          HERO TITLE
      ====================================================== */}
      <section className="bg-[#f5f7f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#0a645a]">
            Legal Information
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Terms &amp; Conditions
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#0a645a]" />

        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <main className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">

          {/* Introduction */}
          <div className="mb-10 rounded-xl border border-gray-100 bg-gray-50 p-5 sm:p-7 lg:p-8">
            <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              By accessing or using this landing page, you acknowledge that
              you have read, understood, and agree to be bound by the following
              Terms and Conditions.
            </p>
          </div>

          {/* Terms */}
          <div className="space-y-8">
            {terms.map((term) => (
              <section
                key={term.number}
                className="
                  border-b
                  border-gray-200
                  pb-8
                  last:border-b-0
                "
              >
                <div className="flex gap-4 sm:gap-5">

                  {/* Number */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0a645a]
                      text-sm
                      font-bold
                      text-white
                      sm:h-10
                      sm:w-10
                    "
                  >
                    {term.number}
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">

                    <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                      {term.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                      {term.content}
                    </p>

                  </div>
                </div>
              </section>
            ))}
          </div>

        </div>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="border-t border-gray-200 bg-[#0a645a]">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">

          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Moro Realities LLP. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-3 text-sm font-medium text-white underline underline-offset-4 transition hover:text-white/80"
          >
            Back to Home
          </button>

        </div>
      </footer>

    </div>
  );
}

export default Terms;