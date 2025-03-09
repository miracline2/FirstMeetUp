import HandHold from '../../../assets/Images/Image-8.png';
import { motion } from "framer-motion";


const HoldingHand = () => {
    return (
        <div className="relative w-full min-h-screen bg-pink-100">
            {/* Background Image */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${HandHold})` }}
            ></motion.div>

            {/* Speech Bubbles Positioned Above Characters */}
         

            {/* Text Content */}
            <div className="relative flex justify-center items-center flex-col gap-y-5 min-h-screen text-center px-4">
                <h2 className="text-md md:text-3xl flex justify-baseline font-bold text-white shadow-lg bg-black/30 p-2 rounded-lg">
                    'when You Hold My Hand For The First Time 💕'
                </h2>
            </div>

            {/* Note at the Bottom */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 6 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-md md:text-2xl font-bold text-black shadow-lg bg-white/70 px-4 py-2 rounded-lg z-10"
            >
               You Know What : My Heart Beat Went Crazy 🙈
            </motion.div>
        </div>
    );
};

export default HoldingHand;
