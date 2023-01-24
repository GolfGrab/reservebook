import type { Hotel } from "../../hotel/types/HotelType";

export type SortFunction = (hotels: Hotel[]) => Hotel[];

export const sortFunctions = [
  {
    name: "Best Match",
    func: (hotels: Hotel[]) => hotels,
  },
  {
    name: "Top Review",
    func: (hotels: Hotel[]) => {
      return hotels.sort((a, b) => b.reviewCount - a.reviewCount);
    },
  },
  {
    name: "Lowest Price",
    func: (hotels: Hotel[]) => {
      return hotels.sort((a, b) => a.price - b.price);
    },
  },
  {
    name: "Top Rated",
    func: (hotels: Hotel[]) => {
      return hotels.sort((a, b) => b.guestRating - a.guestRating);
    },
  },
];
