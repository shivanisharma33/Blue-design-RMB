import { motion } from "framer-motion";
import TeamMember from "./TeamMember";
import christianImg from "@/assets/team1.jpg";
import joImg from "@/assets/team2.jpg";
import { Link } from "react-router-dom";

const teamMembers = [
 
  {
    name: "Abhishek Bhasin",
    role: "Director",
    phone: "+61 430 319 912",
    email: "ab@rmbrealestate.com.au",
    image: joImg,
  },
   
];

interface TeamSectionProps {
  showHeading?: boolean;
}

const TeamSection = ({ showHeading = true }: TeamSectionProps) => {
  return (
    <section
      id="team"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-36 bg-gradient-to-b from-navy via-[#1e2156] to-navy overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-yellow rounded-full blur-[220px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        {showHeading && (
          <motion.div
            className="text-center mb-20 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="block text-xs uppercase tracking-[0.35em] text-yellow/80 mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Meet the experts
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Dedicated professionals committed to making your property journey exceptional.
            </p>
          </motion.div>
        )}

        {/* TEAM GRID (CENTERED) */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 md:gap-14">
            {teamMembers.map((member, index) => (
              <TeamMember key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
      <motion.div
  className="text-center mt-20 md:mt-24"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
  <Link
    to="/contact"
    className="inline-flex items-center gap-3 px-10 py-4 
               border border-yellow/50 text-yellow 
               hover:bg-yellow hover:text-navy 
               transition-all duration-500 ease-out 
               text-xs uppercase tracking-[0.2em]"
  >
    Get in Touch
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </Link>
</motion.div>


      </div>
    </section>
  );
};

export default TeamSection;
