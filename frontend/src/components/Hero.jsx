import { useState } from "react";
import api from "../services/api";
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
          "Unable to submit enquiry. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={banner}
          alt="Viceroy Versova"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contact Form */}
      <div className="relative z-10 flex min-h-screen items-center justify-end px-4 py-20 sm:px-8 lg:px-12 xl:px-20">
        <div
          className="
            w-full
            max-w-md
            border
            border-white/40
            bg-white/85
            p-6
            shadow-2xl
            backdrop-blur-sm
            sm:p-8
            lg:max-w-[390px]
          "
        >
          {/* Heading */}
          <h2
            className="
              mb-6
              text-center
              text-3xl
              font-bold
              text-[#77773f]
              sm:text-4xl
            "
          >
            Contact With Us!
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              required
              className="
                h-14
                w-full
                rounded-md
                border
                border-gray-200
                bg-white
                px-4
                text-base
                text-gray-700
                outline-none
                placeholder:text-gray-500
                focus:border-[#77773f]
                focus:ring-1
                focus:ring-[#77773f]
              "
            />

            {/* Mobile */}
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                if (value.length <= 10) {
                  setFormData((prev) => ({
                    ...prev,
                    mobile: value,
                  }));
                }
              }}
              placeholder="Mobile Number"
              maxLength={10}
              required
              className="
                h-14
                w-full
                rounded-md
                border
                border-gray-200
                bg-white
                px-4
                text-base
                text-gray-700
                outline-none
                placeholder:text-gray-500
                focus:border-[#77773f]
                focus:ring-1
                focus:ring-[#77773f]
              "
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="
                h-14
                w-full
                rounded-md
                border
                border-gray-200
                bg-white
                px-4
                text-base
                text-gray-700
                outline-none
                placeholder:text-gray-500
                focus:border-[#77773f]
                focus:ring-1
                focus:ring-[#77773f]
              "
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="
                h-14
                w-full
                bg-[#77773f]
                text-lg
                font-medium
                text-white
                transition
                hover:bg-[#666633]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {/* Success */}
            {message && (
              <p className="text-center text-sm font-medium text-green-600">
                {message}
              </p>
            )}

            {/* Error */}
            {error && (
              <p className="text-center text-sm font-medium text-red-600">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            grid-cols-1
            border-t
            border-white/20
            px-5
            sm:grid-cols-3
            sm:px-8
            lg:px-10
          "
        >
          {/* Location */}
          <div
            className="
              border-b
              border-white/20
              py-4
              sm:border-b-0
              sm:border-r
              sm:px-6
              sm:py-5
              sm:first:pl-0
            "
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
              Location
            </p>

            <p className="mt-1.5 text-sm font-medium text-white sm:mt-2">
              Versova, Mumbai
            </p>
          </div>

          {/* Property */}
          <div
            className="
              border-b
              border-white/20
              py-4
              sm:border-b-0
              sm:border-r
              sm:px-6
              sm:py-5
            "
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
              Property
            </p>

            <p className="mt-1.5 text-sm font-medium text-white sm:mt-2">
              Premium Residences
            </p>
          </div>

          {/* Experience */}
          <div className="py-4 sm:px-6 sm:py-5 sm:pr-0">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 sm:text-xs">
              Experience
            </p>

            <p className="mt-1.5 text-sm font-medium text-white sm:mt-2">
              Luxury Living
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;