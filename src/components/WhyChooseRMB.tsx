import { motion } from "framer-motion";
import { useState } from "react";

const reasons = [
  {
    title: "Fresh Approach",
    description:
      "One-size-fits-all real estate no longer works. We create tailored strategies that align with your property goals and lifestyle.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "Virtual tours, 3D floor plans, and advanced digital marketing ensure your property stands out in a competitive market.",
  },
  {
    title: "Personalised Service",
    description:
      "We blend modern efficiency with high-touch service, giving you a seamless and reassuring experience from start to finish.",
  },
  {
    title: "Experienced Team",
    description:
      "Our team brings deep market knowledge and hands-on expertise, guiding you confidently through every stage of your journey.",
  },
];

const WhyChooseRMB = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-28 bg-gradient-to-b from-navy via-[#1e2156] to-navy overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-orange/10 rounded-full blur-[220px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow/10 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          className="max-w-3xl mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-xs uppercase tracking-[0.35em] text-yellow/80 mb-6">
            Why Choose RMB
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Designed Around <br />
            <span className="text-yellow">Your Property Goals</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            A modern real estate experience that prioritises strategy, clarity,
            and exceptional results.
          </p>
        </motion.div>

        {/* SPOTLIGHT STRIP */}
        <div className="flex flex-col lg:flex-row border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5">

          {/* LEFT – TITLES */}
          <div className="lg:w-1/2 divide-y divide-white/10">
            {reasons.map((item, index) => (
              <button
                key={item.title}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-8 py-8 transition-all duration-500
                  ${
                    activeIndex === index
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  }`}
              >
                <div className="flex items-center gap-6">
                  <span
                    className={`font-display text-3xl transition-colors
                      ${
                        activeIndex === index
                          ? "text-yellow"
                          : "text-white/30"
                      }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-white">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT – SPOTLIGHT CONTENT */}
          <div className="lg:w-1/2 p-10 md:p-14 flex items-center">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl font-display text-white leading-relaxed mb-6">
                {reasons[activeIndex].description}
              </p>

              <div className="w-24 h-[2px] bg-gradient-to-r from-yellow to-orange mb-6" />

              <p className="text-sm text-white/50 uppercase tracking-[0.25em]">
                RMB Real Estate Advantage
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseRMB;
