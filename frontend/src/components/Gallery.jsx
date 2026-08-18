import { useState } from "react";
import gallery1 from "../assets/images/gallery-1.webp";
import gallery2 from "../assets/images/gallery-2.webp";
import gallery3 from "../assets/images/gallery-3.webp";
import gallery4 from "../assets/images/gallery-4.webp";
import gallery5 from "../assets/images/gallery-5.webp";
import gallery6 from "../assets/images/gallery-6.webp";
import gallery7 from "../assets/images/gallery-7.webp";
import gallery8 from "../assets/images/gallery-8.webp";
import gallery9 from "../assets/images/gallery-9.webp";
import gallery10 from "../assets/images/gallery-10.webp";
const galleryImages = [
  {
    id: 1,
    image: gallery1,
    title: "Landscape",
    alt: "Visava Landscape",
  },
  {
    id: 2,
    image: gallery2,
    title: "Living room",
    alt: "Visava Living Room",
  },
  {
    id: 3,
    image: gallery3,
    title: "Dining room",
    alt: "Visava Dining Room",
  },
  {
    id: 4,
    image: gallery4,
    title: "Bedroom",
    alt: "Visava Bedroom",
  },
  {
    id: 5,
    image: gallery5,
    title: "Interior",
    alt: "Visava Interior",
  },
  {
    id: 6,
    image: gallery6,
    title: "Amenities",
    alt: "Visava Amenities",
  },
  {
    id: 7,
    image: gallery7,
    title: "Terrace",
    alt: "Visava Terrace",
  },
  {
    id: 8,
    image: gallery8,
    title: "Architecture",
    alt: "Visava Architecture",
  },
  {
    id: 9,
    image: gallery9,
    title: "Exterior",
    alt: "Visava Exterior",
  },
  {
    id: 10,
    image: gallery10,
    title: "Residence",
    alt: "Visava Residence",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const totalImages = galleryImages.length;

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % totalImages);
  };

  const goPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + totalImages) % totalImages
    );
  };

  const getPosition = (index) => {
    let difference = index - activeIndex;

    if (difference > totalImages / 2) {
      difference -= totalImages;
    }

    if (difference < -totalImages / 2) {
      difference += totalImages;
    }

    return difference;
  };

  return (
    <>
      {/* =====================================================
          GALLERY SECTION
      ====================================================== */}
      <section
        id="gallery"
        className="
          relative
          w-full
          overflow-hidden
          bg-[#202722]
          py-14
          sm:py-16
          md:py-20
          lg:py-24
          xl:py-28
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}
        <div
          className="
            mx-auto
            mb-10
            w-[90%]
            max-w-[1200px]
            text-center
            sm:mb-12
            md:mb-16
            lg:mb-20
          "
        >
          <h2
            className="
              font-['New Spirit Light Condensed']
              text-[30px]
              font-light
              leading-[1.12]
              tracking-[-0.02em]
              text-[#d7b66c]
              sm:text-[36px]
              md:text-[44px]
              lg:text-[50px]
              xl:text-[60px]
            "
          >
            <span className="condensed">
              VISAVA is our idea of rest, reimagined.
              <br />
            </span>
            <span className="condensed">
              An oasis designed to welcome you back,
              <br className="hidden sm:block" />
              not just home, but into calm.
            </span>
            
          </h2>
        </div>

        {/* =====================================================
            DESKTOP / TABLET CAROUSEL
        ====================================================== */}
        <div className="relative hidden w-full md:block">
          <div
            className="
              relative
              mx-auto
              flex
              h-[400px]
              w-full
              max-w-[1600px]
              items-center
              justify-center
              overflow-hidden
              lg:h-[450px]
              xl:h-[480px]
            "
          >
            {galleryImages.map((item, index) => {
              const position = getPosition(index);

              if (Math.abs(position) > 1) {
                return null;
              }

              const isActive = position === 0;
              const isPrevious = position === -1;

              return (
                <div
                  key={item.id}
                  className={`
                    absolute
                    top-0
                    overflow-visible
                    transition-all
                    duration-700
                    ease-[cubic-bezier(0.22,0.9,0.3,1)]

                    h-[390px]
                    lg:h-[440px]
                    xl:h-[470px]

                    ${
                      isActive
                        ? `
                          left-1/2
                          z-20
                          w-[44vw]
                          max-w-[680px]
                          -translate-x-1/2
                        `
                        : isPrevious
                        ? `
                          left-[-5%]
                          z-10
                          w-[32vw]
                          max-w-[500px]
                        `
                        : `
                          right-[-5%]
                          z-10
                          w-[32vw]
                          max-w-[500px]
                        `
                    }
                  `}
                >
                  {/* IMAGE */}
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item.image)}
                    className="
                      group
                      relative
                      block
                      h-full
                      w-full
                      cursor-pointer
                      overflow-hidden
                    "
                    aria-label={`View ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="
                        block
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.03]
                      "
                    />

                    {/* Artist Impression */}
                    <span
                      className="
                        absolute
                        bottom-2
                        right-3
                        text-[8px]
                        font-light
                        tracking-wide
                        text-white/90
                        sm:text-[9px]
                      "
                    >
                      Artist's Impression
                    </span>

                    {/* Fullscreen Icon */}
                    <span
                      className="
                        absolute
                        right-3
                        top-3
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#202722]
                        shadow-md
                        transition
                        duration-300
                        group-hover:scale-105
                        sm:right-4
                        sm:top-4
                        sm:h-9
                        sm:w-9
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-4 w-4"
                      >
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                        <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
                        <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                      </svg>
                    </span>
                  </button>

                  {/* TITLE */}
                  <p
                    className="
                      absolute
                      left-0
                      top-full
                      mt-2
                      text-xs
                      font-light
                      tracking-wide
                      text-white/80
                      sm:text-sm
                    "
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}

            {/* =================================================
                PREVIOUS BUTTON
            ================================================== */}
            <button
              type="button"
              onClick={goPrevious}
              className="
                absolute
                left-[3%]
                top-1/2
                z-30
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#202722]
                shadow-md
                transition
                duration-300
                hover:scale-105
                lg:left-[5%]
                lg:h-10
                lg:w-10
                xl:left-[7%]
              "
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* =================================================
                NEXT BUTTON
            ================================================== */}
            <button
              type="button"
              onClick={goNext}
              className="
                absolute
                right-[3%]
                top-1/2
                z-30
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#202722]
                shadow-md
                transition
                duration-300
                hover:scale-105
                lg:right-[5%]
                lg:h-10
                lg:w-10
                xl:right-[7%]
              "
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE CAROUSEL
        ====================================================== */}
        <div className="block w-full md:hidden">
          <div className="relative w-full overflow-hidden">
            <div
              className="
                flex
                w-full
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,0.9,0.3,1)]
              "
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {galleryImages.map((item, index) => (
                <div
                  key={item.id}
                  className="
                    box-border
                    w-full
                    min-w-full
                    shrink-0
                    px-5
                    sm:px-6
                  "
                >
                  {/* IMAGE */}
                  <button
                    type="button"
                    onClick={() => setSelectedImage(item.image)}
                    className="
                      group
                      relative
                      block
                      aspect-[4/3]
                      w-full
                      overflow-hidden
                    "
                    aria-label={`View ${item.title}`}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading={index < 2 ? "eager" : "lazy"}
                      className="
                        block
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.03]
                      "
                    />

                    {/* Artist Impression */}
                    <span
                      className="
                        absolute
                        bottom-2
                        right-3
                        z-10
                        text-[8px]
                        font-light
                        tracking-wide
                        text-white
                        sm:text-[9px]
                      "
                    >
                      Artist's Impression
                    </span>

                    {/* Fullscreen Icon */}
                    <span
                      className="
                        absolute
                        right-3
                        top-3
                        z-10
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-[#202722]
                        shadow-md
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-4 w-4"
                      >
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                        <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
                        <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                      </svg>
                    </span>
                  </button>

                  {/* TITLE */}
                  <p
                    className="
                      mt-3
                      px-1
                      text-sm
                      font-light
                      tracking-wide
                      text-white/80
                    "
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* =================================================
                MOBILE PREVIOUS
            ================================================== */}
            <button
              type="button"
              onClick={goPrevious}
              className="
                absolute
                left-2
                top-[42%]
                z-30
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#202722]
                shadow-md
                transition
                active:scale-95
              "
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* =================================================
                MOBILE NEXT
            ================================================== */}
            <button
              type="button"
              onClick={goNext}
              className="
                absolute
                right-2
                top-[42%]
                z-30
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#202722]
                shadow-md
                transition
                active:scale-95
              "
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ====================================================== */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/90
            p-3
            sm:p-5
            md:p-8
          "
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-3
              top-3
              flex
              h-10
              w-10
              items-center
              justify-center
              text-3xl
              font-light
              text-white
              transition
              hover:opacity-70
              sm:right-5
              sm:top-5
            "
            aria-label="Close image"
          >
            ×
          </button>

          {/* PREVIEW IMAGE */}
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="
              block
              max-h-[85vh]
              max-w-[94vw]
              object-contain
              sm:max-h-[88vh]
              sm:max-w-[92vw]
              md:max-h-[90vh]
              md:max-w-[90vw]
            "
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default Gallery;