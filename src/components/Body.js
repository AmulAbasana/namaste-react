import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const filterAPIData = (cards) => {
    return cards.filter(
      (card) =>
        card?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" &&
        card?.card?.card?.gridElements
    );
  };

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    const restaurantsCard = filterAPIData(json?.data?.cards)[0];
    const restaurants =
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // const restaurants =
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants;
    setRestaurantList(restaurants);
    setFilteredList(restaurants);
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
