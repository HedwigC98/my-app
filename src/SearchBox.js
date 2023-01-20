import React from "react"; // the first thing you do in each file is import react from react

const SearchBox = ({ searchfield, searchChange }) => {
  // these searchfield and searchchange are props
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

// to make the searchbox component interarctive you need for the searchbox component to interact with the cardlist component
