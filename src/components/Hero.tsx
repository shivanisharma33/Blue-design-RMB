import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/Untitled design (2).mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-navy">
      {/* ================= STATIC BACKGROUND VIDEO ================= */}
      <div className="absolute inset-0 z-0">
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/40 to-navy/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-navy/40 z-10" />

        {/* Vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(36,40,97,0.45) 100%)",
          }}
        />

        {/* 🚫 NO ANIMATION — STATIC VIDEO */}
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h1
          className="hero-heading text-white max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
          <span className="block">Human expertise.</span>
          <span className="block text-yellow/95 mt-2">
            Zero agents.
          </span>
        </motion.h1>

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="/listings"
            className="inline-block px-10 py-4 border border-yellow/70
                       text-yellow hover:bg-yellow hover:text-navy
                       transition-all duration-500 ease-out
                       label-text tracking-[0.15em]"
          >
            View Properties
          </Link>
        </motion.div>
      </div>

      {/* ================= DECORATIVE CORNERS ================= */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10 z-20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10 z-20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10 z-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10 z-20" />
    </section>
  );
};

export default Hero;
