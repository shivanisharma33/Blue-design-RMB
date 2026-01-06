import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-navy/20 bg-background">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={logo}
            alt="RMB Real Estate"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-8">
          {/* BUY */}
          <Link
            to="/pages/Listings"
            className="text-xs uppercase tracking-[0.2em] font-medium text-foreground hidden md:block hover:text-orange transition-colors"
          >
            Buy
          </Link>

          {/* SOLD */}
          <Link
            to="/sold"
            className="text-xs uppercase tracking-[0.2em] font-medium text-foreground hidden md:block hover:text-orange transition-colors"
          >
            Sold
          </Link>

          {/* MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1.5 p-2 group"
            aria-label="Open menu"
          >
            <span className="w-6 h-px bg-foreground transition-transform duration-300 group-hover:scale-x-75 origin-right" />
            <span className="w-6 h-px bg-foreground transition-transform duration-300 delay-75 group-hover:scale-x-75 origin-right" />
          </button>
        </div>
      </header>

      {/* ================= FULLSCREEN MENU ================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col h-full px-6 md:px-12 py-6">
              {/* MENU HEADER */}
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-4">
                  <img
                    src={logo}
                    alt="RMB Real Estate"
                    className="h-10 md:h-12 w-auto object-contain"
                  />
                </Link>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground p-2"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
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
              <nav className="flex-1 flex flex-col justify-center items-center gap-8">
                {[
                  { label: "Buy", path: "/pages/Listings" },
                  { label: "Sold", path: "/sold" },
                  { label: "Team", path: "/pages/Team" },
                  { label: "About", path: "/pages/About" },
                  { label: "Contact", path: "/pages/Contact" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + index * 0.1,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                  >
                    <Link
                      to={item.path}
                      className="text-4xl md:text-6xl font-light text-foreground hover:text-orange transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* FOOTER */}
              <div className="text-center">
                <motion.p
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  03 9017 4848
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
