import { products } from "../../productsMock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

const ItemListContainer = () => {
  const { CategoryName } = useParams();

  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === CategoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(CategoryName ? productosFiltrados : products);
      }, 3000);

      //reject("lo siento, no tenes autorizacion")
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [CategoryName]);

  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <PacmanLoader color="red" size={150} />
      )}
    </div>
  );
};

export default ItemListContainer;
