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
    <div className="relative w-full max-w-md bg-white p-6 shadow-2xl">

      {/* Close Button */}
      {/* 
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-3 text-2xl text-gray-500"
      >
        ×
      </button>
      */}

      <h2 className="mb-6 text-2xl font-bold">
        Enquire Now
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="mb-4 w-full border p-3"
        />

        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleMobileChange}
          placeholder="Mobile Number"
          className="mb-4 w-full border p-3"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="mb-4 w-full border p-3"
        />

        {error && (
          <p className="mb-3 text-sm text-red-600">
            {error}
          </p>
        )}

        {message && (
          <p className="mb-3 text-sm text-green-600">
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#77773f] px-4 py-3 font-medium text-white"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;