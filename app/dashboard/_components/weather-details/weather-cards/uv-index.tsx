import { CloudRain, CloudSun, Cloudy, Sun, Wind } from "lucide-react";

export const UvIndexCard = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4">
          <p className="text-sm text-gray-500">UV Index</p>
          <div className="flex gap-2 items-center">
            <span className="text-4xl font-semibold">5</span>
            <span className="font-medium text-sm text-gray-500">of 10</span>
          </div>
          <div className="items-center flex ">
            <p className="text-sm text-yellow-500">Moderate</p>
            <h3>-</h3>
            {/* <span className="text-sm flex justify-between">Some protection required</span> */}

          </div>
        </div>
        <Sun size={18} className="text-yellow-600" />
      </div>
    </div>
  );
};
