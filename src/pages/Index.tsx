
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import PatentsSection from "@/components/PatentsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  // Control scroll behavior
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <AchievementsSection />
      <ProjectsSection />
      <SkillsSection />
      <PatentsSection />
      <ContactSection />
      
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Santhosh. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Index;
