import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      className=" border-2 border-gray-200 rounded-md p-4 h-72 flex flex-col justify-between items-center hover:shadow-lg  
    cursor-pointer transition duration-300 ease-in-out hover:border-fuchsia-600
    
    "
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div>
        <img src={product.image.url} alt={product.name} className="h-40" />
      </div>
      <h2>{product.name}</h2>
      <p>{product.price.formatted_with_symbol}</p>
      {/* <Link
        className="border text-sm py-2 px-4 rounded-xl hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
        to={`/product/${product.id}`}
        rel="noopener noreferrer"
      >
        Ver Producto
      </Link> */}
    </div>
  );
};

export default ProductCard;
