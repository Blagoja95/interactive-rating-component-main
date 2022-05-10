import React from "react";
import messageSVG from "../images/illustration-thank-you.svg";

const Message = ({ rating }) => {
  return (
    <div className="message">
      <img className="message__img" src="messageSVG" alt="success" />

      <p className="paragraph message__paragraph--result">{`You selected ${rating} out of 5`}</p>

      <h1 className="title message__title">Thank you!</h1>
      <p className="paragraph message__paragraph">
          We appreciate
      </p>
    </div>
  );
};
