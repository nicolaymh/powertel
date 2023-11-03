import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const FilterSection = ({
  fetchProducts,
  categories,
  fetchProductsByCategory,
}) => {
  const [showCategories, setShowCategories] = useState(true);
  const [categoryName, setCategoryName] = useState("");

  const handleShowCategories = (name) => {
    if (name === categoryName) {
      setShowCategories(!showCategories);
    } else {
      setShowCategories(true);
      setCategoryName(name);
    }
  };
  return (
    <div className="col-span-6 lg:col-span-1 md:p-4 flex flex-col lg:h-screen ">
      <h2 className="font-bold text-lg my-2 ">CATEGORIAS</h2>
      <p
        className="font-semibold text-sm my-2 hover:text-blue-500 cursor-pointer"
        onClick={() => fetchProducts()}
      >
        Todas las Categorias
      </p>
      {categories.map((category) => (
        <div key={category.id}>
          <div className="flex items-center justify-between">
            <h2
              className="font-semibold text-sm my-2 hover:text-blue-500 cursor-pointer"
              onClick={() => fetchProductsByCategory(category.id)}
            >
              {category.name}
            </h2>
            {category.children.length > 0 ? (
              <div
                className="flex hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out hover:border rounded-lg hover:border-fuchsia-600"
                onClick={() => handleShowCategories(category.name)}
              >
                <span className="ml-3">({category.children.length})</span>
                <div
                  className={`${
                    showCategories && categoryName === category.name
                      ? "rotate-180"
                      : ""
                  }`}
                >
                  <MdKeyboardArrowUp size={30} />
                </div>
              </div>
            ) : null}
          </div>
          <div
            className={`pl-2  ${
              showCategories && categoryName === category.name
                ? "h-auto  transition-all ease-in-out"
                : "h-0 overflow-hidden"
            }`}
          >
            {category.children.map((child) => (
              <p
                key={child.id}
                className="text-sm my-1 hover:text-blue-500 cursor-pointer py-1 hover:border-b border-gray-200 transition duration-300 ease-in-out"
                onClick={() => fetchProductsByCategory(child.id)}
              >
                {child.name}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;
