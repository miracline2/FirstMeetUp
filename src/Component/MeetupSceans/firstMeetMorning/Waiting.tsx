import Image1 from '../../../assets/Images/Image1.png';
import { motion } from "framer-motion";
import SpeechBubble from '../../../Constant/SpeechBubble';

const Waiting = () => {
    return (
        <div className="relative w-full min-h-screen bg-pink-100">
            {/* Background Image */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${Image1})` }}
            ></motion.div>

            {/* Speech Bubble Positioned Above Girl */}
            <div className="absolute top-[15%] right-[10%] z-10">
                <SpeechBubble text="Hi" position="bottom" />
            </div>

            {/* Text Content */}
            <div className="relative flex justify-center items-center flex-col gap-y-5 min-h-screen text-center px-4">
                <motion.h1>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        className="text-2xl md:text-3xl font-bold text-gray-500 shadow-lg p-2 rounded-lg"
                    >
                         Our 1st Hi...
                    </motion.div>
                </motion.h1>
                {/* <h2 className="text-2xl md:text-3xl flex justify-baseline font-bold text-white shadow-lg bg-black/30 p-2 rounded-lg">
                    Our First Meet in Koyambedu Bus-stand 💑💕
                </h2> */}
            </div>
        </div>
    );
};

export default Waiting;
