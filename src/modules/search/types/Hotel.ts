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

export type HotelList = Hotel[];

export const propertyOptions = [
  "apartment",
  "condo",
  "house",
  "townhouse",
  "villa",
  "bungalow",
  "studio",
  "loft",
  "hotel",
  "resort",
];

const propertyOptionsConst = [...propertyOptions] as const;

export type PropertyType = (typeof propertyOptionsConst)[number];

export const bedOptions = ["single", "double", "queen", "king", "twin"];

const bedOptionsConst = [...bedOptions] as const;

export type BedType = (typeof bedOptionsConst)[number];

export const paymentOptions = ["free cancellation", "pay at hotel", "pay now"];

const paymentOptionsConst = [...paymentOptions] as const;

export type PaymentType = (typeof paymentOptionsConst)[number];

// 10 scale rating
export const ratingOptions = [
  "Terrible",
  "Poor",
  "Average",
  "Good",
  "Great",
  "Excellent",
  "Superb",
  "Fabulous",
  "Amazing",
  "Incredible",
];

const ratingOptionsConst = [...ratingOptions] as const;

export type RatingType = (typeof ratingOptionsConst)[number];

export const starOptions = [1, 2, 3, 4, 5];

const starOptionsConst = [...starOptions] as const;

export type StarRatingType = (typeof starOptionsConst)[number];

export const roomAmenityOptions = [
  "air conditioning",
  "TV",
  "bathtub",
  "coffee maker",
  "watching machine",
  "refrigerator",
  "microwave",
  "balcony",
  "internet",
  "pets allowed",
  "kitchen",
  "smoking allowed",
  "wheelchair accessible",
  "WiFi",
];

const roomAmenitiesConst = [...roomAmenityOptions] as const;

export type RoomAmenityType = (typeof roomAmenitiesConst)[number];

export const tagOptions = [
  "family friendly",
  "business",
  "luxury",
  "budget",
  "romantic",
  "honeymoon",
  "spa",
  "golf",
  "beach",
  "ski",
  "casino",
  "eco",
  "historic",
  "outdoors",
  "shopping",
  "nightlife",
  "art",
];

const tagsConst = [...tagOptions] as const;

export type TagType = (typeof tagsConst)[number];
