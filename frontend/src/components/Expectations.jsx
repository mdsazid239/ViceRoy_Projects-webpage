// import React, { useEffect, useRef, useState } from "react";
// import ocean from "../assets/images/ocean-2.mp4";
// import viceroyLogo from "../assets/images/Viceroy-Logo.png";

// const Expectations = () => {
//   const videoRef = useRef(null);
//   const [soundOn, setSoundOn] = useState(false);

//   useEffect(() => {
//     const video = videoRef.current;

//     if (!video) return;

//     video.muted = true;
//     video.volume = 1;

//     const startVideo = async () => {
//       try {
//         await video.play();
//       } catch (error) {
//         console.error("Video play error:", error);
//       }
//     };

//     startVideo();

//     return () => {
//       video.pause();
//     };
//   }, []);

//   const toggleSound = async () => {
//     const video = videoRef.current;

//     if (!video) return;

//     try {
//       if (video.muted) {
//         video.muted = false;
//         video.volume = 1;

//         await video.play();

//         setSoundOn(true);
//       } else {
//         video.muted = true;
//         setSoundOn(false);
//       }
//     } catch (error) {
//       console.error("Audio error:", error);
//     }
//   };

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <main className="w-full overflow-hidden bg-[#1d2723]">
//       <section
//         className="
//           relative
//           h-[100svh]
//           min-h-[560px]
//           max-h-[900px]
//           w-full
//           overflow-hidden

//           sm:h-[90vh]
//           md:h-[85vh]
//           lg:h-[80vh]
//           xl:h-[82vh]
//           2xl:h-[85vh]
//         "
//       >
//         {/* VIDEO */}
//         <video
//           ref={videoRef}
//           src={ocean}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           className="
//             absolute
//             inset-0
//             z-0
//             h-full
//             w-full
//             object-cover
//           "
//         />

//         {/* OVERLAY */}
//         <div className="absolute inset-0 z-10 bg-black/40" />

//         {/* LOGO */}
//         <div
//           className="
//             absolute
//             left-1/2
//             top-7
//             z-20
//             -translate-x-1/2
//             sm:top-9
//             md:top-11
//             lg:top-12
//             xl:top-14
//           "
//         >
//           <img
//             src={viceroyLogo}
//             alt="Viceroy Logo"
//             className="
//               h-auto
//               w-[150px]
//               sm:w-[180px]
//               md:w-[210px]
//               lg:w-[240px]
//               xl:w-[270px]
//             "
//           />
//         </div>

//         {/* CONTENT */}
//         <div
//           className="
//             absolute
//             left-1/2
//             top-1/2
//             z-20
//             flex
//             w-full
//             -translate-x-1/2
//             -translate-y-1/2
//             flex-col
//             items-center
//             px-5
//             text-center
//             text-white
//           "
//         >
//           <h2
//             className="
//               font-serif
//               text-[25px]
//               font-normal
//               leading-tight
//               text-[#c6a958]
//               sm:text-[30px]
//               md:text-[34px]
//               lg:text-[38px]
//               xl:text-[44px]
//               2xl:text-[50px]
//             "
//           >
//             Come Home To Calm
//           </h2>

//           <p className="mt-2 text-[13px] font-medium sm:text-[15px] md:text-[16px] lg:text-[17px]">
//             Luxury Living in Versova
//           </p>

//           <p className="mt-5 text-[12px] font-medium sm:text-[14px] md:text-[15px]">
//             3 BHK – 1850 sq ft – Starting at ₹10.8 Cr*
//           </p>

//           <p className="mt-2 text-[12px] font-medium sm:text-[14px] md:text-[15px]">
//             4 BHK – 2890 sq ft – Starting at ₹16.5 Cr*
//           </p>

//           <button
//             type="button"
//             onClick={() => scrollToSection("contact")}
//             className="
//               mt-7
//               bg-[#b49a58]
//               px-5
//               py-3
//               text-[12px]
//               font-medium
//               text-white
//               transition
//               hover:scale-[1.02]
//               hover:bg-[#9f874d]
//               sm:px-6
//               sm:py-3.5
//               sm:text-[13px]
//               md:px-7
//               md:text-[14px]
//               lg:px-8
//               lg:py-4
//             "
//           >
//             Book an appointment
//           </button>
//         </div>

