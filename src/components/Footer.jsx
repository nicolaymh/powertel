import React from "react";
import { TfiMapAlt } from "react-icons/tfi";
import { MdOutlineStoreMallDirectory, MdWhatsapp } from "react-icons/md";
import logo from "../assets/image/logo-icon.png";
import { TbWorldWww } from "react-icons/tb";
import {
  BiLogoFacebookSquare,
  BiLogoInstagram,
  BiLogoTiktok,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-sky-50">
      <div className="p-10 flex flex-col md:flex-row items-center justify-between">
        {/* logo */}
        <div className="flex flex-col items-center w-auto ">
          <div className="flex  items-center">
            <Link to="/">
              <img
                src={logo}
                height={70}
                width={70}
                alt="Powertel Expende tus sentidos"
                className="group-hover:animate-bounce"
              />
            </Link>
            <Link
              to="/"
              className="font-bold text-4xl mx-2 text-sky-400 group-hover:flex-1 group-hover:animate-pulse transition-all ease-in-out duration-500"
            >
              Powertel{" "}
            </Link>
          </div>
          <p className="tracking-widest font-semibold text-sky-700">
            Expande tus sentidos
          </p>
        </div>
        <div className="hidden md:block   w-[1px] h-32 bg-gradient-to-t to-sky-400 from-fuchsia-600   shadow-sm " />
        {/* ubicacion */}
        <div>
          <div className="mb-2 flex items-center">
            <TfiMapAlt color="#3ab8f7" size={20} />
            <p className="ml-2  text-sm text-sky-950">Barbosa Santander</p>
          </div>
          <div className="mb-2 flex items-center">
            <MdOutlineStoreMallDirectory color="#3ab8f7" size={20} />
            <p className="ml-2  text-sm text-sky-950">Carrera 8 # 6 - 69</p>
          </div>
        </div>
        {/* contacto */}
        <div className="hidden md:block   w-[1px] h-32 bg-gradient-to-t to-sky-400 from-fuchsia-600   shadow-sm " />

        <div>
          <div className="mb-2 flex items-center">
            <MdWhatsapp color="#3ab8f7" size={20} />
            <p className="ml-2  text-sm text-sky-950">3144093953</p>
          </div>
          <div className="mb-2 flex items-center">
            <TbWorldWww color="#3ab8f7" size={20} />
            <p className="ml-2  text-sm text-sky-950">www.powertel.shop</p>
          </div>
        </div>

        {/* rrss */}
        <div className="hidden md:block   w-[1px] h-32 bg-gradient-to-t to-sky-400 from-fuchsia-600   shadow-sm " />
        <div className="flex">
          <a
            href="https://www.facebook.com/people/Powertel/100094121476324/?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoFacebookSquare color="#3ab8f7" size={30} />
          </a>
          <a
            href="https://www.instagram.com/powertel.shop/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagram color="#3ab8f7" size={30} className="mx-6" />
          </a>
          <a
            href="https://www.tiktok.com/@powertel0?_t=8g1ZNeLpMZy&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoTiktok color="#3ab8f7" size={30} />
          </a>
        </div>
      </div>
      <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full mt-4 shadow-sm" />
      <div className="flex text-sm text-sky-950 text-center md:text-justify flex-col md:flex-row md:justify-between p-4">
        <p>Copyright © 2023 Powertel. Todos los derechos reservados</p>
        <p>Colombia-Col</p>
      </div>
    </footer>
  );
};

export default Footer;
