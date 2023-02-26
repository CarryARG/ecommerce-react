import styles from "./CarritoWidget.module.css";

export const CartWidget = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dnytlq0wc/image/upload/v1677371782/carritoPixel_moae4i.png"
        alt="Carrito pixel"
        className={styles.containerCarrito}
      />
    </div>
  );
};

export default CartWidget;
