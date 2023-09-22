import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/store/slice/cartSlice";
import MenuItems from "./MenuItems";

const Cart = () => {
  const cartItmes = useSelector((state) => state.cart.items);
  const finalItems = [];
  const dispatch = useDispatch();

  let totalPrice = 0;
  Object.keys(cartItmes).forEach((key) => {
    const element = cartItmes[key];
    const price =
      (element?.card?.info?.price || element?.card?.info?.defaultPrice) / 100 ||
      0;
    totalPrice += price * element.count;
    finalItems.push(element);
  });

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-8/12 m-auto my-4 relative">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">
          Your Cart has {finalItems.length} Items
        </h1>
        {finalItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="p-2 rounded-lg border border-solid"
          >
            Clear Cart
          </button>
        )}
      </div>
      <div className="pb-[60px]">
        <MenuItems itemCards={finalItems} />
      </div>
      {totalPrice > 0 && (
        <div className="w-8/12 z-10 p-4 fixed bottom-0.5 bg-green-700 text-white rounded-lg">
          <h4> Total Price: {totalPrice} </h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
