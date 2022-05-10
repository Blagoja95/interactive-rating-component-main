import React, { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Rating from "./Rating";
import Submit from "./Submit";
import "../sass/main.scss";
const App = () => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // console.log(rating);
  });

  const handleResult = (input) => setRating(input);

  const handleSubmit = () => {
    if (rating === 0) return;

    const face = document.querySelector(".component");
    while (face.firstChild) face.removeChild(face.firstChild);
    // console.log(face.firstChild);
    // console.log(rating);
  };

  return (
    <main className="component">
      <Header />
      <Body />
      <Rating handleResult={handleResult} />
      <Submit handleSubmit={handleSubmit} />
    </main>
  );
};

export default App;
