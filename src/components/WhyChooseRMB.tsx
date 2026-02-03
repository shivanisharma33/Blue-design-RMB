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
    <section className="relative py-20 sm:py-24 md:py-28 bg-gradient-to-b from-navy via-[#1e2156] to-navy overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-[-150px] sm:left-0 w-[260px] sm:w-[400px] md:w-[500px] h-[260px] sm:h-[400px] md:h-[500px] bg-orange/10 rounded-full blur-[160px] md:blur-[220px]" />
        <div className="absolute bottom-0 right-[-120px] sm:right-0 w-[220px] sm:w-[320px] md:w-[400px] h-[220px] sm:h-[320px] md:h-[400px] bg-yellow/10 rounded-full blur-[150px] md:blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          className="max-w-3xl mb-14 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-[10px] sm:text-xs uppercase tracking-[0.35em] text-yellow/80 mb-4 sm:mb-6">
            Why Choose RMB
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-6">
            Designed Around <br />
            <span className="text-yellow">Your Property Goals</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/50 leading-relaxed">
            A modern real estate experience that prioritises strategy, clarity,
            and exceptional results.
          </p>
        </motion.div>

        {/* SPOTLIGHT STRIP */}
        <div className="flex flex-col lg:flex-row border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5">
          {/* LEFT – TITLES */}
          <div className="lg:w-1/2 divide-y divide-white/10">
            {reasons.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-5 sm:px-8 py-6 sm:py-8 transition-all duration-500
                  ${
                    activeIndex === index
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  }`}
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span
                    className={`font-display text-xl sm:text-2xl md:text-3xl transition-colors
                      ${
                        activeIndex === index
                          ? "text-yellow"
                          : "text-white/30"
                      }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-base sm:text-xl md:text-2xl text-white">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT – SPOTLIGHT CONTENT */}
          <div className="lg:w-1/2 p-6 sm:p-10 md:p-14 flex items-center">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-display text-white leading-relaxed mb-5 sm:mb-6">
                {reasons[activeIndex].description}
              </p>

              <div className="w-16 sm:w-24 h-[2px] bg-gradient-to-r from-yellow to-orange mb-4 sm:mb-6" />

              <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.25em]">
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
