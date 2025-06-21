import { CloudRain, CloudSun, Cloudy, Sun, Wind } from "lucide-react";

export const PrecipitationCard = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4">
          <p className="text-sm text-gray-500">Precipitation</p>
          <div className="flex gap-2 items-center">
            <span className="text-4xl font-semibold">0.01</span>
            <span className="font-medium text-sm text-gray-500">in</span>
          </div>
          <div className="items-center flex ">
            <p className="text-sm text-gray-500">10 % chance pf rain</p>
          </div>
        </div>
        <CloudRain size={18} className="text-blue-600" />
      </div>
    </div>
  );
};
