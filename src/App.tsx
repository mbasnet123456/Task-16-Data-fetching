import { useState, useEffect } from "react";
import "./App.css";
const apiUrl = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="country-list">
      {countries.map((country, index) => (
        <div className="country-item" key={index}>
          <div className="country-details">
            <div className="country-name">{country.name.common}</div>
            <div className="capital">{country.capital}</div>
          </div>
          <img className="country-flag" src={country.flags.png} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
