import axios from "axios";

export const getAllContacts = async () => {
  try {
    const response = await axios.get("/api/persons");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = async (id, data) => {
  try {
    const response = await axios.put(`/api/persons/${id}`, data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`/api/persons/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addContact = async (newName, newNumber) => {
  try {
    const response = await axios.post("/api/persons", {
      name: newName,
      number: newNumber,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
