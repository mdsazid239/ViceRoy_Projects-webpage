// import { useState } from "react";
// import api from "../services/api";
// import { Link } from "react-router-dom";
// import Fb from "../assets/images/Icon-Fb.png";
// import Email from "../assets/images/Icon-email.png";
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
//           <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
//             {/* ================= LEFT CONTENT ================= */}
//             <div className="text-center text-white md:text-left">
//               <h2 className="text-3xl font-serif font-semibold tracking-wide sm:text-4xl lg:text-5xl">
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
//                 <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#006b60]">
//                   ☎
//                 </span>

//                 <span>+91 XXXXX XXXXX</span>
//               </a>

//               {/* EMAIL */}
//               <a
//                 href="mailto:sales@viceroyproperties.in"
//                 className="mt-6 flex items-center justify-center gap-3 break-all text-sm text-white transition hover:text-white/70 sm:text-base md:justify-start"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#006b60]">
//                   ✉
//                 </span>

//                 <span>sales@viceroyproperties.in</span>
//               </a>

//               {/* SOCIAL */}
//               <div className="mt-9">
//                 <p className="text-lg sm:text-xl">Follow us</p>

//                 <div className="mt-4 flex justify-center gap-4 md:justify-start">
//                   <a
//                     href="https://www.facebook.com/viceroyproperty"
//                     aria-label="Facebook"
//                     className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-[#006b60] transition hover:scale-110"
//                   >
                
//                   </a>

//                   <a
//                     href="https://www.instagram.com/viceroy.property/"
//                     aria-label="Instagram"
//                     className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-[#006b60] transition hover:scale-110"
//                   >
                  
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* ================= RIGHT FORM ================= */}
//                <div className="w-full">
//                 <div className="mx-auto w-full max-w-xl rounded-md bg-white p-6 shadow-xl sm:p-8 lg:p-10">
//                 <h2 className="text-center text-2xl font-bold text-[#77783e] sm:text-4xl">
//                 Book an appointment
//                 </h2>
//                 <form onSubmit={handleSubmit} className="mt-7 space-y-4">
//                   {/* NAME */}
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     disabled={loading}
//                     className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none placeholder:text-gray-500 transition focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
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
//                     className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none placeholder:text-gray-500 transition focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
//                   />

//                   {/* EMAIL */}
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     disabled={loading}
//                     className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none placeholder:text-gray-500 transition focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
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
//             <a href="#disclaimer" className="transition hover:underline">
//               Disclaimer
//             </a>

//             <span>|</span>

//             <a href="terms" className="transition hover:underline">
//               Terms & Conditions
//             </a>
//             <span>|</span>

//             <a href="#maharera" className="transition hover:underline">
//               MahaRERA
//             </a>

//             <span>|</span>

//             <a href="#privacy" className="transition hover:underline">
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






// // import { useState } from "react";
// // import api from "../services/api";

// // function Footer() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     mobile: "",
// //     email: "",
// //   });

// //   const [loading, setLoading] = useState(false);

// //   const [message, setMessage] = useState({
// //     type: "",
// //     text: "",
// //   });

