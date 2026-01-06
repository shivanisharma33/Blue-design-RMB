import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import christianImg from '@/assets/team1.jpg';
import joImg from '@/assets/team2.jpg';
import michelleImg from '@/assets/team-michelle.jpg';

const teamMembers = [
  {
    name: 'Harsh kumar',
    phone: '+61 450 909 063',
    email: 'christian@marchettigroup.com.au',
    image: christianImg,
  },
  {
    name: 'Abhishek Bhasin',
    phone: '+61 450 909 063',
    email: 'accounts@marchettigroup.com.au',
    image: joImg,
  },
  {
    name: 'Michelle Attard',
    phone: '03 9017 4848',
    email: 'admin@marchettigroup.com.au',
    image: michelleImg,
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="section-heading text-foreground mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          Meet the team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
