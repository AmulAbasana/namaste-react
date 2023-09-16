import { RESTAURANT_ICON_BASE_URL } from "../utils/const";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData.info;

  return (
    <div className="restro-card">
      <img
        className="restro-logo"
        src={RESTAURANT_ICON_BASE_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} Mins</h4>
    </div>
  );
};

export default RestaurantCard;
