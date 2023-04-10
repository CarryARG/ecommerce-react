import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);
  const productsSelected = products.find(
    (element) => element.id === Number(id)
  );
  const onAdd = (cantidad) => {
    let producto = {
      ...productsSelected,
      quantity: cantidad,
    };
    agregarAlCarrito(producto);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let quantity = getQuantityById(Number(id));
  console.log(quantity);

  return (
    <div>
      <h1>{productsSelected.title}</h1>
      <img src={productsSelected.img} alt="" />
      <h2>Cantidad en stock: {productsSelected.stock}</h2>
      <h2>
        Cantidad seleccionada:{" "}
        <ItemCount
          stock={productsSelected.stock}
          onAdd={onAdd}
          initial={quantity}
        />
      </h2>
    </div>
  );
};

export default ItemDetailContainer;
