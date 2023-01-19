import Link from "next/link";
import React from "react";
import LogoSvg from "../../assets/LogoSvg";
import TopNavMenuLeft from "./components/TopNavMenuLeft";
import TopNavMenuRight from "./components/TopNavMenuRight";

const TopNav = () => {
  return (
    <div className="navbar absolute flex h-8 bg-base-100">
      <div className="flex-1 justify-center  sm:justify-start">
        <Link
          className="btn-ghost btn  text-3xl font-semibold normal-case text-primary"
          href="/"
        >
          ReserveBook
        </Link>
        {/* sm show 3   */}
        <nav className="hidden flex-none sm:block md:hidden">
          <TopNavMenuLeft numberOfShownItems={3} />
        </nav>
        {/* md show 4   */}
        <nav className="hidden flex-none md:block lg:hidden">
          <TopNavMenuLeft numberOfShownItems={4} />
        </nav>
        {/* lg show all   */}
        <nav className="hidden flex-none lg:block">
          <TopNavMenuLeft />
        </nav>
      </div>
      <nav className="absolute  right-0 flex-none ">
        <TopNavMenuRight />
      </nav>
    </div>
  );
};

export default TopNav;
