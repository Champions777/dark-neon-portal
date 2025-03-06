
import { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import RotatingText from "./RotatingText";

const HeroSection = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded:", container);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-0">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#0EA5E9",
            },
            links: {
              color: "#0EA5E9",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 animated-gradient"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-3 inline-block"
          >
            <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm font-medium">
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-gradient font-bold"
          >
            Hi, I'm Santhosh
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8"
          >
            <RotatingText 
              texts={[
                "UI/UX Designer", 
                "AI & Data Science Enthusiast", 
                "Innovator"
              ]}
              interval={3000}
              className="h-10 sm:h-12 md:h-14"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
          >
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-lg group bg-neon-blue bg-opacity-10 backdrop-blur-sm border border-neon-blue/30 hover:border-neon-blue transition-all duration-300"
            >
              <span className="relative text-white group-hover:text-white transition-colors duration-300">
                Get in touch
              </span>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 group-hover:bg-neon-blue transition-all duration-300"></div>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:neon-glow-blue transition-all duration-300"></div>
            </a>
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <span className="relative text-white/80 group-hover:text-white transition-colors duration-300">
                View Projects
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <a
              href="#about"
              className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
