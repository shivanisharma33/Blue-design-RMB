import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

import locationImg from "@/assets/RMB realestate.jpg";
import horseImg from "@/assets/RMB realestate (1).jpg";
import interiorImg from "@/assets/interior.jpg";

/* ============================
   FEATURES DATA
   ============================ */

const features = [
  {
    title: "Local market advantage",
    subtitle: "Melbourne Expertise",
    description:
      "Based in Melbourne, RMB Real Estate has a deep understanding of local suburbs, buyer demand, and pricing trends. From family homes to growth-focused investments, we know how to position properties for the right audience and strong results.",
    image: locationImg,
    imageAlt: "Melbourne suburban aerial view",
  },
  {
    title: "Built for buyers & investors",
    subtitle: "Smart Property Choices",
    description:
      "We work closely with homeowners, first-time buyers, and property investors to identify opportunities that align with lifestyle needs and long-term value. Our approach is practical, transparent, and driven by real market insight.",
    image: horseImg,
    imageAlt: "Residential and investment properties in Melbourne",
  },
  {
    title: "Professional. Personal. Proven.",
    subtitle: "Five-Star Service",
    description:
      "At RMB Real Estate, every client receives a polished and professional experience. We combine modern marketing tools, technology-driven processes, and genuine customer care to ensure smooth transactions and trusted relationships.",
    image: interiorImg,
    imageAlt: "Modern luxury home interior",
  },
];

/* ============================
   FEATURES SECTION
   ============================ */

const FeaturesSection = () => {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-36 bg-gradient-to-b from-background via-cream to-background overflow-hidden">

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23242861' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <motion.div
          className="max-w-3xl mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
        >
      <span className="block text-base font-medium uppercase tracking-[0.35em] text-yellow/80 mb-6">
  Why Choose Us
</span>


          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Real estate done differently.
          </h2>

          <p className="text-lg text-foreground/60 max-w-xl">
            A modern Melbourne real estate agency combining local insight,
            strategic guidance, and premium client service.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}
        <div className="space-y-20 md:space-y-28">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              reverse={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
