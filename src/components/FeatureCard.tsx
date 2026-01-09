import { motion } from "framer-motion";

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
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* ================= TEXT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      >
        <span className="block text-yellow text-sm tracking-widest mb-4">
          {number}
        </span>

        <h3 className="text-4xl md:text-5xl font-light text-black mb-4">
          {title}
        </h3>

        {/* 🔒 EXPLICIT COLOR (FIXED FOR VERCEL) */}
        <p className="text-lg font-medium text-gray-800 mb-6">
          {subtitle}
        </p>

        {/* 🔒 EXPLICIT COLOR (FIXED FOR VERCEL) */}
        <p className="text-base leading-relaxed text-gray-600 max-w-xl">
          {description}
        </p>
      </motion.div>

      {/* ================= IMAGE ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
        className="relative overflow-hidden rounded-3xl"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>
    </div>
  );
};

export default FeatureCard;
