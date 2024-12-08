import { useState } from "react";

const SearchImage = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Search"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchImage;
