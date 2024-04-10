import axios from "axios";

export const getAllContacts = async () => {
  try {
    const response = await axios.get("http://localhost:3001/persons");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = async (id, data) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/persons/${id}`,
      data
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/persons/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addContact = async (newName, newNumber) => {
  try {
    const response = await axios.post("http://localhost:3001/persons", {
      name: newName,
      number: newNumber,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
