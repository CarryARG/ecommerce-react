import styles from "./ProductCard.module.css";
import "./ProductFont.css";

const ProductCard = ({ title, price = "No tiene precio", stock }) => {
  return (
    <div className={styles.containerCardBackground}>
      <h1 className={stock ? "containerCardFont1" : "containerCardFont2"}>
        {title}
      </h1>
      <h2>{price}</h2>
    </div>
  );
};

export default ProductCard;
