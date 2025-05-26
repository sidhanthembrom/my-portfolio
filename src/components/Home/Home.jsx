import { motion } from "motion/react";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-black h-[calc(100vh-100px)] p-20 flex justify-center items-center gap-20"
    >
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          animate={{ opacity: 1 }}
          className="font-bold bg-clip-text text-transparent text-center bg-linear-to-r from-cyan-500 to-blue-500 text-[3rem] h-40 w-[35rem]"
        >
          Hi, I'm Sidhant Hembrom, a Frontend Developer
          <span className="text-white">.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          animate={{ opacity: 1 }}
          className="bg-linear-to-r from-cyan-500 to-blue-500 font-bold bg-clip-text text-transparent text-center text-[1.1rem]"
        >
          Passionate about building beautiful and efficient UIs with React —{" "}
          <br />
          turning design concepts into engaging, interactive web experiences.
        </motion.p>
      </div>
      <div className="flex bg-radial from-cyan-500 to-blue-500 h-[400px]">
        <img src="/for_website.png" alt="profile-img" />
      </div>
    </div>
  );
}
