import React, { useEffect, useRef, useState } from "react";
import ocean from "../assets/images/ocean-2.mp4";
import viceroyLogo from "../assets/images/Viceroy-Logo.png";

const Expectations = () => {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(true);

  // ============================================
  // AUTOPLAY VIDEO WITH SOUND
  // ============================================
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = false;
    video.volume = 1;

    const playVideo = async () => {
      try {
        await video.play();
        setSoundOn(true);
      } catch (error) {
        console.log(
          "Browser blocked autoplay with sound:",
          error
        );

        /*
         * Browser autoplay policy can block sound.
         * In that case, fallback to muted autoplay.
         */
        try {
          video.muted = true;
          video.volume = 1;
          await video.play();
          setSoundOn(false);
        } catch (fallbackError) {
          console.log(
            "Video autoplay was blocked:",
            fallbackError
          );
        }
      }
    };

    playVideo();

    return () => {
      video.pause();
    };
  }, []);

  // ============================================
  // ENABLE / DISABLE SOUND
  // ============================================
  const toggleSound = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.muted) {
        video.muted = false;
        video.volume = 1;

        await video.play();

        setSoundOn(true);
      } else {
        video.muted = true;

        setSoundOn(false);
      }
    } catch (error) {
      console.log(
        "Sound could not be enabled:",
        error
      );
    }
  };

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="w-full overflow-hidden bg-[#1d2723]">
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section
        className="
          relative
          w-full
          h-[100svh]
          min-h-[560px]
          max-h-[900px]
          overflow-hidden

          sm:h-[90vh]
          sm:min-h-[600px]

          md:h-[85vh]
          md:min-h-[650px]

          lg:h-[80vh]
          lg:min-h-[680px]

          xl:h-[82vh]
          xl:min-h-[720px]

          2xl:h-[85vh]
          2xl:min-h-[760px]
        "
      >
        {/* ========================================
            BACKGROUND VIDEO
        ======================================== */}
        <video
          ref={videoRef}
          src={ocean}
          autoPlay
          playsInline
          preload="auto"
          loop
          className="
            absolute
            inset-0
            z-0
            h-full
            w-full
            object-cover
            object-center

            sm:object-center
            md:object-center
            lg:object-center
          "
        />

        {/* ========================================
            DARK OVERLAY
        ======================================== */}
        <div
          className="
            absolute
            inset-0
            z-10
            bg-black/40

            sm:bg-black/35
            md:bg-black/35
            lg:bg-black/30
          "
        />

        {/* ========================================
            VICEROY LOGO
        ======================================== */}
        <div
          className="
            absolute
            left-1/2
            top-7
            z-20
            -translate-x-1/2

            sm:top-9
            md:top-11
            lg:top-12
            xl:top-14
            2xl:top-16
          "
        >
          <img
            src={viceroyLogo}
            alt="Viceroy Logo"
            className="
              h-auto
              w-[150px]
              object-contain

              sm:w-[180px]
              md:w-[210px]
              lg:w-[240px]
              xl:w-[270px]
              2xl:w-[300px]
            "
          />
        </div>

        {/* ========================================
            HERO CONTENT
        ======================================== */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            z-20
            flex
            w-full
            -translate-x-1/2
            -translate-y-1/2
            flex-col
            items-center
            px-5
            text-center
            text-white

            sm:px-8
            md:px-10
            lg:px-12
            xl:px-16
          "
        >
          {/* ======================================
              MAIN HEADING
          ====================================== */}
          <h2
            className="
              font-serif
              font-normal
              leading-tight
              text-[#c6a958]

              text-[25px]

              sm:text-[30px]

              md:text-[34px]

              lg:text-[38px]

              xl:text-[44px]

              2xl:text-[50px]
            "
          >
            Come Home To Calm
          </h2>

          {/* ======================================
              SUBTITLE
          ====================================== */}
          <p
            className="
              mt-2
              font-medium

              text-[13px]

              sm:text-[15px]

              md:text-[16px]

              lg:text-[17px]

              xl:text-[18px]

              2xl:text-[20px]
            "
          >
            Luxury Living in Versova
          </p>

          {/* ======================================
              3 BHK
          ====================================== */}
          <p
            className="
              mt-5
              font-medium

              text-[12px]

              sm:text-[14px]

              md:text-[15px]

              lg:text-[16px]

              xl:text-[17px]

              2xl:text-[18px]
            "
          >
            3 BHK – 1850 sq ft – Starting at ₹10.8 Cr*
          </p>

          {/* ======================================
              4 BHK
          ====================================== */}
          <p
            className="
              mt-2
              font-medium

              text-[12px]

              sm:mt-3
              sm:text-[14px]

              md:text-[15px]

              lg:text-[16px]

              xl:text-[17px]

              2xl:text-[18px]
            "
          >
            4 BHK – 2890 sq ft – Starting at ₹16.5 Cr*
          </p>

          {/* ======================================
              CTA BUTTON
          ====================================== */}
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="
              mt-7
              bg-[#b49a58]
              px-5
              py-3
              text-[12px]
              font-medium
              text-white
              transition-all
              duration-300

              hover:bg-[#9f874d]
              hover:scale-[1.02]

              sm:mt-8
              sm:px-6
              sm:py-3.5
              sm:text-[13px]

              md:mt-9
              md:px-7
              md:text-[14px]

              lg:mt-10
              lg:px-8
              lg:py-4
              lg:text-[15px]

              xl:mt-11
              xl:px-9
              xl:py-4
              xl:text-[16px]

              2xl:px-10
              2xl:py-[18px]
            "
          >
            Book an appointment
          </button>
        </div>
        {/* ========================================
            DOWN ARROW
        ======================================== */}
        <button
          type="button"
          onClick={() => scrollToSection("discover")}
          aria-label="Scroll down"
          className="
            absolute
            bottom-6
            right-5
            z-30
            flex
            h-9
            w-9
            items-center
            justify-center

            sm:right-7
            sm:bottom-8

            md:right-9
            md:bottom-9

            lg:right-10
            lg:bottom-10

            xl:right-12
            xl:bottom-12
          "
        >
          <span
            className="
              block
              h-3
              w-3
              rotate-45
              border-b
              border-r
              border-white

              sm:h-3.5
              sm:w-3.5

              md:h-4
              md:w-4
            "
          />
        </button>
      </section>
    </main>
  );
};

export default Expectations;