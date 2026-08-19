// function ContactForm({
//   formData = {
//     name: "",
//     mobile: "",
//     email: "",
//   },
//   loading = false,
//   message = "",
//   error = "",
//   handleChange,
//   handleMobileChange,
//   handleSubmit,
//   onClose,
// }) {
//   return (
//     <div className="relative mx-auto w-full max-w-md bg-white p-6 shadow-2xl">

  
//       <h2 className="mb-6 text-2xl font-bold">
//         Book an appointment
//       </h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           className="mb-4 w-full border p-3"
//         />

//         <input
//           type="text"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleMobileChange}
//           placeholder="Mobile Number"
//           className="mb-4 w-full border p-3"
//         />

//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="mb-4 w-full border p-3"
//         />

//         {error && (
//           <p className="mb-3 text-sm text-red-600">
//             {error}
//           </p>
//         )}

//         {message && (
//           <p className="mb-3 text-sm text-green-600">
//             {message}
//           </p>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-[#77773f] px-4 py-3 font-medium text-white"
//         >
//           {loading ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;


function ContactForm({
  formData = {
    name: "",
    mobile: "",
    email: "",
  },
  loading = false,
  message = "",
  error = "",
  handleChange,
  handleMobileChange,
  handleSubmit,
  onClose,
}) {
  return (
    <div className="relative mx-auto w-full max-w-md px-3 sm:px-4">
      <div className="w-full rounded-xl bg-white p-5 shadow-2xl sm:p-6 md:p-7">
        
        {/* Close Button */}
        {/* 
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="
            absolute right-5 top-4
            flex h-8 w-8
            items-center justify-center
            rounded-full
            text-xl text-gray-500
            transition
            hover:bg-gray-100
            hover:text-gray-800
          "
        >
          ×
        </button>
        */}

        {/* Heading */}
        <h2
          className="
            mb-5
            text-xl
            font-bold
            leading-tight
            text-gray-900
            sm:mb-6
            sm:text-2xl
          "
        >
          Book an appointment
        </h2>

        <form onSubmit={handleSubmit} className="w-full">
          
          {/* Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="name"
              className="
                box-border
                w-full
                rounded-md
                border
                border-gray-300
                bg-white
                px-3
                py-3
                text-sm
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[#77773f]
                focus:ring-2
                focus:ring-[#77773f]/20
                sm:text-base
              "
            />
          </div>

          {/* Mobile */}
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>

            <input
              id="mobile"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleMobileChange}
              placeholder="Mobile Number"
              autoComplete="tel"
              inputMode="numeric"
              className="
                box-border
                w-full
                rounded-md
                border
                border-gray-300
                bg-white
                px-3
                py-3
                text-sm
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[#77773f]
                focus:ring-2
                focus:ring-[#77773f]/20
                sm:text-base
              "
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              autoComplete="email"
              className="
                box-border
                w-full
                rounded-md
                border
                border-gray-300
                bg-white
                px-3
                py-3
                text-sm
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-[#77773f]
                focus:ring-2
                focus:ring-[#77773f]/20
                sm:text-base
              "
            />
          </div>

          {/* Error */}
          {error && (
            <p
              role="alert"
              className="
                mb-3
                rounded-md
                bg-red-50
                px-3
                py-2
                text-sm
                leading-5
                text-red-600
              "
            >
              {error}
            </p>
          )}

          {/* Success Message */}
          {message && (
            <p
              role="status"
              className="
                mb-3
                rounded-md
                bg-green-50
                px-3
                py-2
                text-sm
                leading-5
                text-green-600
              "
            >
              {message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              mt-1
              min-h-[48px]
              w-full
              rounded-md
              bg-[#77773f]
              px-4
              py-3
              text-sm
              font-medium
              text-white
              transition
              duration-200
              hover:bg-[#626232]
              focus:outline-none
              focus:ring-2
              focus:ring-[#77773f]
              focus:ring-offset-2
              disabled:cursor-not-allowed
              disabled:opacity-60
              sm:text-base
            "
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;