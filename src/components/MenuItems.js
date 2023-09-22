import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_MENU_IMG_URL } from "../utils/const";
import { addItem, removeItem } from "../utils/store/slice/cartSlice";

const MenuItems = ({ itemCards }) => {
  const dispatch = useDispatch();

  const onMenuItemClick = (item) => {
    dispatch(addItem(item));
  };

  const onRemoveMenuItemClick = (item) => {
    dispatch(removeItem(item));
  };

  const cartItems = useSelector((store) => store.cart.items);

  console.log("CartItems :: ", cartItems);

  return (
    <div className="">
      {itemCards.map((item) => {
        const { name, price, id, description, imageId, isVeg, defaultPrice } =
          item?.card?.info;

        console.log(cartItems[id]?.count || 0);
        const isAlreadyAddedToCart = cartItems[id]?.count || 0;

        // console.log(isAlreadyAddedToCart);

        return (
          <div
            key={id}
            className="flex justify-between my-2 border-b-2 border-solid py-4"
          >
            <div className="w-10/12">
              <img
                src={
                  isVeg
                    ? "https://img.icons8.com/color/24/vegetarian-food-symbol.png"
                    : "https://img.icons8.com/color/24/non-vegetarian-food-symbol.png"
                }
                alt="isVeg"
              />
              <h3 className="text-black font-semibold text-base">{name}</h3>
              <p className="text-gray-800 text-base py-2">
                ₹ {(price || defaultPrice) / 100}
              </p>
              <p className="text-gray-700 text-sm py-2 w-[70%]">
                {description}
              </p>
            </div>
            <div className="relative w-2/12 text-center">
              {imageId && (
                <img
                  width={118}
                  height={96}
                  className="mt-4 w-[118px] h-[96px] rounded-lg object-cover"
                  src={RESTAURANT_MENU_IMG_URL + imageId}
                />
              )}
              <div className="absolute justify-evenly bottom-2 left-3 text-center flex items-center h-[36px] w-[96px] bg-white border border-slate-400 text-green-800 tracking-wider font-bold rounded-lg text-sm">
                {isAlreadyAddedToCart > 0 ? (
                  <>
                    <div
                      className="cursor-pointer"
                      onClick={() => onRemoveMenuItemClick(item)}
                    >
                      ➖
                    </div>
                    <div>{isAlreadyAddedToCart}</div>
                    <div
                      className="cursor-pointer"
                      onClick={() => onMenuItemClick(item)}
                    >
                      ➕
                    </div>
                  </>
                ) : (
                  <div
                    className="cursor-pointer"
                    onClick={() => onMenuItemClick(item)}
                  >
                    ADD
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
