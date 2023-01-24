import TopNavMenuLeft from "./TopNavMenuLeft";

const TopNavMenuLeftWrapped = () => {
  return (
    <>
      {/* sm show 2   */}
      <nav className="hidden flex-none sm:block md:hidden">
        <TopNavMenuLeft numberOfShownItems={1} />
      </nav>
      {/* md show 3   */}
      <nav className="hidden flex-none md:block lg:hidden">
        <TopNavMenuLeft numberOfShownItems={3} />
      </nav>
      {/* lg show 4   */}
      <nav className="hidden flex-none lg:block xl:hidden">
        <TopNavMenuLeft numberOfShownItems={4} />
      </nav>
      {/* xl show 4   */}
      <nav className="hidden flex-none xl:block 2xl:hidden">
        <TopNavMenuLeft numberOfShownItems={4} />
      </nav>
      {/* 2xl show 5   */}
      <nav className="hidden flex-none 2xl:block 3xl:hidden">
        <TopNavMenuLeft numberOfShownItems={5} />
      </nav>
      {/* 3xl show all   */}
      <nav className="hidden flex-none 3xl:block">
        <TopNavMenuLeft />
      </nav>
    </>
  );
};

export default TopNavMenuLeftWrapped;
