import { IoLocation } from "react-icons/io5";
import { LiaPepperHotSolid } from "react-icons/lia";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footerBox">
        <div className="footerBox__box">
          <div className="footerBox__logoBox">
            <LiaPepperHotSolid className="logo" />
            <p className="logoText">HotPot</p>
          </div>
          <div className="footerBox__addressBox">
            <IoLocation className="location" />
            <p className="address">st.Primorskay, 27</p>
          </div>
          <div className="footerBox__socialBox">
            <AiFillInstagram className="socialLogo" />
            <IoLogoWhatsapp className="socialLogo" />
            <FaYoutube className="socialLogo" />
          </div>
          <div className="footerBox__text">
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, a esse.Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Accusamus, a esse.consectetur adipisicing elit.
              Accusamus, a esse.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
