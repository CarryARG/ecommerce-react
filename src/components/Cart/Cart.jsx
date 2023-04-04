import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div>
            <h2>{elemento.title}</h2>
            <h3>{elemento.price}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
