import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="h-[100px] flex justify-between px-20 items-center bg-black ">
      <h1 className="text-2xl bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Portfolio
      </h1>
      <nav>
        <ul className="flex gap-5">
          <li className="cursor-pointer">
            <motion.a
              href="#home"
              className="block bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Home
            </motion.a>
          </li>
          <li className="cursor-pointer">
            <motion.a
              href="#about"
              className="block bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About
            </motion.a>
          </li>
          <li className="cursor-pointer">
            <motion.a
              href="#projects"
              className="block bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Projects
            </motion.a>
          </li>
          <li className="cursor-pointer">
            <motion.a
              href="#contacts"
              className="block bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contacts
            </motion.a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
