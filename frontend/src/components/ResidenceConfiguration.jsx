import { useEffect, useState } from "react";
import api from "../services/api";

import residencePoster from "../assets/images/residencePoster.mp4";

const DESKTOP_VIDEO =
  "https://viceroy-web.s3.dualstack.ap-south-1.amazonaws.com/Viceroy_Versova_05_5_26_B_compressed_788901f245_c62fe4b3c5.mp4";

const MOBILE_VIDEO =
  "https://viceroy-web.s3.dualstack.ap-south-1.amazonaws.com/Viceroy_Versova_05_5_26_B_compressed_788901f245_eed2373dbf.mp4";

function ResidenceConfiguration() {
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px]">

        {/* ================= VIDEO ================= */}
        <div className="w-full overflow-hidden">
          <video
            key={isMobile ? "mobile" : "desktop"}
            className="block h-auto min-h-[300px] w-full object-cover md:min-h-[600px]"
            poster={residencePoster}
            autoPlay
            loop
            muted
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

            {/* ================= TITLE ================= */}
            <div>
              <h3 className="max-w-[550px] font-new-spirit text-3xl font-light leading-[1.1] text-[#202020] sm:text-4xl md:text-5xl lg:text-[52px]">
                Every residence is a statement of calm and clarity
              </h3>
            </div>

            {/* ================= DETAILS ================= */}
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
                    <p>
                      3 BHK – 1850 sq ft – Starting at ₹10.8 Cr*
                    </p>

                    <p>
                      4 BHK – 2890 sq ft – Starting at ₹16.5 Cr*
                    </p>
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

              {/* ================= CTA ================= */}
              <div className="mt-8">
                {/* <button
                  type="button"
                  onClick={handleDownloadBrochure}
                  disabled={loading}
                  className="inline-flex min-h-[52px] items-center justify-center border border-[#202020] px-7 py-3 text-xs uppercase tracking-[0.16em] text-[#202020] transition-all duration-300 hover:bg-[#202020] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:px-9"
                >
                  {loading ? "Downloading..." : "Download brochure"}
                </button> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ResidenceConfiguration;