import React from "react";
import './Iteam.css';

const Iteam = ({ product,addToCart }) => {
  const { name, price, img} =(product);
  return (
    <div className="col-md-4">
      <div className="bg-info my-2 rounded-3 py-3 px-1">
        <h4 title={name}>Name: <small>{name.length > 10 ? name.slice(0, 10) + '...' : name}</small></h4>
        <img className="w-75 mx-auto rounded-3 img-fluid" src={img} alt="" />
        <h4>{price}$</h4>
        <button onClick={() =>addToCart(product)} className="w-75 my-btn">add to cart</button>
      </div>
    </div>
  );
};

export default Iteam;
