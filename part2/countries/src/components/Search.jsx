// eslint-disable-next-line react/prop-types
const Search = ({ search, setSearch }) => {
  return (
    <div>
      Find countries{" "}
      <input
        value={search}
        type="search"
        onChange={(e) => setSearch(e.target.value)}
      />{" "}
    </div>
  );
};

export default Search;
