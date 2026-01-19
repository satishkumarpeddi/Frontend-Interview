import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="">
      <nav className="flex justify-between p-3 items-center ">
        <Link to="/">
          <h1 className="uppercase font-bold cursor-pointer text-2xl">
            cm monk
          </h1>
        </Link>
        <div
          className={`fixed top-0 right-0 flex flex-col bg-red-500 items-end p-10 w-1/2 h-full gap-y-4
transition-transform duration-500 md:relative md:flex-row md:bg-white md:justify-center md:gap-3 md:items-center md:p-0 md:w-auto md:h-auto
${toggle ? "translate-x-0" : "translate-x-full"}  md:translate-none md:duration-initial`}
        >
          <Button
            onClick={() => setToggle(false)}
            className="top-0 absolute md:hidden right-0 font-bold bg-red-500 text-2xl hover:bg-red-500 text-white cursor-pointer"
          >
            X
          </Button>
          <ul className="md:flex gap-4">
            <li className="font-semibold text-xl  text-white md:text-black cursor-pointer">
              Tools
            </li>
            <li className="font-semibold text-xl text-white md:text-black cursor-pointer">
              Practice
            </li>
            <li className="font-semibold text-xl text-white md:text-black cursor-pointer">
              Events
            </li>
            <li className="font-semibold text-xl text-white md:text-black cursor-pointer">
              Job Board
            </li>
            <li className="font-semibold text-xl text-white md:text-black cursor-pointer">
              Points
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Button
            variant="secondary"
            className="cursor-pointer text-xl outline-none bg-blue-500 hover:bg-blue-600 text-white"
          >
            Profile
          </Button>
          <Button
            onClick={() => setToggle(true)}
            className="block bg-white hover:bg-whtie text-black cursor-pointer p-0 md:hidden font-bold text-2xl"
          >
            ☰
          </Button>
        </div>
      </nav>
      <div className="p-2">
        <hr />
      </div>
    </div>
  );
};

export default Header;
