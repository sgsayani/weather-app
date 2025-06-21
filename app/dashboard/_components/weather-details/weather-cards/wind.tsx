import {
  ArrowBigLeft,
  CloudRain,
  CloudSun,
  Cloudy,
  Sun,
  Wind,
} from "lucide-react";

export const WindCard = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4">
          <p className="text-sm text-gray-500">Wind</p>
          <div className="flex gap-2 items-center">
            <span className="text-4xl font-semibold">8</span>
            <span className="font-medium text-sm text-gray-500">mph</span>
          </div>
          <div className="items-center flex ">
            <ArrowBigLeft size={18} className="text-gray-500" />
            <p className="text-sm">NW direction</p>
          </div>
        </div>
        <Wind size={18} className="text-blue-600" />
      </div>
    </div>
  );
};
