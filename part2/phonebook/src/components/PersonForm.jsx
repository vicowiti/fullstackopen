/* eslint-disable react/prop-types */
const PersonForm = ({
  handleSubmit,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          value={newName}
          type="text"
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={newNumber}
          type="text"
          onChange={(e) => setNewNumber(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
