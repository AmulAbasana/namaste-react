import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAIL_URL } from "../utils/const";
import Accordian from "./Accordinan";
import Shimmer from "./Shimmer";

const RestaurantDetail = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(RESTAURANT_DETAIL_URL + resId);

    const json = await data.json();
    console.log("Json :: ", json?.data?.cards);
    setRestInfo(json?.data?.cards);
  };

  if (restInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    sla,
    avgRatingString,
    totalRatingsString,
  } = restInfo[0]?.card?.card?.info;

  return (
    <div className="restaurant-detail">
      <div className="restaurant-info">
        <div className="basic-info">
          <div>
            <p className="name">{name}</p>
            <p className="cuisines">{cuisines.join(", ")}</p>
            <p className="cuisines">
              {areaName}, {sla?.lastMileTravelString}
            </p>
          </div>
          <div className="rating-info">
            <p className="star">{avgRatingString}</p>
            <p className="review">{totalRatingsString}</p>
          </div>
        </div>
        <div className="other-info">
          <p>{sla.slaString}</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      <div className="restaurant-menu">
        {restInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (category) => {
            const { title, itemCards } = category?.card?.card;
            return category?.card?.card["@type"] !==
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? null : (
              <Accordian key={title} title={title} itemCards={itemCards} />
            );
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
