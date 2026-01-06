import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import locationImg from '@/assets/location.jpg';
import horseImg from '@/assets/Horses.jpg';
import interiorImg from '@/assets/interior.jpg';

const features = [
  {
    title: 'Home ground advantage',
    subtitle: 'Local Expertise',
    description:
      "Our patch is Doreen and the surrounding suburbs, from Woodstock and Whittlesea down to Hurstbridge and Wattle Glen. It goes without saying (but hey, we'll say it anyway): we know this area like the back of our hand.",
    image: locationImg,
    imageAlt: 'Aerial view of Australian countryside',
  },
  {
    title: 'Acres of experience',
    subtitle: 'Premium Acreages',
    description:
      "Residential properties are our bread and butter, but we also specialise in premium acreages. Horses, stables, bright golden haze on the meadow - that sort of thing. Special properties require special skills.",
    image: horseImg,
    imageAlt: 'Horse in Australian countryside paddock',
  },
  {
    title: 'Polish and precision',
    subtitle: 'Five Star Service',
    description:
      "With RMB Real Estate, you're getting a polished experience. Real estate with the five star treatment. We leverage new technology, digital marketing, and good, old-fashioned customer service.",
    image: interiorImg,
    imageAlt: 'Luxury modern home interior',
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-gradient-to-b from-background via-cream to-background relative">

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23242861' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto relative">

        {/* Section Header */}
        <motion.div
          className="max-w-3xl mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="label-text text-orange mb-4 block tracking-[0.2em]">Why Choose Us</span>
          <h2 className="section-heading text-foreground mb-6">
            Real estate done differently.
          </h2>
          <p className="section-subheading text-foreground/60 max-w-xl">
            We bring a fresh approach to property — combining local expertise with premium service.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="space-y-8 md:space-y-0">
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
