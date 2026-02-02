import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Property Sales",
    description:
      "From listing to settlement, we manage every detail with precision. Our sales strategy focuses on realistic pricing, targeted marketing, and clear communication to deliver results that genuinely matter — without unnecessary pressure.",
  },
  {
    number: "02",
    title: "Property Management",
    description:
      "Our property management services are built on transparency and proactive care. We help protect and enhance the value of your investment while ensuring tenants and properties are managed to a consistently high standard.",
  },
  {
    number: "03",
    title: "Buyers’ Representation",
    description:
      "Buying property can feel overwhelming. We simplify the process by understanding your needs, lifestyle, and goals, then guiding you confidently through inspections, negotiations, and decisions — always in your best interest.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-white py-32 md:py-40 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange/10 rounded-full blur-[220px]" />
        <div className="absolute bottom-[-25%] left-[-10%] w-[420px] h-[420px] bg-black/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT — INTRO (STICKY ON DESKTOP) */}
        <motion.div
          className="lg:sticky lg:top-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-xs uppercase tracking-[0.35em] text-orange mb-6">
            Our Services
          </span>

          <h2 className="font-display text-4xl md:text-5xl text-black leading-tight mb-8">
            Real Estate Services <br /> with a Difference
          </h2>

          <p className="text-lg text-black/70 max-w-md leading-relaxed">
            Whether you’re buying, selling, or renting, RMB Real Estate delivers
            considered strategies, honest guidance, and outcomes built for the
            long term.
          </p>

          <div className="w-24 h-[2px] bg-gradient-to-r from-orange to-black mt-10" />
        </motion.div>

        {/* RIGHT — SERVICES */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Number */}
              <div className="absolute -left-2 md:-left-10 top-0 text-6xl md:text-7xl font-display text-black/5">
                {service.number}
              </div>

              {/* Content */}
              <div className="relative pl-0 md:pl-10">
                <h3 className="font-display text-2xl md:text-3xl text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-black/70 leading-relaxed text-lg max-w-xl">
                  {service.description}
                </p>

                {/* Accent line */}
                <div className="w-16 h-[1px] bg-orange mt-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
