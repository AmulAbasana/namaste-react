import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/hooks/useRestaurantList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const restaurantList = useRestaurantList();

  useEffect(() => {
    console.log("restaurantList :: ", restaurantList);
    setFilteredList(restaurantList);
  }, [restaurantList]);

  return restaurantList?.length ? (
    <div className="my-4 mx-10 p-4">
      <div>
        <div className="flex my-4 justify-center">
          <input
            type="text"
            className="border border-solid border-gray-500 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            type="button"
            className="bg-white border border-solid border-red-600 shadow-lg rounded-lg p-1 mx-4"
            onClick={() => {
              let updatedList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(updatedList);
            }}
          >
            Search
          </button>
          <button
            className="bg-white border border-solid border-red-600 shadow-lg rounded-lg p-1 mx-4"
            onClick={() => {
              const updatedList = restaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredList(updatedList);
            }}
          >
            Top Rated Restaurant
          </button>
          <button
            className="bg-white border border-solid border-red-600 shadow-lg rounded-lg p-1 mx-4"
            onClick={() => {
              setSearchText("");
              setFilteredList(restaurantList);
            }}
          >
            Clear
          </button>
        </div>
      </div>
      {!filteredList?.length && restaurantList?.length ? (
        <h3>No Result found</h3>
      ) : (
        <div className="flex flex-wrap justify-left mb-4">
          {filteredList.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
