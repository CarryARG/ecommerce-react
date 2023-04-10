import styles from "./CarritoWidget.module.css";
import { Link } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCircleFill
          style={{
            fontSize: "2rem",
            transform: "translate(6px, -5px)",
            position: "absolute",
          }}
        />
        <div
          className="bubble-counter"
          style={{
            transform: "translate(17px, -0px)",
          }}
        >
          <span
            style={{
              color: "whitesmoke",
              position: "relative",
            }}
          >
            {total}
          </span>
        </div>
        <img
          style={{
            transform: "translate(-16px, -16px)",
          }}
          src="https://res.cloudinary.com/dnytlq0wc/image/upload/v1677371782/carritoPixel_moae4i.png"
          alt="Carrito pixel"
          className={styles.containerCarrito}
        />
      </div>
    </Link>
  );
};

export default CartWidget;
