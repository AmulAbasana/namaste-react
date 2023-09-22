import MenuItems from "./MenuItems";

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
      {isOpen && <MenuItems itemCards={itemCards} />}
    </div>
  );
};

export default Accordian;
