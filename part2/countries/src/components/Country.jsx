/* eslint-disable react/prop-types */
import Weather from "./Weather";

const Country = ({ country }) => {
  const languages = Object.values(country.languages);
  return (
    <div>
      <h1>{country.name.common}</h1>

      <p>capital {country.capital}</p>
      <p>area {country.area}</p>

      <h3>languages:</h3>

      <ul>
        {languages.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <img src={country.flags.png} alt={country.flags.alt} />
      <Weather
        capital={country.capital[0]}
        lat={country.capitalInfo.latlng[0]}
        long={country.capitalInfo.latlng[1]}
      />
    </div>
  );
};

export default Country;
