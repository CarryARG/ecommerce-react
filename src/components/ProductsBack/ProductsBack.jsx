import React, { useEffect, useState } from "react";
import axios from "axios";
const ProductsBack = () => {
  const [products, setProducts] = useState([]);
  const [isCreated, setIsCreated] = useState([false]);
  useEffect(() => {
    setIsCreated(false);
    //solicitud a la API
    const data = axios.get("http://localhost:5000/products");
    data.then((res) => setProducts(res.data));
  }, [isCreated]);

  const newProduct = {
    title: "Slime",
    img: "https://res.cloudinary.com/dnytlq0wc/image/upload/v1677371121/slime_verde_i2qoqy.png",
  };

  const addProduct = () => {
    const create = axios.post("http://localhost:5000/products", newProduct);
    create.then((res) => console.log(res));
    setIsCreated(true).catch((err) => console.log(err));
  };

  const updateProduct = (id) => {
    const update = axios.patch(`http://localhost:5000/products/${id}`, {
      title: "Slime Verde Cambiado",
    });
    update.then((res) => console.log(res)).catch((err) => console.log(err));
  };

  const deleteProduct = (id) => {
    const del = axios.delete(`http://localhost:5000/products/${id}`, {
      title: "Slime Verde Cambiado",
    });
    del.then((res) => console.log(res)).catch((err) => console.log(err));
  };

  console.log(products);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ProductsBack desde el backend</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "10px",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        {products.map((e) => {
          return (
            <div
              style={{
                width: "160px",
                height: "350px",
                border: "2px",
                textAlign: "center",
              }}
              key={e.id}
            >
              <h2>{e.title}</h2>
              <img
                src={e.img}
                alt="imagen Producto"
                style={{ width: "80%", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>
      {/*<div
        style={{
          backgroundColor: "steelblue",
          width: "100%",
          height: "400px",
        }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            height: "400px",
            justifyContent: "space-evenly",
            alignContent: "center",
            justifyItems: "center",
            alignItems: "center",
            textAlign: "center",

            backgroundColor: "black",
          }}
        >
          <form
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              height: "400px",
              justifyContent: "space-evenly",
              alignContent: "center",
              justifyItems: "center",

              alignItems: "center",
              textAlign: "center",
            }}
          >
            <input
              type="text"
              name="title"
              placeholder="ingresa el nombre del producto"
              style={{
                width: "100%",
                height: "40px",
                textAlign: "center",
              }}
            ></input>
            <input
              type="text"
              name="title"
              placeholder="ingresa la url de la imagen"
              style={{
                width: "100%",
                height: "40px",
                textAlign: "center",
              }}
            ></input>
            <button
              style={{
                width: "100%",
                height: "40px",
                textAlign: "center",
              }}
            >
              Crear producto
            </button>
          </form>
        </div>*/}

      {/*crear producto*/}
      <button onClick={addProduct}>Crear Producto</button>

      {/*modificar producto*/}
      <button onClick={() => updateProduct(2)}>Modificar producto</button>
      <button onClick={() => deleteProduct(3)}>Borrar producto</button>
    </div>
  );
};

export default ProductsBack;
