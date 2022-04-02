import React from "react";
import './DeleteDetails.css';

const DeleteDetails = ({ data, removeIteam }) => {
    const { img, name,quantity } = data
  return (
    <div>
      <div className="my-flex">
        <img className="my-image img-fluid" src={img} alt="" />
        <h4 className="px-4">{name}</h4>
        <h5> quantity -- {quantity}</h5>
        <button className="my-bton" onClick={() =>removeIteam(data)}>del</button>
      </div>
    </div>
  );
};

export default DeleteDetails;
