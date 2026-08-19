import { useState } from "react";
import contrac from "../assets/images/A-IMG-1.png";
import convex from "../assets/images/A-IMG-2.png";
import boiler from "../assets/images/A-IMG-3.png";
import smicond from "../assets/images/A-IMG-4.png";
import loyla from "../assets/images/A-IMG-5.png";
import margft from "../assets/images/A-IMG-6.png";
const amenities = [
  {
    id: 1,
    image: contrac,
    title: "Premium Residences",
    description:
      "Only 83 exclusive residences creating a private, like-minded community.",
  },
  {
    id: 2,
    image: convex,
    title: "Grand Entrance",
    description:
      "First habitable floor at ≈110 ft offering elevated privacy and quieter living.",
  },
  {
    id: 3,
    image: boiler,
    title: "Landscape & Gardens",
    description:
      "8 ft. deep private decks that extend your home into the outdoors across all residences.",
  },
  {
    id: 4,
    image: smicond,
    title: "Lifestyle Amenities",
    description:
      "Generous ceiling heights of ≈10.3 ft enhancing light, space, and openness.",
  },
  {
    id: 5,
    image: loyla,
    title: "Contemporary Interiors",
    description:
      "French windows across all residences designed to maximise views and natural light.",
  },
  {
    id: 6,
    image: margft,
    title: "Exclusive Living",
    description:
      "Generous carpet areas offering more usable living space.",
  },
];

function Overview() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section
      id="amenities"
      className="viceroy-amenities-section bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="viceroy-amenities-container mx-auto max-w-7xl">
        {/* ================= HEADING ================= */}
        <div className="viceroy-amenities-heading mb-8 text-center sm:mb-10 lg:mb-12">
          <h2 className="viceroy-amenities-title text-3xl leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            AMENITIES
          </h2>
        </div>

        {/* ================= AMENITIES GRID ================= */}
        <div className="viceroy-amenities-grid grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {amenities.map((item) => (
            <div
              key={item.id}
              className="viceroy-amenities-card group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <button
                type="button"
                onClick={() => setActiveImage(item.image)}
                className="viceroy-amenities-image-button block w-full overflow-hidden focus:outline-none"
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="viceroy-amenities-image h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64 lg:h-72"
                />
              </button>

              {/* Content */}
              <div className="viceroy-amenities-content flex flex-1 flex-col px-4 py-5 sm:px-5 sm:py-6">
                <h3 className="viceroy-amenities-card-title text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
                  {item.title}
                </h3>

                <p className="viceroy-amenities-card-description mt-2 whitespace-pre-line text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {activeImage && (
        <div
          className="viceroy-amenities-lightbox fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="viceroy-amenities-close absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Close image"
          >
            ×
          </button>

          {/* Full Image */}
          <img
            src={activeImage}
            alt="Amenity preview"
            className="viceroy-amenities-lightbox-image max-h-[85vh] max-w-full rounded-lg object-contain sm:max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Overview;