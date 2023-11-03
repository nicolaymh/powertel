import React from "react";
import delivery from "../assets/image/delivery.svg";
import envios from "../assets/image/envios.webp";
import payment from "../assets/image/payment.svg";
import deliveryMan from "../assets/image/delivery-man.svg";
import xiaomi12 from "../assets/image/xiaomi12.webp";
import logo from "../assets/image/logo-icon.png";
// import game from "../assets/image/game.webp";
// import happy from "../assets/image/happy.jpg";
// import batery from "../assets/image/batery.jpg";
// import processor from "../assets/image/processor.jpg";
// import memory from "../assets/image/memory.jpg";
import { Link } from "react-router-dom";
import Carrousell from "../components/Carrousell";

const LandingPage = () => {
  return (
    <>
      <h1 className="text-xl md:text-2xl font-bold text-center text-sky-950 ">
        Tienda de celulares, cabinas de sonido y accesorios para celular{" "}
      </h1>
      <Carrousell />
      <section className="w-full">
        {/* seccion celular */}
        <div className="md:relative">
          <div className="md:absolute  items-center p-4  overflow-hidden top-32 md:pl-24 flex flex-col ">
            <p className="text-5xl my-6 font-bold text-sky-400">
              Bienvenido a{" "}
            </p>
            <Link to="/">
              <img
                src={logo}
                alt="Powertel Expende tus sentidos"
                className="w-40 "
              />
            </Link>
            <Link
              to="/"
              className="font-bold text-4xl mx-2 text-sky-400 group-hover:flex-1  transition-all ease-in-out duration-500"
            >
              Powertel{" "}
            </Link>
            <p className="text-xl   text-sky-700  mb-4">Expande tus sentidos</p>
            <Link
              to="store"
              className=" bg-gradient-to-r hover:bg-gradient-to-l  from-sky-400 to-fuchsia-600 py-3 px-16 text-2xl rounded-xl font-semibold text-white
            hover:shadow-lg hover:scale-[1.01] transition-all ease-in-out"
            >
              Visita nuestra Tienda
            </Link>
          </div>
          <img
            src={xiaomi12}
            alt="Xiaomi redmi note 12"
            className="object-cover md:rounded-tl-xl md:rounded-bl-xl    "
          />
        </div>

        {/* llamada a la accion promocion y venta*/}
        <div className="bg-parallax-phone2 w-full bg-no-repeat bg-cover lg:bg-cover flex flex-col justify-around items-end my-24 bg-fixed p-8 h-[70vh]">
          <div>
            <p className="text-5xl my-6 text-gray-100">
              Redmi Note{" "}
              <span className="text-red-500 font-bold shadow-inner ">12</span>
            </p>
            <p className="font-light text-sm text-gray-100">
              Pantalla AMOLED de 120 Hz de 6,67&quot; | Carga rápida de 33 W |
              Camara de 50MP
            </p>
          </div>
          <a
            href={`https://wa.me/3144093953?text=Hola Powertel, me interesa adquirir el Xiaomi Note 12, mi nombre es:`}
            target="_blank"
            className=" bg-gradient-to-r hover:bg-gradient-to-l  from-sky-400 to-fuchsia-600 py-3 px-16 text-2xl rounded-xl font-semibold text-white
            hover:shadow-lg hover:scale-105 transition-all ease-in-out"
          >
            Comprar ahora
            <span className="block text-xl text-center ">Solo $789.900</span>
          </a>

          <Link
            to="specifications"
            className="text-2xl font-bold border text-white hover:text-sky-50 hover:shadow-lg py-4 px-6 rounded-lg"
          >
            Mas Especificaciones
          </Link>
        </div>

        {/* otros productos accesorios- parlantes-*/}
        <div className="flex flex-col justify-between md:flex-row h-1/2 ">
          <img
            src={envios}
            alt="Xiaomi redmi note 12"
            className="object-cover md:rounded-tl-xl md:rounded-bl-xl w-full md:w-1/2  "
          />
          <div className=" border flex-1 md:flex-initial px-6 flex flex-col justify-between">
            <p className="text-3xl font-bold">
              Tu compra es segura con nosotros
            </p>
            <div className="flex justify-between items-center ">
              <img
                src={delivery}
                alt="Xiaomi redmi note 12"
                className="object-contain  w-24 "
              />
              <p className="text-sky-950 text-xl font-bold ml-4">
                Realizamos envios a nivel nacional
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sky-950 text-xl font-bold">
                Tu eliges en medio de pago. Transferencia bancaria, Nequi y
                Daviplata
              </p>{" "}
              <img
                src={payment}
                alt="Xiaomi redmi note 12"
                className="object-contain w-24  "
              />
            </div>
            {/* <div className="flex justify-between items-center">
              <img
                src={deliveryMan}
                alt="Xiaomi redmi note 12"
                className="object-contain  w-24 "
              />
              <p className="text-sky-950  text-xl font-bold ml-4">
                O si prefieres pago contra entrega
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
