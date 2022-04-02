import React, { createContext } from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderDetails from "../OrderDetails/OrderDetails";
import "./Order.css";
//using context api

export const DataContext = createContext("data");

const Order = () => {
  const [products] = useProduct();
  const [cart, setCart] = useCart(products);
  //dele to cart handeler
  const removeIteam = (item) => {
    const newIteam = cart.filter((p) => p !== item);
    setCart(newIteam)
    removeFromDb(item.id)
  };
  return (
    <div className="row container-fluid px-4">
      <div className="col-md-8">
        <DataContext.Provider value={cart}>
          <OrderDetails removeIteam={removeIteam}></OrderDetails>
        </DataContext.Provider>
      </div>
      <div className="col-md-4">
        <Cart card={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
