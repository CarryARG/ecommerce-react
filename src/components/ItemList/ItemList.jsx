import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        backgroundColor: "#8CF4F8",
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
