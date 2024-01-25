import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import { useContext, useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { Loading } from "../Loading/Loading";
import { ProductsContext } from "../../contexts/productsContext";

export const Products = () => {
  const { products, setProducts, setIsLoading, isLoading } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="container products">
      {isLoading ? (
        <Loading />
      ) : (
        products.map((item) => {
          return <ProductCard product={item} key={item.id} />;
        })
      )}
    </section>
  );
};
