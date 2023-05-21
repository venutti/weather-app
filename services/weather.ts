const getFakeWeather = async () => {
  // Devuelve un objeto con la misma estructura que el API
  // Pasados 2 segundos
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    current: {
      city: {
        name: "Buenos Aires",
        country: "Argentina",
        url: "buenos-aires",
      },
      temperature: 20,
      condition: "Sunny",
      date: "2020-09-05",
    },
    forecast: [
      {
        minTemperature: 20,
        maxTemperature: 30,
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        date: "2020-09-05",
      },
      {
        minTemperature: 20,
        maxTemperature: 30,
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        date: "2020-09-06",
      },
      {
        minTemperature: 20,
        maxTemperature: 30,
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        date: "2020-09-07",
      },
      {
        minTemperature: 20,
        maxTemperature: 30,
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        date: "2020-09-08",
      },
      {
        minTemperature: 20,
        maxTemperature: 30,
        icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
        date: "2020-09-09",
      },
    ],
  };
};

export async function getWeather(searchTerm: string) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=4f234fbb57a943a1aa5184734231605&q=${searchTerm}&days=5&aqi=no&alerts=no&lang=es`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return {
    current: {
      city: {
        name: data.location.name,
        country: data.location.country,
        url: searchTerm,
      },
      temperature: data.current.temp_c,
      condition: data.current.condition.text,
      date: data.current.last_updated,
    },
    forecast: data.forecast.forecastday.map((day: any) => {
      return {
        minTemperature: day.day.mintemp_c,
        maxTemperature: day.day.maxtemp_c,
        icon: day.day.condition.icon,
        date: day.date,
      };
    }),
  };
}
