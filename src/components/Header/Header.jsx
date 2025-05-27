import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="h-[100px] flex justify-between px-20 items-center bg-white ">
      <h1 className="text-2xl">Portfolio</h1>
      <nav>
        <ul className="flex gap-5">
          <li className="cursor-pointer relative overflow-hidden px-1">
            <motion.a
              href="#home"
              className="block relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500"
            >
              Home
            </motion.a>
            <motion.div
              className="bg-black inset-0 absolute"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </li>
          <li className="cursor-pointer relative overflow-hidden px-1">
            <motion.a
              href="#about"
              className="block relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500"
            >
              About
            </motion.a>
            <motion.div
              className="absolute bg-black inset-0"
              initial={{ x: 0 }}
              animate={{ x: "101%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </li>
          <li className="cursor-pointer relative overflow-hidden px-1">
            <motion.a
              href="#projects"
              className="block relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500"
            >
              Projects
            </motion.a>
            <motion.div
              className="bg-black inset-0 absolute"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </li>
          <li className="cursor-pointer relative overflow-hidden px-1">
            <motion.a
              href="#contacts"
              className="block relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500"
            >
              Contacts
            </motion.a>
            <motion.div
              className="bg-black inset-0 absolute"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
