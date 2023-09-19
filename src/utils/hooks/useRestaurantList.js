import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../const";

const useRestaurantList = () => {
  const [resList, setResList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const filterAPIData = (cards) => {
    return cards.filter(
      (card) =>
        card?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" &&
        card?.card?.card?.gridElements &&
        card?.card?.card?.gridElements?.infoWithStyle["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
    );
  };

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();

    const restaurantsCard = filterAPIData(json?.data?.cards)[0];
    setResList(
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList;
};

export default useRestaurantList;
