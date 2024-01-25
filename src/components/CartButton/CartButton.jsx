import React, { useContext } from "react";
import "./CartButton.css";
import { ProductsContext } from "../../contexts/productsContext";

export const CartButton = () => {
  const { cartItems, setIsCartVisible, isCartVisible } =
    useContext(ProductsContext);

  return (
    <button
      type="button"
      className="cart-button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      🛒
      {cartItems.length > 0 && (
        <span className="cart-status">{cartItems.length}</span>
      )}
    </button>
  );
};
