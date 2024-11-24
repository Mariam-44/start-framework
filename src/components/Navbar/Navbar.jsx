import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen ,setOpen]=useState(false);
  const toggleMenu = () => {
    setOpen(!isMenuOpen);
  };
  return (
    <nav className=" bg-slate-700 fixed z-20 w-full">
      <div className="container py-8 lg:flex ">
        <div className="flex items-center ">
          {" "}
          <a href="./" className="text-3xl font-bold text-white">
            START FRAMEWORK
          </a>
          <div className="ms-auto">
            <i onClick={toggleMenu} class="fa-solid fa-bars cursor-pointer text-white text-3xl lg:hidden "></i>

          </div>
        </div>

        <ul className={`${isMenuOpen ? "flex flex-col gap-4 " : "hidden" } pt-3 lg:pt-0 lg:ms-auto lg:flex lg:flex-row lg:gap-6 text-white font-bold`}>
          <li>
            <NavLink
              className={({ isActive }) => {
                return ` ${isActive ? "bg-primary p-2 rounded-lg " : "ms-2"}`;
              }}
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) => {
                return ` ${isActive ? "bg-primary p-2 rounded-lg" : "ms-2"}`;
              }}
              to="/portfolio"
            >
              PORTFOLIO
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) => {
                return ` ${isActive ? "bg-primary p-2 rounded-lg" : "ms-2"}`;
              }}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
