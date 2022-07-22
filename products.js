import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/products.css";

const Products = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Products;