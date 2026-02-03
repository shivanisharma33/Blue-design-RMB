import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    window.location.href = `mailto:ab@rmbrealestate.com.au?subject=New Inquiry from Website&body=My email is: ${email}`;
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0f1235] via-[#1a1d4a] to-[#0c0f2e] text-white">

      {/* ================= CTA STRIP ================= */}
      <div className="border-b border-yellow/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl md:text-3xl font-light tracking-wide max-w-xl">
            Let’s build your next real estate success together.
          </h3>

          <form
            onSubmit={handleInquiry}
            className="flex items-center gap-4 border-b border-yellow pb-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="bg-transparent text-sm uppercase tracking-[0.25em] text-yellow placeholder:text-yellow/40 outline-none"
            />
            <button type="submit">
              <ArrowUpRight
                size={18}
                className="text-yellow hover:translate-x-0.5 hover:-translate-y-0.5 transition"
              />
            </button>
          </form>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* BRAND */}
        <div className="md:col-span-4 space-y-6">
          <img src={logo} alt="RMB Real Estate" className="h-14 w-auto" />
          <p className="text-sm text-white/70 leading-relaxed max-w-sm">
            RMB Real Estate delivers a refined, transparent and
            results-driven approach to buying, selling and managing
            premium properties across Melbourne.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[0.3em] text-yellow mb-6">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/" className="hover:text-yellow transition">Home</Link></li>
            <li><Link to="/AboutSection" className="hover:text-yellow transition">About Us</Link></li>
            <li><Link to="/Team" className="hover:text-yellow transition">Team</Link></li>
            <li><Link to="/contact" className="hover:text-yellow transition">Contact</Link></li>
          </ul>
        </div>

        {/* PROPERTY LINKS */}
        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.3em] text-yellow mb-6">
            Property
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/listings" className="hover:text-yellow transition">Buy</Link></li>
            <li><Link to="/sold" className="hover:text-yellow transition">Sell</Link></li>
            <li><Link to="/lease" className="hover:text-yellow transition">Rent</Link></li>
           
          </ul>
        </div>

        {/* CONTACT */}
        <div className="md:col-span-3 space-y-5">
          <h4 className="text-xs uppercase tracking-[0.3em] text-yellow">
            Contact
          </h4>

          <div className="flex items-start gap-3 text-sm text-white/70">
            <MapPin size={16} className="text-yellow mt-0.5" />
            <span>
              Suite 618/101 Overton Road,<br />
              Williams Landing, Melbourne VIC 3027
            </span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone size={16} className="text-yellow" />
            <a href="tel:+61450909063" className="hover:text-yellow transition">
              +61 450 909 063
            </a>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Mail size={16} className="text-yellow" />
            <a
              href="mailto:ab@rmbrealestate.com.au"
              className="hover:text-yellow transition"
            >
              ab@rmbrealestate.com.au
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-yellow/20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-wide text-white/50">
            © {new Date().getFullYear()} RMB Real Estate · Designed by LBD Studios
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-white/50 hover:text-yellow transition"
          >
            <span className="text-[11px] uppercase tracking-widest">
              Back to top
            </span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
