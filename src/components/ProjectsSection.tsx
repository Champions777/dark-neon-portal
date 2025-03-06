
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const Project = ({ title, description, tags, index }: ProjectProps) => {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    once: true,
  });

  // Calculate delay based on grid position
  const calculateDelay = () => {
    const baseDelay = 0.1;
    const columnDelay = (index % 2) * 0.2;
    const rowDelay = Math.floor(index / 2) * 0.1;
    return baseDelay + columnDelay + rowDelay;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: calculateDelay() }}
      className="flip-card h-full"
    >
      <div className="flip-card-inner h-full">
        <div className="flip-card-front h-full">
          <div className="glass-card h-full rounded-lg p-6 flex flex-col justify-between border border-white/5 hover:border-neon-blue/30 hover:neon-glow-blue">
            <div>
              <h3 className="text-xl font-medium text-white mb-4">{title}</h3>
              <p className="text-gray-400 line-clamp-3">{description}</p>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="text-xs py-1 px-2 bg-neon-blue/10 text-neon-blue rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-500">Flip for details</div>
            </div>
          </div>
        </div>
        <div className="flip-card-back h-full">
          <div className="glass-card h-full rounded-lg p-6 border-neon-blue/30 neon-glow-blue">
            <h3 className="text-xl font-medium text-white mb-4">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="text-xs py-1 px-2 bg-neon-blue/10 text-neon-blue rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    once: true,
  });

  const projects = [
    {
      title: "GPA/CGPA Calculator",
      description: "Designed and implemented a user-friendly interface for a full-stack grade calculation tool that simplifies academic performance tracking.",
      tags: ["UI/UX", "Frontend", "React"]
    },
    {
      title: "AI Task Organizer",
      description: "Developed a chatbot-based system for automated study scheduling with an intuitive interface that adapts to user preferences.",
      tags: ["AI", "UX Design", "Python"]
    },
    {
      title: "Salon & Restaurant Websites",
      description: "Created modern, responsive UI/UX designs for business clients that increased online engagement and improved customer experience.",
      tags: ["Web Design", "Responsive", "Client Work"]
    },
    {
      title: "Decentralized Chat App",
      description: "Designed blockchain-based secure messaging UI with focus on privacy, security, and intuitive user experience.",
      tags: ["Blockchain", "UI Design", "Security"]
    }
  ];

  return (
    <section id="projects" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-blue inline-block px-3 py-1 rounded-full text-sm font-medium bg-neon-blue/10">
            Projects
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gradient">Featured Work</h2>
          <p className="text-gray-400 max-w-lg mx-auto mt-4">
            A selection of my recent UI/UX design and development projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
