import axios from "axios";

export const getAllCountries = async () => {
  try {
    const response = await axios.get(
      "https://studies.cs.helsinki.fi/restcountries/api/all"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
