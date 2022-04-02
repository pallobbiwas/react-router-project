import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import PageNotFound from "../PageNotFound/PageNotFound";
import SearchIteam from "../SearchIteam/SearchIteam";
import "./Home.css";

const Home = () => {
  const [value, setValue] = useState([]);
  const [search] = useSearch(value);

  const searchValue = (e) => {
    setValue(e.target.value);
  };
  let iteam = [];
  if (search.meals !== null) {
    if (search.meals !== undefined) {
      iteam = search.meals.map((s) => s);
    }
  }else{
      <PageNotFound></PageNotFound>
  }
  const navigated = useNavigate()
  const goHome = () => {
      navigated('/home');
      setValue('')
  }
  if (iteam !== null) {
    return (
      <div className="container mx-auto">
        <input onChange={searchValue} className="w-75 searc-box" type="text" />
        <div className="row">
            {
                search.meals === null && <PageNotFound>
                    <button onClick={goHome}>go to home</button>
                </PageNotFound>
            }
          {
          value.length === 0 ? (
            <p className="text-white fs-4">search your product..😜</p>
          ) : (
            iteam.map((i) => (
              <SearchIteam key={i.idMeal} item={i}></SearchIteam>
            ))
          )}
        </div>
      </div>
    );
  }
};

export default Home;
