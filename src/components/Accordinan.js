import { useState } from "react";
import { RESTAURANT_MENU_IMG_URL } from "../utils/const";

const Accordian = (props) => {
  const { title, itemCards } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="restaurant-menu-accordian"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="restaurant-menu-accordian-title">
        <h3>
          {title} ({itemCards?.length})
        </h3>
        <h3>{isOpen ? "-" : "+"}</h3>
      </div>
      {isOpen && (
        <div className="menu-items">
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
              <div key={id} className="menu-item">
                <div>
                  <img
                    src={
                      isVeg
                        ? "https://img.icons8.com/color/24/vegetarian-food-symbol.png"
                        : "https://img.icons8.com/color/24/non-vegetarian-food-symbol.png"
                    }
                    alt="isVeg"
                  />
                  <h3>{name}</h3>
                  <p>₹ {(price || defaultPrice) / 100}</p>
                  <p className="menu-item-description">{description}</p>
                </div>
                {imageId && (
                  <div>
                    <img
                      className="menu-item-img"
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
