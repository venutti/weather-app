"use client";
import { Suspense, useState } from "react";
import LoadingWeather from "./LoadingWeather";
import CitySearch from "./CitySearch";
import WeatherDataDisplay from "./WeatherDataDisplay";

export default function Weather() {
  const [searchUrl, setSearchUrl] = useState("");

  const handleSearch = (searchTerm: string) => {
    setSearchUrl(searchTerm);
  };

  return (
    <div className="max-w-xs mx-auto font-raleway">
      <CitySearch onSearch={handleSearch} />
      {searchUrl && (
        <Suspense fallback={<LoadingWeather />}>
          {/* @ts-expect-error Async Server Component */}
          <WeatherDataDisplay searchUrl={searchUrl} />
        </Suspense>
      )}
    </div>
  );
}
