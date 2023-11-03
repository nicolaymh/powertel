import React, { useEffect, useState } from "react";
import commerce from "../lib/commerce";
import ProductCard from "../components/ProductCard";
import { ClapSpinner } from "react-spinners-kit";
import FilterSection from "../components/FilterSection";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    await commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
        setLoading(false);
      });
  };
  const fetchCategories = async () => {
    await commerce.categories
      .list()
      .then((categories) => {
        setCategories(categories.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  //filtrar por categoria
  const fetchProductsByCategory = async (categoryId) => {
    setLoading(true);
    await commerce.products
      .list({ category_id: [categoryId] })
      .then((products) => {
        setProducts(products.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex  flex-col justify-center items-center">
        <ClapSpinner />
        Cargando...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 ">
      <FilterSection
        fetchProducts={fetchProducts}
        fetchProductsByCategory={fetchProductsByCategory}
        categories={categories}
      />
      <div className="col-span-5 grid grid-cols-1 md:grid-cols-4  gap-4 ">
        {products?.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Store;
