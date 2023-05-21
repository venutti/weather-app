"use client";
import { useEffect, useState } from "react";
import { getOptions } from "@services/autocompleteService";
import { BsSearch as SearchIcon } from "react-icons/bs";

import { City } from "@customTypes/weatherTypes";

const defaultSearchResults = [
  {
    name: "Mar del Plata",
    country: "Argentina",
    url: "mar-del-plata-buenos-aires-argentina",
  },
  {
    name: "Buenos Aires",
    country: "Argentina",
    url: "buenos-aires-distrito-federal-argentina",
  },
  { name: "Cordoba", country: "Argentina", url: "cordoba-cordoba-argentina" },
  { name: "Rosario", country: "Argentina", url: "rosario-santa-fe-argentina" },
];

export default function CitySearch({
  onSearch,
}: {
  onSearch: (searchTerm: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] =
    useState<City[]>(defaultSearchResults);
  const [showResults, setShowResults] = useState(false);

  const fetchOptions = async (term: string) => {
    const options = await getOptions(term);
    setSearchResults(options);
  };

  useEffect(() => {
    if (searchTerm.length >= 3) {
      fetchOptions(searchTerm);
    } else if (searchTerm.length === 0) {
      setSearchResults(defaultSearchResults);
    } else if (searchTerm.length < 3) {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleOptionClick = (city: City) => {
    setSearchTerm(`${city.name}, ${city.country}`);
    onSearch(city.url);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.length) {
      onSearch(searchTerm);
    }
    setShowResults(false);
  };

  return (
    <div className={`relative mt-2`}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="w-full bg-gray-800 bg-opacity-50 text-white rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-opacity-100"
          placeholder="Ingresa una ciudad"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
        <SearchIcon className="absolute top-3 left-3 text-gray-400" />
      </form>
      {/* AUTOCOMPLETE */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute w-full bg-gray-800 text-white rounded-md mt-2 px-4 py-2">
          {searchResults.map((city: City) => (
            <p
              key={city.url}
              className="cursor-pointer hover:font-bold"
              onMouseDown={() => handleOptionClick(city)}
            >
              {city.name + ", "}
              <span className="opacity-60">{city.country}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
