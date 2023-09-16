import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/const";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList?.length ? (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              let updatedList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(updatedList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="top-rated-btn"
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
          className="clear-btn"
          onClick={() => {
            setSearchText("");
            setFilteredList(restaurantList);
          }}
        >
          Clear
        </button>
      </div>
      {!filteredList?.length && restaurantList?.length ? (
        <h3>No Result found</h3>
      ) : (
        <div className="retro-container">
          {filteredList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
