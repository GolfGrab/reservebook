import Link from "next/link";
import TopNavMenuLeftWrapped from "./TopNavMenuLeftWrapped";
import TopNavMenuRight from "./TopNavMenuRight";

const TopNav = () => {
  return (
    <div className="navbar absolute z-50 flex h-8 bg-base-100">
      <div className="flex-1 justify-start">
        <Link
          className="btn-ghost btn  text-3xl font-semibold normal-case text-primary"
          href="/"
        >
          ReserveBook
        </Link>
        <TopNavMenuLeftWrapped />
      </div>
      <nav className="absolute  right-2 flex-none ">
        <TopNavMenuRight />
      </nav>
    </div>
  );
};

export default TopNav;
