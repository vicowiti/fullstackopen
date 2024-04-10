import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import {
  addContact,
  getAllContacts,
  updateContact,
} from "./services/phonebook";
import ErrorHandler from "./components/ErrorHandler";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);
  const [type, setType] = useState("success");

  useEffect(() => {
    async function fetchData() {
      const data = await getAllContacts();
      setPersons(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !persons.some((item) => item.name.toLowerCase() === newName.toLowerCase())
    ) {
      if (newName && newNumber) {
        const data = await addContact(newName, newNumber);
        console.log(data);
        setPersons(persons.concat(data));
        setMessage(`Added ${newName}`);
        setType("success");
        setNewName("");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      } else {
        alert("Name and Number is required");
      }
    } else {
      const confirmation = window.confirm(
        `${newName} is already added to the phonebook. Replace old number with new number?`
      );

      if (confirmation) {
        const personExists = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        );
        const data = await updateContact(personExists.id, {
          ...personExists,
          number: newNumber,
        });

        console.log(data);

        setPersons(
          persons.map((person) => (person.id !== data.id ? person : data))
        );
        setMessage(`Updated ${newName}`);
        setType("success");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      }
    }
  };

  const filteredPersons = persons?.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <ErrorHandler message={message} type={type} />
      <Filter search={search} setSearch={setSearch} />
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons
        filteredPersons={filteredPersons}
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setType={setType}
      />
    </div>
  );
};

export default App;
