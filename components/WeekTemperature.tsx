import Image from "next/image";

import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

import { MinimalWeatherData } from "@customTypes/weatherTypes";

const formatDate = (date: string) => {
  const parsedDate = parseISO(date);
  const formatDate = format(parsedDate, "EEEE", { locale: es });
  return formatDate[0].toUpperCase() + formatDate.slice(1);
};

function WeekDay({ data }: { data: MinimalWeatherData }) {
  return (
    <div className="w-32 shrink-0">
      <div className="text-center">{formatDate(data.date)}</div>
      <div className="flex flex-col justify-between p-2 rounded-md border border-white">
        <Image
          src={data.icon.split("weatherapi.com")[1]}
          alt="weather icon"
          width={80}
          height={80}
          className="mx-auto"
        />
        <div className="leading-3 pb-2">
          <p className="text-center text-4xl">
            {String(data.maxTemperature).split(".")[0]}°C
          </p>
          <p className="text-center text-gray-300">
            {String(data.minTemperature).split(".")[0]}°C
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WeekTemperature({
  weekData,
}: {
  weekData: MinimalWeatherData[];
}) {
  if (!weekData.length) return null;

  return (
    <div className="flex items-center gap-2 mt-6 overflow-auto">
      {weekData.map((dayData) => (
        <WeekDay key={dayData.date} data={dayData} />
      ))}
    </div>
  );
}
