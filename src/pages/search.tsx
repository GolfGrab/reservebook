import { type NextPage } from "next";
import HotelList from "../modules/search/components/HotelList";
import SearchBar from "../modules/search/components/SearchBar";
import SortMenu from "../modules/search/components/SortMenu";

const Search: NextPage = () => {
  return (
    <main className="bg-base-200/20">
      <section className="container mx-auto flex min-h-screen flex-row gap-4 py-20">
        <div className=" hidden w-[260px] flex-col gap-4 lg:flex ">
          <SearchBar />
        </div>
        <div className="flex w-full flex-col gap-4">
          <SortMenu />
          <HotelList />
        </div>
      </section>
    </main>
  );
};

export default Search;
