import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  phone: string;
  email: string;
  image: string;
  index: number;
  role?: string;
}

const TeamMember = ({ name, phone, email, image, index, role }: TeamMemberProps) => {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden mb-5 rounded-sm">
        {/* Subtle border */}
        <div className="absolute inset-0 border border-white/10 z-10 pointer-events-none rounded-sm" />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />

        {/* Contact icons on hover */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-3 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="w-10 h-10 rounded-full bg-yellow/90 flex items-center justify-center text-navy hover:bg-yellow transition-colors"
            aria-label={`Call ${name}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <a
            href={`mailto:${email}`}
            className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-navy hover:bg-white transition-colors"
            aria-label={`Email ${name}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale-[30%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <h4 className="font-display text-xl md:text-2xl font-medium text-white mb-1 group-hover:text-yellow transition-colors duration-300">
        {name}
      </h4>

      {/* Role */}
      {role && (
        <p className="label-text text-orange/80 text-[10px] tracking-[0.2em] mb-3">{role}</p>
      )}

      {/* Contact Info - visible on mobile, hidden on hover for desktop */}
      <div className="flex items-center gap-2 text-xs text-white/50 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300">
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="hover:text-yellow transition-colors"
        >
          {phone}
        </a>
      </div>
    </motion.div>
  );
};

export default TeamMember;
