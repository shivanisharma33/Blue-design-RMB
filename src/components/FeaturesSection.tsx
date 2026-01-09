import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FeatureCard from "./FeatureCard";

import locationImg from "@/assets/RMB realestate after.jpg";
import horseImg from "@/assets/RMB-Final.jpg";
import interiorImg from "@/assets/RMB realestate 2.jpg";

const features = [
  {
    number: "01",
    title: "Local market advantage",
    subtitle: "Melbourne Expertise",
    description:
      "Based in Melbourne, RMB Real Estate has a deep understanding of local suburbs, buyer demand, and pricing trends. From family homes to growth-focused investments, we know how to position properties for the right audience and strong results.",
    image: locationImg,
  },
  {
    number: "02",
    title: "Built for buyers & investors",
    subtitle: "Smart Property Choices",
    description:
      "We work closely with homeowners, first-time buyers, and property investors to identify opportunities that align with lifestyle needs and long-term value. Our approach is practical, transparent, and driven by real market insight.",
    image: horseImg,
  },
  {
    number: "03",
    title: "Professional. Personal. Proven.",
    subtitle: "Five-Star Service",
    description:
      "At RMB Real Estate, every client receives a polished and professional experience. We combine modern marketing tools, technology-driven processes, and genuine customer care to ensure smooth transactions and trusted relationships.",
    image: interiorImg,
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-16 lg:px-24 py-40 bg-[white] text-white overflow-hidden"
    >
      {/* Vertical Progress Line */}
      <div className="absolute left-8 top-0 h-full w-px bg-white/10 text-black">
        <motion.div
          style={{ height: progressHeight }}
          className="absolute top-0 left-0 w-px bg-yellow"
        />
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-40">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="block text-xs tracking-[0.4em] uppercase text-yellow mb-8"
        >
          Why Choose RMB
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-light leading-tight max-w-3xl text-black"
        >
          A smarter, more personal way to
          <span className="italic font-medium"> buy & sell property</span>
        </motion.h2>
      </div>

      {/* Feature Blocks */}
      <div className="space-y-[220px] max-w-7xl mx-auto text-black">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.number}
            {...feature}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
