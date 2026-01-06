import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import rmbLogo from "@/assets/rmb.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src={rmbLogo}
              alt="RMB Real Estate"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* NAV LINKS */}
          <div className="flex items-center gap-8">
            {/* BUY */}
            <Link
              to="pages/Listings"
              className="nav-link text-foreground hidden md:block hover:opacity-60 transition-opacity"
            >
              Buy
            </Link>

            {/* SOLD */}
            <Link
              to="/sold"
              className="nav-link text-foreground hidden md:block hover:opacity-60 transition-opacity"
            >
              Sell
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
        </div>
      </motion.nav>

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
                    src={rmbLogo}
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
                  { label: "Buy", path: "pages/Listings" },
                  { label: "Sold", path: "/sold" },
                  { label: "Team", path: "/#team" },
                  { label: "About", path: "/#about" },
                  { label: "Contact", path: "pages/Contact" },
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
                      className="text-4xl md:text-6xl font-light text-foreground hover:opacity-60 transition-opacity"
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

export default Navbar;
