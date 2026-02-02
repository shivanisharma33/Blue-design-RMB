import { motion } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';
import TeamSection from '@/components/TeamSection';

/* ASSETS */
import heroImg from "@/assets/contact.jpg";
import officeImg from "@/assets/team2.jpg";
import detailImg from "@/assets/RMB realestate (5).jpg";
import lifestyleImg from "@/assets/RMB realestate (6).jpg";

/* Animation variants */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
};


/* Values data */
const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Expertise",
    description: "Deep local market knowledge combined with modern strategic thinking to deliver exceptional results."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Integrity",
    description: "We believe in transparent communication and honest advice that puts your interests first."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Relationships",
    description: "Building lasting connections with clients through exceptional service and genuine care."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Innovation",
    description: "Leveraging cutting-edge technology and creative marketing to showcase your property."
  },
];

export default function About() {
  return (
    <div className="bg-navy text-white font-light overflow-hidden">

      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
    {/* ================= ENHANCED HERO ================= */}
<section className="relative h-[100vh] w-full overflow-hidden bg-navy">

  {/* Background Image */}
  <motion.img
    src={heroImg}
    alt="About Us"
    className="absolute inset-0 w-full h-full object-cover"
    initial={{ scale: 1.15 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
    style={{ filter: "grayscale(35%) brightness(0.65)" }}
  />

  {/* Animated Gradient Light */}
  <motion.div
    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.15),transparent_40%)]"
    animate={{ opacity: [0.3, 0.6, 0.3] }}
    transition={{ duration: 8, repeat: Infinity }}
  />

  {/* Dark Depth Overlays */}
  <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy" />
  <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-navy/60" />

  {/* Noise / Grain Overlay */}
  <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')] pointer-events-none" />

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

    {/* Eyebrow */}
    <motion.span
      className="text-yellow/80 tracking-[0.35em] uppercase text-xs md:text-sm mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Our Story
    </motion.span>

    {/* Headline */}
    <motion.h1
      className="text-white text-[clamp(2.8rem,6vw,5.5rem)] font-light leading-[1.05] max-w-5xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
    >
      Real Estate,
      <span className="relative inline-block mx-3 font-semibold text-yellow">
        Reimagined
        <span className="absolute inset-x-0 -bottom-2 h-[2px] bg-yellow/70 blur-sm" />
      </span>
    </motion.h1>

    {/* Sub Copy */}
    <motion.p
      className="mt-8 text-white/80 text-base md:text-lg max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      A boutique real estate group built on trust, intelligence, and
      forward-thinking property strategy.
    </motion.p>

    {/* Glass Keywords */}
    <motion.div
      className="mt-10 flex flex-wrap justify-center gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      {["Relationships", "Integrity", "Innovation"].map((item) => (
        <motion.div
          key={item}
          className="px-5 py-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/15 text-yellow text-sm md:text-base tracking-wide cursor-default"
          whileHover={{
            scale: 1.06,
            backgroundColor: "rgba(255,255,255,0.16)"
          }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>



    {/* Scroll Indicator */}
    <motion.div
      className="absolute bottom-10"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-[1px] h-20 bg-gradient-to-b from-yellow to-transparent" />
    </motion.div>

  </div>
</section>



      {/* ================= MAIN STORY SECTION ================= */}
      <section className="relative py-24 md:py-36 bg-[#1a1d4a]">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={officeImg}
                  alt="Our Office"
                  className="w-full aspect-[4/5] object-cover"
                  style={{ filter: 'grayscale(30%) brightness(0.9)' }}
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-yellow/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-yellow/30" />
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:pl-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.span
                className="label-text text-yellow/70 tracking-[0.25em] mb-4 block"
                variants={fadeInUp}
              >
                Our Philosophy
              </motion.span>
              <motion.h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-8 text-white leading-tight"
                variants={fadeInUp}
              >
                We don't follow the{' '}
                <span className="text-yellow">standard model</span>
              </motion.h2>
              <motion.div className="space-y-6" variants={fadeInUp}>
                <p className="text-white/75 text-base md:text-lg leading-relaxed">
                  Our approach to real estate is intentionally different. We believe
                  the process should feel personal, strategic, and considered — not
                  rushed or transactional.
                </p>
                <p className="text-white/75 text-base md:text-lg leading-relaxed">
                  Every decision we make is guided by long-term value and genuine
                  relationships. We're not here to close deals — we're here to build trust.
                </p>
              </motion.div>
              <motion.div
                className="mt-10 pt-8 border-t border-white/10"
                variants={fadeInUp}
              >
                <p className="quote-text text-white/60 italic">
                  "The best transactions are the ones where everyone walks away feeling valued."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#1a1d4a] via-navy to-navy">
        {/* Background decorative */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange rounded-full blur-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="label-text text-yellow/70 tracking-[0.25em] mb-4 block">What Drives Us</span>
            <h2 className="section-heading text-white mb-6">Our Core Values</h2>
            <p className="section-subheading text-white/50 max-w-2xl mx-auto">
              The principles that guide every interaction and decision we make.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="group relative p-8 bg-white/[0.02] border border-white/10 hover:border-yellow/30 hover:bg-white/[0.04] transition-all duration-500"
                variants={fadeInUp}
              >
                {/* Icon */}
                <div className="text-yellow/80 group-hover:text-yellow transition-colors duration-300 mb-6">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-medium text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-yellow/0 group-hover:border-yellow/30 transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FULL WIDTH STATEMENT ================= */}
      <section className="relative py-32 md:py-40 bg-navy overflow-hidden">
        {/* Large decorative text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <span className="font-display text-[20vw] font-bold text-white whitespace-nowrap">
            DIFFERENT
          </span>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-10 leading-tight">
              Real estate, done{' '}
              <span className="relative">
                <span className="text-yellow">differently</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow via-orange to-yellow"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We work with buyers, sellers, and investors who value clarity,
              confidence, and quality execution. From marketing to negotiation,
              our focus remains on delivering outcomes that stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= IMAGE + TEXT ALTERNATING ================= */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-navy to-[#1a1d4a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Content */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="label-text text-yellow/70 tracking-[0.25em] mb-4 block">Our Approach</span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-8 text-white leading-tight">
                People first.{' '}
                <span className="text-yellow">Always.</span>
              </h2>
              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
                Behind every property is a person, a family, or an investor with a
                story. Understanding that story allows us to deliver advice that is
                not only informed — but meaningful.
              </p>
              <p className="text-white/75 text-base md:text-lg leading-relaxed">
                We take the time to listen, understand your goals, and craft a
                strategy that aligns with your unique circumstances.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={detailImg}
                  alt="Detail"
                  className="w-full aspect-[4/5] object-cover"
                  style={{ filter: 'grayscale(30%) brightness(0.9)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-navy/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-yellow/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECOND ALTERNATING SECTION ================= */}
      <section className="relative py-24 md:py-32 bg-[#1a1d4a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={lifestyleImg}
                  alt="Lifestyle"
                  className="w-full aspect-[4/5] object-cover"
                  style={{ filter: 'grayscale(30%) brightness(0.9)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-yellow/20 -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-yellow/30" />
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:pl-8"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            >
              <span className="label-text text-yellow/70 tracking-[0.25em] mb-4 block">Our Foundation</span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mb-8 text-white leading-tight">
                Built on trust{' '}
                <span className="text-yellow">& experience</span>
              </h2>
              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-6">
                Our team combines local market expertise with a modern, strategic
                mindset. Whether buying, selling, or investing — we guide each step
                with transparency and confidence.
              </p>
              <p className="text-white/75 text-base md:text-lg leading-relaxed">
                Years of experience have taught us that the best results come from
                patience, preparation, and an unwavering commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-[#1a1d4a] to-navy overflow-hidden">
        {/* Background decorative */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow rounded-full blur-[300px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="label-text text-yellow/70 tracking-[0.25em] mb-6 block">Get Started</span>
            <h2 className="section-heading text-white mb-8">
              Let's work together
            </h2>
            <p className="section-subheading text-white/60 max-w-xl mx-auto mb-12">
              If you're ready for a smarter, more considered approach to real
              estate, we'd love to start a conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-yellow text-navy px-10 py-4 label-text hover:bg-orange hover:text-white transition-all duration-500"
              >
                Contact Us
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/listings"
                className="inline-flex items-center gap-3 border border-white/30 text-white px-10 py-4 label-text hover:border-yellow hover:text-yellow transition-all duration-500"
              >
                View Listings
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <TeamSection />

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
