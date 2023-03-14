import CartWidget from "../CartWidget/CartWidget.jsx";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className={styles.containerBackground}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dnytlq0wc/image/upload/v1677371107/cofre_ewpmdc.png"
            alt="Logo"
            className={styles.containerLogo}
          />
        </Link>
        <ul className={styles.containerFont}>
          <Link to="/slimes" style={{ textDecoration: "none", color: "black" }}>
            <li>Slimes</li>
          </Link>
          <Link
            to="/Otras cosas"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li>Otras cosas</li>
          </Link>
          <Link to="/ETC" style={{ textDecoration: "none", color: "black" }}>
            <li>ETC</li>
          </Link>
        </ul>
        <CartWidget />
      </div>
      <div>
        <img
          className={styles.containerBanner}
          src="https://res.cloudinary.com/dnytlq0wc/image/upload/v1677370353/banner_2022_pixel_lukehd.jpg"
          alt="bannerPixel2022"
        />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
