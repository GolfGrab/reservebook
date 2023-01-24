import type { Dispatch, SetStateAction } from "react";
import { sortFunctions } from "../services/sortFunction";

type SortMenuProps = {
  sortfunc: number;
  setSortfunc: Dispatch<SetStateAction<number>>;
};

const SortMenu: React.FC<SortMenuProps> = ({ sortfunc, setSortfunc }) => {
  return (
    <>
      <ul className="menu rounded-box menu-compact  menu-horizontal w-full border-2 border-base-300 bg-base-100  lg:menu-normal ">
        <li>
          <a className="btn-disabled w-full justify-center rounded-none">
            Sort
          </a>
        </li>
        {sortFunctions.map((sort, idx) => (
          <li key={sort.name} className="flex-1">
            <a
              className={
                "w-full justify-center border-l-2 border-base-300" +
                (sortfunc === idx ? " btn-primary text-primary-content" : "")
              }
              onClick={() => setSortfunc(idx)}
            >
              {sort.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SortMenu;
