import axios from "axios";
const API_KEY = import.meta.env.VITE_SOME_KEY; // "";
export const getCurrentWeather = async (lat, long) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
