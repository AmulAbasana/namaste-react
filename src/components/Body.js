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
    setFilteredList(restaurantList);
  }, [restaurantList]);

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
