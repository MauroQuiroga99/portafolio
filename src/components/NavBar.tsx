"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="text-white w-full">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <div className=" mx-14 text-2xl font-bold">ICONO</div>
        </div>

        <div className=" hidden md:flex gap-4 mx-7">
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
          <a href="#skills" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#portfolio" className="hover:text-gray-400">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contacto
          </a>
        </div>

        <div className=" md:flex items-center space-x-2 relative max-w-smm xs:hidden">
          <input
            className=" bg-gray-700 w-full  py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 text-black"
            type="search"
            placeholder="Search"
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-4  bg-gray-700 border-gray-300 rounded ">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </button>
        </div>
        <div className=" relative flex flex-row gap-4">
          <button onClick={toggleMenu} className="md:hidden mx-14 text-2xl">
            <FontAwesomeIcon icon={faBars} />
          </button>
          {menuOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-max p-3 rounded-lg flex flex-col items-center space-y-2 bg-gray-700">
              <a href="#about" className="hover:text-gray-900 font-semibold">
                Sobre mí
              </a>
              <a href="#skills" className="hover:text-gray-900 font-semibold">
                Skills
              </a>
              <a
                href="#portfolio"
                className="hover:text-gray-900 font-semibold"
              >
                Portafolio
              </a>
              <a href="#contact" className="hover:text-gray-900 font-semibold">
                Contacto
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
