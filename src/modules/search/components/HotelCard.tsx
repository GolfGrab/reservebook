import Image from "next/image";
import type { Hotel } from "../types/Hotel";
import { ratingOptions } from "../types/Hotel";
import Rating from "./Rating";
import TagList from "./TagList";

type HotelCardProps = {
  hotel: Hotel;
};

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="card card-side h-[210px] bg-base-100 shadow-xl">
      <figure className=" flex-[2]">
        <Image
          src={hotel?.image ?? "https://placeimg.com/200/200 "}
          alt={hotel?.name ? hotel?.name + " image" : "hotel image"}
          className="h-[210px] w-auto max-w-[300px] object-cover "
          width={300}
          height={210}
        />
      </figure>
      <div className="card-body flex-[4]">
        <h2 className="card-title">{hotel?.name ?? "hotel name"}</h2>
        <div className="flex flex-wrap gap-2">
          <Rating rating={hotel?.starRating ?? 4} />
          <p> 📌 {hotel?.location ?? "hotel location"}</p>
        </div>
        <TagList tags={hotel?.tags ?? ["tag1", "tag2", "tag3"]} />
      </div>
      <div className="card-body hidden flex-[1.5] items-end justify-between border-l-2 p-2 md:flex">
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <p>{ratingOptions[hotel?.guestRating ?? "8.4"]}</p>
            <p>{hotel?.reviewCount ?? "100"} reviews</p>
          </div>
          <div className="rounded-full bg-primary p-1 text-xl font-bold text-primary-content ">
            {hotel?.guestRating ?? "8.4"}
          </div>
        </div>

        {/* discount */}
        <div className="flex flex-col items-center bg-red-500 px-2 text-white">
          {hotel?.discountPercentage ? (
            <p>{hotel?.discountPercentage}% OFF TODAY</p>
          ) : (
            <p>only {hotel?.rooms} left</p>
          )}
        </div>
        {/* old price */}

        <div className="flex flex-col items-center">
          {hotel?.discountPercentage ? (
            <p className="text-sm line-through decoration-red-700">
              ฿{" "}
              {Math.round(hotel?.price * (1 + hotel?.discountPercentage / 100))}
            </p>
          ) : null}
          <p className=" text-lg font-bold text-red-600">
            ฿ {Math.round(hotel?.price) ?? 2000}
          </p>
        </div>

        <div className="card-actions justify-end">
          <button className="btn-primary btn  text-sm normal-case">
            Select room
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
