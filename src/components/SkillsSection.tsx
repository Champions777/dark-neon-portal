
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number; description: string }[];
  index: number;
}

const SkillCategory = ({ title, skills, index }: SkillCategoryProps) => {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="glass-card rounded-lg p-6"
    >
      <h3 className="text-xl font-medium text-white mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, i) => (
          <div key={i} className="group">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{skill.name}</span>
              <div className="relative">
                <span className="text-gray-500 text-sm">
                  {skill.level}%
                </span>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-48 bg-black/90 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10">
                  {skill.description}
                </div>
              </div>
            </div>
            <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                className={`h-full ${
                  index % 4 === 0 
                    ? 'bg-neon-blue' 
                    : index % 4 === 1 
                      ? 'bg-neon-purple' 
                      : index % 4 === 2
                        ? 'bg-neon-pink'
                        : 'bg-neon-orange'
                } rounded-full shadow-[0_0_5px_rgba(14,165,233,0.7)]`}
                style={{
                  boxShadow: index % 4 === 0 
                    ? '0 0 8px rgba(14,165,233,0.7)' 
                    : index % 4 === 1 
                      ? '0 0 8px rgba(139,92,246,0.7)' 
                      : index % 4 === 2
                        ? '0 0 8px rgba(217,70,239,0.7)'
                        : '0 0 8px rgba(249,115,22,0.7)'
                }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    once: true,
  });

  const skillCategories = [
    {
      title: "UI/UX Design",
      skills: [
        { 
          name: "Wireframing & Prototyping", 
          level: 90,
          description: "Expert in creating low and high-fidelity wireframes and interactive prototypes" 
        },
        { 
          name: "Figma", 
          level: 85,
          description: "Proficient in creating responsive designs and component systems" 
        },
        { 
          name: "Adobe XD", 
          level: 80,
          description: "Skilled in creating interactive prototypes and design systems" 
        },
        { 
          name: "User Research", 
          level: 75,
          description: "Experienced in conducting user interviews and usability testing" 
        }
      ]
    },
    {
      title: "Programming",
      skills: [
        { 
          name: "Python", 
          level: 85,
          description: "Proficient in data analysis, automation, and AI applications" 
        },
        { 
          name: "HTML/CSS", 
          level: 90,
          description: "Expert in creating responsive, accessible web interfaces" 
        },
        { 
          name: "JavaScript", 
          level: 80,
          description: "Strong skills in interactive web development and animations" 
        },
        { 
          name: "C++", 
          level: 70,
          description: "Competent in algorithm development and system programming" 
        }
      ]
    },
    {
      title: "Tools",
      skills: [
        { 
          name: "React.js", 
          level: 75,
          description: "Skilled in building component-based user interfaces" 
        },
        { 
          name: "Webflow", 
          level: 85,
          description: "Expert in creating responsive, no-code web designs" 
        },
        { 
          name: "WordPress", 
          level: 80,
          description: "Proficient in theme customization and plugin integration" 
        },
        { 
          name: "FlutterFlow", 
          level: 70,
          description: "Competent in creating mobile app interfaces with minimal code" 
        }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { 
          name: "Leadership", 
          level: 90,
          description: "Led multiple hackathon teams to victory with clear vision and direction" 
        },
        { 
          name: "Public Speaking", 
          level: 85,
          description: "Experienced presenter with ability to explain complex concepts clearly" 
        },
        { 
          name: "Team Collaboration", 
          level: 95,
          description: "Outstanding communicator who excels in cross-functional team settings" 
        },
        { 
          name: "Problem Solving", 
          level: 90,
          description: "Strong analytical thinking and creative solution development" 
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-blue inline-block px-3 py-1 rounded-full text-sm font-medium bg-neon-blue/10">
            Skills
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gradient">Technical Expertise</h2>
          <p className="text-gray-400 max-w-lg mx-auto mt-4">
            Hover over each skill to learn more about my real-world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
