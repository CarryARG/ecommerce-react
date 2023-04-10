import React, { useContext } from "react";
import { Button } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);
  const clear = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        clearCart();
      }
    });
  };

  const precioTotal = getTotalPrice();
  return (
    <div className="cart-container">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
        }}
        className="container-items"
      >
        {cart.map((elemento) => {
          return (
            <div
              style={{ border: "2px solid black" }}
              key={elemento.id}
              className="cart-item"
            >
              <img src={elemento.img} alt="" style={{ width: "200px" }}></img>
              <div className="cart-item-info">
                <h2>{elemento.title}</h2>
                <h4>Cantidad: {elemento.quantity}</h4>
                <h3>${elemento.price} x unidad</h3>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => {
                    deleteProductById(elemento.id);
                  }}
                >
                  Eliminar
                </Button>
              </div>
            </div>
          );
        })}
        <div className="cart-info">
          <div></div>

          {cart.length > 0 && (
            <div className="btn-cart">
              <h3>Precio Total: {precioTotal}</h3>
              <h3>Descuento: </h3>
              <h3>Precio Final: </h3>
              <Button variant="contained">Comprar</Button>
              <Button onClick={() => clear()} variant="contained">
                Vaciar Carrito
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
