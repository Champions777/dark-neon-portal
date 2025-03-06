
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const RotatingText = ({ texts, interval = 3000, className = '' }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500); // Half a second for the fade out animation
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return (
    <div className={`relative h-8 ${className}`}>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center sm:justify-start"
          >
            {texts[currentIndex]}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
