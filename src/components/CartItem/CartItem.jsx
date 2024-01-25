import React, { useContext } from "react";
import "./CartItem.css";
import formatCurrency from "../../utils/formatCurrency";
import { ProductsContext } from "../../contexts/productsContext";

export const CartItem = ({ data }) => {
  const { thumbnail, title, price, id } = data;
  const { cartItems, setCartItems } = useContext(ProductsContext);

  const handleRemoveItem = () => {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
  };

  return (
    <section className="cart-item">
      <img
        src={thumbnail}
        alt="imagem do produto"
        className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
        <button
          type="button"
          className="button-remove-item"
          onClick={handleRemoveItem}
        >
          ❌
        </button>
      </div>
    </section>
  );
};
