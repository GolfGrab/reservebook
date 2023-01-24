const SortMenu = () => {
  return (
    <>
      <ul className="menu rounded-box menu-compact  menu-horizontal w-full border-2 border-base-300 bg-base-100  lg:menu-normal ">
        <li>
          <a className="btn-disabled w-full justify-center rounded-none">
            Sort
          </a>
        </li>
        <li className="flex-1">
          <a className="w-full justify-center border-l-2 border-base-300">
            Best match
          </a>
        </li>
        <li className="flex-1">
          <a className="w-full justify-center border-l-2 border-base-300">
            Top reviewed
          </a>
        </li>
        <li className="flex-1">
          <a className="w-full justify-center border-l-2 border-base-300">
            Lowest price first
          </a>
        </li>
        <li className="flex-1">
          <a className="w-full justify-center border-l-2 border-base-300">
            Hot Deals!
          </a>
        </li>
      </ul>
    </>
  );
};

export default SortMenu;
