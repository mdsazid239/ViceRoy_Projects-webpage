// import { useEffect, useState } from "react";
// import api from "../services/api";
// import residencePoster from "../assets/images/residencePoster.mp4";
// const DESKTOP_VIDEO =
//   "https://viceroy-web.s3.dualstack.ap-south-1.amazonaws.com/Viceroy_Versova_05_5_26_B_compressed_788901f245_c62fe4b3c5.mp4";
// const MOBILE_VIDEO =
//   "https://viceroy-web.s3.dualstack.ap-south-1.amazonaws.com/Viceroy_Versova_05_5_26_B_compressed_788901f245_eed2373dbf.mp4";
// function ResidenceConfiguration() {
//   const [loading, setLoading] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//     };
//   }, []);

//   const handleDownloadBrochure = async () => {
//     try {
//       setLoading(true);
//       const response = await api.get("/brochure/download", {
//         responseType: "blob",
//       });
//       const blob = new Blob([response.data], {
//         type: "application/pdf",
//       });
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "Viceroy-Versova-Brochure.pdf";
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Brochure download error:", error);
//       alert("Unable to download brochure. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <section className="w-full bg-white">
//       <div className="mx-auto w-full max-w-[1440px]">
//         <div className="w-full overflow-hidden">
//           <video
//             key={isMobile ? "mobile" : "desktop"}
//             className="block h-auto min-h-[300px] w-full object-cover md:min-h-[600px]"
//             poster={residencePoster}
//             autoPlay
//             loop
//             muted
//             playsInline
//             preload="metadata"
//             controlsList="nodownload noplaybackrate"
//             disablePictureInPicture
//           >
//             <source
//               src={isMobile ? MOBILE_VIDEO : DESKTOP_VIDEO}
//               type="video/mp4"
//             />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="px-5 py-12 sm:px-8 md:px-12 lg:px-20 xl:px-24">
//           <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
//             <div>
//               <h3 className="max-w-[550px] font-new-spirit text-3xl font-light leading-[1.1] text-[#202020] sm:text-4xl md:text-5xl lg:text-[52px]">
//                 Every residence is a statement of calm and clarity
//               </h3>
//             </div>
//             <div>
//               <ul className="divide-y divide-[#d8d8d8] border-t border-[#d8d8d8]">
//                 <li className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
//                   <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
//                     Location
//                   </p>
//                   <p className="text-sm leading-6 text-[#222] sm:text-base">
//                     Versova, Andheri West
//                   </p>
//                 </li>
//                 <li className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
//                   <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
//                     Wings
//                   </p>
//                   <p className="text-sm leading-6 text-[#222] sm:text-base">
//                     1 tower
//                   </p>
//                 </li>
//                 <li className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
//                   <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
//                     Configurations
//                   </p>
//                   <div className="text-sm leading-7 text-[#222] sm:text-base">
//                     <p>
//                       3 BHK – 1850 sq ft – Starting at ₹10.8 Cr*
//                     </p>
//                     <p>
//                       4 BHK – 2890 sq ft – Starting at ₹16.5 Cr*
//                     </p>
//                   </div>
//                 </li>
//                 <li className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
//                   <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
//                     Availability
//                   </p>
//                   <p className="text-sm leading-6 text-[#222] sm:text-base">
//                     Under construction
//                   </p>
//                 </li>
//               </ul>
//               <div className="mt-8">
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default ResidenceConfiguration;


// import { useEffect, useRef, useState } from "react";
// import api from "../services/api";
// import residencePoster from "../assets/images/residencePoster.mp4";

// const DESKTOP_VIDEO =
//   "https://viceroy-web.s3.dualstack.ap-south-1.amazonaws.com/Viceroy_Versova_05_5_26_B_compressed_788901f245_c62fe4b3c5.mp4";

// const MOBILE_VIDEO =
//   "https://viceroy-web.s3.dualstack.ap-south-1.amazonaws.com/Viceroy_Versova_05_5_26_B_compressed_788901f245_eed2373dbf.mp4";

// function ResidenceConfiguration() {
//   const [loading, setLoading] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);

//   const videoRef = useRef(null);

//   // Detect mobile / desktop screen
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkScreenSize();

//     window.addEventListener("resize", checkScreenSize);

//     return () => {
//       window.removeEventListener("resize", checkScreenSize);
//     };
//   }, []);

//   // Toggle video sound
//   const handleSoundToggle = () => {
//     if (!videoRef.current) return;

//     const video = videoRef.current;

//     video.muted = !video.muted;
//     setIsMuted(video.muted);

//     // Some browsers pause video when audio is enabled.
//     if (!video.paused) return;

//     video.play().catch(() => {});
//   };

