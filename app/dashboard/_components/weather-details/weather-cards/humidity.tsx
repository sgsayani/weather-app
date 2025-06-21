import { Progress } from "@/components/ui/progress";
import { CloudRain, CloudSun, Cloudy, Droplet, Sun, Wind } from "lucide-react";

export const HumidityCard = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4">
          <p className="text-sm text-gray-500">Humidity</p>
          <div className="flex gap-2 items-center">
            <span className="text-4xl font-semibold">45</span>
            <span className="font-medium text-sm text-gray-500">%</span>
          </div>
          <div className="flex flex-col  gap-4 items-center">
            <Progress progressColor="bg-blue-500" value={45} />
          </div>
        </div>
        <Droplet size={18} className="text-blue-600" />
      </div>
    </div>
  );
};
