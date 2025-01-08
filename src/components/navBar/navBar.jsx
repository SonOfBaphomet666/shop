import { LiaPepperHotSolid } from "react-icons/lia";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <div className="navBar">
        <div className="logoBox">
          <LiaPepperHotSolid className="logoBox__logo" />
          <p className="text">HotPot</p>
        </div>
        <div className="linkBox">
          <a className="linkBox__link">Shop</a>
          <a className="linkBox__link">About</a>
          <a className="linkBox__link">Reviews</a>
          <a className="linkBox__link">Contacts</a>
        </div>
        <div className="shoppingCartBox">
          <FaShoppingCart className="shoppingCartBox__logo"/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
