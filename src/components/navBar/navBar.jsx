import { LiaPepperHotSolid } from "react-icons/lia";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <div className="navBar">
        <div className="logoBox">
          <LiaPepperHotSolid className="logoBox__logo" />
          HotPot
        </div>
        <div className="linkBox">
          <p className="linkBox__link">Shop</p>
          <p className="linkBox__link">About</p>
          <p className="linkBox__link">Reviews</p>
          <p className="linkBox__link">Contacts</p>
        </div>
        <div className="shoppingCartBox">
          <FaShoppingCart className="shoppingCartBox__logo"/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
