import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import TeamSection from '@/components/TeamSection';
import ServicesSection from "@/components/ServicesSection";

import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Hero />
      <AboutSection />
     
<ServicesSection />
      <FeaturesSection />
      <TeamSection />
      <Footer />
    </main>
  );
};

export default Index;
