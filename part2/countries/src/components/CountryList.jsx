/* eslint-disable react/prop-types */
import Country from "./Country";

import CountryToggle from "./CountryToggle";

const CountryList = ({ countries }) => {
  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;
  if (countries.length === 1) return <Country country={countries[0]} />;
  return (
    <div>
      {countries.map((country) => (
        <CountryToggle country={country} key={country.name.common} />
      ))}
    </div>
  );
};

export default CountryList;
