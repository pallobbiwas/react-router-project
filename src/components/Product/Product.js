import React, { useContext } from "react";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Iteam from "../Iteam/Iteam";
import { ProductContext } from "../Shope/Shope";
import './Product.css';

const Product = () => {

  const product = useContext(ProductContext);
  //product custom hook
const [cart, setCart] = useCart(product)
  //ad to cart handeler
  const addToCart = (iteam) => {
      let newCard = [];
      const exist = cart.find(p => p.id === iteam.id);
      if(!exist){
        iteam.quantity=1;
        newCard=[...cart, iteam]
      }else{
        const rest = cart.filter(p => p.id !== iteam.id);
        exist.quantity = exist.quantity + 1;
        newCard=[...rest, exist];
      }
      setCart(newCard)
      addToDb(iteam.id)
  };

  return (
    <div className="px-5 container-fluid row mt-4">
      <div className="col-md-10">
        <div className="row">
          {product.map((p) => (
            <Iteam key={p.id}
             product={p}
             addToCart = {addToCart}
             ></Iteam>
          ))}
        </div>
      </div>
      <div className="col-md-2 car-container">
        <Cart card={cart}></Cart>
      </div>
    </div>
  );
};

export default Product;
