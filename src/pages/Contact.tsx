import { useState } from "react";
import hero from "@/assets/contact.jpg";
import horse from "@/assets/Horses.jpg";
import logo from "@/assets/logo.jpg";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFieldActive = (field: string) => {
    return focusedField === field || formData[field as keyof typeof formData];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy via-navy to-[#1a2744] text-white font-light">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with enhanced overlay */}
        <img
          src={hero}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[20s] hover:scale-100"
          style={{ filter: "grayscale(100%) brightness(0.6)" }}
        />

        {/* Gradient Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-navy/30" />

        {/* Floating particles effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow/50 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-yellow/40 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-yellow/60 rounded-full animate-pulse delay-500" />
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <img
            src={logo}
            alt="RMB Real Estate"
            className="w-32 md:w-36 opacity-95 drop-shadow-2xl mb-8 transition-transform duration-700 hover:scale-105"
            data-aos="zoom-in"
            data-aos-duration="1200"
          />
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-white/95 mb-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Get In Touch
          </h1>
          <p
            className="text-white/70 text-lg md:text-xl font-light tracking-wider max-w-md text-center px-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            We'd love to hear from you
          </p>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <span className="text-xs tracking-[0.3em] text-white/50 uppercase group-hover:text-yellow/70 transition-colors">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-bounce-slow" />
          </div>
        </div>
      </section>

      {/* ================= INFO CARDS SECTION ================= */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
            <span className="inline-block text-yellow text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Contact Information
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white/95 mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-yellow to-transparent mx-auto" />
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* List With Us Card */}
            <div
              className="group relative p-8 md:p-10 rounded-2xl backdrop-blur-sm bg-white/[0.03] border border-white/10 hover:border-yellow/30 transition-all duration-500 hover:bg-white/[0.06]"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow/20 to-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>

                <h4 className="text-xs tracking-[0.2em] text-yellow/80 mb-4 uppercase font-medium">
                  List With Us
                </h4>

                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  If you prefer bold marketing and exceptional results for your
                  property, reach out to us.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+61450909063"
                    className="flex items-center gap-3 text-white/80 hover:text-yellow transition-colors group/link"
                  >
                    <svg
                      className="w-4 h-4 text-yellow/60 group-hover/link:text-yellow transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm">+61 450 909 063</span>
                  </a>
                  <a
                    href="tel:+61430319912"
                    className="flex items-center gap-3 text-white/80 hover:text-yellow transition-colors group/link"
                  >
                    <svg
                      className="w-4 h-4 text-yellow/60 group-hover/link:text-yellow transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm">+61 430 319 912</span>
                  </a>
                  <a
                    href="mailto:ab@rmbrealestate.com.au"
                    className="flex items-center gap-3 text-white/80 hover:text-yellow transition-colors group/link"
                  >
                    <svg
                      className="w-4 h-4 text-yellow/60 group-hover/link:text-yellow transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">ab@rmbrealestate.com.au</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div
              className="group relative p-8 md:p-10 rounded-2xl backdrop-blur-sm bg-white/[0.03] border border-white/10 hover:border-yellow/30 transition-all duration-500 hover:bg-white/[0.06]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow/20 to-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <h4 className="text-xs tracking-[0.2em] text-yellow/80 mb-4 uppercase font-medium">
                  Visit Us
                </h4>

                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Suite 616/101 Overton Road,
                  <br />
                  Williams Landing, Melbourne,
                  <br />
                  VIC, Australia, 3027
                </p>

                <a
                  href="tel:+61450909063"
                  className="flex items-center gap-3 text-white/80 hover:text-yellow transition-colors group/link"
                >
                  <svg
                    className="w-4 h-4 text-yellow/60 group-hover/link:text-yellow transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm">+61 450 909 063</span>
                </a>

                {/* Google Maps Link */}
                <a
                  href="https://maps.google.com/?q=101+Overton+Road+Williams+Landing+VIC+3027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-yellow/80 hover:text-yellow text-sm transition-colors"
                >
                  <span>Get Directions</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Map Card */}
            <div
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-yellow/30 transition-all duration-500 md:col-span-2 lg:col-span-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <iframe
                title="Williams Landing Map"
                src="https://www.google.com/maps?q=101+Overton+Road+Williams+Landing+VIC+3027&output=embed"
                className="w-full h-[280px] md:h-[320px] lg:h-full min-h-[280px] border-0 grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image with overlay */}
            <div
              className="relative rounded-2xl overflow-hidden group"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src={horse}
                alt="Lifestyle"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "grayscale(80%)" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent" />

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <p className="text-yellow text-xs tracking-[0.25em] uppercase mb-3 font-medium">
                  Experience Excellence
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-white/95 leading-tight">
                  Your Dream Property
                  <br />
                  Awaits
                </h3>
              </div>
            </div>

            {/* Form */}
            <div data-aos="fade-left" data-aos-duration="1000">
              <div className="mb-10">
                <span className="inline-block text-yellow text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                  Send a Message
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-white/95 mb-4">
                  Message Us
                </h2>
                <p className="text-white/50 text-sm max-w-md">
                  Have a question or want to learn more about our services? Fill
                  out the form below and we'll get back to you promptly.
                </p>
              </div>

              <form className="space-y-6">
                {/* Name Field */}
                <div className="relative" data-aos="fade-up" data-aos-delay="100">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-transparent outline-none focus:border-yellow/50 focus:bg-white/[0.05] transition-all duration-300"
                    placeholder="Name"
                  />
                  <label
                    className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                      isFieldActive("name")
                        ? "-top-2.5 text-xs text-yellow/80 bg-navy px-2"
                        : "top-4 text-sm text-white/40"
                    }`}
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Field */}
                <div className="relative" data-aos="fade-up" data-aos-delay="150">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-transparent outline-none focus:border-yellow/50 focus:bg-white/[0.05] transition-all duration-300"
                    placeholder="Email"
                  />
                  <label
                    className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                      isFieldActive("email")
                        ? "-top-2.5 text-xs text-yellow/80 bg-navy px-2"
                        : "top-4 text-sm text-white/40"
                    }`}
                  >
                    Email Address
                  </label>
                </div>

                {/* Phone Field */}
                <div className="relative" data-aos="fade-up" data-aos-delay="200">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-transparent outline-none focus:border-yellow/50 focus:bg-white/[0.05] transition-all duration-300"
                    placeholder="Phone"
                  />
                  <label
                    className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                      isFieldActive("phone")
                        ? "-top-2.5 text-xs text-yellow/80 bg-navy px-2"
                        : "top-4 text-sm text-white/40"
                    }`}
                  >
                    Phone Number
                  </label>
                </div>

                {/* Enquiry Type Field */}
                <div className="relative" data-aos="fade-up" data-aos-delay="250">
                  <select
                    value={formData.enquiryType}
                    onChange={(e) =>
                      handleInputChange("enquiryType", e.target.value)
                    }
                    onFocus={() => setFocusedField("enquiryType")}
                    onBlur={() => setFocusedField(null)}
                    className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white outline-none focus:border-yellow/50 focus:bg-white/[0.05] transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-navy text-white/50">
                      Select Type of Enquiry
                    </option>
                    <option value="buying" className="bg-navy">
                      Buying Property
                    </option>
                    <option value="selling" className="bg-navy">
                      Selling Property
                    </option>
                    <option value="renting" className="bg-navy">
                      Renting
                    </option>
                    <option value="general" className="bg-navy">
                      General Enquiry
                    </option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <svg
                    className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Message Field */}
                <div className="relative" data-aos="fade-up" data-aos-delay="300">
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="peer w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-transparent outline-none focus:border-yellow/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                    placeholder="Message"
                  />
                  <label
                    className={`absolute left-5 transition-all duration-300 pointer-events-none ${
                      isFieldActive("message")
                        ? "-top-2.5 text-xs text-yellow/80 bg-navy px-2"
                        : "top-4 text-sm text-white/40"
                    }`}
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <div data-aos="fade-up" data-aos-delay="350">
                  <button
                    type="submit"
                    className="group relative w-full md:w-auto overflow-hidden rounded-xl bg-gradient-to-r from-yellow to-yellow/90 px-10 py-4 text-navy font-medium text-sm tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]"
                  >
                    {/* Hover effect overlay */}
                    <span className="absolute inset-0 bg-gradient-to-r from-orange to-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Enquiry
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>

              {/* Trust indicators */}
              <div
                className="mt-10 pt-8 border-t border-white/10"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex flex-wrap items-center gap-6 text-white/40 text-xs">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>Secure & Confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-yellow/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Quick Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
