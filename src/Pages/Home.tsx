import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import IntroPage from "../Component/IntroPage";
import Waiting from "../Component/MeetupSceans/firstMeetMorning/Waiting";
import BusTrip from "../Component/MeetupSceans/firstMeetMorning/BusTrip";
import TeaBreak from "../Component/MeetupSceans/firstMeetMorning/TeaBreak";
import HoldingHand from "../Component/MeetupSceans/firstOuting/HoldingHand";
import AtmAttrocities from "../Component/MeetupSceans/firstOuting/AtmAttrocities";
import Busstop from "../Component/MeetupSceans/firstOuting/Busstop";
import LongWalk from "../Component/MeetupSceans/firstOuting/LongWalk";
import EndofDate from "../Component/MeetupSceans/firstOuting/EndofDate";

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const { scrollYProgress } = useScroll(); // Track scroll progress

  // Scale animation effect based on scroll position
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Scale from 1 to 1.2
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.5]); // Fade effect

  return (
    <div>
      {showIntro ? (
        <IntroPage onComplete={() => setShowIntro(false)} />
      ) : (
        <div>
          {/* Animated Waiting Section */}
          <motion.div style={{ scale, opacity }}>
            <Waiting />
          </motion.div>

          {/* Animated BusTrip Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates when 20% of the element is in view
          >
            <BusTrip />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates when 20% of the element is in view
          >
            <TeaBreak />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates when 20% of the element is in view
          >
            <HoldingHand />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates when 20% of the element is in view
          >
            <AtmAttrocities />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates when 20% of the element is in view
          >
            <Busstop />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates when 20% of the element is in view
          >
            <LongWalk />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Animates when 20% of the element is in view
          >
            <EndofDate />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;
