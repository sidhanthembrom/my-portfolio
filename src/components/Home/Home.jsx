import { motion } from "motion/react";

export default function Home() {
  return (
    <div
      id="home"
      className="bg-white h-[calc(100vh-100px)] p-20 flex justify-center items-center gap-20"
    >
      <div className="flex flex-col">
        <div className="relative overflow-hidden">
          <motion.h1 className="font-bold text-[3rem] h-40 w-[35rem]">
            Hi, I'm Sidhant Hembrom, a Frontend Developer
          </motion.h1>
          <motion.div
            className="absolute bg-black inset-0"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          ></motion.div>
        </div>
        <motion.p
          className="font-bold text-[1.1rem]"
          initial={{ y: +50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Passionate about building beautiful and efficient UIs with React —{" "}
          <br />
          turning design concepts into engaging, interactive web experiences.
        </motion.p>
      </div>
      <motion.div className="flex h-[500px]">
        <img src="/for_website.png" alt="profile-img" />
      </motion.div>
    </div>
  );
}
