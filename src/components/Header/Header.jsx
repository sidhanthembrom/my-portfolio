import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-[100px] flex justify-between px-20 items-center bg-black ">
      <h1 className="text-2xl bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
        Portfolio
      </h1>
      <nav>
        <ul className="flex gap-5 bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          <li className="cursor-pointer">
            <Link to="#home">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="#about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="#projects">Projects</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="#contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
