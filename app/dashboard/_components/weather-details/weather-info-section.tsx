import { HumidityCard } from "./weather-cards/humidity";
import { PrecipitationCard } from "./weather-cards/precipitation";
import {  UvIndexCard } from "./weather-cards/uv-index";
import { WindCard } from "./weather-cards/wind";

export const WeatherDetailsSection = () => {
  return (
    <div className="flex gap-6">
      <WindCard />
      <HumidityCard />
      <UvIndexCard />
      <PrecipitationCard />
      
    </div>
  );
};