// //   // ==============================
// //   // HANDLE INPUT CHANGE
// //   // ==============================
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     if (name === "mobile") {
// //       const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

// //       setFormData((prev) => ({
// //         ...prev,
// //         mobile: onlyNumbers,
// //       }));

// //       return;
// //     }

// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   // ==============================
// //   // HANDLE FORM SUBMIT
// //   // ==============================
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     setMessage({
// //       type: "",
// //       text: "",
// //     });

// //     const name = formData.name.trim();
// //     const mobile = formData.mobile.trim();
// //     const email = formData.email.trim();

// //     // Required validation
// //     if (!name || !mobile || !email) {
// //       setMessage({
// //         type: "error",
// //         text: "Please fill all fields.",
// //       });
// //       return;
// //     }

// //     // Mobile validation
// //     if (!/^[0-9]{10}$/.test(mobile)) {
// //       setMessage({
// //         type: "error",
// //         text: "Please enter a valid 10-digit mobile number.",
// //       });
// //       return;
// //     }

// //     // Email validation
// //     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
// //       setMessage({
// //         type: "error",
// //         text: "Please enter a valid email address.",
// //       });
// //       return;
// //     }

// //     try {
// //       setLoading(true);

// //       const response = await api.post("/enquiries", {
// //         name,
// //         mobile,
// //         email,
// //       });

// //       if (response.data.success) {
// //         setMessage({
// //           type: "success",
// //           text: "Thank you! Your enquiry has been submitted.",
// //         });

// //         setFormData({
// //           name: "",
// //           mobile: "",
// //           email: "",
// //         });
// //       }
// //     } catch (error) {
// //       console.error("Enquiry Submit Error:", error);

// //       setMessage({
// //         type: "error",
// //         text:
// //           error.response?.data?.message ||
// //           "Unable to submit enquiry. Please try again.",
// //       });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <footer id="contact" className="w-full">
// //       {/* =====================================================
// //           TOP CONTACT SECTION
// //       ====================================================== */}
// //       <section className="bg-[#006b60] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
// //         <div className="mx-auto max-w-7xl">
// //           <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">

// //             {/* ================= LEFT CONTENT ================= */}
// //             <div className="text-center text-white md:text-left">
// //               <h2 className="font-serif text-3xl font-semibold tracking-wide sm:text-4xl lg:text-5xl">
// //                 DISCOVER VICEROY VISĀVA
// //               </h2>

// //               <p className="mt-5 text-lg sm:text-xl lg:text-2xl">
// //                 A quieter way to live in Versova.
// //               </p>

// //               <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/90 sm:text-base sm:leading-8 md:mx-0">
// //                 Explore 3 & 4 BHK luxury residences designed around space,
// //                 privacy and calm.
// //               </p>

// //               {/* PHONE */}
// //               <a
// //                 href="tel:+91XXXXXXXXXX"
// //                 className="mt-8 flex items-center justify-center gap-3 text-base text-white transition hover:text-white/70 sm:text-lg md:justify-start"
// //               >
// //                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#006b60]">
// //                   ☎
// //                 </span>

// //                 <span className="whitespace-nowrap">
// //                   +91 XXXXX XXXXX
// //                 </span>
// //               </a>

// //               {/* EMAIL */}
// //               <a
// //                 href="mailto:presales@viceroyproperties.in"
// //                 className="mt-6 flex items-center justify-center gap-3 text-sm text-white transition hover:text-white/70 sm:text-base md:justify-start"
// //               >
// //                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#006b60]">
// //                   ✉
// //                 </span>

// //                 <span className="break-all">
// //                   presales@viceroyproperties.in
// //                 </span>
// //               </a>

// //               {/* SOCIAL */}
// //               <div className="mt-9">
// //                 <p className="text-lg sm:text-xl">
// //                   Follow us
// //                 </p>

// //                 <div className="mt-4 flex justify-center gap-4 md:justify-start">
// //                   {/* FACEBOOK */}
// //                   <a
// //                     href="#"
// //                     aria-label="Facebook"
// //                     className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-[#006b60] transition hover:scale-110"
// //                   >
// //                     f
// //                   </a>

// //                   {/* INSTAGRAM */}
// //                   <a
// //                     href="#"
// //                     aria-label="Instagram"
// //                     className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg font-bold text-[#006b60] transition hover:scale-110"
// //                   >
// //                     ◎
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* =================================================
// //                 RIGHT CONTACT FORM
// //                 HIDDEN ON MOBILE
// //                 VISIBLE FROM TABLET/DESKTOP
// //             ================================================== */}
// //             <div className="hidden w-full md:block">
// //               <div className="mx-auto w-full max-w-xl rounded-md bg-white p-6 shadow-xl sm:p-8 lg:p-10">
// //                 <h2 className="text-center text-3xl font-bold text-[#77783e] sm:text-4xl">
// //                   Contact With Us!
// //                 </h2>

// //                 <form
// //                   onSubmit={handleSubmit}
// //                   className="mt-7 space-y-4"
// //                 >
// //                   {/* NAME */}
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     placeholder="Enter Name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     disabled={loading}
// //                     className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
// //                   />

// //                   {/* MOBILE */}
// //                   <input
// //                     type="tel"
// //                     name="mobile"
// //                     placeholder="Enter Number"
// //                     value={formData.mobile}
// //                     onChange={handleChange}
// //                     maxLength={10}
// //                     inputMode="numeric"
// //                     disabled={loading}
// //                     className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
// //                   />

// //                   {/* EMAIL */}
// //                   <input
// //                     type="email"
// //                     name="email"
// //                     placeholder="Enter Email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     disabled={loading}
// //                     className="w-full rounded-md border border-gray-200 bg-white px-4 py-4 text-base text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-lg"
// //                   />

// //                   {/* MESSAGE */}
// //                   {message.text && (
// //                     <p
// //                       className={`rounded-md px-4 py-3 text-center text-sm ${
// //                         message.type === "success"
// //                           ? "bg-green-100 text-green-700"
// //                           : "bg-red-100 text-red-700"
// //                       }`}
// //                     >
// //                       {message.text}
// //                     </p>
// //                   )}

// //                   {/* SUBMIT */}
// //                   <button
// //                     type="submit"
// //                     disabled={loading}
// //                     className="w-full rounded-none bg-[#77783e] px-5 py-4 text-lg font-medium text-white transition duration-300 hover:bg-[#64662f] disabled:cursor-not-allowed disabled:opacity-60 sm:text-xl"
// //                   >
// //                     {loading ? "Submitting..." : "Submit"}
// //                   </button>
// //                 </form>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           BOTTOM FOOTER
// //       ====================================================== */}
// //       <section className="bg-white px-4 py-6 sm:px-6 sm:py-8">
// //         <div className="mx-auto max-w-7xl text-center">

// //           {/* LINKS */}
// //           <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-[#006b60] sm:text-base">
// //             <a
// //               href="#disclaimer"
// //               className="transition hover:underline"
// //             >
// //               Disclaimer
// //             </a>

// //             <span>|</span>

// //             <a
// //               href="terms"
// //               className="transition hover:underline"
// //             >
// //               Terms & Conditions
// //             </a>

// //             <span>|</span>

// //             <a
// //               href="#maharera"
// //               className="transition hover:underline"
// //             >
// //               MahaRERA
// //             </a>

// //             <span>|</span>

// //             <a
// //               href="#privacy"
// //               className="transition hover:underline"
// //             >
// //               Privacy Policy
// //             </a>
// //           </div>

// //           {/* COPYRIGHT */}
// //           <p className="mt-3 text-sm text-[#006b60] sm:text-base">
// //             © {new Date().getFullYear()} Viceroy Properties. All Rights
// //             Reserved.
// //           </p>
// //         </div>
// //       </section>
// //     </footer>
// //   );
// // }

// // export default Footer;



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import Fb from "../assets/images/Icon-Fb.png";
// import Email from "../assets/images/Icon-email.png";
// import phone from "../assets/images/Icon-Phone.png";
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

//   // =========================
//   // HANDLE INPUT
//   // =========================
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "mobile") {
//       const mobileNumber = value.replace(/\D/g, "").slice(0, 10);

//       setFormData((prev) => ({
//         ...prev,
//         mobile: mobileNumber,
//       }));

//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // =========================
//   // SUBMIT FORM
//   // =========================
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setMessage({
//       type: "",
//       text: "",
//     });

//     const name = formData.name.trim();
//     const mobile = formData.mobile.trim();
//     const email = formData.email.trim();

//     // Required fields
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

//       if (response.data?.success) {
//         setMessage({
//           type: "success",
//           text: "Thank you! Your enquiry has been submitted.",
//         });

//         setFormData({
//           name: "",
//           mobile: "",
//           email: "",
//         });
//       } else {
//         setMessage({
//           type: "error",
//           text:
//             response.data?.message ||
//             "Unable to submit enquiry. Please try again.",
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
//       {/* =========================================
//           CONTACT SECTION
//       ========================================== */}
//       <section className="bg-[#006b60] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
//         <div className="mx-auto w-full max-w-7xl">
//           <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
//             {/* =====================================
//                 LEFT CONTENT
//             ====================================== */}
//             <div className="text-center text-white md:text-left">
//               <h2 className="font-serif text-2xl font-semibold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
//                 DISCOVER VICEROY VISĀVA
//               </h2>

//               <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
//                 A quieter way to live in Versova.
//               </p>

//               <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7 md:mx-0">
//                 Explore 3 & 4 BHK luxury residences designed around space,
//                 privacy and calm.
//               </p>

//               {/* PHONE */}
//               <a
//                 href="tel:+91XXXXXXXXXX"
//                 className="mt-7 flex items-center justify-center gap-3 text-sm transition hover:text-white/70 sm:text-base md:justify-start lg:text-lg"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#006b60]">
                 
//                 </span>

//                 <span>+91 XXXXX XXXXX</span>
//               </a>

//               {/* EMAIL */}
//               <a
//                 href="mailto:sales@viceroyproperties.in"
//                 className="mt-5 flex items-center justify-center gap-3 text-sm transition hover:text-white/70 sm:text-base md:justify-start"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#006b60]">
                 
//                 </span>

//                 <span className="break-all">
//                   sales@viceroyproperties.in
//                 </span>
//               </a>

//               {/* SOCIAL MEDIA */}
//               <div className="mt-8">
//                 <p className="text-base sm:text-lg">Follow us</p>

//                 <div className="mt-4 flex justify-center gap-4 md:justify-start">
//                   <a
//                     href="https://www.facebook.com/viceroyproperty"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-bold text-[#006b60] transition duration-300 hover:scale-110"
//                   >
                    
//                   </a>

//                   <a
//                     href="https://www.instagram.com/viceroy.property/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-base font-bold text-[#006b60] transition duration-300 hover:scale-110"
//                   >
                    
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* =====================================
//                 APPOINTMENT FORM
//             ====================================== */}
//             <div className="w-full">
//               <div className="mx-auto w-full max-w-lg rounded-md bg-white p-5 shadow-xl sm:p-7 md:p-8 lg:p-10">
//                 <h2 className="text-center text-2xl font-bold text-[#77783e] sm:text-3xl lg:text-4xl">
//                   Book an Appointment
//                 </h2>

//                 <form
//                   onSubmit={handleSubmit}
//                   className="mt-6 space-y-4 sm:mt-7"
//                 >
//                   {/* NAME */}
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     disabled={loading}
//                     autoComplete="name"
//                     className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
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
//                     autoComplete="tel"
//                     disabled={loading}
//                     className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
//                   />

//                   {/* EMAIL */}
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     disabled={loading}
//                     autoComplete="email"
//                     className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
//                   />

//                   {/* MESSAGE */}
//                   {message.text && (
//                     <div
//                       className={`rounded-md px-4 py-3 text-center text-sm ${
//                         message.type === "success"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {message.text}
//                     </div>
//                   )}

//                   {/* SUBMIT */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full rounded-md bg-[#77783e] px-5 py-3.5 text-base font-medium text-white transition duration-300 hover:bg-[#64662f] disabled:cursor-not-allowed disabled:opacity-60 sm:py-4 sm:text-lg"
//                   >
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================
//           BOTTOM FOOTER
//       ========================================== */}
//       <section className="bg-white px-4 py-6 sm:px-6 sm:py-8">
//         <div className="mx-auto w-full max-w-7xl text-center">
//           {/* FOOTER LINKS */}
//           <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-[#006b60] sm:text-sm md:text-base">
//             <a
//               href="#disclaimer"
//               className="transition hover:underline"
//             >
//               Disclaimer
//             </a>

//             <span>|</span>

//             <Link
//               to="/terms"
//               className="transition hover:underline"
//             >
//               Terms & Conditions
//             </Link>

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
//           <p className="mt-3 text-xs text-[#006b60] sm:text-sm md:text-base">
//             © {new Date().getFullYear()} Viceroy Properties. All Rights
//             Reserved.
//           </p>
//         </div>
//       </section>
//     </footer>
//   );
// }

// export default Footer;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";

// import Fb from "../assets/images/Icon-Fb-t.png";
// import Email from "../assets/images/Icon-email.png";
// import Phone from "../assets/images/Icon-Phone.png";
// import Instagram from "../assets/images/Icon-IG.png";
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

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "mobile") {
//       const mobileNumber = value.replace(/\D/g, "").slice(0, 10);

//       setFormData((prev) => ({
//         ...prev,
//         mobile: mobileNumber,
//       }));

//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setMessage({
//       type: "",
//       text: "",
//     });

//     const name = formData.name.trim();
//     const mobile = formData.mobile.trim();
//     const email = formData.email.trim();

//     if (!name || !mobile || !email) {
//       setMessage({
//         type: "error",
//         text: "Please fill all fields.",
//       });
//       return;
//     }

//     if (!/^[0-9]{10}$/.test(mobile)) {
//       setMessage({
//         type: "error",
//         text: "Please enter a valid 10-digit mobile number.",
//       });
//       return;
//     }

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

//       if (response.data?.success) {
//         setMessage({
//           type: "success",
//           text: "Thank you! Your enquiry has been submitted.",
//         });

//         setFormData({
//           name: "",
//           mobile: "",
//           email: "",
//         });
//       } else {
//         setMessage({
//           type: "error",
//           text:
//             response.data?.message ||
//             "Unable to submit enquiry. Please try again.",
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
//       {/* CONTACT SECTION */}
//       <section className="bg-[#006b60] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
//         <div className="mx-auto w-full max-w-7xl">
//           <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">

//             {/* LEFT CONTENT */}
//             <div className="text-center text-white md:text-left">
//               <h2 className="font-serif text-2xl font-semibold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
//                 DISCOVER VICEROY VISĀVA
//               </h2>

//               <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
//                 A quieter way to live in Versova.
//               </p>

//               <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7 md:mx-0">
//                 Explore 3 & 4 BHK luxury residences designed around space,
//                 privacy and calm.
//               </p>

//               {/* PHONE */}
//               <a
//                 href="tel:+91XXXXXXXXXX"
//                 className="mt-7 flex items-center justify-center gap-3 text-sm transition hover:text-white/70 sm:text-base md:justify-start lg:text-lg"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
//                   <img
//                     src={Phone}
//                     alt="Phone"
//                     className="h-5 w-5 object-contain"
//                   />
//                 </span>

//                 <span>+91 XXXXX XXXXX</span>
//               </a>

//               {/* EMAIL */}
//               <a
//                 href="mailto:sales@viceroyproperties.in"
//                 className="mt-5 flex items-center justify-center gap-3 text-sm transition hover:text-white/70 sm:text-base md:justify-start"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
//                   <img
//                     src={Email}
//                     alt="Email"
//                     className="h-5 w-5 object-contain"
//                   />
//                 </span>

//                 <span className="break-all">
//                   sales@viceroyproperties.in
//                 </span>
//               </a>

//               {/* SOCIAL MEDIA */}
//               <div className="mt-8">
//                 <p className="text-base sm:text-lg">Follow us</p>

//                 <div className="mt-4 flex justify-center gap-4 md:justify-start">
//                   {/* FACEBOOK */}
//                   <a
//                     href="https://www.facebook.com/viceroyproperty"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition duration-300 hover:scale-110"
//                   >
//                     <img
//                       src={Fb}
//                       alt="Facebook"
//                       className="h-5 w-5 object-contain"
//                     />
//                   </a>

//                   {/* INSTAGRAM */}
//                   <a
//                     href="https://www.instagram.com/viceroy.property/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition duration-300 hover:scale-110"
//                   >
//                     <span className="text-base font-bold text-[#006b60]">
//                       ◎
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* APPOINTMENT FORM */}
//             <div className="w-full">
//               <div className="mx-auto w-full max-w-lg rounded-md bg-white p-5 shadow-xl sm:p-7 md:p-8 lg:p-10">
//                 <h2 className="text-center text-2xl font-bold text-[#77783e] sm:text-3xl lg:text-4xl">
//                   Book an Appointment
//                 </h2>

//                 <form
//                   onSubmit={handleSubmit}
//                   className="mt-6 space-y-4 sm:mt-7"
//                 >
//                   {/* NAME */}
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     disabled={loading}
//                     autoComplete="name"
//                     className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
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
//                     autoComplete="tel"
//                     disabled={loading}
//                     className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
//                   />

//                   {/* EMAIL */}
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     disabled={loading}
//                     autoComplete="email"
//                     className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
//                   />

//                   {/* MESSAGE */}
//                   {message.text && (
//                     <div
//                       className={`rounded-md px-4 py-3 text-center text-sm ${
//                         message.type === "success"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {message.text}
//                     </div>
//                   )}

//                   {/* SUBMIT */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full rounded-md bg-[#77783e] px-5 py-3.5 text-base font-medium text-white transition duration-300 hover:bg-[#64662f] disabled:cursor-not-allowed disabled:opacity-60 sm:py-4 sm:text-lg"
//                   >
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* BOTTOM FOOTER */}
//       <section className="bg-white px-4 py-6 sm:px-6 sm:py-8">
//         <div className="mx-auto w-full max-w-7xl text-center">
//           {/* FOOTER LINKS */}
//           <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-[#006b60] sm:text-sm md:text-base">
//             <a
//               href="#disclaimer"
//               className="transition hover:underline"
//             >
//               Disclaimer
//             </a>

//             <span>|</span>

//             <Link
//               to="/terms"
//               className="transition hover:underline"
//             >
//               Terms & Conditions
//             </Link>

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
//           <p className="mt-3 text-xs text-[#006b60] sm:text-sm md:text-base">
//             © {new Date().getFullYear()} Viceroy Properties. All Rights
//             Reserved.
//           </p>
//         </div>
//       </section>
//     </footer>
//   );
// }

// export default Footer;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";

// // Icons
// import Fb from "../assets/images/Icon-Fb-t.png";
// import Email from "../assets/images/Icon-email.png";
// import Phone from "../assets/images/Icon-Phone.png";
// import Instagram from "../assets/images/Icon-IG.png";

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
//       const mobile = value.replace(/\D/g, "").slice(0, 10);

//       setFormData((prev) => ({
//         ...prev,
//         mobile,
//       }));

//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ==============================
//   // FORM SUBMIT
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

//       if (response.data?.success) {
//         setMessage({
//           type: "success",
//           text: "Thank you! Your enquiry has been submitted.",
//         });

//         setFormData({
//           name: "",
//           mobile: "",
//           email: "",
//         });
//       } else {
//         setMessage({
//           type: "error",
//           text:
//             response.data?.message ||
//             "Unable to submit enquiry. Please try again.",
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
//       {/* =================================
//           CONTACT SECTION
//       ================================= */}
//       <section className="bg-[#006b60] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
//         <div className="mx-auto w-full max-w-7xl">
//           <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
//             {/* =================================
//                 LEFT CONTENT
//             ================================= */}
//             <div className="text-center text-white md:text-left">
//               <h2 className="font-serif text-2xl font-semibold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl">
//                 DISCOVER VICEROY VISĀVA
//               </h2>

//               <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
//                 A quieter way to live in Versova.
//               </p>

//               <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7 md:mx-0">
//                 Explore 3 &amp; 4 BHK luxury residences designed around space,
//                 privacy and calm.
//               </p>

//               {/* PHONE */}
//               <a
//                 href="tel:+91XXXXXXXXXX"
//                 className="mt-7 flex items-center justify-center gap-3 text-sm transition hover:text-white/70 sm:text-base md:justify-start lg:text-lg"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full ">
//                   <img
//                     src={Phone}
//                     alt="Phone"
//                     className="h-5 w-5 object-contain"
//                   />
//                 </span>

//                 <span>+91 XXXXX XXXXX</span>
//               </a>

//               {/* EMAIL */}
//               <a
//                 href="mailto:sales@viceroyproperties.in"
//                 className="mt-5 flex items-center justify-center gap-3 text-sm transition hover:text-white/70 sm:text-base md:justify-start"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full ">
//                   <img
//                     src={Email}
//                     alt="Email"
//                     className="h-5 w-5 object-contain"
//                   />
//                 </span>

//                 <span className="break-all">
//                   sales@viceroyproperties.in
//                 </span>
//               </a>

//               {/* SOCIAL MEDIA */}
//               <div className="mt-8">
//                 <p className="text-base sm:text-lg">Follow us</p>

//                 <div className="mt-4 flex justify-center gap-4 md:justify-start">
//                   {/* FACEBOOK */}
//                   <a
//                     href="https://www.facebook.com/viceroyproperty"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="flex h-10 w-10 items-center justify-center rounded-full  transition duration-300 hover:scale-110"
//                   >
//                     <img
//                       src={Fb}
//                       alt="Facebook"
//                       className="h-5 w-5 object-contain"
//                     />
//                   </a>

//                   {/* INSTAGRAM */}
//                   <a
//                     href="https://www.instagram.com/viceroy.property/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="flex h-10 w-10 items-center justify-center rounded-full transition duration-300 hover:scale-110"
//                   >
//                     <img
//                       src={Instagram}
//                       alt="Instagram"
//                       className="h-5 w-5 object-contain"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* =================================
//                 APPOINTMENT FORM
//             ================================= */}
//             <div className="w-full">
//               <div className="mx-auto w-full max-w-lg rounded-md bg-white p-5 shadow-xl sm:p-7 md:p-8 lg:p-10">
//                 <h2 className="text-center text-2xl font-bold text-[#77783e] sm:text-3xl lg:text-4xl">
//                   Book an Appointment
//                 </h2>

//                 <form
//                   onSubmit={handleSubmit}
//                   className="mt-6 space-y-4 sm:mt-7"
//                 >
//                   {/* NAME */}
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     disabled={loading}
//                     autoComplete="name"
//                     className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
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
//                     autoComplete="tel"
//                     disabled={loading}
//                     className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
//                   />

//                   {/* EMAIL */}
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     disabled={loading}
//                     autoComplete="email"
//                     className="w-full rounded-md border border-gray-200 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
//                   />

//                   {/* MESSAGE */}
//                   {message.text && (
//                     <div
//                       className={`rounded-md px-4 py-3 text-center text-sm ${
//                         message.type === "success"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {message.text}
//                     </div>
//                   )}

//                   {/* SUBMIT BUTTON */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full rounded-md bg-[#77783e] px-5 py-3.5 text-base font-medium text-white transition duration-300 hover:bg-[#64662f] disabled:cursor-not-allowed disabled:opacity-60 sm:py-4 sm:text-lg"
//                   >
//                     {loading ? "Submitting..." : "Submit"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =================================
//           BOTTOM FOOTER
//       ================================= */}
//       <section className="bg-white px-4 py-6 sm:px-6 sm:py-8">
//         <div className="mx-auto w-full max-w-7xl text-center">
//           {/* FOOTER LINKS */}
//           <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs text-[#006b60] sm:text-sm md:text-base">
//             <a href="#disclaimer" className="transition hover:underline">
//               Disclaimer
//             </a>

//             <span>|</span>

//             <Link to="/terms" className="transition hover:underline">
//               Terms &amp; Conditions
//             </Link>

//             <span>|</span>

//             <a href="#maharera" className="transition hover:underline">
//               MahaRERA
//             </a>

//             <span>|</span>

//             <a href="#privacy" className="transition hover:underline">
//               Privacy Policy
//             </a>
//           </div>

//           {/* COPYRIGHT */}
//           <p className="mt-3 text-xs text-[#006b60] sm:text-sm md:text-base">
//             © {new Date().getFullYear()} Viceroy Properties. All Rights
//             Reserved.
//           </p>
//         </div>
//       </section>
//     </footer>
//   );
// }

// export default Footer;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";

// // Icons
// import Fb from "../assets/images/Icon-Fb-t.png";
// import Email from "../assets/images/Icon-email.png";
// import Phone from "../assets/images/Icon-Phone.png";
// import Instagram from "../assets/images/Icon-IG.png";

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

//   // ==========================================
//   // HANDLE INPUT CHANGE
//   // ==========================================
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "mobile") {
//       const mobileNumber = value.replace(/\D/g, "").slice(0, 10);

//       setFormData((prev) => ({
//         ...prev,
//         mobile: mobileNumber,
//       }));

//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ==========================================
//   // HANDLE FORM SUBMIT
//   // ==========================================
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

//       if (response.data?.success) {
//         setMessage({
//           type: "success",
//           text: "Thank you! Your enquiry has been submitted.",
//         });

//         setFormData({
//           name: "",
//           mobile: "",
//           email: "",
//         });
//       } else {
//         setMessage({
//           type: "error",
//           text:
//             response.data?.message ||
//             "Unable to submit enquiry. Please try again.",
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
//     <footer id="contact" className="w-full overflow-hidden">

//       {/* =====================================================
//           CONTACT SECTION
//       ====================================================== */}
//       <section className="w-full bg-[#006b60] px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-20">
//         <div className="mx-auto w-full max-w-7xl">

//           <div
//             className="
//               grid w-full
//               grid-cols-1
//               items-center
//               gap-10
//               sm:gap-12
//               md:grid-cols-2
//               md:gap-10
//               lg:gap-20
//           "
//           >

//             {/* =================================================
//                 LEFT CONTENT
//             ================================================== */}
//             <div className="w-full min-w-0 text-center text-white md:text-left">

//               {/* TITLE */}
//               <h2
//                 className="
//                   font-serif
//                   text-2xl
//                   font-semibold
//                   leading-tight
//                   tracking-wide
//                   sm:text-3xl
//                   md:text-4xl
//                   lg:text-5xl
//                 "
//               >
//                 DISCOVER VICEROY VISĀVA
//               </h2>

//               {/* SUB TITLE */}
//               <p
//                 className="
//                   mt-4
//                   text-base
//                   leading-relaxed
//                   sm:text-lg
//                   md:text-xl
//                   lg:text-2xl
//                 "
//               >
//                 A quieter way to live in Versova.
//               </p>

//               {/* DESCRIPTION */}
//               <p
//                 className="
//                   mx-auto
//                   mt-5
//                   max-w-md
//                   text-sm
//                   leading-6
//                   text-white/90
//                   sm:text-base
//                   sm:leading-7
//                   md:mx-0
//                   lg:max-w-xl
//                 "
//               >
//                 Explore 3 &amp; 4 BHK luxury residences designed around space,
//                 privacy and calm.
//               </p>

//               {/* =================================================
//                   PHONE
//               ================================================== */}
//               <a
//                 href="tel:+91XXXXXXXXXX"
//                 className="
//                   mt-7
//                   flex
//                   items-center
//                   justify-left
//                   gap-3
//                   text-sm
//                   text-white
//                   transition
//                   duration-300
//                   hover:text-white/70
//                   sm:text-base
//                   md:justify-start
//                   lg:text-lg
//                 "
//               >
//                 <span
//                   className="
//                     flex
//                     h-9
//                     w-9
//                     shrink-0
//                     items-center
//                     justify-center
//                   "
//                 >
//                   <img
//                     src={Phone}
//                     alt="Phone"
//                     className="h-5 w-5 object-contain"
//                   />
//                 </span>

//                 <span className="whitespace-nowrap">
//                   +91 XXXXX XXXXX
//                 </span>
//               </a>

//               {/* =================================================
//                   EMAIL
//               ================================================== */}
//               <a
//                 href="mailto:sales@viceroyproperties.in"
//                 className="
//                   mt-5
//                   flex
//                   items-center
//                   justify-left
//                   gap-3
//                   text-sm
//                   text-white
//                   transition
//                   duration-300
//                   hover:text-white/70
//                   sm:text-base
//                   md:justify-start
//                 "
//               >
//                 <span
//                   className="
//                     flex
//                     h-9
//                     w-9
//                     shrink-0
//                     items-center
//                     justify-center
//                   "
//                 >
//                   <img
//                     src={Email}
//                     alt="Email"
//                     className="h-5 w-5 object-contain"
//                   />
//                 </span>

//                 <span className="min-w-0 break-all">
//                   sales@viceroyproperties.in
//                 </span>
//               </a>

//               {/* =================================================
//                   SOCIAL MEDIA
//               ================================================== */}
//               <div className="mt-8">

//                 <p className="text-base sm:text-lg">
//                   Follow us
//                 </p>

//                 <div
//                   className="
//                     flex
//                     items-center
//                     justify-center
//                     md:justify-start
//                   "
//                 >

//                   {/* FACEBOOK */}
//                   <a
//                     href="https://www.facebook.com/viceroyproperty"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       transition
//                       duration-300
//                       hover:scale-110
//                     "
//                   >
//                     <img
//                       src={Fb}
//                       alt="Facebook"
//                       className="h-5 w-5 object-contain"
//                     />
//                   </a>

//                   {/* INSTAGRAM */}
//                   <a
//                     href="https://www.instagram.com/viceroy.property/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       transition
//                       duration-300
//                       hover:scale-110
//                     "
//                   >
//                     <img
//                       src={Instagram}
//                       alt="Instagram"
//                       className="h-5 w-5 object-contain"
//                     />
//                   </a>

//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 APPOINTMENT FORM
//             ================================================== */}
//             <div className="w-full min-w-0">

//               <div
//                 className="
//                   mx-auto
//                   w-full
//                   max-w-lg
//                   rounded-md
//                   bg-white
//                   p-5
//                   shadow-xl
//                   sm:p-7
//                   md:p-8
//                   lg:p-10
//                 "
//               >

//                 {/* FORM TITLE */}
//                 <h2
//                   className="
//                     text-center
//                     text-2xl
//                     font-bold
//                     leading-tight
//                     text-[#77783e]
//                     sm:text-3xl
//                     lg:text-4xl
//                   "
//                 >
//                   Book an Appointment
//                 </h2>

//                 {/* FORM */}
//                 <form
//                   onSubmit={handleSubmit}
//                   className="mt-6 w-full space-y-4 sm:mt-7"
//                 >

//                   {/* NAME */}
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     disabled={loading}
//                     autoComplete="name"
//                     className="
//                       box-border
//                       w-full
//                       rounded-md
//                       border
//                       border-gray-200
//                       bg-white
//                       px-4
//                       py-3.5
//                       text-sm
//                       text-gray-800
//                       outline-none
//                       transition
//                       placeholder:text-gray-500
//                       focus:border-[#77783e]
//                       focus:ring-2
//                       focus:ring-[#77783e]/20
//                       disabled:cursor-not-allowed
//                       disabled:bg-gray-100
//                       sm:px-5
//                       sm:py-4
//                       sm:text-base
//                     "
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
//                     autoComplete="tel"
//                     disabled={loading}
//                     className="
//                       box-border
//                       w-full
//                       rounded-md
//                       border
//                       border-gray-200
//                       bg-white
//                       px-4
//                       py-3.5
//                       text-sm
//                       text-gray-800
//                       outline-none
//                       transition
//                       placeholder:text-gray-500
//                       focus:border-[#77783e]
//                       focus:ring-2
//                       focus:ring-[#77783e]/20
//                       disabled:cursor-not-allowed
//                       disabled:bg-gray-100
//                       sm:px-5
//                       sm:py-4
//                       sm:text-base
//                     "
//                   />

//                   {/* EMAIL */}
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     disabled={loading}
//                     autoComplete="email"
//                     className="
//                       box-border
//                       w-full
//                       rounded-md
//                       border
//                       border-gray-200
//                       bg-white
//                       px-4
//                       py-3.5
//                       text-sm
//                       text-gray-800
//                       outline-none
//                       transition
//                       placeholder:text-gray-500
//                       focus:border-[#77783e]
//                       focus:ring-2
//                       focus:ring-[#77783e]/20
//                       disabled:cursor-not-allowed
//                       disabled:bg-gray-100
//                       sm:px-5
//                       sm:py-4
//                       sm:text-base
//                     "
//                   />

//                   {/* MESSAGE */}
//                   {message.text && (
//                     <div
//                       className={`
//                         w-full
//                         rounded-md
//                         px-3
//                         py-3
//                         text-center
//                         text-xs
//                         leading-5
//                         sm:px-4
//                         sm:text-sm
//                         ${
//                           message.type === "success"
//                             ? "bg-green-100 text-green-700"
//                             : "bg-red-100 text-red-700"
//                         }
//                       `}
//                     >
//                       {message.text}
//                     </div>
//                   )}

//                   {/* SUBMIT */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="
//                       w-full
//                       rounded-md
//                       bg-[#77783e]
//                       px-5
//                       py-3.5
//                       text-base
//                       font-medium
//                       text-white
//                       transition
//                       duration-300
//                       hover:bg-[#64662f]
//                       disabled:cursor-not-allowed
//                       disabled:opacity-60
//                       sm:py-4
//                       sm:text-lg
//                     "
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
//       <section className="w-full bg-white px-4 py-6 sm:px-6 sm:py-8">

//         <div className="mx-auto w-full max-w-7xl text-center">

//           {/* FOOTER LINKS */}
//           <div
//             className="
//               flex
//               flex-wrap
//               items-center
//               justify-center
//               gap-x-2
//               gap-y-2
//               text-xs
//               leading-5
//               // text-[#006b60]
//               sm:text-sm
//               md:text-base
//               mb-[70px]
//             "
//           >
//             <a
//               href="#disclaimer"
//               className="transition hover:underline"
//             >
//               Disclaimer
//             </a>

//             <span>|</span>

//             <Link
//               to="/terms"
//               className="transition hover:underline"
//             >
//               Terms &amp; Conditions
//             </Link>

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
//           <p
//             className="
//               mt-3
//               text-xs
//               leading-5
//               text-[#006b60]
//               sm:text-sm
//               md:text-base
//             "
//           >
//             © {new Date().getFullYear()} Viceroy Properties.
//             <span className="block sm:inline">
//               {" "}All Rights Reserved.
//             </span>
//           </p>

//         </div>
//       </section>
//     </footer>
//   );
// }

// export default Footer;



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";

// // Icons
// import Fb from "../assets/images/Icon-Fb-t.png";
// import Email from "../assets/images/Icon-email.png";
// import Phone from "../assets/images/Icon-Phone.png";
// import Instagram from "../assets/images/Icon-IG.png";

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

//   // ==========================================
//   // HANDLE INPUT CHANGE
//   // ==========================================
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "mobile") {
//       const mobileNumber = value.replace(/\D/g, "").slice(0, 10);

//       setFormData((prev) => ({
//         ...prev,
//         mobile: mobileNumber,
//       }));

//       return;
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ==========================================
//   // HANDLE FORM SUBMIT
//   // ==========================================
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

//       if (response.data?.success) {
//         setMessage({
//           type: "success",
//           text: "Thank you! Your enquiry has been submitted.",
//         });

//         setFormData({
//           name: "",
//           mobile: "",
//           email: "",
//         });
//       } else {
//         setMessage({
//           type: "error",
//           text:
//             response.data?.message ||
//             "Unable to submit enquiry. Please try again.",
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
//     <footer
//       id="contact"
//       className="w-full max-w-full overflow-x-hidden"
//     >
//       {/* =====================================================
//           CONTACT SECTION
//       ====================================================== */}
//       <section className="w-full max-w-full overflow-hidden bg-[#006b60] px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-12">
//         <div className="mx-auto w-full max-w-7xl min-w-0">
//           <div className="grid w-full min-w-0 grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">

//             {/* =================================================
//                 LEFT CONTENT
//             ================================================== */}
//             <div className="w-full min-w-0 text-center text-white md:text-left">

//               {/* TITLE */}
//               <h2 className="mx-auto max-w-full break-words font-serif text-2xl font-semibold leading-tight tracking-wide sm:text-3xl md:mx-0 md:text-4xl lg:text-5xl">
//                 DISCOVER VICEROY VISĀVA
//               </h2>

//               {/* SUB TITLE */}
//               <p className="mt-4 break-words text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
//                 A quieter way to live in Versova.
//               </p>

//               {/* DESCRIPTION */}
//               <p className="mx-auto mt-5 max-w-md break-words text-sm leading-6 text-white/90 sm:text-base sm:leading-7 md:mx-0 lg:max-w-xl">
//                 Explore 3 &amp; 4 BHK luxury residences designed around space,
//                 privacy and calm.
//               </p>

//               {/* PHONE */}
//               <a
//                 href="tel:+91XXXXXXXXXX"
//                 className="mx-auto mt-7 flex min-h-[44px] w-fit max-w-full items-center justify-center gap-3 text-sm text-white transition duration-300 hover:text-white/70 sm:text-base md:mx-0 md:justify-start lg:text-lg"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center">
//                   <img
//                     src={Phone}
//                     alt="Phone"
//                     className="h-5 w-5 object-contain"
//                   />
//                 </span>

//                 <span className="break-words">
//                   +91 XXXXX XXXXX
//                 </span>
//               </a>

//               {/* EMAIL */}
//               <a
//                 href="mailto:sales@viceroyproperties.in"
//                 className="mx-auto mt-5 flex min-h-[44px] w-fit max-w-full items-center justify-center gap-3 text-sm text-white transition duration-300 hover:text-white/70 sm:text-base md:mx-0 md:justify-start"
//               >
//                 <span className="flex h-9 w-9 shrink-0 items-center justify-center">
//                   <img
//                     src={Email}
//                     alt="Email"
//                     className="h-5 w-5 object-contain"
//                   />
//                 </span>

//                 <span className="min-w-0 break-all">
//                   sales@viceroyproperties.in
//                 </span>
//               </a>

//               {/* SOCIAL MEDIA */}
//               <div className="mt-8">
//                 <p className="text-base sm:text-lg">
//                   Follow us
//                 </p>

//                 <div className="mt-2 flex items-center justify-center md:justify-start">
//                   {/* FACEBOOK */}
//                   <a
//                     href="https://www.facebook.com/viceroyproperty"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition duration-300 hover:scale-110"
//                   >
//                     <img
//                       src={Fb}
//                       alt="Facebook"
//                       className="h-5 w-5 object-contain"
//                     />
//                   </a>

//                   {/* INSTAGRAM */}
//                   <a
//                     href="https://www.instagram.com/viceroy.property/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition duration-300 hover:scale-110"
//                   >
//                     <img
//                       src={Instagram}
//                       alt="Instagram"
//                       className="h-5 w-5 object-contain"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 APPOINTMENT FORM
//             ================================================== */}
//             <div className="w-full min-w-0">
//               <div className="mx-auto w-full max-w-lg min-w-0 rounded-xl bg-white p-5 shadow-xl sm:p-7 md:p-8 lg:p-10">

//                 {/* FORM TITLE */}
//                 <h2 className="text-center text-2xl font-bold leading-tight text-[#77783e] sm:text-3xl lg:text-4xl">
//                   Book an Appointment
//                 </h2>

//                 {/* FORM */}
//                 <form
//                   onSubmit={handleSubmit}
//                   className="mt-6 w-full space-y-4 sm:mt-7"
//                 >
//                   {/* NAME */}
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     disabled={loading}
//                     autoComplete="name"
//                     className="box-border min-h-[48px] w-full max-w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
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
//                     autoComplete="tel"
//                     disabled={loading}
//                     className="box-border min-h-[48px] w-full max-w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
//                   />

//                   {/* EMAIL */}
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     disabled={loading}
//                     autoComplete="email"
//                     className="box-border min-h-[48px] w-full max-w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:px-5 sm:py-4 sm:text-base"
//                   />

//                   {/* MESSAGE */}
//                   {message.text && (
//                     <div
//                       className={`w-full max-w-full break-words rounded-md px-3 py-3 text-center text-xs leading-5 sm:px-4 sm:text-sm ${
//                         message.type === "success"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {message.text}
//                     </div>
//                   )}

//                   {/* SUBMIT */}
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="min-h-[48px] w-full rounded-md bg-[#77783e] px-5 py-3.5 text-base font-medium text-white transition duration-300 hover:bg-[#64662f] disabled:cursor-not-allowed disabled:opacity-60 sm:py-4 sm:text-lg"
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
//       <section className="w-full max-w-full overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-8">
//         <div className="mx-auto w-full max-w-7xl min-w-0 text-center">

//           {/* FOOTER LINKS */}
//           <div className="mb-8 flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs leading-5 text-[#006b60] sm:mb-10 sm:text-sm md:text-base">
            
//             <Link
//               to="/disclaimer"
//               className="min-h-[40px] inline-flex items-center justify-center px-1 transition hover:underline"
//             >
//               Disclaimer
//             </Link>

//             <span aria-hidden="true">|</span>

//             <Link
//               to="/terms"
//               className="min-h-[40px] inline-flex items-center justify-center px-1 transition hover:underline"
//             >
//               Terms &amp; Conditions
//             </Link>

//             <span aria-hidden="true">|</span>

//             <a
//               href="#maharera"
//               className="min-h-[40px] inline-flex items-center justify-center px-1 transition hover:underline"
//             >
//               MahaRERA
//             </a>

//             <span aria-hidden="true">|</span>

//             <a
//               href="#privacy"
//               className="min-h-[40px] inline-flex items-center justify-center px-1 transition hover:underline"
//             >
//               Privacy Policy
//             </a>
//           </div>

//           {/* COPYRIGHT */}
//           <p className="break-words text-xs leading-5 text-[#006b60] sm:text-sm md:text-base">
//             © {new Date().getFullYear()} 
//             <span className="block sm:inline">
//               {" "} This website is not an official site and it belongs to the authorized channel partner for information purpose only.
//             </span>
//           </p>
//         </div>
//       </section>
//     </footer>
//   );
// }

// export default Footer;






import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

// Icons
import Fb from "../assets/images/Icon-Fb-t.png";
import Email from "../assets/images/Icon-email.png";
import Phone from "../assets/images/Icon-Phone.png";
import Instagram from "../assets/images/Icon-IG.png";

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

  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const mobileNumber = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        mobile: mobileNumber,
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // HANDLE FORM SUBMIT
  // ==========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage({
      type: "",
      text: "",
    });

    const name = formData.name.trim();
    const mobile = formData.mobile.trim();
    const email = formData.email.trim();

    if (!name || !mobile || !email) {
      setMessage({
        type: "error",
        text: "Please fill all fields.",
      });
      return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
      setMessage({
        type: "error",
        text: "Please enter a valid 10-digit mobile number.",
      });
      return;
    }

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

      if (response.data?.success) {
        setMessage({
          type: "success",
          text: "Thank you! Your enquiry has been submitted.",
        });

        setFormData({
          name: "",
          mobile: "",
          email: "",
        });
      } else {
        setMessage({
          type: "error",
          text:
            response.data?.message ||
            "Unable to submit enquiry. Please try again.",
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
    <footer
     
      className="w-full min-w-0 max-w-full overflow-x-hidden"
    >
      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}
      <section className="w-full min-w-0 max-w-full overflow-hidden bg-[#006b60] px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto w-full min-w-0 max-w-7xl">
          <div className="grid w-full min-w-0 grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <div className="w-full min-w-0 max-w-full text-center text-white md:text-left">

              <h2 className="mx-auto w-full max-w-full break-words font-serif text-[25px] font-semibold leading-[1.2] tracking-wide sm:text-3xl md:mx-0 md:text-4xl lg:text-5xl">
                DISCOVER VICEROY VISĀVA
              </h2>

              <p className="mx-auto mt-4 w-full max-w-full break-words text-base leading-7 sm:text-lg md:mx-0 md:text-xl lg:text-2xl">
                A quieter way to live in Versova.
              </p>

              <p className="mx-auto mt-5 w-full max-w-[420px] break-words text-sm leading-6 text-white/90 sm:text-base sm:leading-7 md:mx-0">
                Explore 3 &amp; 4 BHK luxury residences designed around space,
                privacy and calm.
              </p>

              {/* PHONE */}
              <a
                href="tel:+91XXXXXXXXXX"
                className="mx-auto mt-7 flex min-h-[44px] w-fit max-w-full items-center justify-center gap-2 text-sm text-white transition duration-300 hover:text-white/70 sm:gap-3 sm:text-base md:mx-0 md:justify-start lg:text-lg"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                  <img
                    src={Phone}
                    alt="Phone"
                    className="h-5 w-5 object-contain"
                  />
                </span>

                <span className="whitespace-nowrap">
                  +91 98199 98394
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:sales@viceroyproperties.in"
                className="mx-auto mt-4 flex min-h-[44px] w-fit max-w-full items-center justify-center gap-2 text-sm text-white transition duration-300 hover:text-white/70 sm:gap-3 sm:text-base md:mx-0 md:justify-start"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                  <img
                    src={Email}
                    alt="Email"
                    className="h-5 w-5 object-contain"
                  />
                </span>

                <span className="min-w-0 max-w-[calc(100vw-90px)] break-all sm:max-w-none">
                  sales@viceroyproperties.in
                </span>
              </a>

              {/* SOCIAL MEDIA */}
              <div className="mt-7 w-full">
                <p className="text-base sm:text-lg">
                  Follow us
                </p>

                <div className="mt-2 flex items-center justify-center md:justify-start">
                  <a
                    href="https://www.facebook.com/viceroyproperty"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition duration-300 hover:scale-110"
                  >
                    <img
                      src={Fb}
                      alt="Facebook"
                      className="h-5 w-5 object-contain"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/viceroy.property/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition duration-300 hover:scale-110"
                  >
                    <img
                      src={Instagram}
                      alt="Instagram"
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* =================================================
                APPOINTMENT FORM
            ================================================== */}
            <div className="w-full min-w-0 max-w-full" id="contact">
              <div className="mx-auto w-full min-w-0 max-w-lg overflow-hidden rounded-xl bg-white p-4 shadow-xl sm:p-6 md:p-8 lg:p-10">

                <h2 className="break-words text-center text-[24px] font-bold leading-tight text-[#77783e] sm:text-3xl lg:text-4xl">
                  Book an Appointment
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 w-full min-w-0 space-y-4"
                >
                  {/* NAME */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    autoComplete="name"
                    className="box-border block min-h-[48px] w-full min-w-0 max-w-full appearance-none rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-base"
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
                    autoComplete="tel"
                    disabled={loading}
                    className="box-border block min-h-[48px] w-full min-w-0 max-w-full appearance-none rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-base"
                  />

                  {/* EMAIL */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    autoComplete="email"
                    className="box-border block min-h-[48px] w-full min-w-0 max-w-full appearance-none rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#77783e] focus:ring-2 focus:ring-[#77783e]/20 disabled:cursor-not-allowed disabled:bg-gray-100 sm:text-base"
                  />

                  {/* MESSAGE */}
                  {message.text && (
                    <div
                      className={`w-full min-w-0 max-w-full break-words rounded-md px-3 py-3 text-center text-xs leading-5 sm:px-4 sm:text-sm ${
                        message.type === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {message.text}
                    </div>
                  )}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="block min-h-[48px] w-full rounded-md bg-[#77783e] px-4 py-3.5 text-base font-medium text-white transition duration-300 hover:bg-[#64662f] disabled:cursor-not-allowed disabled:opacity-60 sm:text-lg"
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
      <section className="w-full min-w-0 max-w-full overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-8 mb-[70px]">
        <div className="mx-auto w-full min-w-0 max-w-7xl text-center">

          {/* FOOTER LINKS */}
          <div className="mx-auto mb-7 flex w-full max-w-full flex-wrap items-center justify-center gap-x-1 gap-y-1 text-[11px] leading-5 text-[#006b60] sm:mb-10 sm:gap-x-2 sm:text-sm md:text-base">

            <Link
              to="/disclaimer"
              className="inline-flex min-h-[40px] items-center justify-center px-1 whitespace-nowrap transition hover:underline"
            >
              Disclaimer
            </Link>

            <span aria-hidden="true">|</span>

            <Link
              to="/terms"
              className="inline-flex min-h-[40px] items-center justify-center px-1 whitespace-nowrap transition hover:underline"
            >
              Terms &amp; Conditions
            </Link>

            <span aria-hidden="true">|</span>

            <a
              href="#maharera"
              className="inline-flex min-h-[40px] items-center justify-center px-1 whitespace-nowrap transition hover:underline"
            >
              MahaRERA
            </a>

            <span aria-hidden="true">|</span>

            <a
              href="#privacy"
              className="inline-flex min-h-[40px] items-center justify-center px-1 whitespace-nowrap transition hover:underline"
            >
              Privacy Policy
            </a>
          </div>

          {/* COPYRIGHT */}
          <p className="mx-auto w-full max-w-4xl break-words text-[11px] leading-5 text-[#006b60] sm:text-sm md:text-base">
            © {new Date().getFullYear()}
            <span className="block sm:inline">
              {" "}
              This website is not an official site and it belongs to the
              authorized channel partner for information purpose only.
            </span>
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;