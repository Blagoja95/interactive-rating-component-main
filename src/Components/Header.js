import React from "react";
import starSVG from "../images/icon-star.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="btn btn--star">
        <img className="star-img" src={starSVG} />
      </div>
    </div>
  );
};

export default Header;
