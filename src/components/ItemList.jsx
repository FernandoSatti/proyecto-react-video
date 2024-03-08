import React from "react";
import Item from "./Item";
import ItemCart from "./ItemCart";

export default function ItemList({ products, plantilla }) {
  return (
    <>
      { plantilla === "Item"
        ? products.map((prod) => <Item key={prod.id} product={prod} />)
        : products.map((prod) => <ItemCart key={prod.id} product={prod} />)}
    </>
  );
}
