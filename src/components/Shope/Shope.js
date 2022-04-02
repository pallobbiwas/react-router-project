import React, { createContext } from "react";
import useProduct from "../../hooks/useProduct";
import Product from "../Product/Product";
import "./Shope.css";

export const ProductContext = createContext('product');

const Shope = () => {
  const [products] = useProduct()
  return (
    <div>
      <ProductContext.Provider value={products}>
        <Product></Product>
      </ProductContext.Provider>
    </div>
  );
};

export default Shope;
