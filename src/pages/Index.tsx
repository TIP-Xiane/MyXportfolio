import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.05 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

const Index = () => {
  return (
    <div className="min-h-screen text-foreground" style={{ background: "linear-gradient(180deg, hsl(220 20% 4%) 0%, hsl(220 18% 7%) 20%, hsl(220 20% 5%) 40%, hsl(220 18% 8%) 60%, hsl(220 20% 5%) 80%, hsl(220 20% 4%) 100%)" }}>
      <Navbar />
      <HeroSection />
      <motion.div {...sectionReveal}>
        <AboutSection />
      </motion.div>
      <motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.05 }}>
        <SkillsSection />
      </motion.div>
      <motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.05 }}>
        <ProjectsSection />
      </motion.div>
      <motion.div {...sectionReveal} transition={{ ...sectionReveal.transition, delay: 0.05 }}>
        <ContactSection />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Index;
