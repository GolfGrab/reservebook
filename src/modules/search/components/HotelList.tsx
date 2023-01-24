import type { Hotel } from "../types/Hotel";
import HotelCard from "./HotelCard";
const mockHotel: Hotel = {
  id: "1",
  name: "Hotel 1",
  image: "https://placeimg.com/200/200 ",
  location: "location 1 w",
  starRating: 4,
  guestRating: 4.4,
  reviewCount: 100,
  tags: ["budget", "romantic", "casino"],
  price: 3000,
  discountPercentage: 12,
  propertyType: "hotel",
  distanceKmFromCenter: 1.5,
  amenities: ["WiFi", "bathtub", "balcony"],
  beds: ["double", "single"],
  rooms: 6,
  paymentTypes: ["free cancellation", "pay at hotel"],
};
const HotelList = () => {
  return (
    <div className="flex flex-col gap-4">
      <HotelCard hotel={mockHotel} />
      <HotelCard hotel={mockHotel} />
      <HotelCard hotel={mockHotel} />
    </div>
  );
};

export default HotelList;
