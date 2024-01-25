import React, { useContext, useState } from "react";
import "./SearchBar.css";
import fetchProducts from "../../api/fetchProducts";
import { ProductsContext } from "../../contexts/productsContext";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { setProducts, setIsLoading } = useContext(ProductsContext);

  const handleChangeValue = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setIsLoading(false);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Buscar Produto"
        className="search-input"
        value={searchValue}
        onChange={handleChangeValue}
        required
      />
      <button type="submit" className="search-button">
        🔍
      </button>
    </form>
  );
};
