import type { Hotel } from "../types/HotelType";

type TagListProps = {
  tags: Hotel["tags"];
};

const BadgeList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-1">
      {tags?.map((tag) => (
        <div key={tag} className="badge-outline badge ">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default BadgeList;
