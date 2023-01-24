import type { Hotel } from "../types/HotelType";
import HotelCard from "./HotelCard";

type HotelListProps = {
  hotels?: Hotel[];
};

const HotelList: React.FC<HotelListProps> = ({ hotels }) => {
  return (
    <div className="flex flex-col gap-4">
      {hotels?.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}

      {!hotels?.length && (
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold">No hotel found</div>
          <div className="text-lg">Please try again with different filters</div>
        </div>
      )}
    </div>
  );
};

export default HotelList;
