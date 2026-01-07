import { motion } from "framer-motion";

const TeamMember = ({ name, role, phone, email, image, index }) => {
  return (
    <motion.div
      className="text-center max-w-sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {/* Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-[420px] object-cover"
        />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Text */}
      <h3 className="text-xl font-medium text-white mb-1">
        {name}
      </h3>

      <p className="text-sm uppercase tracking-[0.2em] text-yellow/80 mb-4">
        {role}
      </p>

      <p className="text-sm text-white/60">
        <a href={`tel:${phone}`} className="hover:text-yellow transition">
          {phone}
        </a>
      </p>

      <p className="text-sm text-white/60">
        <a href={`mailto:${email}`} className="hover:text-yellow transition">
          {email}
        </a>
      </p>
    </motion.div>
  );
};

export default TeamMember;
