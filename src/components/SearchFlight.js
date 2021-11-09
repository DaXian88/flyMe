import React from "react";

const SearchFlight = () => {
  return (
    <div>
      <form className="search-flight">
        <input className="search-input" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchFlight;
