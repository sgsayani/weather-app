import { Place1Card } from "./nearby-location-cards/place1";
import { Place2Card } from "./nearby-location-cards/place2";
import { Place3Card } from "./nearby-location-cards/place3";
import { Place4Card } from "./nearby-location-cards/place4";

export const NearByLocationDetails = () => {
  return (
    <div className="flex gap-6">
      <Place1Card />
      <Place2Card />
      <Place3Card />
      <Place4Card />
    </div>
  );
};