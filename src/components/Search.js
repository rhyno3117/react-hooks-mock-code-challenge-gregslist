import React from "react";

//I can search for listings by their name.
function Search({setSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(e.target.search.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
