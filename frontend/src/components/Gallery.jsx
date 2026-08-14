import { useState } from "react";

import phylon from "../assets/images/PH-IMG-1.png";
import phgamn from "../assets/images/PH-IMG-2.png";
import wagra from "../assets/images/PH-IMG-3.png";
import sloicon from "../assets/images/PH-IMG-4.png";
import conma from "../assets/images/PH-IMG-5.png";
import malka from "../assets/images/PH-IMG-6.png";

const gallery = [
  {
    id: 1,
    image: phylon,
    title: "Premium Residences",
    description:
      "Only 83 exclusive residences creating a private, like-minded community.",
  },
  {
    id: 2,
    image: phgamn,
    title: "Grand Entrance",
    description:
      "First habitable floor at ≈110 ft offering elevated privacy and quieter living.",
  },
  {
    id: 3,
    image: wagra,
    title: "Landscape & Gardens",
    description:
      "8 ft. deep private decks that extend your home into the outdoors across all residences.",
  },
  {
    id: 4,
    image: sloicon,
    title: "Lifestyle Amenities",
    description:
      "Generous ceiling heights of ≈10.3 ft. enhancing light, space, and openness.",
  },
  {
    id: 5,
    image: conma,
    title: "Contemporary Interiors",
    description:
      "French windows across all residences designed to maximise views and natural light.",
  },
  {
    id: 6,
    image: malka,
    title: "Exclusive Living",
    description:
      "Generous carpet areas offering more usable living space.",
  },
];

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section
      id="gallery"
      className="bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Gallery
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <button
                type="button"
                onClick={() => setActiveImage(item.image)}
                className="block w-full overflow-hidden"
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-72"
                />
              </button>

              {/* Text Below Image */}
              <div className="px-5 py-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            aria-label="Close gallery"
          >
            ×
          </button>

          <img
            src={activeImage}
            alt="Gallery preview"
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;