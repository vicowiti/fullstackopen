/* eslint-disable react/prop-types */
import { useState } from "react";
import Weather from "./Weather";

const CountryToggle = ({ country }) => {
  const [showDetail, setShowDetail] = useState(false);
  const languages = Object.values(country.languages);
  return (
    <div>
      <div>
        <div>
          {country.name.common}
          <button onClick={() => setShowDetail(!showDetail)}>
            {showDetail ? "Hide" : "Show"}
          </button>
        </div>

        {showDetail && (
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
        )}
      </div>
    </div>
  );
};

export default CountryToggle;
