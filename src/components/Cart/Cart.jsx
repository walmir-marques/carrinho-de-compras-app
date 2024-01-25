import { ProductsContext } from "../../contexts/productsContext";
import { CartItem } from "../CartItem/CartItem";
import "./Cart.css";
import formatCurrency from "../../utils/formatCurrency";

import React, { useContext } from "react";

export const Cart = () => {
  const { cartItems, isCartVisible } = useContext(ProductsContext);
  let totalValue = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <section className={`cart ${isCartVisible ? "cart-active" : ""}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem data={cartItem} key={cartItem.id} />;
        })}
      </div>
      <div className="cart-resume">
        Total da compra {formatCurrency(totalValue, "BRL")}
      </div>
    </section>
  );
};
