import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="h-[100px] flex justify-between px-20 items-center bg-black">
      <h1 className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent text-2xl">
        Portfolio
      </h1>
      <nav>
        <ul className="flex gap-5">
          <li className="cursor-pointer relative overflow-hidden px-1">
            <a
              href="#home"
              className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent block relative after:absolute after:left-0 after:bottom-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500"
            >
              Home
            </a>

            {/* used for overlay */}
            <motion.div
              className="bg-black inset-0 absolute"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </li>
          <li className="cursor-pointer relative overflow-hidden px-1">
            <a
              href="#about"
              className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent block relative after:absolute after:left-0 after:bottom-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500"
            >
              About
            </a>
            <motion.div
              className="absolute bg-black inset-0"
              initial={{ x: 0 }}
              animate={{ x: "101%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </li>
          <li className="cursor-pointer relative overflow-hidden px-1">
            <a
              href="#projects"
              className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent block relative after:absolute after:left-0 after:bottom-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500"
            >
              Projects
            </a>
            <motion.div
              className="bg-black inset-0 absolute"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
          </li>
          <li className="cursor-pointer relative overflow-hidden px-1">
            <a
              href="#contacts"
              className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent block relative after:absolute after:left-0 after:bottom-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500"
            >
              Contacts
            </a>
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
