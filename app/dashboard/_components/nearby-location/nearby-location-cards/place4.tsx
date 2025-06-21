import { Cloud } from "lucide-react";

export const Place4Card = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex flex-col ">
          {/* <div className=""> */}
          <p className="text-lg text-black-500">Santa Cruz</p>
          <span className="text-sm text-gray-500">58 mi away</span>
          {/* </div> */}
          <div className="flex gap-2 items-center space-y-4">
            <span className="text-4xl font-semibold">68°</span>
            <span className="font-medium text-sm text-gray-500">Cloudy</span>
          </div>
          <div className="flex flex-col  gap-4 items-center">
            {/* <Progress progressColor="bg-blue-500" value={45} /> */}
          </div>
        </div>
        <Cloud size={30} className="text-gray-600" />
      </div>
    </div>
  );
};

