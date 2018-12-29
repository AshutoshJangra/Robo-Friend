import React from "react";

const SearchBox = ({searchChange}) => {
  return (
    <div>
      <input type="search" 
      className="  w6 h2 mb3 pa2 tc " 
      placeholder="Search Robots"
      onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
