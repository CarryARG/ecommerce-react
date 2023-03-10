import { products } from "../../productsMock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(products);
      //reject("lo siento, no tenes autorizacion")
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(items);
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
