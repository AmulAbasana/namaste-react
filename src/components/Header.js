import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/const";

const Header = (props) => {
  const { isOnline } = props;

  return (
    <div className="flex bg-green-100 justify-between">
      <div className="bg-transparent">
        <img className="m-2 w-36 rounded-lg" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex justify-between items-center">
          <li className="px-4">Online : {isOnline ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
