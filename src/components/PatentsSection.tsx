
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

interface PatentProps {
  title: string;
  applicationNo: string;
  published: string;
  description: string;
  index: number;
}

const Patent = ({ title, applicationNo, published, description, index }: PatentProps) => {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.3 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 },
      }}
      className={`glass-card rounded-lg p-6 border border-white/5 transform transition-all duration-300 hover:neon-glow-${index % 2 === 0 ? 'purple' : 'blue'}`}
    >
      <div className="relative">
        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mr-2">Application No:</span>
            <span className="text-gray-300 text-sm">{applicationNo}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mr-2">Published:</span>
            <span className="text-gray-300 text-sm">{published}</span>
          </div>
        </div>
        <p className="text-gray-400">{description}</p>
        
        {/* Abstract decorative patent symbol */}
        <div className="absolute top-2 right-2 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-12 h-12 text-neon-${index % 2 === 0 ? 'purple' : 'blue'}`}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const PatentsSection = () => {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    once: true,
  });

  const patents = [
    {
      title: "CoutureX Enchant (Fashion Design Hub)",
      applicationNo: "202441069207 A",
      published: "20/09/2024",
      description: "An innovative digital platform for fashion designers that combines AI-powered design tools with an intuitive user interface for seamless creative workflow."
    },
    {
      title: "Smart Care Helmet (Advanced Safety Gear)",
      applicationNo: "202441021555 A",
      published: "29/03/2024",
      description: "An IoT-enabled safety helmet with an intuitive user interface that provides real-time monitoring and emergency alert systems for industrial workers."
    }
  ];

  return (
    <section id="patents" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-purple inline-block px-3 py-1 rounded-full text-sm font-medium bg-neon-purple/10">
            Patents
          </span>
          <h2 className="text-4xl font-bold mt-2 text-gradient">Intellectual Property</h2>
          <p className="text-gray-400 max-w-lg mx-auto mt-4">
            Innovations that combine thoughtful design with technical functionality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {patents.map((patent, index) => (
            <Patent
              key={index}
              title={patent.title}
              applicationNo={patent.applicationNo}
              published={patent.published}
              description={patent.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatentsSection;
