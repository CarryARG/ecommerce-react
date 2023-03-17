import { products } from "../../productsMock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { CategoryName } = useParams();

  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === CategoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(CategoryName ? productosFiltrados : products);
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

  console.log(items);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
