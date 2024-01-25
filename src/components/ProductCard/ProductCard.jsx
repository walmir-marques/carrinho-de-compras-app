import "./ProductCard.css";
import formatCurrency from "../../utils/formatCurrency";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";

export const ProductCard = ({ product }) => {
  const { thumbnail, title, price } = product;
  const imageSrc = thumbnail.replace(/\w\.jpg/gi, "W.jpg");
  const { cartItems, setCartItems } = useContext(ProductsContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, product]);
  };

  return (
    <section className="product-card">
      <img src={imageSrc} alt="" className="card-image" />
      <div className="card-infos">
        <h2 className="card-price">{formatCurrency(price, "BRL")}</h2>
        <h2 className="card-title">{title}</h2>
      </div>
      <button className="button-add-cart" type="button" onClick={handleAddCart}>
        🛒
      </button>
    </section>
  );
};
