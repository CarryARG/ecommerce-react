import styles from "./CarritoWidget.module.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div>
        <img
          src="https://res.cloudinary.com/dnytlq0wc/image/upload/v1677371782/carritoPixel_moae4i.png"
          alt="Carrito pixel"
          className={styles.containerCarrito}
        />
      </div>
    </Link>
  );
};

export default CartWidget;
