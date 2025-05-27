export default function Header() {
  return (
    <header className="h-[100px] flex justify-between px-20 items-center bg-black ">
      <h1 className="text-2xl bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Portfolio
      </h1>
      <nav>
        <ul className="flex gap-5">
          <li className="cursor-pointer">
            <a
              href="#home"
              className="block relative after:absolute after:left-0 after:bottom-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              Home
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="#about"
              className="block relative after:absolute after:left-0 after:bottom-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              About
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="#projects"
              className="block relative after:absolute after:left-0 after:bottom-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              Projects
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="#contacts"
              className="block relative after:absolute after:left-0 after:bottom-0 after:bg-white after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-500 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
