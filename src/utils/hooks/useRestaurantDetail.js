import { useEffect, useState } from "react";
import { RESTAURANT_DETAIL_URL } from "../const";

const useRestaurantDetail = (resId) => {
  const [resDetail, setResDetail] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_DETAIL_URL + resId);
    const json = await data.json();
    setResDetail(json?.data?.cards);
  };

  return resDetail;
};

export default useRestaurantDetail;
