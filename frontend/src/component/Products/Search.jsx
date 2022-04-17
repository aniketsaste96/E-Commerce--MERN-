import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MetaData from "../layout/MetaData";
import "./search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    }
  };
  return (
    <>
      <MetaData title={"SEARCH A PRODUCT--ECOMMERCE"} />

      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a product..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default Search;
