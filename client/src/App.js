import { useRef, useState } from "react";
import React from "react";
import Card from "./Card";

function App() {
  const inputRef = useRef();
  const [country, setCountry] = useState([]);
  const throttling = useRef(false);

  const handleThrottleSearch = () => {
    if (throttling.current) {
      return;
    }

    if (!inputRef.current.value.trim()) {
      setCountry([]);
      return;
    }
    throttling.current = true;
    setTimeout(() => {
      throttling.current = false;
      fetch(`https://restcountries.com/v3.1/name/${inputRef.current.value}`)
        .then(async (response) => {
          if (!response.ok) {
            console.log("Something went wrong!");
          } else {
            const data = await response.json();
            setCountry(data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }, 600);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={handleThrottleSearch}
        className="search-input"
      />

      {inputRef.current?.value && country.length > 0 && (
        <div>
          {country.map((data) => 
            <Card 
              name={data.name?.common}
              area={data.area}
              region={data.region}
              flag={data.flag}
              currency={data.currencies}
              language={data.languages}
            />
          
          )}
        </div>
      )}
    </div>
  );
}

export default App;