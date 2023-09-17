import { useParams } from "react-router-dom";
import useRestaurantDetail from "../utils/hooks/useRestaurantDetail";
import Accordian from "./Accordinan";
import Shimmer from "./Shimmer";

const RestaurantDetail = () => {
  const { resId } = useParams();

  const resDetail = useRestaurantDetail(resId);

  if (resDetail === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    sla,
    avgRatingString,
    totalRatingsString,
  } = resDetail[0]?.card?.card?.info;

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
        {resDetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
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
