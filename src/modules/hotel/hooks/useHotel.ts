import axios from "axios";
import { useQuery } from "react-query";
import { mockHotels } from "../mocks/mockHotels";
import type {
  BedType,
  PaymentType,
  PropertyType,
  RoomAmenityType,
  StarRatingType,
  TagType,
} from "../types/HotelType";

export type Hotel = {
  id: string;
  name: string;
  starRating: StarRatingType;
  guestRating: number;
  reviewCount: number;
  location: string;
  price: number;
  discountPercentage: number;
  image: string;
  tags: TagType[];
  propertyType: PropertyType;
  distanceKmFromCenter: number;
  amenities: RoomAmenityType[];
  paymentTypes: PaymentType[];
  beds: BedType[];
  rooms: number;
};

const fetchHotels = async (): Promise<Hotel[]> => {
  const response = await axios.get("/api/hotels");
  if (!response.data) {
    console.log("error");
    return mockHotels;
  }
  return response.data as Hotel[];
};

const useHotel = () => {
  const query = useQuery({
    queryKey: "hotels",
    queryFn: () => fetchHotels(),
  });
  return query;
};

export default useHotel;
