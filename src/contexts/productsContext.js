import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        setIsLoading,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
