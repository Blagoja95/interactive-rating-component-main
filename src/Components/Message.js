import React from "react";
import messageSVG from "../images/illustration-thank-you.svg";

const Message = ({ rating }) => {
  return (
    <main className="component message">
      <img className="message__img" src={messageSVG} alt="success" />

      <p className="paragraph message__paragraph--result">{`You selected ${rating} out of 5`}</p>

      <h1 className="title message__title">Thank you!</h1>
      <p className="paragraph message__paragraph">
        We appreciate you taking time to give a rating. if you ever need more
        support, don't hesitate to get in touch!
      </p>
    </main>
  );
};

export default Message;