//   // Download brochure
//   const handleDownloadBrochure = async () => {
//     try {
//       setLoading(true);

//       const response = await api.get("/brochure/download", {
//         responseType: "blob",
//       });

//       const blob = new Blob([response.data], {
//         type: "application/pdf",
//       });

//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement("a");

//       link.href = url;
//       link.download = "Viceroy-Versova-Brochure.pdf";

//       document.body.appendChild(link);
//       link.click();
//       link.remove();

//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Brochure download error:", error);

//       alert("Unable to download brochure. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="w-full bg-white">
//       <div className="mx-auto w-full max-w-[1440px]">
//         {/* ================= VIDEO ================= */}
//         <div className="relative w-full overflow-hidden">
//           <video
//             ref={videoRef}
//             key={isMobile ? "mobile" : "desktop"}
//             className="block h-auto min-h-[300px] w-full object-cover md:min-h-[600px]"
//             poster={residencePoster}
//             autoPlay
//             loop
//             muted={isMuted}
//             playsInline
//             preload="metadata"
//             controlsList="nodownload noplaybackrate"
//             disablePictureInPicture
//           >
//             <source
//               src={isMobile ? MOBILE_VIDEO : DESKTOP_VIDEO}
//               type="video/mp4"
//             />

//             Your browser does not support the video tag.
//           </video>

//           {/* ================= SOUND BUTTON ================= */}
//           <button
//             type="button"
//             onClick={handleSoundToggle}
//             aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
//             className="
//               absolute
//               bottom-5
//               right-5
//               z-20
//               flex
//               items-center
//               justify-center
//               gap-2
//               rounded-full
//               border
//               border-white/40
//               bg-black/50
//               px-4
//               py-2.5
//               text-sm
//               font-medium
//               text-white
//               backdrop-blur-md
//               transition-all
//               duration-300
//               hover:bg-black/70
//               active:scale-95
//               sm:bottom-6
//               sm:right-6
//             "
//           >
//             {isMuted ? (
//               <>
//                 {/* Muted Icon */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   className="h-5 w-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M11 5 6 9H3v6h3l5 4V5Z"
//                   />

//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="m16 9 5 6m0-6-5 6"
//                   />
//                 </svg>

//                 <span>Sound Off</span>
//               </>
//             ) : (
//               <>
//                 {/* Sound On Icon */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.8"
//                   className="h-5 w-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M11 5 6 9H3v6h3l5 4V5Z"
//                   />

//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15.5 8.5a5 5 0 0 1 0 7"
//                   />

//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M18.5 5.5a9 9 0 0 1 0 13"
//                   />
//                 </svg>

//                 <span>Sound On</span>
//               </>
//             )}
//           </button>
//         </div>

//         {/* ================= CONTENT ================= */}
//         <div className="px-5 py-12 sm:px-8 md:px-12 lg:px-20 xl:px-24">
//           <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
//             {/* LEFT CONTENT */}
//             <div>
//               <h3
//                 className="
//                   max-w-[550px]
//                   font-new-spirit
//                   text-3xl
//                   font-light
//                   leading-[1.1]
//                   text-[#202020]
//                   sm:text-4xl
//                   md:text-5xl
//                   lg:text-[52px]
//                 "
//               >
//                 Every residence is a statement of calm and clarity
//               </h3>
//             </div>

//             {/* RIGHT CONTENT */}
//             <div>
//               <ul className="divide-y divide-[#d8d8d8] border-t border-[#d8d8d8]">
//                 {/* Location */}
//                 <li
//                   className="
//                     grid
//                     grid-cols-1
//                     gap-2
//                     py-5
//                     sm:grid-cols-[180px_1fr]
//                     sm:gap-6
//                   "
//                 >
//                   <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
//                     Location
//                   </p>

//                   <p className="text-sm leading-6 text-[#222] sm:text-base">
//                     Versova, Andheri West
//                   </p>
//                 </li>

//                 {/* Wings */}
//                 <li
//                   className="
//                     grid
//                     grid-cols-1
//                     gap-2
//                     py-5
//                     sm:grid-cols-[180px_1fr]
//                     sm:gap-6
//                   "
//                 >
//                   <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
//                     Wings
//                   </p>

//                   <p className="text-sm leading-6 text-[#222] sm:text-base">
//                     1 tower
//                   </p>
//                 </li>

//                 {/* Configurations */}
//                 <li
//                   className="
//                     grid
//                     grid-cols-1
//                     gap-2
//                     py-5
//                     sm:grid-cols-[180px_1fr]
//                     sm:gap-6
//                   "
//                 >
//                   <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
//                     Configurations
//                   </p>

