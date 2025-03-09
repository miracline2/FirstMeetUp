import teaTime from '../../../assets/Images/Image-5.png';
import { motion } from "framer-motion";
import SpeechBubble from '../../../Constant/SpeechBubble';

const TeaBreak = () => {
    return (
        <div className="relative w-full min-h-screen bg-pink-100">
            {/* Background Image */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${teaTime})` }}
            ></motion.div>

            {/* Speech Bubbles Positioned Above Characters */}
            <div className="absolute top-[28%] left-[5%] z-10">
                <SpeechBubble text="Enaku Pothum 🥺" position="bottom" />
            </div>
            <div className="absolute top-[20%] right-[5%] z-10">
                <SpeechBubble text="Hey Saapdri..." position="bottom" />
            </div>

            {/* Text Content */}
            <div className="relative flex justify-center items-center flex-col gap-y-5 min-h-screen text-center px-4">
                <h2 className="text-md md:text-3xl flex justify-baseline font-bold text-white shadow-lg bg-black/30 p-2 rounded-lg">
                    'Drinking Tea Together for the First Time 💕'
                </h2>
            </div>

            {/* Note at the Bottom */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-md md:text-2xl font-bold text-black shadow-lg bg-white/70 px-4 py-2 rounded-lg z-10"
            >
                Fun Fact: And Then You Ate Everything 🍽️😆
            </motion.div>
        </div>
    );
};

export default TeaBreak;
