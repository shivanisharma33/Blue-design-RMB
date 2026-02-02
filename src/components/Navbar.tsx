import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-500 ${
          isScrolled
            ? "bg-navy/95 backdrop-blur-md py-4 shadow-xl"
            : "py-6"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO (INCREASED ALL SCREENS) */}
          <Link to="/" className="flex items-center gap-4 group">
            <img
              src={logo}
              alt="RMB Real Estate"
              className="
                h-20
                sm:h-16
                md:h-18
                lg:h-20
                xl:h-22
                w-auto
                object-contain
                transition-transform duration-300
                group-hover:scale-105
              "
            />
          </Link>

          {/* NAV LINKS */}
          <div className="flex items-center gap-6 md:gap-10">
            <Link
              to="/listings"
              className="nav-link text-white/90 hidden md:block hover:text-yellow transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-yellow after:transition-all after:duration-300 hover:after:w-full"
            >
              Buy
            </Link>

            <Link
              to="/sold"
              className="nav-link text-white/90 hidden md:block hover:text-yellow transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-yellow after:transition-all after:duration-300 hover:after:w-full"
            >
              Sell
            </Link>

            <Link
              to="/contact"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 border border-yellow/50 text-yellow hover:bg-yellow hover:text-navy transition-all duration-300 label-text text-[10px] tracking-[0.15em]"
            >
              Contact
            </Link>
               <Link
              to="/lease"
              className="nav-link text-white/90 hidden md:block hover:text-yellow transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-yellow after:transition-all after:duration-300 hover:after:w-full"
            >
              Lease
            </Link>

            {/* MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col gap-1.5 p-2 group ml-2"
              aria-label="Open menu"
            >
              <span className="w-6 h-[1.5px] bg-yellow transition-all duration-300 group-hover:w-5 origin-right" />
              <span className="w-6 h-[1.5px] bg-yellow transition-all duration-300 delay-75 group-hover:w-4 origin-right" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ================= FULLSCREEN MENU ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-navy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative flex flex-col h-full px-6 md:px-12 py-6">

              {/* MENU HEADER */}
              <div className="flex items-center justify-between">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <img
                    src={logo}
                    alt="RMB Real Estate"
                    className="
                      h-14
                      sm:h-16
                      md:h-18
                      lg:h-20
                      w-auto
                      object-contain
                    "
                  />
                </Link>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/80 p-2 hover:text-yellow transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* MENU LINKS */}
              <nav className="flex-1 flex flex-col justify-center items-center gap-6 md:gap-8">
                {[
                  { label: "Buy", path: "/listings" },
                  { label: "Sell", path: "/sold" },
                  { label: "Team", path: "/team" },
                  { label: "About", path: "/about" },
                  { label: "Contact", path: "/contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + index * 0.08,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block font-display text-4xl md:text-5xl lg:text-6xl font-light text-white hover:text-yellow transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
