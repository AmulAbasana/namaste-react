import { useState } from "react";
import { RESTAURANT_LIST } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(RESTAURANT_LIST);
  return (
    <div className="body">
      <div className="filter-btns">
        <button
          className="top-rated-btn"
          onClick={() => {
            const filteredList = RESTAURANT_LIST.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        {restaurantList !== RESTAURANT_LIST && (
          <button
            className="clear-btn"
            onClick={() => {
              setRestaurantList(RESTAURANT_LIST);
            }}
          >
            Clear
          </button>
        )}
      </div>
      <div className="retro-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
