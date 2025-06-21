import { InfoCardSection } from "./_components/card-section/info-card-section";
import { HourlyForecastHeader } from "./_components/hourly-forecast-header";
import { HourlyView } from "./_components/hourly-view/hourly-view";
import { LocationHeader } from "./_components/location-header";
import { WeatherDeatilsHeader } from "./_components/weather-details-header";
import { WeatherDetailsSection } from "./_components/weather-details/weather-info-section";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <LocationHeader />
      <InfoCardSection />
      <HourlyForecastHeader/>
      <HourlyView/>
      <WeatherDeatilsHeader/>
      <WeatherDetailsSection/>
    </div>
  );
}