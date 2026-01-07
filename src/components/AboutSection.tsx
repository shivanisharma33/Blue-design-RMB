import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.19, 1, 0.22, 1] }
  }
};

const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#0f122e] py-32 md:py-40 overflow-hidden">

      {/* ================= BACKGROUND ACCENTS ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-yellow/10 rounded-full blur-[220px]" />
        <div className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-orange/10 rounded-full blur-[200px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Label */}
      <span className="block text-sm md:text-base font-medium uppercase tracking-[0.4em] text-yellow/80 mb-10">
  About RMB
</span>


        {/* Heading */}
        <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-10">
          A different way <br /> to do real estate.
        </h2>

        {/* Body */}
        <p className="text-lg text-white/70 font-light leading-relaxed">
          RMB Real Estate was founded on a simple belief — people matter more than
          transactions. We remove pressure, noise, and sales theatre from the
          property experience.
        </p>

        <p className="text-lg text-white/70 font-light leading-relaxed mt-6">
          We work for outcomes, not commissions. Every decision we make is guided
          by clarity, trust, and long-term relationships.
        </p>

        <p className="text-lg text-white/70 font-light leading-relaxed mt-6">
          Powered by modern technology and creativity, we deliver real estate
          experiences that feel considered, honest, and genuinely exceptional.
        </p>

        {/* Divider */}
        <motion.div
          className="w-24 h-[1px] bg-gradient-to-r from-yellow to-orange mx-auto mt-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </motion.div>

      {/* ================= STATEMENT ================= */}
      <motion.div
        className="relative z-10 max-w-2xl mx-auto mt-24 px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
      
      </motion.div>

    </section>
  );
};

export default AboutSection;
