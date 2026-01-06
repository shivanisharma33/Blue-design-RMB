import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FeatureCardProps {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  index?: number;
}

const FeatureCard = ({ title, subtitle, description, image, imageAlt, reverse = false, index = 0 }: FeatureCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);

  return (
    <motion.div
      ref={containerRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-12 md:py-20 border-b border-foreground/5 last:border-b-0`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
    >
      {/* Text Content */}
      <motion.div
        className={`space-y-5 ${reverse ? 'lg:order-2' : ''}`}
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
      >
        {/* Number indicator */}
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl md:text-6xl font-display font-light text-foreground/10">
            0{index + 1}
          </span>
          {subtitle && (
            <span className="label-text text-orange tracking-[0.2em]">
              {subtitle}
            </span>
          )}
        </div>

        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight">
          {title}
        </h3>

        <p className="body-text text-foreground/70 leading-relaxed">
          {description}
        </p>

        {/* Decorative element */}
        <motion.div
          className="w-12 h-[2px] bg-gradient-to-r from-orange to-yellow mt-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ originX: 0 }}
        />
      </motion.div>

      {/* Image */}
      <motion.div
        className={`overflow-hidden aspect-[4/3] rounded-sm shadow-lg group ${reverse ? 'lg:order-1' : ''}`}
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="relative w-full h-full overflow-hidden">
          {/* Subtle border overlay */}
          <div className="absolute inset-0 border border-foreground/5 z-10 pointer-events-none rounded-sm" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

          <motion.img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            style={{ y: imageY, scale: imageScale }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
