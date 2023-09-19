import { RESTAURANT_MENU_IMG_URL } from "../utils/const";

const Accordian = (props) => {
  const { title, itemCards, isOpen, onAccordianClick } = props;

  return (
    <div className="pr-10 my-10 border-b-8 border-solid">
      <div
        className="flex justify-between cursor-pointer"
        onClick={onAccordianClick}
      >
        <h3 className="text-black font-bold text-lg">
          {title} ({itemCards?.length})
        </h3>
        <h3 className="text-black font-bold text-lg">{isOpen ? "-" : "+"}</h3>
      </div>
      {isOpen && (
        <div className="">
          {itemCards.map((item) => {
            const {
              name,
              price,
              id,
              description,
              imageId,
              isVeg,
              defaultPrice,
            } = item?.card?.info;
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
                {imageId && (
                  <div className="w-2/12 text-center">
                    <img
                      className="rounded-lg object-cover"
                      src={RESTAURANT_MENU_IMG_URL + imageId}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordian;
