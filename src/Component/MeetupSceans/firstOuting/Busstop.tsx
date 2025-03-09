

// const Busstop = () => {
//   return (
//     <div>Busstop</div>
//   )
// }

// export default Busstop




import busStopScean from '../../../assets/Images/Image-10.png';
import { motion } from "framer-motion";
import SpeechBubble from '../../../Constant/SpeechBubble';

const Busstop = () => {
    return (
        <div className="relative w-full min-h-screen bg-pink-100">
            {/* Background Image */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${busStopScean})` }}
            ></motion.div>

            {/* Speech Bubbles Positioned Above Characters */}
            <div className="absolute top-[15%] left-[5%] z-10">
                <SpeechBubble text="Photo edukava hold pani?" position="bottom" />
            </div>
            <div className="absolute top-[6%] right-[5%] z-10">
                <SpeechBubble text="No, panna kudathu💢" position="bottom" />
            </div>

            {/* Text Content */}
            <div className="relative flex justify-center items-center flex-col gap-y-5 min-h-screen text-center px-4">
                <h2 className="text-md md:text-3xl flex justify-baseline font-bold text-white shadow-lg bg-black/30 p-2 rounded-lg">
                    'I ask Your Hand To take Photo 📸'
                </h2>
            </div>

            {/* Note at the Bottom */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-md md:text-2xl font-bold text-black shadow-lg bg-white/70 px-4 py-2 rounded-lg z-10"
            >
                Fun Fact: You regret this later 😆
            </motion.div>
        </div>
    );
};

export default Busstop;
