import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greetings }) => {
  return (
    <div>
      <h1>{greetings}</h1>
      <ul className={styles.containerFont}>
        <li>Contacto</li>
        <li>Mas cosas</li>
        <li>ETC</li>
      </ul>
    </div>
  );
};

export default ItemListContainer;
