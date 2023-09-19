import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../utils/context/UserContext";
import useRestaurantDetail from "../utils/hooks/useRestaurantDetail";
import Accordian from "./Accordinan";
import Shimmer from "./Shimmer";

const RestaurantDetail = () => {
  const { resId } = useParams();

  const resDetail = useRestaurantDetail(resId);

  const { userName } = useContext(UserContext);

  const [activeAccordianIndex, setActiveAccordianIndex] = useState(-1);

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
    <div className="my-4 mx-48 p-4">
      <div className="">
        <div>
          <p className="text-xl text-black font-bold my-4">
            Welcome {userName}
          </p>
        </div>
        <div className="flex justify-between border-b-2 border-dotted py-4">
          <div>
            <p className="text-lg text-black font-bold">{name}</p>
            <p className="my-2 text-sm text-slate-400">{cuisines.join(", ")}</p>
            <p className="text-sm text-slate-400">
              {areaName}, {sla?.lastMileTravelString}
            </p>
          </div>
          <div className="border border-solid rounded-lg text-center p-1">
            <p className="border-b-2 border-solid text-green-700 font-bold p-1">
              {avgRatingString}
            </p>
            <p className="py-2 text-slate-600">{totalRatingsString}</p>
          </div>
        </div>
        <div className="flex my-2 py-2 border-b-2 border-solid">
          <p className="text-gray-700 font-bold mr-5">{sla.slaString}</p>
          <p className="text-gray-700 font-bold mr-5">{costForTwoMessage}</p>
        </div>
      </div>
      <div className="my-2">
        {resDetail[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (category, index) => {
            const { title, itemCards } = category?.card?.card;
            return category?.card?.card["@type"] !==
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? null : (
              <Accordian
                key={title}
                title={title}
                itemCards={itemCards}
                isOpen={activeAccordianIndex === index}
                onAccordianClick={() =>
                  setActiveAccordianIndex(
                    activeAccordianIndex !== index ? index : -1
                  )
                }
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default RestaurantDetail;
