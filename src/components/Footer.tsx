import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInquiry = (e) => {
    e.preventDefault();
    if (!email) return;

    window.location.href = `mailto:ab@rmbrealestate.com.au?subject=Inquiry from Website&body=My email is: ${email}`;
    setEmail("");
  };

  return (
    <footer className="relative bg-[#1a1d4a] text-white px-6 md:px-10 pt-16 md:pt-20 pb-8 md:pb-10 border-t-2 border-yellow">

      {/* ================= TOP GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start max-w-7xl mx-auto">

        {/* LEFT LOGO */}
        <div className="md:col-span-4" data-aos="fade-up">
          <img
            src={logo}
            alt="RMB Real Estate"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="md:col-span-4 max-w-sm" data-aos="fade-up" data-aos-delay="100">
          <p className="text-sm md:text-base leading-relaxed mb-6 text-white/80 font-light tracking-wide">
           Ready to take the next step in your real estate journey? Whether you're looking for your dream home or ready to sell, our team is here to help. Reach out to RMB Real Estate today and experience the fresh, modern approach to real estate that you deserve. </p>

          <p className="text-xs md:text-sm text-white/60 leading-relaxed tracking-wide">
            Suite 618/101 Overton Road, Williams Landing, Melbourne, VIC 3027
          </p>

          <p className="text-xs md:text-sm text-white/60 mt-3 tracking-wide">
            <a href="tel:+61450909063" className="hover:text-yellow transition">
              +61 450 909 063
            </a>
            <span className="mx-2 text-yellow/40">|</span>
            <a href="tel:+61430319912" className="hover:text-yellow transition">
              +61 430 319 912
            </a>
          </p>

          <p className="text-xs md:text-sm text-white/60 mt-2 tracking-wide">
            <a
              href="mailto:ab@rmbrealestate.com.au"
              className="hover:text-yellow transition"
            >
              ab@rmbrealestate.com.au
            </a>
          </p>

          {/* SOCIAL ICON */}
          <div className="flex gap-5 mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=100089779224370"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:border-yellow hover:text-yellow transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT - INLINE CALL FOR INQUIRY INPUT */}
        <div className="md:col-span-4 flex md:justify-end" data-aos="fade-up" data-aos-delay="200">
          <form
            onSubmit={handleInquiry}
            className="w-full md:w-72 flex items-center gap-3 border-b border-yellow/50 pb-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Call for inquiry"
              className="flex-1 bg-transparent text-xs uppercase tracking-[0.2em] text-yellow placeholder:text-yellow/40 outline-none"
            />

            <button type="submit">
              <ArrowUpRight
                size={16}
                className="text-yellow transition-transform duration-300 hover:translate-x-0.5 hover:-translate-y-0.5"
              />
            </button>
          </form>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div
        className="border-t border-yellow/20 mt-14 md:mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="text-[11px] md:text-xs text-white/50 tracking-wide text-center md:text-left">
          © {new Date().getFullYear()} RMB Real Estate. Design LBD STUDIOS.
        </p>

        {/* SCROLL TO TOP */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-white/50 hover:text-yellow transition group"
        >
          <span className="text-[11px] uppercase tracking-wider">Top</span>
          <ArrowUp
            size={16}
            className="group-hover:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
