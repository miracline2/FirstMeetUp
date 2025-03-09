


import atmScean from '../../../assets/Images/Image-7.png';
import { motion } from "framer-motion";
import SpeechBubble from '../../../Constant/SpeechBubble';

const AtmAttrocities = () => {
    return (
        <div className="relative w-full min-h-screen bg-pink-100">
            {/* Background Image */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${atmScean})` }}
            ></motion.div>

            {/* Speech Bubbles Positioned Above Characters */}
            <div className="absolute top-[10%] left-[15%] z-10">
                <SpeechBubble text="...💢" position="bottom" />
            </div>
            <div className="absolute top-[15%] right-[5%] z-10">
                <SpeechBubble text="Konja neram Inga irukalama? 🥺" position="bottom" />
            </div>

            {/* Text Content */}
            <div className="relative flex justify-center items-center flex-col gap-y-5 min-h-screen text-center px-4">
                <h2 className="text-md md:text-3xl flex justify-baseline font-bold text-white shadow-lg bg-black/30 p-2 rounded-lg">
                    'We went Atm to Fetch some money'
                </h2>
            </div>

            {/* Note at the Bottom */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 4 }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-md md:text-2xl font-bold text-black shadow-lg bg-white/70 px-4 py-2 rounded-lg z-10"
            >
                Fun Fact: And Then We were Playing in ATM By Going outside and Inside 😆
            </motion.div>
        </div>
    );
};

export default AtmAttrocities;
