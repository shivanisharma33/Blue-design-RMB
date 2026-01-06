import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import christianImg from '@/assets/team1.jpg';
import joImg from '@/assets/team2.jpg';
import michelleImg from '@/assets/team-michelle.jpg';

const teamMembers = [
  {
    name: 'Abhishek Bhasin',
    role: 'Director',
    phone: '+61 450 909 063',
    email: 'ab@rmbrealestate.com.au',
    image: christianImg,
  },
  {
    name: 'Harsh Kumar',
    role: 'Sales Consultant',
    phone: '+61 430 319 912',
    email: 'ab@rmbrealestate.com.au',
    image: joImg,
  },
  {
    name: 'Bavan Grewal',
    role: 'Gold Sponsor',
    phone: '+61 450 909 063',
    email: 'ab@rmbrealestate.com.au',
    image: michelleImg,
  },
  {
    name: 'Divya Bhasin',
    role: 'Gold Sponsor',
    phone: '+61 450 909 063',
    email: 'ab@rmbrealestate.com.au',
    image: michelleImg,
  },
];

interface TeamSectionProps {
  showHeading?: boolean;
}

const TeamSection = ({ showHeading = true }: TeamSectionProps) => {
  return (
    <section id="team" className="px-6 md:px-12 lg:px-24 py-20 md:py-32 bg-gradient-to-b from-navy via-[#1e2156] to-navy relative overflow-hidden">

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-yellow rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* Section Header */}
        {showHeading && (
          <motion.div
            className="text-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="label-text text-yellow/80 mb-4 block tracking-[0.25em]">Our Team</span>
            <h2 className="section-heading text-white mb-6">
              Meet the experts
            </h2>
            <p className="section-subheading text-white/50 max-w-xl mx-auto">
              Dedicated professionals committed to making your property journey exceptional.
            </p>
          </motion.div>
        )}

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} {...member} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-yellow/50 text-yellow hover:bg-yellow hover:text-navy transition-all duration-500 ease-out label-text tracking-[0.15em]"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default TeamSection;
