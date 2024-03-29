import Rating from "../../common/components/Rating";
import {
  bedOptions,
  paymentOptions,
  propertyOptions,
  roomAmenityOptions,
  starOptions,
  tagOptions,
} from "../../hotel/types/HotelType";
import FilterBlockList from "./FilterBlockList";
import SearchOnMap from "./SearchOnMap";

import type { useForm } from "react-hook-form";

type SearchBarProps = {
  register: ReturnType<typeof useForm>["register"];
  searchOption: ReturnType<typeof useForm>["watch"];
};

const SearchBar: React.FC<SearchBarProps> = ({ register, searchOption }) => {
  return (
    <>
      <pre className="hidden">{JSON.stringify(searchOption(), null, 2)}</pre>
      <SearchOnMap />
      <div className="form-control">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input-bordered input w-full"
            {...register("name")}
          />
          <button className="btn-primary btn-square btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="1000"
        step="10"
        className="range range-primary"
        {...register("maxCost")}
      />
      <div className="flex items-center gap-2">
        MAX
        <span className=" font-bold">
          {searchOption("maxCost") ? searchOption("maxCost") : 0}
        </span>
        THB
      </div>
      <FilterBlockList
        title="Property type"
        labels={propertyOptions}
        valueKey="propertyType"
        values={propertyOptions}
        register={register}
      />
      <FilterBlockList
        title="Bed type"
        labels={bedOptions}
        valueKey="bedType"
        values={bedOptions}
        register={register}
      />
      <FilterBlockList
        title="Payment type"
        labels={paymentOptions}
        valueKey="paymentType"
        values={paymentOptions}
        register={register}
      />
      <FilterBlockList
        title="Room Amenities"
        labels={roomAmenityOptions}
        valueKey="roomAmenities"
        values={roomAmenityOptions}
        register={register}
      />
      <FilterBlockList
        title="Tags"
        labels={tagOptions}
        valueKey="tags"
        values={tagOptions}
        register={register}
      />

      <FilterBlockList
        title="Star"
        labels={starOptions.map((rating) => {
          return <Rating key={rating} rating={rating} />;
        })}
        valueKey="star"
        values={starOptions}
        register={register}
      />
    </>
  );
};

export default SearchBar;
