
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

interface AchievementProps {
  title: string;
  date: string;
  description: string;
  index: number;
}

const Achievement = ({ title, date, description, index }: AchievementProps) => {
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
          <div 
            className={`glass-card h-full rounded-lg p-6 flex flex-col justify-between border border-white/5 ${
              index % 3 === 0 
                ? 'hover:border-neon-blue/30 hover:neon-glow-blue' 
                : index % 3 === 1 
                  ? 'hover:border-neon-purple/30 hover:neon-glow-purple' 
                  : 'hover:border-neon-pink/30 hover:neon-glow-pink'
            }`}
          >
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                index % 3 === 0 
                  ? 'bg-neon-blue/10 text-neon-blue' 
                  : index % 3 === 1 
                    ? 'bg-neon-purple/10 text-neon-purple' 
                    : 'bg-neon-pink/10 text-neon-pink'
              }`}>
                {date}
              </span>
              <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
              <p className="text-gray-400 line-clamp-3">{description}</p>
            </div>
            <div className="mt-4 text-sm text-gray-500">Flip for details</div>
          </div>
        </div>
        <div className="flip-card-back h-full">
          <div 
            className={`glass-card h-full rounded-lg p-6 ${
              index % 3 === 0 
                ? 'border-neon-blue/30 neon-glow-blue' 
                : index % 3 === 1 
                  ? 'border-neon-purple/30 neon-glow-purple' 
                  : 'border-neon-pink/30 neon-glow-pink'
            }`}
          >
            <h3 className="text-xl font-medium text-white mb-4">{title}</h3>
            <div className={`text-sm ${
              index % 3 === 0 
                ? 'text-neon-blue' 
                : index % 3 === 1 
                  ? 'text-neon-purple' 
                  : 'text-neon-pink'
            } mb-4`}>
              Team Leader
            </div>
            <p className="text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    once: true,
  });

  const achievements = [
    {
      title: "SIH Finalist",
      date: "2024",
      description: "Designed UI/UX for an AI-driven learning platform, reaching the finals of Smart India Hackathon."
    },
    {
      title: "Bengaluru Pitchthon",
      date: "2023",
      description: "1st place for Smart Care Helmet, an IoT-based safety innovation combining hardware and intuitive interface design."
    },
    {
      title: "Pune Nextniche Hackathon",
      date: "2024",
      description: "Developed an AI-based investment platform with advanced visualization and user-friendly interfaces."
    },
    {
      title: "VIT Pitchhack",
      date: "2024",
      description: "Built Arise, a blockchain-powered student-investor network with intuitive UI/UX for seamless connections."
    },
    {
      title: "SRM Pitchathon",
      date: "2024",
      description: "Created Soulsborne, an AI-powered education platform that adapts to individual learning styles with responsive design."
    },
    {
      title: "SRM Valliammai Research",
      date: "2022",
      description: "Published research on Low-Cost Contactless ECG Monitoring Systems, focusing on both technical feasibility and user experience."
    }
  ];

  return (
    <section id="achievements" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-pink inline-block px-3 py-1 rounded-full text-sm font-medium bg-neon-pink/10">
            Achievements
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gradient">Hackathons & Awards</h2>
          <p className="text-gray-400 max-w-lg mx-auto mt-4">
            Leading teams to create innovative solutions at various hackathons and competitions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              date={achievement.date}
              description={achievement.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
