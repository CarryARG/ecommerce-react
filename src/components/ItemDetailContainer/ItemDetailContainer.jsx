import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const productsSelected = products.find(
    (element) => element.id === Number(id)
  );
  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos`);
  };

  return (
    <div>
      <h1>{productsSelected.title}</h1>
      <img src={productsSelected.img} alt="" />
      <h2>Cantidad en stock: {productsSelected.stock}</h2>
      <h2>
        Cantidad seleccionada:{" "}
        <ItemCount stock={productsSelected.stock} onAdd={onAdd} />
      </h2>
    </div>
  );
};

export default ItemDetailContainer;
