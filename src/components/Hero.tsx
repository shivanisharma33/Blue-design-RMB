import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/hero-videos.mp4";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">

      {/* ================= BACKGROUND VIDEO ================= */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y, scale }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/20 to-navy/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-navy/30 z-10" />

        {/* Vignette */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(36,40,97,0.3) 100%)",
          }}
        />

        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* ================= CONTENT ================= */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full px-6"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Heading */}
        <h1 className="hero-heading text-center text-white max-w-5xl">
          <span className="sr-only">Human expertise. Zero agents.</span>

          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            Human expertise.
          </motion.span>

          <motion.span
            className="block text-yellow/95 mt-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.19, 1, 0.22, 1],
            }}
          >
            Zero agents.
          </motion.span>
        </h1>

        {/* ================= CTA BUTTON (FIXED) ================= */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
            ease: [0.19, 1, 0.22, 1],
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            to="/listings"
            className="inline-block px-8 py-4 border border-yellow/60 
                       text-yellow hover:bg-yellow hover:text-navy 
                       transition-all duration-500 ease-out 
                       label-text tracking-[0.15em] backdrop-blur-sm"
          >
            View Properties
          </Link>
        </motion.div>
      </motion.div>

      {/* ================= DECORATIVE CORNERS ================= */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10 z-20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10 z-20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10 z-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10 z-20" />
    </section>
  );
};

export default Hero;
