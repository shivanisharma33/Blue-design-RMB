import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroVideo from "@/assets/hero-videos.mp4";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax ONLY (video never fades or stops)
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
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/20 to-navy/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-navy/30 z-10" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 z-10" style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(36, 40, 97, 0.3) 100%)'
        }} />

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
        {/* Subtle tagline above */}
        <motion.span
          className="label-text text-yellow/90 mb-6 tracking-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        >
          Premium Real Estate
        </motion.span>

        {/* Main heading */}
        <h1 className="hero-heading text-center text-white max-w-5xl">
          <span className="sr-only">Human expertise. Zero agents.</span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          >
            Human expertise.
          </motion.span>
          <motion.span
            className="block text-yellow/95 mt-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
          >
            Zero agents.
          </motion.span>
        </h1>

        {/* Subheading */}
        <motion.p
          className="mt-8 text-white/70 text-lg md:text-xl font-light max-w-xl text-center leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.19, 1, 0.22, 1] }}
        >
          Real estate done differently — with integrity, expertise, and a personal touch.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="/listings"
          className="mt-10 px-8 py-4 border border-yellow/60 text-yellow hover:bg-yellow hover:text-navy transition-all duration-500 ease-out label-text tracking-[0.15em] backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.19, 1, 0.22, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Properties
        </motion.a>
      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="label-text text-white/50 text-[10px] tracking-[0.2em]">
          Scroll
        </span>

        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-yellow/80 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>

      {/* ================= DECORATIVE ELEMENTS ================= */}
      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-white/10 z-20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-white/10 z-20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-white/10 z-20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-white/10 z-20" />
    </section>
  );
};

export default Hero;
