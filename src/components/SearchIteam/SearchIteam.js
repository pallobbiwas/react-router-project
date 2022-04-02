import React from "react";

const SearchIteam = ({ item }) => {
    const{strMeal, strMealThumb} = item
  return (
    <div className="col-md-3 bg-info rounded-3 m-3">
      <h5>name: {strMeal}</h5>
      <img className="img-fluid" src={strMealThumb} alt="" />
    </div>
  );
};

export default SearchIteam;
