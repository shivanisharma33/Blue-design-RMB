import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FeatureCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const FeatureCard = ({
  number,
  title,
  subtitle,
  description,
  image,
  reverse = false,
}: FeatureCardProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-20 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <span className="absolute -top-24 text-[120px] font-bold text-white/5">
          {number}
        </span>

        <span className="block text-sm tracking-[0.35em] uppercase text-yellow mb-6">
          {subtitle}
        </span>

        <h3 className="text-4xl md:text-5xl font-light mb-8">
          {title}
        </h3>

        <p className="text-lg text-white/70 leading-relaxed max-w-xl text-black">
          {description}
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        style={{ y: yImage }}
        className="relative h-[520px] rounded-3xl overflow-hidden"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        {/* Glass Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </motion.div>
    </div>
  );
};

export default FeatureCard;
