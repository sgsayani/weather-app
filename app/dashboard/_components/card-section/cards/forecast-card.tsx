import { CloudRain, CloudSun, Cloudy, Sun } from "lucide-react";

export const ForecastCard = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex flex-col space-y-4 ">
      <p className="text-sm text-gray-500 ">5-Day Forecast</p>
      <div className="flex justify-between gap-2 ">
        <div className="flex-1 flex items-center gap-2">
          <span>Today</span>
        </div>
        <div className=" flex items-center gap-2">
          <Sun size={18} className="text-yellow-500" />
          <span>76°</span>
        </div>
        <div className=" flex items-center text-sm ">
          <span className="text-gray-500">62°</span>
        </div>
      </div>


      <div className="flex justify-between gap-2 ">
        <div className="flex-1 flex items-center gap-2 ">
          <span>Tue</span>
        </div>
        <div className=" flex items-center gap-2">
          <CloudSun size={18} className="text-gray-500" />
          <span>74°</span>
        </div>
        <div className=" flex items-center text-sm ">
          <span className="text-gray-500">60°</span>
        </div>
      </div>


      <div className="flex justify-between gap-2">
        <div className="flex-1 flex items-center gap-2">
          <span>Wed</span>
        </div>
        <div className=" flex items-center gap-2">
          <Cloudy size={18} className="text-gray-500" />
          <span>71°</span>
        </div>
        <div className=" flex items-center text-sm ">
          <span className="text-gray-500">58°</span>
        </div>
      </div>

      <div className="flex justify-between gap-2">
        <div className="flex-1 flex items-center gap-2">
          <span>Thu</span>
        </div>
        <div className=" flex items-center gap-2">
          <CloudRain size={18} className="text-blue-500" />
          <span className="text-black">68°</span>
        </div>
        <div className=" flex items-center text-sm">
          <span className="text-gray-500">57°</span>
        </div>
      </div>


      <div className="flex justify-between gap-2">
        <div className="flex-1 flex items-center">
          <span>Fri</span>
        </div>
        <div className=" flex items-center text-gray-500 gap-2">
          <CloudSun size={18} className="text-gray-500" />
          <span className="text-black">72°</span>
        </div>
        <div className=" flex items-center text-sm text-gray-500">
          <span className="text-gray-500">59°</span>
        </div>
      </div>
    </div>
  );
};
