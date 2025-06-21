import {
  Cloud,
  CloudMoon,
  CloudRain,
  CloudSun,
  Cloudy,
  Sun,
} from "lucide-react";

export const HourlyForcast = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex flex-col space-y-4 ">
      <div className="flex items-center justify-between gap-14.5">
        <div className="flex-col space-y-2 gap-2 ">
          <div className="">
            <span>Now</span>
          </div>
          <div className="">
            <CloudSun size={18} className="text-blue-500" />
          </div>
          <div className=" ">
            <span>72°</span>
          </div>
        </div>

        <div className="flex-col  space-y-2  gap-2 ">
          <div className="">
            <span className="text-gray-500">1 PM</span>
          </div>
          <div className="">
            <Sun size={18} className="text-yellow-500" />
          </div>
          <div className=" ">
            <span>74°</span>
          </div>
        </div>

        <div className="flex-col  space-y-2 gap-2 ">
          <div className="">
            <span className="text-gray-500">2 PM</span>
          </div>
          <div className="">
            <Sun size={18} className="text-yellow-500" />
          </div>
          <div className=" ">
            <span>75°</span>
          </div>
        </div>

        <div className="flex-col  space-y-2 gap-2 ">
          <div className="">
            <span className="text-gray-500">3 PM</span>
          </div>
          <div className="">
            <Sun size={18} className="text-yellow-500" />
          </div>
          <div className=" ">
            <span >76°</span>
          </div>
        </div>

        <div className="flex-col  space-y-2 gap-2 ">
          <div className="">
            <span   className="text-gray-500">4 PM</span>
          </div>
          <div className="">
            <Sun size={18} className="text-yellow-500" />
          </div>
          <div className=" ">
            <span>75°</span>
          </div>
        </div>

        <div className="flex-col   space-y-2 gap-2 ">
          <div className="">
            <span className="text-gray-500">5 PM</span>
          </div>
          <div className="">
            <CloudSun size={18} className="text-gray-500" />
          </div>
          <div className=" ">
            <span>73°</span>
          </div>
        </div>

        <div className="flex-col  space-y-2 gap-2 ">
          <div className="">
            <span   className="text-gray-500">6 PM</span>
          </div>
          <div className="">
            <Cloud size={18} className="text-gray-500" />
          </div>
          <div className=" ">
            <span>71°</span>
          </div>
        </div>

        <div className="flex-col   space-y-2 gap-2 ">
          <div className="">
            <span   className="text-gray-500">7 PM </span>
          </div>
          <div className="">
            <Cloud size={18} className="text-gray-500" />
          </div>
          <div className=" ">
            <span>69°</span>
          </div>
        </div>

        <div className="flex-col  space-y-2 gap-2 ">
          <div className="">
            <span   className="text-gray-500">8 PM</span>
          </div>
          <div className="">
            <Cloud size={18} className="text-gray-500" />
          </div>
          <div className=" ">
            <span>67°</span>
          </div>
        </div>

        <div className="flex-col  space-y-2 gap-2 ">
          <div className="">
            <span   className="text-gray-500">9 PM</span>
          </div>
          <div className="">
            <CloudMoon size={18} className="text-gray-500" />
          </div>
          <div className=" ">
            <span>68°</span>
          </div>
        </div>

        <div className="flex-col  space-y-2 gap-2 ">
          <div className="">
            <span   className="text-gray-500">10 PM</span>
          </div>
          <div className="">
            <CloudMoon size={18} className="text-gray-500" />
          </div>
          <div className=" ">
            <span>62°</span>
          </div>
        </div>
      </div>
    </div>
  );
};
