import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from '@/components/TeamSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <div className="min-h-screen bg-navy text-white">

      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
<section className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 lg:px-24 bg-navy overflow-hidden">
  {/* BACKGROUND GLOW */}
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange/20 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full" />

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
    
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      className="relative"
    >
      {/* Vertical Accent */}
      <span className="absolute -left-6 top-1 h-20 w-[2px] bg-orange" />

      <span className="uppercase tracking-[0.3em] text-orange text-sm mb-6 block">
        Our People
      </span>

      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
        Meet the <br />
        <span className="text-orange">Minds</span> Behind <br /> the Work
      </h1>

      <p className="text-white/70 text-lg leading-relaxed max-w-xl">
        We’re a collective of strategists, designers, and builders who
        believe great work comes from clarity, collaboration, and care.
      </p>
    </motion.div>

    {/* RIGHT GLASS CARD */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
    >
      <h3 className="text-white text-2xl font-semibold mb-6">
        Why Our Team Stands Out
      </h3>

      <ul className="space-y-5 text-white/80">
        <li className="flex gap-4">
          <span className="text-orange">✦</span>
          Client-first mindset with real accountability
        </li>
        <li className="flex gap-4">
          <span className="text-orange">✦</span>
          Deep domain expertise across industries
        </li>
        <li className="flex gap-4">
          <span className="text-orange">✦</span>
          Design-driven, performance-focused execution
        </li>
      </ul>
    </motion.div>

  </div>
</section>





      {/* ================= TEAM MEMBERS ================= */}
      <TeamSection />

      {/* ================= CTA SECTION ================= */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-yellow/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <h2 className="section-heading text-white mb-6">
              Ready to get started?
            </h2>
            <p className="body-text text-white/70 max-w-xl mx-auto mb-10">
              Whether you're buying, selling, or just exploring your options,
              we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-block border border-yellow bg-yellow text-navy px-14 py-4 label-text hover:bg-orange hover:border-orange hover:text-white transition"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
