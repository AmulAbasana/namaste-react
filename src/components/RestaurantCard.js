import { RESTAURANT_ICON_BASE_URL } from "../utils/const";

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log("resData :: ", resData);

  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData.info;

  return (
    <div className="p-4 bg-gray-200 m-4 w-[200px] rounded-lg shadow-lg h-[450px]">
      <img
        className="rounded-lg w-48 h-48"
        src={RESTAURANT_ICON_BASE_URL + cloudinaryImageId}
      />
      <h3 className="py-2 font-bold text-black text-md">{name}</h3>
      <h4 className="py-2 font-bold text-gray-500 text-sm">
        {cuisines.join(", ")}
      </h4>
      <h4 className="py-2 font-bold text-black text-sm">{costForTwo}</h4>
      <h4 className="py-2 font-bold text-green-900 text-sm">
        {avgRating} stars
      </h4>
      <h4 className="py-2 font-bold text-blue-700 text-sm">
        {sla.deliveryTime} Mins
      </h4>
    </div>
  );
};

export default RestaurantCard;
