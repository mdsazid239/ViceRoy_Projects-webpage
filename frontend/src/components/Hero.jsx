import { useState } from "react";
import api from "../services/api";
import ContactForm from "./ContactForm";
import banner from "../assets/images/MastHead.png";
function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // MOBILE NUMBER
  // =========================
  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    if (value.length <= 10) {
      setFormData((prev) => ({
        ...prev,
        mobile: value,
      }));
    }
  };

  // =========================
  // FORM SUBMIT
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await api.post("/enquiries", formData);

      if (response.data.success) {
        setMessage("Thank you! We will contact you soon.");

        setFormData({
          name: "",
          mobile: "",
          email: "",
        });
      } else {
        setError(response.data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Submit Error:", err);

      setError(
        err.response?.data?.message ||
          "Unable to submit enquiry. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // MOBILE ENQUIRE BUTTON
  // =========================
  const scrollToContact = () => {
    document.getElementById("mobile-contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="w-full bg-white">
      {/* =========================================
          HERO IMAGE
      ========================================== */}
      <div className="w-full mt-[70px]">
        {/* MOBILE */}
        <div className="block w-full lg:hidden">
          <img
            src={banner}
            alt="Viceroy Visava"
            className="
              block
              w-full
              h-auto
              object-contain
            "
          />
        </div>

        {/* DESKTOP */}
        <div className="relative hidden min-h-screen lg:block">
          <img
            src={banner}
            alt="Viceroy Visava"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          {/* Desktop Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Desktop Contact Form */}
          <div
            className="
              absolute
              inset-y-0
              right-0
              z-10
              flex
              items-center
              px-12
              xl:px-20
            "
          >
            <ContactForm
              formData={formData}
              loading={loading}
              message={message}
              error={error}
              handleChange={handleChange}
              handleMobileChange={handleMobileChange}
              handleSubmit={handleSubmit}
            />
          </div>

          {/* Desktop Bottom Information */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div
              className="
                mx-auto
                grid
                max-w-7xl
                grid-cols-3
                border-t
                border-white/20
                px-10
              "
            >
              {/* Location */}
              <div className="border-r border-white/20 py-5 pr-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Location
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  Versova, Mumbai
                </p>
              </div>

              {/* Property */}
              <div className="border-r border-white/20 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Property
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  Premium Residences
                </p>
              </div>

              {/* Experience */}
              <div className="py-5 pl-6">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Experience
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  Luxury Living
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE CTA BAR
      ========================================== */}
{/* =========================================
    MOBILE CTA BAR - FIXED BOTTOM
========================================== */}
<div
  className="
    fixed
    bottom-0
    left-0
    right-0
    z-[9999]
    block
    w-full
    bg-white
    px-3
    pt-3
    pb-[calc(12px+env(safe-area-inset-bottom))]
    shadow-[0_-4px_15px_rgba(0,0,0,0.08)]
    lg:hidden
  "
>
  <div className="mx-auto w-full md:w-[70%]">
    <button
      type="button"
      onClick={scrollToContact}
      className="
        flex
        w-full
        items-center
        justify-center
        rounded-full
        bg-[#77773f]
        py-4
        text-center
        text-sm
        font-bold
        text-white
        transition
        duration-200
        hover:bg-[#666633]
        active:scale-[0.98]
        sm:text-base
      "
    >
      Enquire Now
    </button>
  </div>
</div>
      {/* =========================================
          MOBILE CONTACT FORM
      ========================================== */}
      <div
        id="mobile-contact"
        className="
          
          scroll-mt-20
          bg-white
          px-4
          py-8
          sm:px-6
          lg:hidden
        "
      >
        <ContactForm
          formData={formData}
          loading={loading}
          message={message}
          error={error}
          handleChange={handleChange}
          handleMobileChange={handleMobileChange}
          handleSubmit={handleSubmit}
        />
      </div>

      {/* =========================================
          MOBILE PROPERTY INFORMATION
      ========================================== */}
    </section>
  );
}

/* =========================================
   CONTACT FORM
========================================= */

// function ContactForm({
//   formData,
//   loading,
//   message,
//   error,
//   handleChange,
//   handleMobileChange,
//   handleSubmit,
// }) {
//   return (
//     <div
//       className="
//         w-full
//         max-w-md
//         border
//         border-gray-200
//         bg-white
//         p-6
//         shadow-2xl
//         sm:p-8
//         lg:max-w-[390px]
//       "
//     >

//       {/* Heading */}
//       <h2
//         className="
//           mb-6
//           text-center
//           text-3xl
//           font-bold
//           text-[#77773f]
//           sm:text-4xl
//         "
//       >
//         Contact With Us!
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4"
//       >

//         {/* Name */}
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter Name"
//           required
//           className="
//             h-14
//             w-full
//             rounded-md
//             border
//             border-gray-200
//             bg-white
//             px-4
//             text-base
//             text-gray-700
//             outline-none
//             placeholder:text-gray-500
//             focus:border-[#77773f]
//             focus:ring-1
//             focus:ring-[#77773f]
//           "
//         />

//         {/* Mobile */}
//         <input
//           type="tel"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleMobileChange}
//           placeholder="Mobile Number"
//           maxLength={10}
//           required
//           className="
//             h-14
//             w-full
//             rounded-md
//             border
//             border-gray-200
//             bg-white
//             px-4
//             text-base
//             text-gray-700
//             outline-none
//             placeholder:text-gray-500
//             focus:border-[#77773f]
//             focus:ring-1
//             focus:ring-[#77773f]
//           "
//         />

//         {/* Email */}
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter Email"
//           required
//           className="
//             h-14
//             w-full
//             rounded-md
//             border
//             border-gray-200
//             bg-white
//             px-4
//             text-base
//             text-gray-700
//             outline-none
//             placeholder:text-gray-500
//             focus:border-[#77773f]
//             focus:ring-1
//             focus:ring-[#77773f]
//           "
//         />

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="
//             h-14
//             w-full
//             bg-[#77773f]
//             text-lg
//             font-medium
//             text-white
//             transition
//             hover:bg-[#666633]
//             disabled:cursor-not-allowed
//             disabled:opacity-60
//           "
//         >
//           {loading ? "Submitting..." : "Submit"}
//         </button>

//         {/* Success */}
//         {message && (
//           <p className="text-center text-sm font-medium text-green-600">
//             {message}
//           </p>
//         )}

//         {/* Error */}
//         {error && (
//           <p className="text-center text-sm font-medium text-red-600">
//             {error}
//           </p>
//         )}

//       </form>
//     </div>
//   );
// }

export default Hero;
