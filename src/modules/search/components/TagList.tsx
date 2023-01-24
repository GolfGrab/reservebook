import type { Hotel } from "../types/Hotel";

type TagListProps = {
  tags: Hotel["tags"];
};

const BadgeList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex gap-1">
      {tags?.map((tag) => (
        <div key={tag} className="badge-outline badge ">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default BadgeList;
