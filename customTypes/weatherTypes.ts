export type City = {
  name: string;
  country: string;
  url: string;
};

export type WeatherData = {
  city: City;
  temperature: number;
  condition: string;
  date: string;
};

export type MinimalWeatherData = {
  minTemperature: number;
  maxTemperature: number;
  icon: string;
  date: string;
};
