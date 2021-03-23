import React from "react";

function SearchBar(props) {
  return (
    <input
      type="text"
      placeholder="Search Table"
      onChange={(e) => props.searchSpace(e)}
      className="mb-4"
    />
  );
}

export default SearchBar;
