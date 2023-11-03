import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href={`https://wa.me/3144093953?text=Hola Powertel, mi nombre es:`}
      className="fixed bottom-6 right-4 animate-bounce  bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-md transition-all ease-in-out duration-500"
    >
      <FaWhatsapp size={40} color="white" />
    </a>
  );
};

export default WhatsappButton;
