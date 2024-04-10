/* eslint-disable react/prop-types */
const Filter = (props) => {
  return (
    <div>
      filter shown with{" "}
      <input
        type="search"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </div>
  );
};

export default Filter;
