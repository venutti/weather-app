import { HiOutlineMapPin as LocationIcon } from "react-icons/hi2";
import { AiOutlineCalendar as CalendarIcon } from "react-icons/ai";

import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

import { WeatherData } from "@customTypes/weatherTypes";

const formatDate = (date: string) => {
  const parsedDate = parseISO(date);
  const formatDate = format(parsedDate, "EEEE, dd 'de' MMMM", { locale: es });
  return formatDate[0].toUpperCase() + formatDate.slice(1);
};

export default function TodayTemperature({
  todayData,
}: {
  todayData: WeatherData | null;
}) {
  if (!todayData) return null;

  return (
    <div className="mt-6">
      {/* UBICACIÓN */}
      <div className="flex items-center justify-center">
        <LocationIcon className="text-7xl" />
        <div className="mt-2">
          <p className="text-2xl font-raleway leading-4">
            {todayData.city.name}
            <br />
            <span className="text-lg text-gray-400">
              {todayData.city.country}
            </span>
          </p>
        </div>
      </div>
      {/* TEMPERATURA */}
      <div className="mt-4 grid justify-items-center">
        <p className="text-9xl">{`${todayData.temperature}`.split(".")[0]}°C</p>
        <p className="text-2xl mt-2">{todayData.condition}</p>
      </div>
      {/* FECHA */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <CalendarIcon className="text-2xl" />
        <p>{formatDate(todayData.date)}</p>
      </div>
    </div>
  );
}
