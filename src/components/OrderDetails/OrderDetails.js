import React, { useContext } from "react";
import DeleteDetails from "../DeleteDetails/DeleteDetails";
import { DataContext } from "../Order/Order";

const OrderDetails = ({ removeIteam }) => {
  const data = useContext(DataContext);
  return (
    <div className="text-white">
      <h1>order Details</h1>
      <hr />
      {data.map((d) => (
        <DeleteDetails key={d.id} data={d} removeIteam={removeIteam}></DeleteDetails>
      ))}
    </div>
  );
};

export default OrderDetails;
