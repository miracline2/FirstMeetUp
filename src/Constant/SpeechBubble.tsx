import { motion } from "framer-motion";



interface ISpeechTextProps{
    text:string;
    position:string
}

const SpeechBubble = ({ text, position = "bottom" }:ISpeechTextProps) => {
  return (
    <div className="relative inline-block">
      {/* Bubble */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full shadow-md border-2 border-black" 
           style={{ fontFamily: "Comic Neue, sans-serif" }}>
        {text}
      </motion.div>

      {/* Tail */}
      <div
        className={`absolute w-0 h-0 border-[10px] border-transparent ${
          position === "bottom"
            ? "border-t-white top-full left-1/2 -ml-2 border-t-[10px] border-black"
            : "border-b-white bottom-full left-1/2 -ml-2 border-b-[10px] border-black"
        }`}
      ></div>
    </div>
  );
};

export default SpeechBubble;
