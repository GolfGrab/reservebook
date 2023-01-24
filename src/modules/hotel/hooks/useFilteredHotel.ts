import type { SearchType } from "../../search/types/SearchTypes";
import type { Hotel } from "../types/HotelType";

const useFilteredHotel = (searchOption: SearchType, hotels?: Hotel[]) => {
  const filteredHotels = hotels?.filter((hotel) => {
    const {
      name,
      maxCost,
      propertyType,
      bedType,
      paymentType,
      roomAmenities,
      tags,
      star,
    } = searchOption;
    const {
      name: hotelName,
      price,
      propertyType: hotelPropertyType,
      beds,
      paymentTypes,
      amenities,
      tags: hotelTags,
      starRating,
    } = hotel;
    const isNameMatch = name
      ? hotelName.toLowerCase().includes(name.toLowerCase())
      : true;
    const isPriceMatch = price && maxCost ? price <= maxCost : true;
    const isPropertyTypeMatch = propertyType?.length
      ? propertyType.includes(hotelPropertyType)
      : true;
    const isBedTypeMatch = bedType?.length
      ? beds.some((bed) => bedType.includes(bed))
      : true;
    const isPaymentTypeMatch = paymentType?.length
      ? paymentTypes.some((payment) => paymentType.includes(payment))
      : true;
    const isRoomAmenitiesMatch = roomAmenities?.length
      ? amenities.some((amenity) => roomAmenities.includes(amenity))
      : true;
    const isTagsMatch = tags?.length
      ? hotelTags.some((tag) => tags.includes(tag))
      : true;
    const isStarMatch = star?.length
      ? star.some((s) => parseInt(s) === starRating)
      : true;
    return (
      isNameMatch &&
      isPriceMatch &&
      isPropertyTypeMatch &&
      isBedTypeMatch &&
      isPaymentTypeMatch &&
      isRoomAmenitiesMatch &&
      isTagsMatch &&
      isStarMatch
    );
  });

  console.log({
    searchOption,
    hotels,
    filteredHotels,
  });
  return {
    filteredHotels,
  };
};

export default useFilteredHotel;
