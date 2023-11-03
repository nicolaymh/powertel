import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo-icon.png";
import { FiHome } from "react-icons/fi";
import { FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <nav className=" bg-opacity-20 shadow-md">
      <div className="flex justify-between items-center p-4 group overflow-hidden">
        <div className="flex">
          <Link to="/">
            <img
              src={logo}
              alt="Powertel Expende tus sentidos"
              className="group-hover:animate-bounce w-16 "
            />
          </Link>
          <Link
            to="/"
            className="font-bold text-4xl mx-2 text-sky-400  group-hover:animate-pulse transition-all ease-in-out duration-500"
          >
            Powertel{" "}
            <p className="text-xl  font-light text-sky-700 ">
              Expande tus sentidos
            </p>
          </Link>
        </div>
        <ul className="flex justify-center space-x-4 text-xl font-bold text-sky-400 my-3">
          <li className="hover:text-sky-700 transition-all ease-in-out duration-300 md:mr-4">
            <Link to="/" className="flex items-center flex-col">
              {" "}
              <FiHome /> Inicio
            </Link>
          </li>
          <li className="hover:text-sky-700 transition-all ease-in-out duration-300">
            <Link to="/store" className="flex items-center flex-col">
              <FaStore /> Tienda
            </Link>
          </li>
          {/* <li className="hover:text-sky-700 transition-all ease-in-out duration-300">
            <Link to="/about">Nosotros</Link>
          </li>
          <li className="hover:text-sky-700 transition-all ease-in-out duration-300">
            <Link to="/contact">Contacto</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
