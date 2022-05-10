import React, { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Rating from "./Rating";
import Submit from "./Submit";
import Message from "./Message";
import "../sass/main.scss";

const App = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    // console.log(rating);
  });

  const handleResult = (input) => setRating(input);

  const handleSubmit = () => {
    if (rating === 0) return;

    const face = document.querySelector(".component");
    while (face.firstChild) face.removeChild(face.firstChild);

    // console.log(rating);
    // console.log(face.firstChild);

    if (!face.firstChild) setMessage(true);
  };

  if (!message)
    return (
      <main className="component">
        <Header />
        <Body />
        <Rating handleResult={handleResult} />
        <Submit handleSubmit={handleSubmit} />
      </main>
    );

  if (message) return <Message rating={rating} />;
};

export default App;
