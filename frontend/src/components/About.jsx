import React from "react";
const About = () => {
  return (
    <section
      id="about"
      className="bg-white px-6 py-16 sm:px-10 lg:px-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b18a4a]">
            About Us
          </p>

          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Discover a Life of
            <span className="block text-[#b18a4a]">
              Elegance & Comfort
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            Viceroy Projects brings together thoughtful design, premium
            craftsmanship and modern living to create spaces that feel
            timeless, comfortable and truly exceptional.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Designed for the way you want to live.
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Every Viceroy project is thoughtfully planned with attention to
              architecture, functionality and aesthetics. From carefully
              designed residences to thoughtfully planned amenities, every
              detail is created to elevate everyday living.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our vision is to create developments that combine contemporary
              lifestyles with enduring value, giving residents a place they
              can proudly call home.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="border-l-2 border-[#b18a4a] pl-4">
                <h4 className="font-semibold text-gray-900">
                  Thoughtful Design
                </h4>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Spaces designed around comfort, functionality and elegance.
                </p>
              </div>

              <div className="border-l-2 border-[#b18a4a] pl-4">
                <h4 className="font-semibold text-gray-900">
                  Premium Quality
                </h4>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Quality materials and attention to every detail.
                </p>
              </div>

              <div className="border-l-2 border-[#b18a4a] pl-4">
                <h4 className="font-semibold text-gray-900">
                  Modern Living
                </h4>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Contemporary spaces created for today's lifestyle.
                </p>
              </div>

              <div className="border-l-2 border-[#b18a4a] pl-4">
                <h4 className="font-semibold text-gray-900">
                  Lasting Value
                </h4>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Developments built with long-term value in mind.
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-9 inline-flex items-center rounded-full bg-[#b18a4a] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#967337]"
            >
              Get In Touch
              <span className="ml-2">→</span>
            </button>
          </div>

          {/* Right Stats */}
          <div className="relative">
            <div className="rounded-2xl bg-[#f7f4ee] p-8 sm:p-10 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="text-3xl font-bold text-[#b18a4a]">
                    10+
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Years of Experience
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="text-3xl font-bold text-[#b18a4a]">
                    15+
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Projects Delivered
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="text-3xl font-bold text-[#b18a4a]">
                    500+
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Happy Families
                  </p>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="text-3xl font-bold text-[#b18a4a]">
                    100%
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Commitment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;