import { useState } from "react";
import hero from "@/assets/contact.jpg";
import horse from "@/assets/RMB realestate (7).jpg";
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
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFieldActive = (field: string) => {
    return focusedField === field || formData[field as keyof typeof formData];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    // Clear form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      enquiryType: "",
      message: "",
    });

    // Hide success message after 5s
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy via-navy to-[#1a2744] text-white font-light">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt="Contact Hero"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          style={{ filter: "grayscale(100%) brightness(0.6)" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-navy/30" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <img
            src={logo}
            alt="RMB Real Estate"
            className="w-32 md:w-36 mb-8"
          />
          <h1 className="font-display text-4xl md:text-6xl mb-4">
            Get In Touch
          </h1>
          <p className="text-white/70 text-lg text-center">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={horse}
                alt="Lifestyle"
                className="w-full h-[500px] object-cover"
                style={{ filter: "grayscale(80%)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            </div>

            {/* Form */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Message Us
              </h2>
              <p className="text-white/50 mb-8">
                Fill out the form and we'll get back to you promptly.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white outline-none focus:border-yellow/50"
                  />
                  <label
                    className={`absolute left-5 transition-all ${
                      isFieldActive("name")
                        ? "-top-2.5 text-xs text-yellow bg-navy px-2"
                        : "top-4 text-sm text-white/40"
                    }`}
                  >
                    Your Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white outline-none focus:border-yellow/50"
                  />
                  <label
                    className={`absolute left-5 transition-all ${
                      isFieldActive("email")
                        ? "-top-2.5 text-xs text-yellow bg-navy px-2"
                        : "top-4 text-sm text-white/40"
                    }`}
                  >
                    Email Address
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white outline-none focus:border-yellow/50"
                  />
                  <label
                    className={`absolute left-5 transition-all ${
                      isFieldActive("phone")
                        ? "-top-2.5 text-xs text-yellow bg-navy px-2"
                        : "top-4 text-sm text-white/40"
                    }`}
                  >
                    Phone Number
                  </label>
                </div>

                {/* Enquiry Type */}
                <select
                  value={formData.enquiryType}
                  onChange={(e) =>
                    handleInputChange("enquiryType", e.target.value)
                  }
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white outline-none focus:border-yellow/50"
                >
                  <option value="">Select Enquiry Type</option>
                  <option value="buying">Buying Property</option>
                  <option value="selling">Selling Property</option>
                  <option value="renting">Renting</option>
                  <option value="general">General Enquiry</option>
                </select>

                {/* Message */}
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-sm text-white outline-none focus:border-yellow/50 resize-none"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full md:w-auto px-10 py-4 rounded-xl font-medium tracking-widest uppercase transition-all duration-500
                  bg-gradient-to-r from-yellow to-yellow/90 text-navy
                  ${
                    submitted
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]"
                  }`}
                >
                  {submitted ? "Enquiry Sent" : "Send Enquiry"}
                </button>

                {/* Success Message */}
                {submitted && (
                <p className="text-white/80 text-sm mt-3">
  ✅ Thank you! Your enquiry has been sent successfully.
</p>

                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
