import CartWidget from "../CartWidget/CartWidget.jsx";
import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.containerBackground}>
        <img
          src="https://res.cloudinary.com/dnytlq0wc/image/upload/v1677371107/cofre_ewpmdc.png"
          alt="Logo"
          className={styles.containerLogo}
        />
        <ItemListContainer greetings={"Hola Usuario"} />
        <CartWidget />
      </div>
      <div>
        <img
          className={styles.containerBanner}
          src="https://res.cloudinary.com/dnytlq0wc/image/upload/v1677370353/banner_2022_pixel_lukehd.jpg"
          alt="bannerPixel2022"
        />
      </div>
    </div>
  );
};

export default Navbar;
