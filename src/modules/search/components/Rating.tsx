import type { Hotel } from "../types/Hotel";

type RatingProps = {
  rating: Hotel["starRating"];
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <>
      <div
        className="rating"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {[1, 2, 3, 4, 5].map((rate) => {
          return (
            <input
              key={rate}
              type="radio"
              name="rating-2"
              className={
                rate <= rating
                  ? "mask mask-star-2 bg-orange-400"
                  : "mask mask-star-2 bg-orange-200"
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default Rating;