//         {/* SOUND BUTTON */}
//         <button
//           type="button"
//           onClick={toggleSound}
//           aria-label={soundOn ? "Mute video" : "Play video sound"}
//           className="
//             absolute
//             bottom-6
//             left-5
//             z-30
//             flex
//             h-10
//             w-10
//             items-center
//             justify-center
//             rounded-full
//             border
//             border-white/60
//             bg-black/40
//             text-white
//             backdrop-blur-sm
//             transition
//             hover:scale-110
//             hover:bg-black/60
//             sm:bottom-8
//             sm:left-7
//           "
//         >
//           {soundOn ? (
//             <svg
//               viewBox="0 0 24 24"
//               className="h-5 w-5 fill-white"
//             >
//               <path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
//             </svg>
//           ) : (
//             <svg
//               viewBox="0 0 24 24"
//               className="h-5 w-5 fill-white"
//             >
//               <path d="M3 10v4h4l5 5V5L7 10H3zm13.59 2 2.71-2.71-1.41-1.41L15.18 10l-2.71-2.71-1.41 1.41L13.77 11l-2.71 2.71 1.41 1.41L15.18 12l2.71 2.71 1.41-1.41L16.59 12z" />
//             </svg>
//           )}
//         </button>
//       </section>
//     </main>
//   );
// };

// export default Expectations;

import React, { useEffect, useRef, useState } from "react";
import viceroyLogo from "../assets/images/Viceroy-Logo.png";

const DESKTOP_VIDEO =
  "https://viceroy-web.s3.dualstack.ap-south-1.amazonaws.com/Banner_Video_3fc3f07ee1.mp4";

const MOBILE_VIDEO =
  "https://viceroy-web.s3.dualstack.ap-south-1.amazonaws.com/Banner_Video_f6a3eee17c.mp4";

const Expectations = () => {
  const videoRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Autoplay must start muted
    video.muted = true;
    video.volume = 1;

    const startVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.error("Video autoplay error:", error);
      }
    };

    startVideo();

    return () => {
      video.pause();
    };
  }, []);

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
      console.error("Sound enable error:", error);
    }
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="w-full overflow-hidden bg-[#1d2723]">
      <section
        className="
          relative
          h-[100svh]
          min-h-[560px]
          max-h-[900px]
          w-full
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
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          className="
            absolute
            inset-0
            z-0
            h-full
            w-full
            object-cover
            object-center
          "
        >
          {/* Desktop */}
          <source
            src={DESKTOP_VIDEO}
            media="(min-width: 768px)"
            type="video/mp4"
          />

          {/* Mobile */}
          <source
            src={MOBILE_VIDEO}
            media="(max-width: 767px)"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

        {/* ========================================
            OVERLAY
        ======================================== */}
        <div className="absolute inset-0 z-10 bg-black/40" />

        {/* ========================================
            LOGO
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
            CONTENT
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
              hover:scale-[1.02]
              hover:bg-[#9f874d]

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
            SOUND BUTTON
        ======================================== */}
        <button
          type="button"
          onClick={toggleSound}
          aria-label={soundOn ? "Mute video" : "Unmute video"}
          className="
            absolute
            bottom-6
            left-5
            z-30
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/60
            bg-black/40
            text-white
            backdrop-blur-sm
            transition-all
            duration-300
            hover:scale-110
            hover:bg-black/60

            sm:bottom-8
            sm:left-7

            md:bottom-9
            md:left-9

            lg:bottom-10
            lg:left-10

            xl:bottom-12
            xl:left-12
          "
        >
          {soundOn ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-white"
              aria-hidden="true"
            >
              <path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 16.5 12zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-white"
              aria-hidden="true"
            >
              <path d="M3 10v4h4l5 5V5L7 10H3zm13.59 2 2.71-2.71-1.41-1.41L15.18 10l-2.71-2.71-1.41 1.41L13.77 11l-2.71 2.71 1.41 1.41L15.18 12l2.71 2.71 1.41-1.41L16.59 12z" />
            </svg>
          )}
        </button>
      </section>
    </main>
  );
};

export default Expectations;