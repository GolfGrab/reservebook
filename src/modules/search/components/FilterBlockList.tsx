import type { UseFormRegister } from "react-hook-form/dist/types";
import type { z } from "zod";
import FilterBlock from "./FilterBlock";
import type { schema } from "./SearchBar";

type FilterBlockListProps = {
  title: string;
  labels: React.ReactNode[] | string[];
  valueKey: keyof z.infer<typeof schema>;
  values: string[] | number[];
  register: UseFormRegister<z.infer<typeof schema>>;
};

const FilterBlockList: React.FC<FilterBlockListProps> = ({
  title,
  labels,
  valueKey,
  values,
  register,
}) => {
  return (
    <FilterBlock title={title}>
      {values.map((value, idx) => (
        <label
          className="label cursor-pointer justify-start gap-2 py-[0.5px]"
          key={value}
        >
          <input
            type="checkbox"
            className="checkbox checkbox-xs"
            value={value}
            {...register(valueKey)}
          />
          <span className="label-text">{labels[idx]}</span>
        </label>
      ))}
    </FilterBlock>
  );
};

export default FilterBlockList;
