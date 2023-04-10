import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);
  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="container-btn">
      <h3>Cantidad: {contador}</h3>
      <div className="btns">
        <Button variant="outlined" onClick={sumar}>
          +
        </Button>
      </div>
      <div className="btns">
        <Button variant="outlined" onClick={() => onAdd(contador)}>
          Agregar al Carrito
        </Button>
      </div>

      <div className="btns">
        <Button variant="outlined" onClick={restar}>
          -
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
