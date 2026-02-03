"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Property Sales",
    description:
      "From listing your property to closing the sale, we manage every stage with precision. Our focus is on realistic pricing, strong presentation, and outcomes that deliver real value.",
  },
  {
    number: "02",
    title: "Property Management",
    description:
      "Our transparent and efficient management services help property owners protect, maintain, and maximise the long-term value of their assets.",
  },
  {
    number: "03",
    title: "Buyers’ Representation",
    description:
      "Buying property can be complex. We guide buyers with clarity and confidence, aligning lifestyle needs and budgets with the right opportunities.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 lg:px-24 py-48">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-40"
        >
          <span className="block text-xs tracking-[0.4em] uppercase text-yellow mb-8">
            Our Services
          </span>

          <h2 className="text-5xl md:text-6xl font-light leading-tight text-black">
            Real estate services{" "}
            <span className="italic font-medium">with a difference</span>
          </h2>

          <p className="mt-10 text-lg text-black/70 leading-relaxed">
            Whether you’re buying, selling, or renting, RMB Real Estate delivers
            results through experience, transparency, and a deeply personalised
            approach.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="relative">
          {/* Vertical Line */}
          <span className="absolute left-1/2 top-0 h-full w-px bg-black/10 hidden md:block" />

          <div className="space-y-32">
            {services.map((service, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Content */}
                  <div className="md:w-[45%]">
                    <span className="block text-sm tracking-widest text-black/30 mb-4">
                      {service.number}
                    </span>

                    <h3 className="text-3xl font-light text-black mb-6">
                      {service.title}
                    </h3>

                    <p className="text-black/70 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <span className="absolute left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-yellow hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
