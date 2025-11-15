"use client";
import { useState } from "react";
import Btn from "@/components/Btn";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(""); // inputValue gemmer det brugeren skriver i feltet, starter altid som en tom streng " "
  // setInputValue er funktionen der opdaterer inputValue hver gang brugeren skriver noget i feltet
  
  function handleSearch() { // Funktionen der kører når brugeren klikker på søge knappen
    fetch(`https://dummyjson.com/products/search?q=${inputValue}`) // Der sendes en request til API'et med det brugeren har skrevet i søgefeltet, fx apple
      .then((res) => res.json()) // Svaret fra API'et bliver konverteret til et Javascript objekt
      .then((data) => console.log(data)); // Modtager dataen og viser resultater af det søgte ord i konsollen
  }

  return (
    <div className="bg-bg2 mb-10 flex w-92 items-center justify-center gap-4 rounded-lg px-6 py-4 shadow-md">
      <input
        type="text"
        placeholder="Søg efter produkter..."
        value={inputValue} // Sørger for at input feltet altid viser det som står i variablen inputValue, hvis inputValue er "hej", så viser inputfeltet "hej" og ellers en tom streng ""
        onChange={(event) => setInputValue(event.target.value)} // Hver gang brugeren skriver noget i feltet, opdateres inputValue med den nyeste værdi
        className="focus:border-primary w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none"
      />
      <Btn text="Søg" type="primary" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;
