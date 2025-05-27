import { motion } from "motion/react";

const LoadingScreen = () => {
  return (
    <motion.div className="bg-black fixed inset-0 text-black z-50">
      {/* top panel */}
      <motion.div
        className="bg-white w-full h-1/2 flex justify-center items-end"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
      >
        <motion.span
          initial={{ scale: 3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold tracking-[0.25em] mb-2 font-Bebas Neue"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          CRAFTING
        </motion.span>
      </motion.div>

      {/* bottom panel */}
      <motion.div
        className="bg-white w-full h-1/2 flex justify-center items-start"
        initial={{ y: 0 }}
        animate={{ y: "+100%" }}
        transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
      >
        <motion.span
          initial={{ scale: 3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold tracking-widest mt-2"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          BEAUTIFUL INTERFACES
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
