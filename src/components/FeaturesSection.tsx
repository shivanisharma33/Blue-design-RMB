import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FeatureCard from "./FeatureCard";

import locationImg from "@/assets/RMB realestate after.jpg";
import horseImg from "@/assets/RMB-Final.jpg";
import interiorImg from "@/assets/RMB realestate 2.jpg";

/* ================= FEATURES DATA ================= */

const features = [
  {
    number: "01",
    title: "Fresh approach to real estate",
    subtitle: "Tailored to You",
    description:
      "The days of one-size-fits-all real estate solutions are over. RMB Real Estate offers a tailored approach that prioritizes your unique needs and goals, ensuring every strategy is designed specifically around what matters most to you.",
    image: locationImg,
  },
  {
    number: "02",
    title: "Cutting-edge technology",
    subtitle: "Modern Digital Advantage",
    description:
      "We leverage the latest digital tools and platforms to give you a competitive edge. From virtual tours and 3D floor plans to data-driven digital marketing, we make sure your property stands out and gets the visibility it deserves.",
    image: horseImg,
  },
  {
    number: "03",
    title: "Personal service, proven expertise",
    subtitle: "People-First Experience",
    description:
      "Exceptional service is at the heart of what we do. Our experienced team combines modern technology with high-touch, personalized service, offering hands-on guidance and trusted support throughout your entire real estate journey.",
    image: interiorImg,
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-16 lg:px-24 py-40 bg-white overflow-hidden"
    >
      {/* ================= VERTICAL PROGRESS LINE ================= */}
      <div className="absolute left-8 top-0 h-full w-px bg-black/10">
        <motion.div
          style={{ height: progressHeight }}
          className="absolute top-0 left-0 w-px bg-yellow"
        />
      </div>

      {/* ================= SECTION HEADER ================= */}
      <div className="max-w-7xl mx-auto mb-40">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="block text-xs tracking-[0.4em] uppercase text-yellow mb-8"
        >
          Why Choose RMB
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-light leading-tight max-w-3xl text-black"
        >
          A smarter, more personal way to{" "}
          <span className="italic font-medium">buy & sell property</span>
        </motion.h2>
      </div>

      {/* ================= FEATURE BLOCKS ================= */}
      <div className="space-y-[220px] max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.number}
            number={feature.number}
            title={feature.title}
            subtitle={feature.subtitle}
            description={feature.description}
            image={feature.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