//                   <div className="text-sm leading-7 text-[#222] sm:text-base">
//                     <p>3 BHK – 1850 sq ft – Starting at ₹10.8 Cr*</p>

//                     <p>4 BHK – 2890 sq ft – Starting at ₹16.5 Cr*</p>
//                   </div>
//                 </li>

//                 {/* Availability */}
//                 <li
//                   className="
//                     grid
//                     grid-cols-1
//                     gap-2
//                     py-5
//                     sm:grid-cols-[180px_1fr]
//                     sm:gap-6
//                   "
//                 >
//                   <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
//                     Availability
//                   </p>

//                   <p className="text-sm leading-6 text-[#222] sm:text-base">
//                     Under construction
//                   </p>
//                 </li>
//               </ul>

//               {/* Brochure button can be added here if required */}
//               <div className="mt-8">
//                 {/* 
//                 <button
//                   type="button"
//                   onClick={handleDownloadBrochure}
//                   disabled={loading}
//                   className="..."
//                 >
//                   {loading ? "Downloading..." : "Download Brochure"}
//                 </button>
//                 */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ResidenceConfiguration;



import { useEffect, useRef, useState } from "react";
import api from "../services/api";
import residencePoster from "../assets/images/residencePoster.mp4";

const DESKTOP_VIDEO =
  "https://viceroy-web.s3.dualstack.ap-south-1.amazonaws.com/Viceroy_Versova_05_5_26_B_compressed_788901f245_c62fe4b3c5.mp4";

const MOBILE_VIDEO =
  "https://viceroy-web.s3.dualstack.ap-south-1.amazonaws.com/Viceroy_Versova_05_5_26_B_compressed_788901f245_eed2373dbf.mp4";

function ResidenceConfiguration() {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef(null);

  /* ================= SCREEN SIZE ================= */

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  /* ================= SOUND TOGGLE ================= */

  const handleSoundToggle = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      const nextMuted = !isMuted;

      if (!nextMuted) {
        // SOUND ON
        video.muted = false;
        video.volume = 1;

        if (video.paused) {
          await video.play();
        }
      } else {
        // SOUND OFF
        video.muted = true;
      }

      setIsMuted(nextMuted);
    } catch (error) {
      console.error("Video sound error:", error);
    }
  };

  /* ================= BROCHURE DOWNLOAD ================= */

  const handleDownloadBrochure = async () => {
    try {
      setLoading(true);

      const response = await api.get("/brochure/download", {
        responseType: "blob",
      });

      const blob = new Blob([response.data], {
        type: "application/pdf",
      });

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = "Viceroy-Versova-Brochure.pdf";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Brochure download error:", error);

      alert("Unable to download brochure. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= VIDEO ================= */

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* ================= VIDEO ================= */}

        <div className="relative w-full overflow-hidden">
          <video
            ref={videoRef}
            key={isMobile ? "mobile" : "desktop"}
            className="block h-auto min-h-[300px] w-full object-cover md:min-h-[600px]"
            poster={residencePoster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            controlsList="nodownload noplaybackrate"
            disablePictureInPicture
          >
            <source
              src={isMobile ? MOBILE_VIDEO : DESKTOP_VIDEO}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="px-5 py-12 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* LEFT */}

            <div>
              <h3
                className="
                  max-w-[550px]
                  font-new-spirit
                  text-3xl
                  font-light
                  leading-[1.1]
                  text-[#202020]
                  sm:text-4xl
                  md:text-5xl
                  lg:text-[52px]
                "
              >
                Every residence is a statement of calm and clarity
              </h3>
            </div>

            {/* RIGHT */}

            <div>
              <ul className="divide-y divide-[#d8d8d8] border-t border-[#d8d8d8]">
                {/* Location */}

                <li className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
                    Location
                  </p>
                  <p className="text-sm leading-6 text-[#222] sm:text-base">
                    Versova, Andheri West
                  </p>
                </li>

                {/* Wings */}

                <li className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
                    Wings
                  </p>
                  <p className="text-sm leading-6 text-[#222] sm:text-base">
                    1 tower
                  </p>
                </li>

                {/* Configurations */}

                <li className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
                    Configurations
                  </p>
                  <div className="text-sm leading-7 text-[#222] sm:text-base">
                    <p>3 BHK – 1850 sq ft – Starting at ₹10.8 Cr*</p>
                    <p>4 BHK – 2890 sq ft – Starting at ₹16.5 Cr*</p>
                  </div>
                </li>

                {/* Availability */}

                <li className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#777]">
                    Availability
                  </p>
                  <p className="text-sm leading-6 text-[#222] sm:text-base">
                    Under construction
                  </p>
                </li>
              </ul>

              <div className="mt-8">
                {/* Brochure button if required */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResidenceConfiguration;