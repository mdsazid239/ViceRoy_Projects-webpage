import { useState } from "react";
import versovaImg1 from "../assets/images/Versova-Img-1.png";
import versovaImg2 from "../assets/images/Versova-Img-2.png";
const slides = [
  {
    id: 1,
    image: versovaImg1,
  },
  {
    id: 2,
    image: versovaImg2,
  },
];

const distances = [
  {
    distance: "≈0.9 km",
    title: "Versova Metro Station",
  },
  {
    distance: "≈2.1 km",
    title: "Andheri West Metro Station",
  },
  {
    distance: "≈4.1 km",
    title: "Andheri Railway Station",
  },
  {
    distance: "≈8.2 km",
    title: "Chhatrapati Shivaji Maharaj International Airport",
  },
];

function Location() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="location"
      className="bg-[] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT - IMAGE SLIDER */}
        <div className="relative overflow-hidden rounded-sm">
          {/* Image */}
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200">
            <img
              src={slides[currentSlide].image}
              alt={`Versova location map ${currentSlide + 1}`}
              className="h-full w-full object-cover transition-opacity duration-500"
            />

            {/* Previous Button */}
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-gray-800 shadow-md transition hover:bg-white sm:left-5 sm:h-11 sm:w-11"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-gray-800 shadow-md transition hover:bg-white sm:right-5 sm:h-11 sm:w-11"
            >
              ›
            </button>
          </div>

          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-7 bg-[#b18a4a]"
                    : "w-2.5 bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT - CONTENT */}
        <div>
          {/* Small Heading */}
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b18a4a] sm:text-sm">
            Location
          </span>

          {/* Main Heading */}
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            On a Land of Calm
          </h2>

          {/* Description */}
          <div className="mt-6 space-y-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            <p>
              Along Mumbai’s western coastline lies Versova, where the
              city’s pace softens and life finds its rhythm.
            </p>

            <p>
              From the mangroves to the streets, calm and energy coexist —
              creating a neighbourhood that feels connected to Mumbai, yet
              distinctly removed from its constant rush.
            </p>
          </div>

          {/* Connectivity */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Connected to everything that matters
            </h3>

            {/* Distance Grid */}
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {distances.map((item) => (
                <div
                  key={item.title}
                  className="border-b border-gray-300 pb-4"
                >
                  <p className="text-xl font-semibold text-[#b18a4a] sm:text-2xl">
                    {item.distance}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location; 



