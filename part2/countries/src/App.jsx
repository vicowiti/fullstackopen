import { useState } from "react";
import Search from "./components/Search";
import { useEffect } from "react";
import { getAllCountries } from "./services/countries";
import CountryList from "./components/CountryList";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllCountries();

      setCountries(data);
    }
    fetchData();
  }, []);

  const countriesFilter = countries?.filter((country) =>
    country?.name?.common?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <CountryList countries={countriesFilter} />
    </div>
  );
};

export default App;
