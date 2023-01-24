import MapPinSvg from "../../../assets/MapPinSvg";
import MapSvg from "../../../assets/MapSvg";

const SearchOnMap = () => {
  return (
    <a href="" className="relative overflow-hidden  hover:text-primary">
      <div>
        <MapSvg />
      </div>
      <div className="absolute top-0  left-0 flex h-[100px] w-full  flex-col items-center justify-center">
        <div className="text-red-500 ">
          <MapPinSvg />
        </div>
        <div className="uppercase ">search on map</div>
      </div>
    </a>
  );
};

export default SearchOnMap;
