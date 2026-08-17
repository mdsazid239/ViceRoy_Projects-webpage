import { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        mobile: onlyNumbers,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage({
      type: "",
      text: "",
    });

    const name = formData.name.trim();
    const mobile = formData.mobile.trim();
    const email = formData.email.trim();

    // Required validation
    if (!name || !mobile || !email) {
      setMessage({
        type: "error",
        text: "Please fill all fields.",
      });
      return;
    }

    // Mobile validation
    if (!/^[0-9]{10}$/.test(mobile)) {
      setMessage({
        type: "error",
        text: "Please enter a valid 10-digit mobile number.",
      });
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/enquiries", {
        name,
        mobile,
        email,
      });

      if (response.data.success) {
        setMessage({
          type: "success",
          text: "Thank you! Your enquiry has been submitted.",
        });

        setFormData({
          name: "",
          mobile: "",
          email: "",
        });
      }
    } catch (error) {
      console.error("Enquiry Submit Error:", error);

      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          "Unable to submit enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="w-full">
      {/* =====================================================
          TOP CONTACT SECTION
      ====================================================== */}
      <section className="bg-[#006b60] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
            {/* ================= LEFT CONTENT ================= */}
            <div className="text-center text-white md:text-left">
              <h2 className="text-3xl font-serif font-semibold tracking-wide sm:text-4xl lg:text-5xl">
                DISCOVER VICEROY VISĀVA
              </h2>

              <p className="mt-5 text-lg sm:text-xl lg:text-2xl">
                A quieter way to live in Versova.
              </p>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8 md:mx-0">
                Explore 3 & 4 BHK luxury residences designed around space,
                privacy and calm.
              </p>

              {/* PHONE */}
              <a
                href="tel:+91XXXXXXXXXX"
                className="mt-8 flex items-center justify-center gap-3 text-base text-white transition hover:text-white/70 sm:text-lg md:justify-start"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#006b60]">
                  ☎
                </span>

                <span>+91 XXXXX XXXXX</span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:presales@viceroyproperties.in"
                className="mt-6 flex items-center justify-center gap-3 break-all text-sm text-white transition hover:text-white/70 sm:text-base md:justify-start"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#006b60]">
                  ✉
                </span>

                <span>presales@viceroyproperties.in</span>
              </a>

              {/* SOCIAL */}
              <div className="mt-9">
                <p className="text-lg sm:text-xl">Follow us</p>

                <div className="mt-4 flex justify-center gap-4 md:justify-start">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-[#006b60] transition hover:scale-110"
                  >
                    f
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-[#006b60] transition hover:scale-110"
                  >
                    ◎
                  </a>
                </div>
              </div>
            </div>

            {/* ================= RIGHT FORM ================= */}
            <div className="w-full">
              <div className="mx-auto w-full max-w-xl rounded-md bg-white p-6 shadow-xl sm:p-8 lg:p-10">
                <h2 className="text-center text-3xl font-bold text-[#77783e] sm:text-4xl">
                  Contact With Us!
                </h2>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  {/* NAME */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none placeholder:text-gray-500 transition focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
                  />

                  {/* MOBILE */}
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength={10}
                    inputMode="numeric"
                    disabled={loading}
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none placeholder:text-gray-500 transition focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
                  />

                  {/* EMAIL */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none placeholder:text-gray-500 transition focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
                  />

                  {/* MESSAGE */}
                  {message.text && (
                    <p
                      className={`rounded-md px-4 py-3 text-center text-sm ${
                        message.type === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {message.text}
                    </p>
                  )}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-none bg-[#77783e] px-5 py-4 text-lg font-medium text-white transition duration-300 hover:bg-[#64662f] disabled:cursor-not-allowed disabled:opacity-60 sm:text-xl"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM FOOTER
      ====================================================== */}
      <section className="bg-white px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto max-w-7xl text-center">
          {/* LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-[#006b60] sm:text-base">
            <a href="#disclaimer" className="transition hover:underline">
              Disclaimer
            </a>

            <span>|</span>

            <a href="terms" className="transition hover:underline">
              Terms & Conditions
            </a>
            <span>|</span>

            <a href="#maharera" className="transition hover:underline">
              MahaRERA
            </a>

            <span>|</span>

            <a href="#privacy" className="transition hover:underline">
              Privacy Policy
            </a>
          </div>

          {/* COPYRIGHT */}
          <p className="mt-3 text-sm text-[#006b60] sm:text-base">
            © {new Date().getFullYear()} Viceroy Properties. All Rights
            Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;






// import { useState } from "react";
// import api from "../services/api";

// function Footer() {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     email: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const [message, setMessage] = useState({
//     type: "",
//     text: "",
//   });

//   // ==============================
//   // HANDLE INPUT CHANGE
//   // ==============================
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "mobile") {
//       const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

//       setFormData((prev) => ({
//         ...prev,
//         mobile: onlyNumbers,
//       }));

//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ==============================
//   // HANDLE FORM SUBMIT
//   // ==============================
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setMessage({
//       type: "",
//       text: "",
//     });

//     const name = formData.name.trim();
//     const mobile = formData.mobile.trim();
//     const email = formData.email.trim();

//     // Required validation
//     if (!name || !mobile || !email) {
//       setMessage({
//         type: "error",
//         text: "Please fill all fields.",
//       });
//       return;
//     }

//     // Mobile validation
//     if (!/^[0-9]{10}$/.test(mobile)) {
//       setMessage({
//         type: "error",
//         text: "Please enter a valid 10-digit mobile number.",
//       });
//       return;
//     }

//     // Email validation
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setMessage({
//         type: "error",
//         text: "Please enter a valid email address.",
//       });
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await api.post("/enquiries", {
//         name,
//         mobile,
//         email,
//       });

//       if (response.data.success) {
//         setMessage({
//           type: "success",
//           text: "Thank you! Your enquiry has been submitted.",
//         });

//         setFormData({
//           name: "",
//           mobile: "",
//           email: "",
//         });
//       }
//     } catch (error) {
//       console.error("Enquiry Submit Error:", error);

//       setMessage({
//         type: "error",
//         text:
//           error.response?.data?.message ||
//           "Unable to submit enquiry. Please try again.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <footer id="contact" className="w-full">
//       {/* =====================================================
//           TOP CONTACT SECTION
//       ====================================================== */}
//       <section className="bg-[#006b60] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">

//             {/* ================= LEFT CONTENT ================= */}
//             <div className="text-center text-white md:text-left">
//               <h2 className="font-serif text-3xl font-semibold tracking-wide sm:text-4xl lg:text-5xl">
//                 DISCOVER VICEROY VISĀVA
//               </h2>

//               <p className="mt-5 text-lg sm:text-xl lg:text-2xl">
//                 A quieter way to live in Versova.
//               </p>

//               <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8 md:mx-0">
//                 Explore 3 & 4 BHK luxury residences designed around space,
//                 privacy and calm.
//               </p>

//               {/* PHONE */}
//               <a
//                 href="tel:+91XXXXXXXXXX"
//                 className="mt-8 flex items-center justify-center gap-3 text-base text-white transition hover:text-white/70 sm:text-lg md:justify-start"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#006b60]">
//                   ☎
//                 </span>

//                 <span className="whitespace-nowrap">
//                   +91 XXXXX XXXXX
//                 </span>
//               </a>

//               {/* EMAIL */}
//               <a
//                 href="mailto:presales@viceroyproperties.in"
//                 className="mt-6 flex items-center justify-center gap-3 text-sm text-white transition hover:text-white/70 sm:text-base md:justify-start"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#006b60]">
//                   ✉
//                 </span>

//                 <span className="break-all">
//                   presales@viceroyproperties.in
//                 </span>
//               </a>

//               {/* SOCIAL */}
//               <div className="mt-9">
//                 <p className="text-lg sm:text-xl">
//                   Follow us
//                 </p>

//                 <div className="mt-4 flex justify-center gap-4 md:justify-start">
//                   {/* FACEBOOK */}
//                   <a
//                     href="#"
//                     aria-label="Facebook"
//                     className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-[#006b60] transition hover:scale-110"
//                   >
//                     f
//                   </a>

//                   {/* INSTAGRAM */}
//                   <a
//                     href="#"
//                     aria-label="Instagram"
//                     className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-[#006b60] transition hover:scale-110"
//                   >
//                     ◎
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 RIGHT CONTACT FORM
//                 HIDDEN ON MOBILE
//                 VISIBLE FROM TABLET/DESKTOP
//             ================================================== */}
//             <div className="hidden w-full md:block">
//               <div className="mx-auto w-full max-w-xl rounded-md bg-white p-6 shadow-xl sm:p-8 lg:p-10">
//                 <h2 className="text-center text-3xl font-bold text-[#77783e] sm:text-4xl">
//                   Contact With Us!
//                 </h2>

//                 <form
//                   onSubmit={handleSubmit}
//                   className="mt-7 space-y-4"
//                 >
//                   {/* NAME */}
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     disabled={loading}
//                     className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
//                   />

//                   {/* MOBILE */}
//                   <input
//                     type="tel"
//                     name="mobile"
//                     placeholder="Enter Number"
//                     value={formData.mobile}
//                     onChange={handleChange}
//                     maxLength={10}
//                     inputMode="numeric"
//                     disabled={loading}
//                     className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
//                   />

//                   {/* EMAIL */}
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     disabled={loading}
//                     className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
//                   />

//                   {/* MESSAGE */}
//                   {message.text && (
//                     <p
//                       className={`rounded-md px-4 py-3 text-center text-sm ${
//                         message.type === "success"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {message.text}
//                     </p>
//                   )}

//                   {/* SUBMIT */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full rounded-none bg-[#77783e] px-5 py-4 text-lg font-medium text-white transition duration-300 hover:bg-[#64662f] disabled:cursor-not-allowed disabled:opacity-60 sm:text-xl"
//                   >
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           BOTTOM FOOTER
//       ====================================================== */}
//       <section className="bg-white px-4 py-6 sm:px-6 sm:py-8">
//         <div className="mx-auto max-w-7xl text-center">

//           {/* LINKS */}
//           <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-[#006b60] sm:text-base">
//             <a
//               href="#disclaimer"
//               className="transition hover:underline"
//             >
//               Disclaimer
//             </a>

//             <span>|</span>

//             <a
//               href="terms"
//               className="transition hover:underline"
//             >
//               Terms & Conditions
//             </a>

//             <span>|</span>

//             <a
//               href="#maharera"
//               className="transition hover:underline"
//             >
//               MahaRERA
//             </a>

//             <span>|</span>

//             <a
//               href="#privacy"
//               className="transition hover:underline"
//             >
//               Privacy Policy
//             </a>
//           </div>

//           {/* COPYRIGHT */}
//           <p className="mt-3 text-sm text-[#006b60] sm:text-base">
//             © {new Date().getFullYear()} Viceroy Properties. All Rights
//             Reserved.
//           </p>
//         </div>
//       </section>
//     </footer>
//   );
// }

// export default Footer;