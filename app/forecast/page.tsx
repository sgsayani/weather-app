import { HourlyForecastHeader } from "../dashboard/_components/hourly-forecast-header";
import { HourlyView } from "../dashboard/_components/hourly-view/hourly-view";

export default function ForecastPage() {
    return (
        <div className="flex flex-col gap-6">
          
          <HourlyForecastHeader/>
          <HourlyView/>
          
        </div>
      );
  }