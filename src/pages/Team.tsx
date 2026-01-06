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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-3xl"
          >
            <span className="label-text text-orange mb-4 block">Our People</span>
            <h1 className="hero-heading text-white mb-6">
              Meet the Team
            </h1>
            <p className="section-subheading text-white/70 max-w-2xl">
              We're people first and professionals second — a team of dedicated
              experts committed to delivering exceptional results for every client.
            </p>
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
