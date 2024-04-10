import { deleteContact } from "../services/phonebook";

/* eslint-disable react/prop-types */
const Persons = ({
  filteredPersons,
  setPersons,
  persons,
  setMessage,
  setType,
}) => {
  const handleDelete = async (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this person?"
    );

    if (confirmation) {
      try {
        const response = await deleteContact(id);
        setPersons(persons.filter((person) => person.id !== id));

        if (response.id) {
          setMessage(`Contact deleted Successfully`);
          setType("success");
          setTimeout(() => {
            setMessage(null);
          }, 2000);
        } else {
          setMessage(`Contact No longer exists`);
          setType("error");
          setTimeout(() => {
            setMessage(null);
          }, 2000);
        }
      } catch (error) {
        setMessage(`Contact No longer exists`);
        setType("error");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      }
    }
  };
  return (
    <div>
      {filteredPersons?.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
