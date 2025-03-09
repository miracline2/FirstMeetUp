import { useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";


interface IRewindingComponentsProps {
  onComplete: () => void;
}

const IntroPage = ({ onComplete }: IRewindingComponentsProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 9000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4 }}
      className="flex flex-col items-center justify-center h-screen bg-intro" // Custom class used here
    >
      <h1 className="text-md md:text-xl lg:text-2xl mb:mb-10 text-center font-bold text-gray-700">
        <Typewriter
          words={[
            "Remembering Our First Date on 01-07-2023 💖",
            "Reviewing Our Memories...",
          ]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={50}
        />
      </h1>
    </motion.div>
  );
};

export default IntroPage;
