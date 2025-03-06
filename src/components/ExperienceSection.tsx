
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

interface ExperienceItemProps {
  title: string;
  company: string;
  date: string;
  description: string[];
  index: number;
}

const ExperienceItem = ({ title, company, date, description, index }: ExperienceItemProps) => {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative pl-8 pb-8 group"
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 top-0 h-full">
        <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-neon-orange"></div>
        <div className="absolute left-[7px] top-6 h-full w-[2px] bg-gray-700 group-last:bg-transparent"></div>
      </div>
      
      {/* Card with hover effect */}
      <div className="glass-card rounded-lg p-6 transition-all duration-300 border border-white/5 hover:border-neon-orange/30 hover:neon-glow-orange">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className="text-xl font-medium text-white">{title}</h3>
          <span className="text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-full mt-2 md:mt-0">
            {date}
          </span>
        </div>
        <div className="text-neon-orange/90 mb-4">{company}</div>
        <ul className="space-y-2">
          {description.map((item, i) => (
            <li key={i} className="flex items-start">
              <div className="text-neon-orange mr-2 mt-1">•</div>
              <p className="text-gray-300">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    once: true,
  });

  const experiences = [
    {
      title: "Business Intelligence Intern",
      company: "DS Solutions",
      date: "May 2023 - Aug 2023",
      description: [
        "Conducted UI/UX research to optimize customer interaction with data-driven interfaces.",
        "Led user interface improvements for business intelligence reports.",
        "Worked with cross-functional teams to integrate design with technical requirements."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-orange inline-block px-3 py-1 rounded-full text-sm font-medium bg-neon-orange/10">
            Experience
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gradient">Professional Journey</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              date={exp.date}
              description={exp.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
