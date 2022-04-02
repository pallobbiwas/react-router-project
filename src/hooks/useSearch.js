import { useEffect, useState } from "react";

const useSearch = (value) => {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      .then((res) => res.json())
      .then((data) => setSearch(data));
  }, [value]);
  return [search, setSearch];
};
export default useSearch;
