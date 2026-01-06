import { motion } from "framer-motion";
import aboutVideo from "@/assets/hero-videos.mp4";

const AboutSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-navy via-navy to-[#1a1d4a] py-24 md:py-32 relative overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange rounded-full blur-[120px]" />
      </div>

      {/* Section label */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="label-text text-yellow/80 tracking-[0.25em]">About Us</span>
      </motion.div>

      {/* ================= VIDEO BLOCK ================= */}
      <motion.div
        className="max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm shadow-2xl">

          {/* Subtle border */}
          <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none rounded-sm" />

          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={aboutVideo}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-navy/20 z-10" />

        </div>
      </motion.div>

      {/* ================= TEXT ================= */}
      <motion.div
        className="max-w-2xl mx-auto mt-16 md:mt-20 px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      >
        <h2 className="font-display text-2xl md:text-3xl text-white mb-6 font-medium">
          People first, always.
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-white/70 font-light">
          RMB Real Estate do real estate differently. We're people first and professionals
          second — which means no polyester suits, bad toupees or smooth-talking nonsense.
          We work for clients, rather than commissions. We value proper, long-term relationships.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-white/70 font-light mt-4">
          And we always deliver exceptional service. We use new tech. We grow through creativity.
        </p>

        {/* Decorative line */}
        <motion.div
          className="w-16 h-[2px] bg-gradient-to-r from-yellow to-orange mx-auto mt-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>

    </section>
  );
};

export default AboutSection;
