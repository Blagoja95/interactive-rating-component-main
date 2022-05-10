import React from "react";

const Rating = () => {
  const rating = [1, 2, 3, 4, 5];

  const Btns = rating.map((btn, index) => {
    return (
      <button className="btn btn--rating" key={index}>
        {btn}
      </button>
    );
  });

  return <div className="rating">{Btns}</div>;
};

export default Rating;
