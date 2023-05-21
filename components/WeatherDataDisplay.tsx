import { getWeather } from "@services/weather";

import TodayTemperature from "./TodayTemperature";
import WeekTemperature from "./WeekTemperature";

export default async function WeatherDataDisplay({
  searchUrl,
}: {
  searchUrl: string;
}) {
  if (!searchUrl) return null;
  const weatherData = await getWeather(searchUrl);
  const todayData = weatherData.current;
  const weekData = weatherData.forecast;

  return (
    <>
      <TodayTemperature todayData={todayData} />
      <WeekTemperature weekData={weekData} />
    </>
  );
}
