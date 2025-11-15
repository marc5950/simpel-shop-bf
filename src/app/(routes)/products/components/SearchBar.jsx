"use client";
import { useState } from "react";
import Btn from "@/components/Btn";
import Card from "./Card";

const SearchBar = () => {
  // Komponenten der viser søgefeltet og søgeresultaterne
  const [inputValue, setInputValue] = useState(""); // inputValue holder det brugeren skriver i feltet, starter altid som en tom streng " "
  // setInputValue er funktionen der opdaterer inputValue hver gang brugeren skriver noget nyt i feltet
  const [results, setResults] = useState([]); // results holder de produkter der kommer tilbage fra API'et efter en søgning, starter som en tom array [] fordi der ikke er hentet noget endnu
  // setResults er funktionen der opdaterer results med de produkter der kommer tilbage fra API'et, så de kan vises på siden

  function handleSearch() {
    // Funktionen der kører når brugeren klikker på søge knappen
    fetch(`https://dummyjson.com/products/search?q=${inputValue}`) // Der sendes en request til API'et med det brugeren har skrevet i søgefeltet, fx apple
      .then((res) => res.json()) // Svaret fra API'et bliver konverteret til et Javascript objekt
      .then((data) => setResults(data.products ? data.products : [])); // Tjekker om der er produkter i API'et som matcher søgeordet, hvis ja opdateres results med de produkter, hvis nej opdateres results med en tom array []
  }

  return (
    <div>
      {/* Search bar */}
      <div className="bg-bg2 mb-4 flex w-92 items-center justify-center gap-4 rounded-lg px-6 py-4 shadow-md">
        <input
          type="text"
          placeholder="Søg efter produkter..."
          value={inputValue} // Sørger for at input feltet altid viser det som står i variablen inputValue, hvis inputValue er "hej", så viser inputfeltet "hej" og ellers en tom streng ""
          onChange={(event) => setInputValue(event.target.value)} // Hver gang brugeren skriver noget i feltet, opdateres inputValue med den nyeste værdi
          className="focus:border-primary w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none"
        />
        <Btn text="Søg" type="primary" onClick={handleSearch} />
      </div>

      {/* Vis resultaterne */}

      {/* De udkommenteret linjer nedenfor var et forsøg på at hente Card komponenten, så visningen af søgeordet vises som et Card, men det gav nogle fejl som jeg må have hjælp til */}
      {/* <div className="space-y-4">
        {results.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            description={p.description}
            price={p.price}
          />
        ))}
      </div> */}

      {/* Midlertidig visning af resultatet af søgeordet uden Card komponenten, bare for at se det virker. Så lige nu vises det bare som tekst, når man søger */}
      <div className="space-y-2">
        {results.map((p) => (
          <div key={p.id} className="rounded border p-2 shadow-sm">
            <p className="font-medium">{p.title}</p>
            <p className="text-sm text-gray-600">{p.description}</p>
            <p className="font-semibold">{p.price} kr.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
