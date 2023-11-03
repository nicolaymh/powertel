import React, { useEffect, useState } from "react";
import commerce from "../lib/commerce";
import { useParams } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const ProductPage = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState([]);
  const [urlImage, setUrlImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const xPos = (e.clientX - left) / width;
    const yPos = (e.clientY - top) / height;
    setPosition({ x: xPos, y: yPos });
  };

  const handleMouseEnter = () => {
    setZoomed(true);
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  const fetchProduct = async () => {
    setLoading(true);
    await commerce.products
      .retrieve(idProduct)
      .then((product) => setProduct(product));
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  if (loading) {
    return <div>Cargando...</div>;
  }

  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <button
        onClick={handleBack}
        className="border flex items-center text-sm py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
      >
        {" "}
        <IoChevronBackOutline /> Volver a la tienda
      </button>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-2 lg:col-span-1">
          {product?.assets?.map((asset) => (
            <img
              src={asset.url}
              alt={product?.name}
              className="h-16 my-2 cursor-pointer hover:opacity-50 hover:scale-105 transition duration-300 ease-in-out"
              onMouseEnter={() => setUrlImage(asset.url)}
              onClick={() => setUrlImage(asset.url)}
            />
          ))}
        </div>
        <div className="col-span-4 lg:col-span-2">
          <div
            className={`group relative inline-block overflow-hidden ${
              zoomed ? "" : ""
            }`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="absolute hidden group-hover:block bottom-4  w-48 h-48 border border-gray-300 bg-white shadow-md pointer-events-none rounded-full"
              style={{
                backgroundSize: "300% 300%",
                backgroundPosition: `${position.x * 100}% ${position.y * 100}%`,
                backgroundImage: `url(${urlImage || product?.image.url})`,
              }}
            ></div>
            <img
              src={urlImage || product?.image.url}
              alt={product?.name}
              className="w-full h-auto block"
            />
          </div>
        </div>
        <div className="col-span-6 lg:col-span-3">
          <h1 className="text-2xl font-bold mb-4">{product?.name}</h1>
          <p className="font-semibold text-2xl mb-4">
            {product?.price.formatted_with_code}
          </p>

          <div className="my-10 w-full flex justify-center lg:justify-start">
            <a
              href={`https://wa.me/3144093953?text=Hola Powertel, me interesa adquirir el ${product?.name}, mi nombre es:`}
              target="_blank"
              className="bg-gradient-to-r hover:bg-gradient-to-l  from-sky-400 to-fuchsia-600 
            py-3 px-16 text-2xl rounded-xl font-semibold text-white
            hover:shadow-lg hover:scale-105 transition-all ease-in-out"
            >
              Comprar ahora
            </a>
          </div>

          <p className="font- font-semibold">
            Lo que tienes que saber de este producto
          </p>
          <div className="mb-3 mt-1 text-sm">
            <div dangerouslySetInnerHTML={{ __html: product?.description }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
