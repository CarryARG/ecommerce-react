import styles from "./Footer.module.css";

const Footer = ({ children }) => {
  return (
    <div>
      {children}
      <div className={styles.containerBackground}>Footer</div>
    </div>
  );
};

export default Footer;
