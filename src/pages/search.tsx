import { type NextPage } from "next";
import { useState } from "react";
import HotelList from "../modules/hotel/components/HotelList";
import useFilteredHotel from "../modules/hotel/hooks/useFilteredHotel";
import useHotel from "../modules/hotel/hooks/useHotel";
import SearchBar from "../modules/search/components/SearchBar";
import SortMenu from "../modules/search/components/SortMenu";
import useSearchForm from "../modules/search/hooks/useSearchForm";
import { sortFunctions } from "../modules/search/services/sortFunction";

const Search: NextPage = () => {
  const { searchRegister, searchOption } = useSearchForm();
  const { data: hotels } = useHotel();
  const { filteredHotels } = useFilteredHotel(searchOption(), hotels);
  const [sortfunc, setSortfunc] = useState(0);
  const sortedHotels = filteredHotels
    ? sortFunctions[sortfunc]?.func(filteredHotels)
    : [];
  const [showFilter, setShowFilter] = useState(false);
  return (
    <main className="bg-base-200/20">
      <section className="container mx-auto flex min-h-screen flex-row gap-4 py-20 px-4">
        <div className=" hidden w-[260px] flex-col gap-4 lg:flex ">
          <SearchBar register={searchRegister} searchOption={searchOption} />
        </div>
        <div className="flex w-full flex-col gap-4">
          <button
            className="btn-outline btn lg:hidden"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            toggle filter
          </button>
          {showFilter && (
            <div className="  flex w-full flex-col gap-4 ">
              <SearchBar
                register={searchRegister}
                searchOption={searchOption}
              />
            </div>
          )}
          <SortMenu setSortfunc={setSortfunc} sortfunc={sortfunc} />
          {sortedHotels && <HotelList hotels={sortedHotels} />}
        </div>
      </section>
    </main>
  );
};

export default Search;
