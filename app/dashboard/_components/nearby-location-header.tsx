export const NearByLocationHeader = () => {
  return (
   <div className="flex justify-between items-end">
      <div className="flex flex-col">
        <div className="flex gap-2">
          <h1 className="text-xl font-semibold">Nearby Locations</h1>
        </div>
      </div>
      <div className="">
          <span className="text-blue-600">View All</span>
      </div>
    </div>
  );
};