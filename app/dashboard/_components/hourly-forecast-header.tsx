import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export const HourlyForecastHeader = () => {
  return (
   <div className="flex justify-between items-end">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <h1 className="text-xl font-semibold">Hourly ForeCast</h1>
        </div>
      </div>
      <div className="">
          <span className="text-blue-600">View Full Forecast</span>
      </div>
    </div>
  );
};